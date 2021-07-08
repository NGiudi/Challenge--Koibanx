// imports from react.
import React, { useContext } from 'react';

// imports from external libraries.
import Alert from '@material-ui/lab/Alert';

// imports from local files.
import { FilterContext } from '../../context/FilterContext';

function AlertError() {
  const { validationError } = useContext(FilterContext);

  if (validationError){
    return <Alert severity="error">{validationError}</Alert>
  }

  return null;
}

export default AlertError;