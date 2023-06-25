import React from "react";

export default function ActivitiesList({ allActivities, handleDelete }) {
  return (
    <ul className="ActivitiesListITems">
      {allActivities.map(({ title, description, id }) => (
        <li className="toDoListItem" key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}
