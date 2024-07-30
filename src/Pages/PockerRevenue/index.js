import { Paper } from "@mui/material";
import React, { useState } from "react";
import MainCommonFilter from "../../Components/MainCommonFilter";
import moment from "moment";

const PockerRevenue = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
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
  return (
    <Paper sx={{ p: 3, background:"none", boxShadow: "none" }} className="outer-box game-rules-section">
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
            addPropsFilter={{}}
          />
        </div>
      </div>
    </Paper>
  );
};

export default PockerRevenue;
