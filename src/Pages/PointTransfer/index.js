import React from "react";
import { Accordion, AccordionSummary, Paper } from "@material-ui/core";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PointTransferred from "./PointTransferred";

const PointTransfer = () => {

  const PointTransfer = [
    {
      id: 1,
      title: "Point Transferred",
      date: (
        <>
          <PointTransferred/>
       </>
      ),
    },
    {
      id: 2,
      title: "Points Transferred But yet to be Received",
      data: <></>,
    },
    {
      id: 3,
      title: "Points Received",
      data: <></>,
    },
    {
      id: 4,
      title: "Points yet to be Received",
      data: <></>,
    },
    {
      id: 5,
      title: "Points Rejected",
      data: <></>,
    },
    {
      id: 6,
      title: "Points Cancelled",
      data: <></>,
    },
  ];
  return (
    <Paper style={{ padding: "2rem", background:"none", boxShadow: "none" }}>
      <h2>Point Transfer</h2>
      <div>
        {PointTransfer?.map((e) => {
          return (
            <Accordion style={{ backgroundColor: "#E0F4F6" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {e.title}
              </AccordionSummary>
              <AccordionDetails>{e.date}</AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Paper>
  );
};

export default PointTransfer;
