import React, { useEffect, useState } from "react";
import MainCommonFilter from "../../Components/MainCommonFilter";
import moment from "moment";
import { Accordion, AccordionSummary, Paper } from "@material-ui/core";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CustomTable from "../../hoc/CommonTable";
import { data } from "../DashBoard/data";
import { useDispatch } from "react-redux";
import { getPointTransferList } from "../../Redux/pointtransfer/action";

const PointTransfer = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
  const [rowData, setRowData] = useState({ list: [], totalDocs: 0 });
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
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
      id: "from_member_id",
      label: "from_member_id",
    },
    {
      id: "to_member_id",
      label: "to_member_id",
    },
    {
      id: "type",
      label: "type",
    },
  ];

  useEffect(() => {
    getPointTransferListData();
  }, [pagination.rowsPerPage, pagination.page]);

  const getPointTransferListData = () => {
    setLoader(true);
    let payload = {
      limit: pagination.rowsPerPage,
      start: (pagination.page + 1 - 1) * pagination.rowsPerPage,
    };
	  dispatch(getPointTransferList(payload)).then((res) => {
      setLoader(false);
      setRowData({
        ...rowData,
        list: res?.data,
      });
    });
  };

  const PointTransfer = [
    {
      id: 1,
      title: "Point Transferred",
      date: (
        <Paper>
          <CustomTable
            headCells={columns}
            rowData={rowData.list}
            loading={loader}
            totalDocs={data?.data?.totalDocs}
            pagination={pagination}
            setPagination={setPagination}
          />
        </Paper>
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
        {PointTransfer.map((e) => {
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
