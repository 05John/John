import React, { useState } from "react";
import NewActivity from "./NewActivity";
import ActivitiesList from "./ActivitiesList";
import "./ToDoApp.css";

export default function ToDoApp() {
  const [newActivities, setNewActivities] = useState([
    { id: 1, title: "" },
    { id: 2, title: "" },
    { id: 3, title: "" },
  ]);

  const handleChange = (event, activityId) => {
    const { name, value } = event.target;
    setNewActivities((prev) =>
      prev.map((activity) =>
        activity.id === activityId ? { ...activity, [name]: value } : activity
      )
    );
  };

  const [allActivities, setAllActivities] = useState([]);
  const handleSubmit = (event, activityId) => {
    event.preventDefault();
    const newActivity = newActivities.find((activity) => activity.id === activityId);
    if (!newActivity.title) return;
    setAllActivities((prev) => [newActivity, ...prev]);
    setNewActivities((prev) =>
      prev.map((activity) => (activity.id === activityId ? { id: activityId, title: "" } : activity))
    );
  };

  const handleDelete = (activityIdToRemove) => {
    setAllActivities((prev) =>
      prev.filter((activity) => activity.id !== activityIdToRemove)
    );
  };

  return (
    <main>
      <h1>Activities</h1>
      <div className="activity-wrapper">
        <div className="activity-container">
          <h2>Activity 1</h2>
          <NewActivity
            newActivity={newActivities[0]}
            handleChange={(event) => handleChange(event, 1)}
            handleSubmit={(event) => handleSubmit(event, 1)}
          />
          <ActivitiesList
            id="ActivitiesList1"
            allActivities={allActivities}
            handleDelete={handleDelete}
          />
        </div>
        <div className="activity-container">
          <h2>Activity 2</h2>
          <NewActivity
            newActivity={newActivities[1]}
            handleChange={(event) => handleChange(event, 2)}
            handleSubmit={(event) => handleSubmit(event, 2)}
          />
          <ActivitiesList
            id="ActivitiesList2"
            allActivities={allActivities}
            handleDelete={handleDelete}
          />
        </div>
        <div className="activity-container">
          <h2>Activity 3</h2>
          <NewActivity
            newActivity={newActivities[2]}
            handleChange={(event) => handleChange(event, 3)}
            handleSubmit={(event) => handleSubmit(event, 3)}
          />
          <ActivitiesList
            id="ActivitiesList3"
            allActivities={allActivities}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </main>
  );
}
