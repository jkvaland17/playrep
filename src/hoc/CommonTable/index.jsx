import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import { visuallyHidden } from "@mui/utils";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableContent from "./TableContent";
import TableLoader from "./TableLoader";

const CustomTable = (props) => {
  const {
    headCells,
    rowData,
    totalDocs,
    pagination,
    setPagination,
    isSystemTotal,
    isCurrency,
    isAboutWebsite,
    isWinnerTitle,
    isPopularGame,
    isAdminUser,
    loading,
  } = props;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const ref = useRef(null);

  // Handler for changing the page in pagination
  const handleChangePage = (event, newPage) => {
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  // Handler for changing the number of rows per page in pagination
  const handleChangeRowsPerPage = (event) => {
    setPagination({
      ...pagination,
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    });
  };

  // Handler for requesting a sort on a column
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Enhanced table head component with sortable column headers
  const EnhancedTableHead = (props) => {
    const { order, orderBy, onRequestSort } = props;

    // Handler for creating a sort handler for a column
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow sx={{ backgroundColor: '#20b7c9' }}>
          {headCells.map((headCell, i) =>
            headCell.type === "hide" ? (
              // Render a hidden table header cell
              <th className={"hide_table_th"} />
            ) : (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
						  className={"table_cell_thead"}
						  sx={{ color: '#fff' }}
              >
                {headCell.isDisbanding &&
                (headCell.label === "Action" ||
                  headCell.label === "Avatar" ||
                  headCell.id === "amount" ||
                  headCell.isDisbanding) ? (
                  // Render a specific style for certain column headers
                  <Box className={"common-table-filter-css"}>
                    {headCell.label}
                  </Box>
                ) : headCell?.twoLineText ? (
                  // Render a two-line text column header
                  <Box className={""}>
                    <span
                      className={"table_td_span"}
                      dangerouslySetInnerHTML={{ __html: headCell.label }}
                    />
                  </Box>
                ) : headCell?.numeric ? (
                  // Render a sortable numeric column header
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                    className={"common-table-filter-css "}
                  >
                    <span>{headCell.label}</span>
                    {orderBy === headCell.id && (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    )}
                  </TableSortLabel>
                ) : (
                  // Render a sortable column header
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                    className={"common-table-filter-css"}
                  >
                    {headCell.label}
                    {orderBy === headCell.id && (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    )}
                  </TableSortLabel>
                )}
              </TableCell>
            )
          )}
        </TableRow>
      </TableHead>
    );
  };

  // Function to get the comparator function for sorting
  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  // Function to compare two values for descending sorting
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  // Function to perform stable sorting of an array
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  return (
    <div ref={ref}>
      <TableContainer className={"data-table"}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={"small"}
          className="publish_table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rowData?.length}
          />

          <TableBody>
            {loading && (
              <TableLoader
                height={"50vh"}
                width={ref?.current?.childNodes?.[1]?.clientWidth}
              />
            )}
            <TableContent
              rowData={rowData}
              stableSort={stableSort}
              getComparator={getComparator}
              headCells={headCells}
              order={order}
              orderBy={orderBy}
            />
          </TableBody>
        </Table>
      </TableContainer>

      {!isSystemTotal &&
        !isCurrency &&
        !isAboutWebsite &&
        !isWinnerTitle &&
        !isPopularGame && (
          <TablePagination
            rowsPerPageOptions={
              isAdminUser ? [5, 10, 25, 50, 100] : [10, 25, 50, 100]
            }
            component="div"
            count={totalDocs}
            rowsPerPage={pagination.rowsPerPage}
            page={pagination.page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className={"table_pagination"}
          />
        )}
    </div>
  );
};

export default CustomTable;
