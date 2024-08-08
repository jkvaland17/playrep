import { Paper, TableCell } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../hoc/CommonTable";
import { useDispatch } from "react-redux";
import { getPointYetToReceivedList } from "../../../Redux/pointtransfer/action";
import moment from "moment";

const PointYetToReceived = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
  const [rowData, setRowData] = useState({ list: [], totalDocs: 0 });
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  let columns = [
    {
      id: "toMemberId",
      label: "Member Id",
    },
    {
      id: "amount",
      label: "Amount",
    },
    {
      id: "type",
      label: "type",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "createdAt",
      label: "Create Date & Time ",
      twoLineText: true,
      type: "custom",
      render: (row) => {
        return (
          <TableCell>
            {moment(row?.createdAt).format("MMM DD YYYY, hh:mm A")}
          </TableCell>
        );
      },
    },
    {
      id: "updatedAt",
      label: "Last login Date & Time",
      twoLineText: true,
      type: "custom",
      render: (row) => {
        return (
          <TableCell>
            {moment(row?.updatedAt).format("MMM DD YYYY, hh:mm A")}
          </TableCell>
        );
      },
    },
  ];

  useEffect(() => {
    getPointYetToReceivedListData();
  }, [pagination.rowsPerPage, pagination.page]);

  const getPointYetToReceivedListData = () => {
    setLoader(true);
    let payload = {
      limit: pagination.rowsPerPage,
      start: (pagination.page + 1 - 1) * pagination.rowsPerPage,
    };
    dispatch(getPointYetToReceivedList(payload)).then((res) => {
      setLoader(false);
      setRowData({
        ...rowData,
        list: res?.data?.data?.docs,
        totalDocs: res?.data?.data?.totalDocs,
      });
    });
  };

  return (
    <Paper>
      <CustomTable
        headCells={columns}
        rowData={rowData.list}
        loading={loader}
        totalDocs={rowData?.totalDocs}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Paper>
  );
};

export default PointYetToReceived;
