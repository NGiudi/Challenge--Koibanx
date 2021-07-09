import React, { Fragment, useContext } from 'react';

// imports from external libraries.
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// imports local files.
import { CenterButton, Flex, Text, Title } from './FilterBarStyles';
import { FilterContext } from '../../context/FilterContext';

function FilterByKeyWord() {
  const { inputsState, setInputsState, inputsRequest, setInputsRequest, validateInputFilter } = useContext(FilterContext);

  const handleChangeTextField = (e) => {
    const { value } = e.target;
    setInputsState({...inputsState, inputText: value});
  }
  
  const handleChangeCheckBox = (e) => {
    const {checked, name} = e.target;
    setInputsState({...inputsState, [name]:checked});
  }

  const BtnSubmit = (e) => {
    e.preventDefault();
    
    if (validateInputFilter()) 
      setInputsRequest({...inputsRequest, submitedInputText: true}); 
  }

  const clearFilterText = () => {
    setInputsRequest({...inputsRequest, submitedInputText: false});
    setInputsState({
      inputText: "",
      checkboxCommerce: false,
      checkboxCuit: false,
      checkboxId: false
    });
  }

  return (
    <Fragment>
      <Title>Palabra clave:</Title>
      <TextField color="secondary" size="small" variant="outlined" placeholder="Ingrese texto..." value={inputsState.inputText} onChange={handleChangeTextField} disabled={inputsRequest.submitedInputText}/>
        
      <Text mr="180px">Aplicar la palabra clave en las columnas:</Text>

      <Flex mx="5px">
        <Checkbox id="id" name="checkboxId" size="small" checked={inputsState.checkboxId} onChange={handleChangeCheckBox} disabled={inputsRequest.submitedInputText}/>
        <label htmlFor="id">Id</label>
      </Flex>

      <Flex mx="5px">
        <Checkbox id="commerce" name="checkboxCommerce" size="small" checked={inputsState.checkboxCommerce} onChange={handleChangeCheckBox} disabled={inputsRequest.submitedInputText}/>
        <label htmlFor="commerce">Commerce</label>
      </Flex>
            
      <Flex mx="5px">
        <Checkbox id="cuit" name="checkboxCuit" size="small" checked={inputsState.checkboxCuit} onChange={handleChangeCheckBox} disabled={inputsRequest.submitedInputText}/>
        <label htmlFor="cuit">Cuit</label>
      </Flex>

      <CenterButton>
        <Button type="submit" onClick={BtnSubmit} disabled={inputsRequest.submitedInputText}>Buscar</Button>
        <Button onClick={clearFilterText} disabled={!inputsRequest.submitedInputText}>Limpiar</Button>
      </CenterButton>
    </Fragment>
  );
}

export default FilterByKeyWord;