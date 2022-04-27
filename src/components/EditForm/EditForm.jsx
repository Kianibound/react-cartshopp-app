import React from "react";
import Panel from "../Panel/Panel";

const EditForm = ({ editData, finishHandler }) => {
  return (
    <>
      <Panel
        title="Save Item"
        finishHandler={finishHandler}
        initialValue={editData}
      />
    </>
  );
};

export default EditForm;
