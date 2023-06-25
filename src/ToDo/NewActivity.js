import React from "react";

export default function NewActivity({ newActivity, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        placeholder='New Activity'
        value={newActivity.title || ""}
        onChange={handleChange}
      />
      {!newActivity.title ? null : (
        <>
          <textarea
            name='description'
            placeholder='Details...'
            value={newActivity.description || ""}
            onChange={handleChange}
          />
          <button type='submit'>Add Activity</button>
        </>
      )}
    </form>
  );
}
