import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Product } from './pages/product/Product';
import { Customer } from './pages/customer/Customer';
import { ProductForm } from './pages/product/ProductForm';
import { NotFoundPage } from './shared/PageNotFound';

const App=()=>{
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/customers">Customer</Link>
          </li>
        </ul>
      </nav>

      {/* Configurasi */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<Outlet />}>
          <Route index element={<Product/>}></Route>
          <Route path="form" element={<ProductForm/>}/>
        </Route>
        <Route path='customers/*' element={<Customer/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;