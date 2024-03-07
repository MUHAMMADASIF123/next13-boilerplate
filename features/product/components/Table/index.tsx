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
  { id: 'Date', label: 'Date', minWidth: 170 },
  { id: 'Time', label: 'Time', minWidth: 100 },
  {
    id: 'ScanCode',
    label: 'Scan Code',
    minWidth: 170,
    align: 'right',
 
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Account',
    label: 'Account',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  // {
  //   id: 'Vehicle',
  //   label: 'Vehicle',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
  {
    id: 'Module',
    label: 'Module',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Link',
    label: 'Link',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Exceptions',
    label: 'Exceptions',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(Date, Time, ScanCode, Account,Vehicle,Module,Link,Exceptions) {
  const density = ScanCode / Account;
  return { Date, Time, ScanCode, Account, density,Vehicle,Module,Link,Exceptions };
}

const rows = [
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('2021-02-21', '17:18:16', 1324171354, 3287263,'2018 FORD ESCAPE SE 1FMCU9G2JUA34719','B-06428','Link','Exceptions'),
  // createData('China', 'CN', 1403500365, 9596961),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
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
    <Paper sx={{ width: '100%', overflow: 'scroll', marginTop:"10px" }}>
      <TableContainer  >
        <Table  >
        <TableHead sx={{ backgroundColor: '#991D20', color: 'white', font:"bolder", fontSize:'16px' }}>
  <TableRow>
    {columns.map((column) => (
      <TableCell
        key={column.id}
        align={column.align}
        style={{  color: 'white' }} // Add color: 'white' here
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
