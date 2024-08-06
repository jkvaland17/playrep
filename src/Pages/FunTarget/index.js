import { Paper, TableCell } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTable from "../../hoc/CommonTable";
import moment from "moment";
import { useDispatch } from "react-redux";
import { getFunTargetList } from "../../Redux/drawDetails/action";
import { renderSrNo } from "../../utils";

const FunTarget = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
  const [rowData, setRowData] = useState({ list: [], totalDocs: 0 });
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  
  let columns = [
    {
      id: "",
      twoLineText: true,
      label: "Sr. no.",
      type: "custom",
      render: (row, i) => renderSrNo(row, i, pagination),
    },
    {
      id: "selectNumber",
      label: "Winning No",
    },
    {
      id: "updatedAt",
      label: "Drow Time",
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
    getFunTargetListData();
  }, [pagination.rowsPerPage, pagination.page]);

  const getFunTargetListData = () => {
    setLoader(true);
    let payload = {
      limit: pagination.rowsPerPage,
      start: (pagination.page + 1 - 1) * pagination.rowsPerPage,
      gameType: "FUN_TARGET",
    };
    dispatch(getFunTargetList(payload)).then((res) => {
      setLoader(false);
      setRowData({
        ...rowData,
        list: res?.data?.data?.docs,
        totalDocs: res?.data?.data?.totalDocs,
      });
    });
  };

  return (
    <Paper
      sx={{ p: 3, background: "none", boxShadow: "none" }}
      className="outer-box game-rules-section"
    >
      <h2>Fun Target</h2>
      <CustomTable
        headCells={columns}
        rowData={rowData?.list}
        totalDocs={rowData?.totalDocs}
        pagination={pagination}
        setPagination={setPagination}
        loading={loader}
      />
    </Paper>
  );
};

export default FunTarget;
