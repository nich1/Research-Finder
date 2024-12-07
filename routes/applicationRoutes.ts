import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';
import { Application, Status } from '../models/interfaces';
import { App } from 'firebase-admin/app';


const router = express.Router();

// Route to submit an application
router.post('/applications', async (req: Request, res: Response) => {
  try {
    const { assistantId, postId, message } = req.body;

    // Validate request body
    if (!assistantId || !postId || !message) {
      return res.status(400).json({ error: 'Assistant ID, Post ID, and Message are required' });
    }

    // Check if assistantId matches the name of a document in the Assistants collection
    const assistantSnapshot = await db.collection('assistants').doc(assistantId).get();
    if (!assistantSnapshot.exists) {
      return res.status(404).json({ error: 'Invalid Assistant ID' });
    }
    const assistantData = assistantSnapshot.data();
    const assistantFirstName = assistantData?.firstName;

    if (!assistantFirstName) {
      return res.status(400).json({ error: 'Assistant first name is missing in the assistant document' });
    }

    // Check if postId matches the name of a document in the Posts collection
    const postSnapshot = await db.collection('posts').doc(postId).get();
    if (!postSnapshot.exists) {
      return res.status(404).json({ error: 'Invalid Post ID' });
    }
    const postData = postSnapshot.data();

    const postTitle = postData?.title;
    const researcherId = postData?.researcherID;

    if (!postTitle ) {
      return res.status(400).json({ error: `Post title (${postTitle})  is missing in the post document` });
    }

    if ( !researcherId) {
      return res.status(400).json({ error: `Research ID (${researcherId})  is missing in the post document` });
    }

    const applicationRef = db.collection('applications').doc();
    const applicationId = applicationRef.id;

    const newApplication: Application = {
      assistantId,
      postId,
      applicationStatus: Status.Undecided, 
      message,
      createdAt: admin.firestore.Timestamp.now(),
    };

    await applicationRef.set(newApplication);

    // Add a message to the researcher's inbox
    const researcherRef = db.collection('researchers').doc(researcherId);
    const researcherSnapshot = await researcherRef.get();

    if (!researcherSnapshot.exists) {
      return res.status(404).json({ error: 'Researcher not found' });
    }

    const researcherData = researcherSnapshot.data();
    const inbox = researcherData?.inbox || [];
    const notification = `${assistantFirstName} sent an application for ${postTitle}`;

    inbox.push(notification);
    await researcherRef.update({ inbox });


    res.status(201).json({ message: 'Application created successfully', applicationId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create application' });
  }


});

// Route to get the message of an application by applicationId
router.get('/applications/message/:applicationId', async (req: Request, res: Response) => {
  try {
    const { applicationId } = req.params;

    // Validate applicationId
    if (!applicationId) {
      return res.status(400).json({ error: 'Application ID is required' });
    }

    // Fetch the application document
    const applicationRef = db.collection('applications').doc(applicationId);
    const applicationSnapshot = await applicationRef.get();

    // Check if the application exists
    if (!applicationSnapshot.exists) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Retrieve the application data
    const applicationData = applicationSnapshot.data();

    if (!applicationData || !applicationData.message) {
      return res.status(404).json({ error: 'Message not found for this application' });
    }

    // Respond with the message
    res.status(200).json({ message: applicationData.message });
  } catch (error) {
    console.error('Error retrieving application message:', error);
    res.status(500).json({ error: 'Failed to retrieve application message' });
  }
});


// Route to update application status
router.put('/applications/status', async (req: Request, res: Response) => {
  try {
    const { applicationId, status } = req.body;

    // Validate request body
    if (!applicationId || !status) {
      return res.status(400).json({ error: 'Application ID and Status are required' });
    }

    // Validate status
    if (!Object.values(Status).includes(status)) {
      return res.status(400).json({ error: `Invalid status. Valid statuses are: ${Object.values(Status).join(', ')}` });
    }

    // Check if the application exists
    const applicationRef = db.collection('applications').doc(applicationId);
    const applicationSnapshot = await applicationRef.get();

    if (!applicationSnapshot.exists) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Update the status of the application
    await applicationRef.update({ applicationStatus: status });
    res.status(200).json({ message: 'Application status updated successfully' });
  } catch (error) {
    console.error(`Error updating application status: ${error}`, error);
    res.status(500).json({ error: 'Failed to update application status' });
  }
});

export default router;
