import React, { useState, useEffect } from 'react';
import './UserPage.css';
import { auth } from '../config/firebase'; // Import Firebase Auth instance
import { db } from '../config/firebase'; // Import Firestore database instance
import { collection, query, where, getDocs } from 'firebase/firestore'; // Firestore functions
import { Link } from 'react-router-dom'; // Import Link from React Router
import { doc, getDoc } from 'firebase/firestore';


const UserPage = () => {
  const [user, setUser] = useState(null); // State for current user
  const [messages, setMessages] = useState([]); // State for inbox messages
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const currentUser = auth.currentUser;
  
    const fetchUserData = async () => {
      if (currentUser) {
        const userBaseData = {
          email: currentUser.email,
          uid: currentUser.uid,
          creationTime: currentUser.metadata.creationTime,
        };
  
        // Check both collections (assistant/researcher)
        const researcherRef = doc(db, 'researchers', currentUser.uid);
        const researcherSnap = await getDoc(researcherRef);
  
        const finalUser = researcherSnap.exists()
          ? { ...userBaseData, role: 'researcher' }
          : { ...userBaseData, role: 'assistant' };
  
        setUser(finalUser);
      } else {
        setUser(null);
      }
    };
  
    fetchUserData();
  }, []);

  useEffect(() => {
    if (user) {
      // Fetch messages from Firestore for the specific user
      const fetchMessages = async () => {
        setLoading(true);
        setError(null);

        try {
          const messagesCollection = collection(db, 'inbox'); // Reference to 'inbox' collection
          const userMessagesQuery = query(
            messagesCollection,
            where('userID', '==', user.uid) // Filter messages by user ID
          );
           console.log("made it!");
          const querySnapshot = await getDocs(userMessagesQuery); // Fetch documents
          const messagesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log(`Messages found: ${messagesData.length}`);
          setMessages(messagesData); // Update state with messages
        } catch (err) {
          console.error('Error fetching messages:', err);
          setError('Failed to load inbox. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

        fetchMessages();
        console.log("we be here");
    }
  }, [user]);

  return (
    <div className="page-content">
  
    <div className="user-page">
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <p className="user-role">You are signed in as a <strong>{user.role}</strong>.</p>
          <section className="user-info">
            <h2>Your Information</h2>
            <p>Email: {user.email}</p>
            <p>Member since: {new Date(user.creationTime).toDateString()}</p>
          </section>
          {user.role === 'researcher' && (
  <section className="user-actions">
    <h2>Actions</h2>
    <Link to="/AddPostForm" className="action-link">
      Add a New Post
    </Link>
  </section>
)}
          <section className="user-inbox">
            <h2>Inbox</h2>
            {loading && <p>Loading messages...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && messages.length === 0 && (
              <p>Your inbox is empty.</p>
            )}
            {!loading && !error && messages.length > 0 && (
              <ul>
                {messages.map((message) => (
                  <li key={message.id} className="inbox-message">
                    <strong>{message.sender}</strong>: {message.text}
                    <p className="timestamp">
                      {new Date(message.timestamp).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      ) : (
        <p>Please sign in to view your account details.</p>
      )}
    </div>
    </div>
  );
};

export default UserPage;
