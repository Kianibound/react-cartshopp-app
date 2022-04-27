import React, { useEffect, useState } from "react";
import { Layout, Modal, Divider } from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer";
import TotalPrice from "../TotalPrice/TotalPrice";
import { uid } from "uid";
import EditForm from "../EditForm/EditForm";
const { Content, Sider } = Layout;

const Main = () => {
  const [formData, setFormData] = useState([]);
  const [editData, setEditData] = useState();
  //send data to localstorage
  const sendData = () => {
    localStorage.setItem("Cart Object", JSON.stringify(formData));
  };

  useEffect(() => {
    sendData();
  }, [formData]);

  //function when click on edit buttton
  const finishEditHandler = (values) => {
    let temp = formData.filter((item) => item.id !== editData.id);
    temp = [
      ...temp,
      {
        ...values,
        id: editData.id,
      },
    ];
    setEditData(null);
    setFormData(temp);
    Modal.destroyAll();
  };

  //function when click on add buttton
  const finishAddHandler = (values) => {
    setFormData((prev) => [
      ...prev,
      {
        ...values,
        id: uid(),
      },
    ]);
    Modal.destroyAll();
    sendData();
  };
  return (
    <Layout className={`layout-container `}>
      <Sider width={500} className={`side-container`}>
        <Panel
          setFormData={setFormData}
          title="Add Item"
          finishHandler={finishAddHandler}
          initialValue={{ discount: 0 }}
        />
      </Sider>
      <Content>
        <ListContainer
          data={formData}
          setData={setFormData}
          setEditData={setEditData}
        />
        <Divider />
        <TotalPrice data={formData} />
      </Content>
      <Modal
        destroyOnClose={true}
        title={"Edit Products"}
        visible={editData}
        onCancel={() => setEditData(null)}
        footer={null}
      >
        <EditForm editData={editData} finishHandler={finishEditHandler} />
      </Modal>
    </Layout>
  );
};

export default Main;
