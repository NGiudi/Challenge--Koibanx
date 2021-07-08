// imports from local files.
import FilterBar from './components/FilterBar/FilterBar';
import TableScreen from './screens/TableScreen';
import { Flex } from './AppStyles'; 

function App() {

  return (
    <Flex>
      <FilterBar/>
      <TableScreen/>
    </Flex>
  );
}

export default App;