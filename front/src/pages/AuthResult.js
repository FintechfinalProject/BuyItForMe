import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalWithdraw from '../components/withdraw/ModalWithdraw'
import Modal from "react-modal";

const AuthResult = () => {
  const [data, setData] = useState('');
  const [openModal, setOpenModal] = useState(true);
  console.log("data는", data)

  useEffect(() => {
    setOpenModal(true);
    axios.get('http://localhost:3300/api/payment')
      .then((response) => {
        setData(response.data);
        console.log("은행이름, 핀테크넘버확인", response)
      })
      .catch(err => console.log(err))
  }, []);


  const CustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
    },
    content: {
      width: "95%",
      border: `0 solid black`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
    },
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
      >
        <ModalWithdraw/>
      </Modal>
    </div>
  );
};

export default AuthResult;