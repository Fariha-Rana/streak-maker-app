'use client'
import useGetUserData from "@/context/useGetUserData";
import StreakForm from "@/components/CreateStreakForm";
import Dashboard from "@/components/StreakDashboard";
import { useState, useEffect } from "react";
import { _getDocument, HABIT_COL_ID, STREAK_COL_ID } from "@/appwrite/database";
import useAuth from "@/context/useAuth";
import IntroPage from "@/components/IntroPage";

const Home = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [habitData, setHabitData] = useState(null);
  const { authStatus } = useAuth();
  const { userData } = useGetUserData();
  const id = userData?.$userId;

  async function fetchData() {
    try {
      if (!authStatus || !userData) return;
      const existingStreak = await _getDocument(userData.$id, STREAK_COL_ID);
      const existingHabitData = await _getDocument(userData.$id, HABIT_COL_ID);
      if (existingStreak && existingHabitData) {
        setIsExistingUser(true);
        setStreakCount(existingStreak);
        setHabitData(existingHabitData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [userData]);

  return (
    <>
      <div className="flex justify-center items-center mt-19 h-96">
        {authStatus && !isExistingUser && <StreakForm fetchData={fetchData} />}
        {isExistingUser && authStatus && (
          <Dashboard
            streakCount={streakCount}
            habitData={habitData}
            userId={id}
          />
        )}
        {!authStatus && <IntroPage />}
      </div>
    </>
  );
};

export default Home;
