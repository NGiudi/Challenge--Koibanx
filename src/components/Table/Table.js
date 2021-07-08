/* imports from react. */
import React, { useContext, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';

/* imports from externals libraries.*/
import Pagination from '@material-ui/lab/Pagination';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

// imports from locals files.
import { FilterContext } from '../../context/FilterContext';
import { constColumns } from '../../const/columnsTable';

function Table({tableData}) {
  const { sortState, setSortState } = useContext(FilterContext);
  const columns = React.useMemo (() => constColumns, []);
  const { data } = tableData;
  
  useEffect(() => {
    setPageSize(tableData.rowsPerPage);
  }, []);
  
  const { 
    getTableBodyProps, 
    getTableProps, 
    prepareRow,
    headerGroups, 
    setPageSize,
    gotoPage,
    page
  } = useTable({ columns, data }, usePagination);

  const sortHandle = (header) => {
    if (sortState.sortTo !== header){
      setSortState({sortTo: header, desc: false});
    }
    else if (!sortState.desc){
      setSortState({sortTo: header, desc: true});
    }
    else{
      setSortState({sortTo: "", desc: false});
    } 
  }

  const handleChangePagination = (event, value) => {
    gotoPage(value-1);
  };

  return (
    <div>
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
                  {column.id === 'cuit' || column.id === 'commerce'? 
                    <div onClick={()=>{sortHandle(column.id)}}>
                      {column.render('Header')}
                      <span>{sortState.sortTo === column.id ? (sortState.desc? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>) : ''}</span>
                    </div>
                    : column.render('Header') }
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

      <Pagination count={tableData.pages} onChange={handleChangePagination} shape="rounded" />
    </div>
  );
}

export default Table;