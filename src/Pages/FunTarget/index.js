import { Paper } from "@mui/material";
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
      id: "",
      twoLineText: true,
      label: "Sr. no.",
      type: "custom",
      render: (row, i) => renderSrNo(row, i, pagination),
    },
    {
      id: "id",
      label: "id",
    },
    {
      id: "selectNumber",
      label: "selectNumber",
    },
    {
      id: "totalBetAmount",
      label: "totalBetAmount",
    },
    {
      id: "totalDistributeAmount",
      label: "totalDistributeAmount",
    },
    {
      id: "totalProfit",
      label: "totalProfit",
    },
    {
      id: "status",
      label: "status",
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
