"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAfter, startOfDay, isBefore} from "date-fns";
import { useState } from "react";
import { _updateStreaks } from "@/appwrite/database";

const Dashboard = ({ streakCount, habitData, userId, setStreakCount }) => {
  const [updatedStreakCount, setUpdatedStreakCount] = useState(
    streakCount.streakcount || 0
  );

  const handleMarkStreak = async () => {
    const lastUpdateDate = new Date(streakCount.$updatedAt);
    const startOfCurrentDay = startOfDay(new Date());

    const isAfterStartOfDay = isAfter(startOfCurrentDay, lastUpdateDate);
    const isBeforeEndOfDay = isBefore(lastUpdateDate, startOfCurrentDay);
    const userCanUpdateName = isAfterStartOfDay && isBeforeEndOfDay;

    try {
      if (!userCanUpdateName && updatedStreakCount > 0) {
        toast.info("✅Today's streak already mark. Come back tomorrow😎", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      setUpdatedStreakCount((prevStreakCount) => prevStreakCount + 1);
      toast.success("Congratulations! You completed one more day!🎉 🥳", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      const newStreakCount = { streakcount: updatedStreakCount + 1 };
      const data = await _updateStreaks(userId, newStreakCount);
      setStreakCount(data.streakcount);
    } catch (err) {
      setUpdatedStreakCount((prevStreakCount) =>
        Math.max(0, prevStreakCount - 1)
      );
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section className="bg-blue-500 text-white mx-8 mt-16 p-8 rounded-md shadow-lg">
      <div className="mb-4">
        <p className="text-md lg:text:lg  md:text:lg  font-bold mb-6">
          <i className="text-black">👀Habit Type: </i> {habitData.type}
        </p>
        <p className="text-md lg:text:lg  md:text:lg font-bold mb-6">
          <i className="text-black">🎯Goal: </i> {habitData.name}
        </p>
        <p className="text-md font-semibold mb-4">
          Come back tomorrow to update your streak!
        </p>
        <p className="lg:text-3xl  md:text-2xl  text-lg px-4 py-3 rounded-md border-blue-800 border-2 font-bold mb-2 text-gray-100700">
          # My Streak Count: {updatedStreakCount} days
        </p>
      </div>
      <button
        onClick={handleMarkStreak}
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
      >
        I Completed one more Day🔥
      </button>
      <ToastContainer />
    </section>
  );
};

export default Dashboard;
