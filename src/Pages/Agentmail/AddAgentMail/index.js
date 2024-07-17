import { Box } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const AddAgentMail = () => {
  return <Box sx={style}>AddAgentMail</Box>;
};

export default AddAgentMail;
