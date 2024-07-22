import React, { useState } from 'react'
import { data } from "../DashBoard/data";
import moment from 'moment';
import { Paper } from '@mui/material';
import CustomTable from '../../hoc/CommonTable';

const Funab = () => {
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
      <h2>Fun Ab</h2>
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

export default Funab
