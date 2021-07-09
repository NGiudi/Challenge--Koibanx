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
import { Center, HeaderTable, MainView, Table, Td, Th, Tr } from './TableStyles';

function TableComponent({tableData}) {
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
    <MainView>
      <Table {...getTableProps()} >
        <thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>
                  {column.id === 'cuit' || column.id === 'commerce'? 
                    <HeaderTable onClick={()=>{sortHandle(column.id)}}>
                      {column.render('Header')}
                      <span>{sortState.sortTo === column.id ? (sortState.desc? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>) : ''}</span>
                    </HeaderTable>
                    : column.render('Header') }
                </Th>
              ))}
            </Tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Td {...cell.getCellProps()} >
                      {cell.render('Cell')}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </tbody>
      </Table>
      
      <Center>
        <Pagination defaultPage={tableData.page} margin="auto" count={tableData.pages} onChange={handleChangePagination} shape="rounded" />
      </Center>
    </MainView>
  );
}

export default TableComponent;