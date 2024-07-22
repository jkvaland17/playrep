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


const MutiplayerPointTransfer = () => {
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

  const PointTransfer = [
    {
      id: 1,
      title: "Multiplayer Point Transferred",
      date: (
		<Paper>
		<CustomTable
		  headCells={columns}
		  rowData={data.data.docs}
		  totalDocs={data?.data?.totalDocs}
		  pagination={pagination}
		  setPagination={setPagination}
		/>
	  </Paper>
      ),
    },
	{
		id:2,
		title:"Multiplayer Points Transferred But yet to be Received",
		data:(<></>)
	},
	{
		id:3,
		title:"Multiplayer Points Received",
		data:(<></>)
	},
	{
		id:4,
		title:"Multiplayer Points yet to be Received",
		data:(<></>)
	},
	{
		id:5,
		title:"Multiplayer Points Rejected",
		data:(<></>)
	},
	{
		id:6,
		title:"Multiplayer Points Cancelled",
		data:(<></>)
	},
  ];
  return (
    <Paper style={{ padding: "2rem" }}>
      <h2>MultiPlayer Point Transfer</h2>
      <div>
		{PointTransfer.map((e)=>{
			return  <Accordion style={{ backgroundColor: "#E0F4F6" }}>
			<AccordionSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="panel1-content"
			  id="panel1-header"
			>
			  {e.title}
			</AccordionSummary>
			<AccordionDetails>
			 {e.date}
			</AccordionDetails>
		  </Accordion>
		})}
      </div>
    </Paper>
  )
}

export default MutiplayerPointTransfer
