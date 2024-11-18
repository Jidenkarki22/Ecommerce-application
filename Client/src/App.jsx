import {BrowserRouter} from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import './App.css';
import './index.css';


function App() {
    return (
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    )
  }
  
  export default App