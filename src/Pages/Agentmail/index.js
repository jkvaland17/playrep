import { Box } from "@mui/system";
import React, { useState } from "react";
import CommonModal from "../../hoc/CommonModal";
import PopComponent from "../../hoc/PopContent";

const Agentmail = () => {
  const [modalDetails, setModalDetails] = useState({
    modalValue: "",
    modalName: "",
    modalIsOpen: false,
  });
  let Modal = PopComponent[modalDetails.modalName];

  const handleOpenModal = (type, data) => {
    switch (type) {
      case "AddAgentMail": {
        setModalDetails({
          ...modalDetails,
          modalValue: data,
          modalName: type,
          modalIsOpen: true,
        });
        break;
      }
      default: {
        setModalDetails({ ...modalDetails, modalIsOpen: false });
      }
    }
  };


  return (
    <div>
      <Box>
        <button onClick={() => handleOpenModal('AddAgentMail')}>click</button>
        <CommonModal
          className={"Approved-reject-section"}
          modalIsOpen={modalDetails.modalIsOpen}
          handleOpenModal={handleOpenModal}
        >
          <Modal
            modalValue={modalDetails.modalValue}
            handleOpenModal={handleOpenModal}
            modalIsOpen={modalDetails.modalIsOpen}
          />
        </CommonModal>
      </Box>
      Agentmail
    </div>
  );
};

export default Agentmail;
