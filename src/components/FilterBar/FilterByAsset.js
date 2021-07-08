// imports from react.
import React, {Fragment, useContext} from 'react';

// imports from external libraries.
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

// imports local files.
import { FilterContext } from '../../context/FilterContext';
import { Flex, Title } from './FilterBarStyles';

export default function FilterByAsset() {
  const { inputsRequest, setInputsRequest } = useContext(FilterContext);
  
  const handleRadioChange = (e) => {
    const { value } = e.target;
    setInputsRequest({...inputsRequest, radioAsset: value});
  }

  return (
    <Fragment>
      <Title>Activo:</Title>
      <RadioGroup name="asset-filter" value={inputsRequest.radioAsset} onChange={handleRadioChange}> 
        <Flex mx="5px">
          <Radio name="asset-filter" size="small" id="noFilter" value="noFilter"/>
          <label htmlFor="noFilter">Todos</label>
       </Flex>
      
        <Flex mx="5px">
          <Radio name="asset-filter" size="small" id="true" value="true"/>
          <label htmlFor="yes">True</label>
        </Flex>

        <Flex mx="5px">
          <Radio name="asset-filter" size="small" id="false" value="false"/>
          <label htmlFor="no">False</label>
        </Flex>
      </RadioGroup>
    </Fragment>
  );
}
