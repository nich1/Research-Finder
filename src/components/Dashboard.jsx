import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) {
        navigate("/signin");
        return;
      }

      const userId = auth.currentUser.uid;
      const assistantRef = doc(db, "assistants", userId);
      const researcherRef = doc(db, "researchers", userId);

      try {
        const assistantSnap = await getDoc(assistantRef);
        const researcherSnap = await getDoc(researcherRef);

        if (assistantSnap.exists()) {
          setUserData(assistantSnap.data());
          setRole("assistant");
        } else if (researcherSnap.exists()) {
          const researcherData = researcherSnap.data();
          setUserData(researcherData);
          setRole("researcher");

          // If user is an admin, redirect immediately
          if (researcherData.isAdmin) {
            setIsAdmin(true);
            navigate("/admin-dashboard");
          }
        } else {
          console.error("User not found in Firestore");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Welcome, {userData.firstName}</h2>
      <p>Role: {role}</p>

      <button onClick={() => navigate("/")}>Go to Home</button>

      {role === "researcher" && <p>Manage research projects here.</p>}
      {role === "assistant" && <p>Apply for research projects here.</p>}

      {isAdmin && (
        <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
          <h3>Admin Panel</h3>
          <button onClick={() => navigate("/admin-dashboard")}>Go to Admin Dashboard</button>
          <button onClick={() => console.log("Manage Users")}>Manage Users</button>
          <button onClick={() => console.log("View Reports")}>View Reports</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
