import React, { useState } from 'react'
import CustomTable from '../../hoc/CommonTable'
import { Paper } from '@mui/material'
import moment from 'moment';
import { data } from "../DashBoard/data";

const Triplefun = () => {

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
    <Paper sx={{ p: 3,background:"none", boxShadow: "none" }} className="outer-box game-rules-section">
      <h2>Triple Fun</h2>
      <CustomTable
        headCells={columns}
        rowData={data.data.docs}
        totalDocs={data?.data?.totalDocs}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Paper>
  )
}

export default Triplefun
