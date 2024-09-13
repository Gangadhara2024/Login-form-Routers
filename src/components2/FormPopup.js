import { Form, Input, Modal, Button } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { CreatePost } from "../Redux/thunk";

export const FormPopup = ({ postdata }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const openpopup = () => {
    setOpenModal(true);
  };
  const modalsubmit = (modaldata) => {
    dispatch(CreatePost(modaldata));
    setOpenModal(false);
  };
  return (
    <div>
      <div className="user2">
        <button className="icon" onClick={openpopup}>
          <FaPlus />
        </button>
      </div>
      <b>{postdata} Posts </b>
      <Modal
        open={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
      >
        <Form onFinish={modalsubmit}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "content is required" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="imageUrls"
            label="Image Urls"
            rules={[{ type: "url", message: "Image Url is invalid" }]}
          >
            <Input />
          </Form.Item>

          <Button htmlType="submit" type="primary" block>
            CREATE POST
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
