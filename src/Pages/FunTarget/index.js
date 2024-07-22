import { Paper } from '@mui/material'
import React, { useState } from 'react'
import CustomTable from '../../hoc/CommonTable'
import moment from 'moment'
import { data } from "../DashBoard/data";

const FunTarget = () => {
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
    <Paper sx={{ p: 3 }} className="outer-box game-rules-section">
      <h2>Fun Target</h2>
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

export default FunTarget
