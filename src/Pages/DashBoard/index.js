import React, { useEffect, useState } from "react";
import CustomTable from "../../hoc/CommonTable";
import MainCommonFilter from "../../Components/MainCommonFilter";
import moment from "moment";
import { Paper, TableCell } from "@mui/material";
import { renderSrNo } from "../../utils";
import { useDispatch } from "react-redux";
import { getFunTargetList } from "../../Redux/drawDetails/action";



const DashBoard = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState({ list: [], totalDocs: 0 });
  const [loader, setLoader] = useState(false);
  const [filterData, setFilterData] = useState({
    startDate: null,
    endDate: null,
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
    getFunRoulletListData();
  }, [pagination.rowsPerPage, pagination.page]);

  const getFunRoulletListData = () => {
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
      <div className={"justify_content_between"}>
        <div className={"d_flex"} style={{ justifyContent: "end" }}>
          <MainCommonFilter
            filterData={filterData}
            setFilterData={setFilterData}
            pagination={pagination}
            setPagination={setPagination}
            plateFormOption={[
              "All Users",
              "Blocked Users Accounts",
              "Unblocked Users Accounts",
            ]}
            addPropsFilter={{
              isDateFilter: true,
              isSearchFilter: true,
            }}
          />
        </div>
      </div>
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

export default DashBoard;
