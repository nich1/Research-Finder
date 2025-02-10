import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) return;

      const userRef = doc(db, "assistants", auth.currentUser.uid);
      const researcherRef = doc(db, "researchers", auth.currentUser.uid);

      const assistantSnap = await getDoc(userRef);
      const researcherSnap = await getDoc(researcherRef);

      if (assistantSnap.exists()) {
        setUserData(assistantSnap.data());
        setRole("assistant");
      } else if (researcherSnap.exists()) {
        setUserData(researcherSnap.data());
        setRole("researcher");
      } else {
        console.error("User not found in Firestore");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Welcome, {userData?.firstName}</h2>
      <p>Role: {role}</p>
      
      <button onClick={() => navigate("/user")}>Go to User Page</button>

      {role === "researcher" && <p>Manage research projects here.</p>}
      {role === "assistant" && <p>Apply for research projects here.</p>}
    </div>
  );
};

export default Dashboard;
