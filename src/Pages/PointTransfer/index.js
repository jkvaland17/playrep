import React from "react";
import { Accordion, AccordionSummary, Paper } from "@material-ui/core";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PointTransferred from "./PointTransferred";
import PointsTransferredReceived from "./PointsTransferredReceived";
import PointReceived from "./PointReceived";
import PointYetToReceived from "./PointYetToReceived";
import PointRejected from "./PointRejected";

const PointTransfer = () => {
  const PointTransfer = [
    {
      id: 1,
      title: "Point Transferred",
      data: (
        <>
          <PointTransferred />
        </>
      ),
    },
    {
      id: 2,
      title: "Points Transferred But yet to be Received",
      data: (
        <>
          <PointsTransferredReceived />
        </>
      ),
    },
    {
      id: 3,
      title: "Points Received",
      data: (
        <>
          <PointReceived />
        </>
      ),
    },
    {
      id: 4,
      title: "Points yet to be Received",
      data: (
        <>
          <PointYetToReceived />
        </>
      ),
    },
    {
      id: 5,
      title: "Points Rejected",
      data: (
        <>
          <PointRejected />
        </>
      ),
    },
    {
      id: 6,
      title: "Points Cancelled",
      data: <></>,
    },
  ];

  return (
    <Paper style={{ padding: "2rem", background: "none", boxShadow: "none" }}>
      <h2>Point Transfer</h2>
      <div>
        {PointTransfer?.map((e) => (
          <Accordion key={e?.id} style={{ backgroundColor: "#E0F4F6" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${e?.id}-content`}
              id={`panel${e?.id}-header`}
            >
              {e?.title}
            </AccordionSummary>
            <AccordionDetails>{e?.data}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Paper>
  );
};

export default PointTransfer;
