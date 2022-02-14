// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom';
import ColumnLayout from './layout/ColumnLayout';
import Sidebar from './layout/Sidebar';
import AppRouters from './routes/AppRouters';

const App=()=>{
  return(
    <Router>
      <ColumnLayout></ColumnLayout>
      
    </Router>
  );
}

export default App;