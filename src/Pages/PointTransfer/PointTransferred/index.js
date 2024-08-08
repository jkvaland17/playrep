import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../hoc/CommonTable";
import { useDispatch } from "react-redux";
import { getPointTransferList } from "../../../Redux/pointtransfer/action";

const PointTransferred = () => {
  const [pagination, setPagination] = useState({ rowsPerPage: 10, page: 0 });
  const [rowData, setRowData] = useState({ list: [], totalDocs: 0 });
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

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
    getPointTransferredListData();
  }, [pagination.rowsPerPage, pagination.page]);

  const getPointTransferredListData = () => {
    setLoader(true);
    let payload = {
      limit: pagination.rowsPerPage,
      start: (pagination.page + 1 - 1) * pagination.rowsPerPage,
    };
    dispatch(getPointTransferList(payload)).then((res) => {
      setLoader(false);
      setRowData({
        ...rowData,
        list: res?.data?.data?.docs,
        totalDocs: res?.data?.totalDocs,
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

export default PointTransferred;
