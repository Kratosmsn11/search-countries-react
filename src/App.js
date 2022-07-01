import './App.css';
import  Header  from './Components/Header';
import DropDown from './Components/DropDown';
import DataTable from './Components/DataTable';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App(props) {
  
  const [data, setData] = useState(0);

  const sendToDD = (e) => {
    setData(e)
  }

  return (
    <ThemeProvider theme={darkTheme}>
        <div className="App">
            <Header theme={darkTheme}/>
            <DropDown client={props.client} sendToFunc={(e)=>sendToDD(e)}/>
            <DataTable dataSet = {data}/>
        </div>
      </ThemeProvider>
  );
}

export default App;
