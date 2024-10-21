import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [title, setTitle] = useState("");
  const [goals, setGoals] = useState([]);
  const [message, setMessage] = useState("");

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const addGoal = async () => {
    if (!title) return;
    try {
      await axios.post(`${backendUrl}/api/goals`, { title });
      setTitle("");
      setMessage(
        "Goal added successfully. Click 'Fetch All Goals' to see updates."
      );
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error("Error adding goal:", error);
      setMessage("Failed to add goal. Please try again.");
    }
  };

  const fetchGoals = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/goals`);
      setGoals(response.data);
      setMessage("Goals fetched successfully.");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error("Error fetching goals:", error);
      setMessage("Failed to fetch goals. Please try again.");
    }
  };

  const removeAllGoals = async () => {
    try {
      await axios.delete(`${backendUrl}/api/goals`);
      setGoals([]);
      setMessage("All goals removed successfully.");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error("Error deleting goals:", error);
      setMessage("Failed to remove goals. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Goal Manager</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a goal"
          className={styles.input}
        />
        <button onClick={addGoal} className={styles.button}>
          Add Goal
        </button>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={fetchGoals} className={styles.fetchButton}>
          Fetch All Goals
        </button>
        <button onClick={removeAllGoals} className={styles.removeButton}>
          Remove All Goals
        </button>
      </div>

      {message && <p className={styles.message}>{message}</p>}

      <h2 className={styles.title}>All Goals</h2>
      <ul className={styles.goalsList}>
        {goals.map((goal) => (
          <li key={goal._id} className={styles.goalItem}>
            {goal.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
