import React, { useState } from "react";
import MainCommonFilter from "../../Components/MainCommonFilter";
import moment from "moment";
import { Accordion, AccordionSummary, Paper } from "@material-ui/core";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CustomTable from "../../hoc/CommonTable";
import { data } from "../DashBoard/data";

const Weekreport = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
  const [filterData, setFilterData] = useState({
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
    statusValue: "All Days",
    exportFile: false,
    csvDownload: false,
    search: "",
    filterClose: false,
    exportFileName: "Export File",
    platformName: "All Users",
    state: "All States",
  });

  let columns = [
    {
      id: "fullName",
      label: "fullName",
    },
    {
      id: "deviceId",
      label: "deviceId",
    },
    {
      id: "country",
      label: "country",
    },
  ];

  return (
    <Paper style={{ padding: "2rem" }}>
      <h2>Weekly Details Report</h2>
      <div className={"justify_content_between"}>
        <div className={"d_flex"} style={{ justifyContent: "end" }}>
          <MainCommonFilter
            filterData={filterData}
            setFilterData={setFilterData}
            // searchApiHandler={getUserListData}
            pagination={pagination}
            setPagination={setPagination}
            plateFormOption={[
              "All Users",
              "Blocked Users Accounts",
              "Unblocked Users Accounts",
            ]}
            addPropsFilter={{}}
          />
        </div>
      </div>
      <div>
        <Accordion style={{ backgroundColor: "#E0F4F6" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Point Transferred
          </AccordionSummary>
          <AccordionDetails>
            <Paper>
              <CustomTable
                headCells={columns}
                rowData={data.data.docs}
                totalDocs={data?.data?.totalDocs}
                pagination={pagination}
                setPagination={setPagination}
              />
            </Paper>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#E0F4F6" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Points Received
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#E0F4F6" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Points Rejected
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: "#E0F4F6" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Points Cancelled
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#E0F4F6" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Game Report
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#E0F4F6" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Revenue Report
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
};

export default Weekreport;
