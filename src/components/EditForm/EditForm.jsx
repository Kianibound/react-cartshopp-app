import React, { useState } from "react";
import Panel from "../Panel/Panel";

const EditForm = ({ editData, finishHandler }) => {
  // const [price, setPrice] = useState(editData.price);
  // const [disc, setDisc] = useState(editData.discount);
  // const [count, setCount] = useState(editData?.count);

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
