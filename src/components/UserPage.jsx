import React, { useState, useEffect } from 'react';
import './UserPage.css';
<<<<<<< HEAD
import { auth, db } from '../config/firebase'; // Import Firebase Auth & Firestore
import { collection, query, where, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
=======
import { auth } from '../config/firebase'; // Import Firebase Auth instance
import { db } from '../config/firebase'; // Import Firestore database instance
import { collection, query, where, getDocs } from 'firebase/firestore'; // Firestore functions
import { Link } from 'react-router-dom'; // Import Link from React Router
import { doc, getDoc } from 'firebase/firestore';

>>>>>>> e76fe814edc2c16a790a0a1d44cddd4806e77610

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

<<<<<<< HEAD
    const [replyMessage, setReplyMessage] = useState(null); // Track message being replied to
    const [replyText, setReplyText] = useState(''); // Track reply input
=======
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
>>>>>>> e76fe814edc2c16a790a0a1d44cddd4806e77610

    useEffect(() => {
        const currentUser = auth.currentUser;
        const fetchUserData = async () => {
            if (currentUser) {
                const userBaseData = {
                    email: currentUser.email,
                    uid: currentUser.uid,
                    creationTime: currentUser.metadata.creationTime,
                };

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
            const fetchMessages = async () => {
                setLoading(true);
                setError(null);

                try {
                    const messagesCollection = collection(db, 'inbox');
                    const userMessagesQuery = query(messagesCollection, where('userID', '==', user.uid));
                    const querySnapshot = await getDocs(userMessagesQuery);

                    let messagesData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    // If no real messages, add some fake ones
                    if (messagesData.length === 0) {
                        messagesData = [
                            {
                                id: 'fake1',
                                sender: 'Dr. Smith',
                                text: 'Your research proposal has been approved!',
                                timestamp: new Date().getTime(),
                            },
                            {
                                id: 'fake2',
                                sender: 'Admin',
                                text: 'Reminder: The deadline for your submission is next week.',
                                timestamp: new Date().getTime() - 86400000, // 1 day ago
                            },
                            {
                                id: 'fake3',
                                sender: 'Colleague',
                                text: 'Hey, let’s schedule a meeting for tomorrow.',
                                timestamp: new Date().getTime() - 172800000, // 2 days ago
                            },
                        ];
                    }

                    console.log(`Messages found: ${messagesData.length}`);
                    setMessages(messagesData);
                } catch (err) {
                    console.error('Error fetching messages:', err);
                    setError('Failed to load inbox. Please try again later.');
                } finally {
                    setLoading(false);
                }
            };

            fetchMessages();
        }
    }, [user]);

    // Function to handle opening the reply popup
    const handleReplyClick = (message) => {
        setReplyMessage(message);
        setReplyText('');
    };

    // Function to handle sending the reply
    const sendReply = async () => {
        if (!replyText.trim()) return;

        try {
<<<<<<< HEAD
            // Save reply to Firestore (optional)
            await addDoc(collection(db, 'replies'), {
                originalMessageID: replyMessage.id,
                sender: user.email,
                text: replyText,
                timestamp: new Date(),
            });

            console.log('Reply sent:', replyText);
        } catch (error) {
            console.error('Error sending reply:', error);
=======
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

          if (messagesData.length === 0) 
          {
              messagesData = 
              [
              { id: 'spoof1', sender: 'Dr. AI', text: 'Welcome to the research network!', timestamp: Date.now() },
              { id: 'spoof2', sender: 'Admin', text: 'Remember to check your updates.', timestamp: Date.now() - 500000 },
              { id: 'spoof3', sender: 'Colleague', text: 'Did you review my paper draft?', timestamp: Date.now() - 1000000 },
              ];
            console.log("Added spoof messages.");
          }


          
          setMessages(messagesData); // Update state with messages
        } catch (err) {
          console.error('Error fetching messages:', err);
          setError('Failed to load inbox. Please try again later.');
        } finally {
          setLoading(false);
>>>>>>> e76fe814edc2c16a790a0a1d44cddd4806e77610
        }

        setReplyMessage(null); // Close popup
    };

<<<<<<< HEAD
    return (
        <div className="page-content">
            <div className="user-page">
                {user ? (
                    <>
                        <h1>Welcome, {user.email}</h1>
                        <section className="user-info">
                            <h2>Your Information</h2>
                            <p>Email: {user.email}</p>
                            <p>Member since: {new Date(user.creationTime).toDateString()}</p>
                        </section>
                        {user.role === 'researcher' && (
                            <section className="user-actions">
                                <h2>Actions</h2>
                                <Link to="/AddPostForm" className="action-link">Add a New Post</Link>
                            </section>
                        )}
                        <section className="user-inbox">
                            <h2>Inbox</h2>
                            {loading && <p>Loading messages...</p>}
                            {error && <p className="error">{error}</p>}
                            {!loading && !error && messages.length === 0 && <p>Your inbox is empty.</p>}
                            {!loading && !error && messages.length > 0 && (
                                <ul>
                                    {messages.map((message) => (
                                        <li key={message.id} className="inbox-message">
                                            <strong>{message.sender}</strong>: {message.text}
                                            <p className="timestamp">{new Date(message.timestamp).toLocaleString()}</p>
                                            <button onClick={() => handleReplyClick(message)}>Reply</button>
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

            {/* Reply Popup */}
            {replyMessage && (
                <div className="reply-popup">
                    <div className="reply-popup-content">
                        <h2>Reply to {replyMessage.sender}</h2>
                        <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your response..."
                        />
                        <div className="popup-actions">
                            <button onClick={sendReply}>Send</button>
                            <button onClick={() => setReplyMessage(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
=======
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
>>>>>>> e76fe814edc2c16a790a0a1d44cddd4806e77610
};

export default UserPage;