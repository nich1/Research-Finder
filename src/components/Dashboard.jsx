import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // 🔹 New state for admin check
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) return;

      const userId = auth.currentUser.uid;

      const assistantRef = doc(db, "assistants", userId);
      const researcherRef = doc(db, "researchers", userId);

      const assistantSnap = await getDoc(assistantRef);
      const researcherSnap = await getDoc(researcherRef);

      if (assistantSnap.exists()) {
        setUserData(assistantSnap.data());
        setRole("assistant");
      } else if (researcherSnap.exists()) {
        setUserData(researcherSnap.data());
        setRole("researcher");

        // 🔹 Check if researcher is an admin
        if (researcherSnap.data().isAdmin) {
          setIsAdmin(true);
        }
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

      {isAdmin && (
        <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
          <h3>Admin Panel</h3>
          <button onClick={() => navigate("/admin-dashboard")}>Admin Dashboard</button>
          <button onClick={() => console.log("Manage Users")}>Manage Users</button>
          <button onClick={() => console.log("View Reports")}>View Reports</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
