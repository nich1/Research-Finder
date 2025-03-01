import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("🟡 AdminDashboard component loaded.");

    const checkAdminStatus = async () => {
      if (!auth.currentUser) {
        console.log("🚨 No authenticated user found.");
        navigate("/signin");
        return;
      }

      console.log("🔍 Checking admin status for:", auth.currentUser.email);

      const userRef = doc(db, "researchers", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        console.log("✅ User data found:", userSnap.data());

        if (userSnap.data().isAdmin === true) {
          console.log("🎉 User is an admin!");
          setIsAdmin(true);
        } else {
          console.warn("⛔ User is NOT an admin. Redirecting...");
          navigate("/dashboard");
        }
      } else {
        console.error("❌ User not found in Firestore.");
      }
    };

    checkAdminStatus();
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>🔍 Debug: {isAdmin ? "Admin Access Granted ✅" : "Checking Admin Access..."}</p>
      <button onClick={() => navigate("/")}>Return to Home</button>
      <p>Welcome, Admin! You have full control over this system.</p>
    </div>
  );
};

export default AdminDashboard;
