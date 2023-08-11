import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';


function App() {
  return (
    <div className="App">
      <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div>
      <Button variant="contained" >Login</Button>
      </div>
    </div>
  );
}


export default App;
