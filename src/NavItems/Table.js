import React from "react";
import MyTable from "../MyTable";

const Table = () => {
  return (
    <div>
      <MyTable nColumns={100} nRows={30} />
      <MyTable nColumns={25} nRows={25} />
      <MyTable nColumns={25} nRows={25} />
      <MyTable nColumns={25} nRows={25} />
      <MyTable nColumns={100} nRows={10} />
    </div>
  );
};

export default Table;
