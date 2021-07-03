/* imports from react. */
import React, { Fragment } from 'react';
import { useTable, usePagination } from 'react-table';

/* imports from externals libraries.*/
import Pagination from '@material-ui/lab/Pagination';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


/* imports from constants. */
import { constColumns } from '../const/columnsTable';
import constData from '../const/MOCK_DATA.json';

function Table() {
  const columns = React.useMemo (() => constColumns, []);
  const data = React.useMemo(() => constData, []);
  
  const { 
    getTableBodyProps, 
    getTableProps, 
    prepareRow,
    state: { pageSize },
    headerGroups, 
    pageOptions,
    setPageSize,
    gotoPage,
    page
  } = useTable({ columns, data }, usePagination);

  const handleChangePagination = (event, value) => {
    gotoPage(value-1);
  };

  const handleChangePageSize = (event) => {
    setPageSize(Number(event.target.value))
  };

  return (
    <Fragment>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <Pagination count={pageOptions.length} onChange={handleChangePagination} shape="rounded" />
    
      <Select value={pageSize} onChange={handleChangePageSize}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </Fragment>
  );
}

export default Table;