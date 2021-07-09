import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// imports from local files.
import FilterBar from './components/FilterBar/FilterBar';
import TableScreen from './screens/TableScreen';
import { Flex } from './AppStyles'; 

const theme = createMuiTheme({
  palette: {
    secondary:{
      main: "#FF7000",
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <FilterBar/>
        <TableScreen/>
      </Flex>
    </ThemeProvider>
  );
}

export default App;