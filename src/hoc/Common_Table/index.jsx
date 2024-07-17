import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'sr.no.', minWidth: 170 },
  { id: 'code', label: 'Winning No.', minWidth: 100 },
  {
    id: 'population',
    label: 'Drew Time',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, code, population, ) {

  return { name, code, population };
}

const rows = [
  createData('1', 'NOT OPEN', "17-Jul-2024 01:54:27 PM"),
  createData('2', '6', "17-Jul-2024 01:52:27 PM"),
  createData('3', '7', "16-Jul-2024 01:52:27 PM"),
  createData('4', '2', "17-Jul-2024 01:52:27 PM"),
  createData('5', '1', "17-Jul-2024 01:52:27 PM"),
  createData('6', '8', "17-Jul-2024 01:52:27 PM"),
  createData('7', '2', "15-Jul-2024 01:52:27 PM"),
  createData('8', '4', "17-Jul-2024 01:52:27 PM"),
  createData('9', 'MX', "15-Jul-2024 01:52:27 PM"),
  createData('10', '8', "17-Jul-2024 01:52:27 PM"),
  // createData('11', '5', "20-Jul-2024 01:52:27 PM"),
  // createData('12', '14', "17-Jul-2024 01:52:27 PM"),
  // createData('13', '16', "22-Jul-2024 01:52:27 PM"),
  // createData('14', '30', "15-Jul-2024 01:52:27 PM"),
  // createData('15', '26', "10-Jul-2024 01:52:27 PM"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
