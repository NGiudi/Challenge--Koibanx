// imports fron react.
import React from 'react';

// imports local files.
import { FilterContainer } from './FilterBarStyles';
import AlertError from '../AlertError/AlertError';
import FilterByKeyWord from './FilterByKeyWord';
import FilterByAsset from './FilterByAsset';

function FilterBar() {
  
  return (
    <FilterContainer>
      <AlertError/>
      <FilterByKeyWord/>
      <FilterByAsset/>
    </FilterContainer>
  );
}

export default FilterBar;