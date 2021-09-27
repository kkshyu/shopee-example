import { Modal } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const eventProductId = "p003";

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // namespace
    const popupHistory = JSON.parse(
      localStorage.getItem("shopee:popup.history")
    );
    if (popupHistory && Date.now() - popupHistory.time < 3 * 1000) {
      setIsVisible(false);
    } else {
      const history = {
        time: Date.now(),
        productId: eventProductId,
      };
      localStorage.setItem("shopee:popup.history", JSON.stringify(history));
    }
  }, []);

  return (
    isVisible && (
      <Modal
        visible
        footer={null}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      >
        <Link to={`/${eventProductId}`}>
          <img
            alt={`${eventProductId}-event`}
            src="https://images.unsplash.com/photo-1618450684024-55f2d7b7740a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          />
        </Link>
      </Modal>
    )
  );
};

export default PopupModal;
