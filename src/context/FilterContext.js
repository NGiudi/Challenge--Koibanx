import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import getCommerce from '../services/getCommerce';

export const FilterContext = React.createContext();

export function FilterProvider(props) {
  const [validationError, setValidationError] = useState(null);

  const [inputsRequest, setInputsRequest] = useState({
    submitedInputText: false,
    radioAsset: "noFilter"
  });

  const [inputsState, setInputsState] = useState({
    inputText: "",
    checkboxCommerce: false,
    checkboxCuit: false,
    checkboxId: false,
  });

  const [sortState, setSortState] = useState({
    sortTo: "",
    desc: false
  });

  let url = process.env.REACT_APP_API_ENDPOINT;
  const query = useQuery("commerce", () => getCommerce(url));


  useEffect(() => {
    url = createFilterQuery();
    url += createSortQuery();
    query.refetch();
  }, [inputsRequest, sortState]);

  const createFilterQuery = () => {
    const { checkboxId, checkboxCuit, checkboxCommerce, inputText } = inputsState;
    const { radioAsset, submitedInputText } = inputsRequest;
    let query = "", countOrItems = 0, countAndOp = 0;
    
    if (submitedInputText){
      if (checkboxCommerce){
        query += `{"commerce":{"$regex":"${inputText}"}}`;
        countOrItems++;
      }

      if (checkboxCuit){
        if(countOrItems > 0)  query += ",";
        query += `{"cuit":{"$regex":"${inputText}"}}`;
        countOrItems++;
      }

      if (checkboxId){
        if(countOrItems > 0) query += ",";
        query += `{"id":{"$regex":"${inputText}"}}`;
        countOrItems++;
      }

      if(countOrItems > 1)  query = `{"$or":[` + query + `]}`;
      
      countAndOp++;
    }

    if (radioAsset !== "noFilter"){
      if (countAndOp > 0) query += ",";
      
      if(radioAsset === "true")
        query += `{"asset":true}`;
      else if(radioAsset === "false")
        query += `{"asset":false}`;

      countAndOp++;
    }

    if (countAndOp > 1)
      query = `{"$and":[` + query + `]}`;
    
    if (countAndOp > 0)
      query = `?q=` + query;
    
    return process.env.REACT_APP_API_ENDPOINT + query;
  }

  const createSortQuery = () => {
    const { submitedInputText, radioAsset } = inputsRequest;
    let query = '';

    if (sortState.sortTo !== ""){
      if (!submitedInputText && radioAsset === "noFilter")
        query = `?`  
      else
        query = `&`;
      
      query += `h={"$orderby":{"${sortState.sortTo}":`;
      
      if(sortState.desc)  
        query += `-1}}`; 
      else
        query += `1}}`

      return query;
    }

    return '';
  }

  const validateInputFilter = () => {
    const { checkboxId, checkboxCuit, checkboxCommerce, inputText } = inputsState;
  
    if (!(checkboxId || checkboxCuit || checkboxCommerce)){
      setValidationError ("Seleccionar columna a filtar.");
      return false;
    }

    if (!inputText || inputText.trim() === ""){
      setValidationError ("Ingresar Texto a filtar.");
      return false;
    }
  
    setValidationError(null);
    return true;
  }

  return (
    <FilterContext.Provider value={{ setInputsState, validateInputFilter, setInputsRequest, setSortState, validationError, query, inputsState, inputsRequest, sortState }}>
      {props.children}
    </FilterContext.Provider>
  );
}