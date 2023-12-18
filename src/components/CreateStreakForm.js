'use client'
import { useState } from "react";
import {
  _createDocumentinHabitCol,
  _createDocumentinStreakCol,
} from "@/appwrite/database";
import useGetUserData from "@/context/useGetUserData";

const StreakForm = ( {fetchData}) => {
  const [habitType, setHabitType] = useState("");
  const [habitName, setHabitName] = useState("");
  const { userData } = useGetUserData();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        type: habitType,
        name: habitName,
      };
      await _createDocumentinHabitCol(userData.$id, data);
      await _createDocumentinStreakCol(userData.$id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-40 bg-gray-100 border-blue-400 border-2">
      <form onSubmit={handleFormSubmit} className="w-98 p-4">
        <label className="block mb-4">{"what's the habit name ?"}</label>
        <div className="mb-6 ">
          <input
            onChange={(e) => setHabitName(e.target.value)}
            value={habitName}
            type="text"
            placeholder="enter habit name"
            name="habitName"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3  border-gray-300"
            required
            autoComplete="on"
          />
        </div>
        <label className="block mb-4">What you wanna do?</label>
        <select
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={habitType}
          onChange={(e) => setHabitType(e.target.value)}
          required
        >
          <option value="">Choose your goal🎯</option>
          <option value="habitBuilding">build💪</option>
          <option value="habitBreaking">break👊</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={!habitType}
        >
          Start Streak
        </button>
      </form>
    </div>
  );
};

export default StreakForm;
