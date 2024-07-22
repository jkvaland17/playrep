import React, { useState } from "react";
import { data } from "../DashBoard/data";
import CustomTable from "../../hoc/CommonTable";
import MainCommonFilter from "../../Components/MainCommonFilter";
import moment from "moment";
import { Paper } from "@mui/material";

console.log("data", data);

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

const DashBoard = () => {
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

  return (
    <Paper sx={{ p: 3 }} className="outer-box game-rules-section">
      <div className={"justify_content_between"}>
          <div className={"d_flex"} style={{justifyContent:"end"}}>
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
              addPropsFilter={{
              }}
            />
          </div>
        </div>
      <CustomTable
        headCells={columns}
        rowData={data.data.docs}
        totalDocs={data?.data?.totalDocs}
        pagination={pagination}
        setPagination={setPagination}
      />
      </Paper>
  );
};

export default DashBoard;
