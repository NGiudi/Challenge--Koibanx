// imports from react.
import React, { useContext, useEffect, useState } from 'react';

// imports from local files.
import { FilterContext } from '../context/FilterContext';
import Table from '../components/Table/Table';

function TableScreen() {
  const [tableData, setTableData] = useState(null);
  const { query } = useContext(FilterContext);
  const { isLoading, isError, data } = query;
  
  useEffect(() => {
    setTableData(data);
  }, [data]);
  
  if (isError)
    return <p>Error...</p>

  if (isLoading || !tableData)
    return <div>Loading...</div>

  return (
    <Table tableData={tableData}/>
  );
}

export default TableScreen;