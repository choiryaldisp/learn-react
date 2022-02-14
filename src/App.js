// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Customer } from './pages/customer/Customer';
import { ProductForm } from './pages/product/component/ProductForm';
import { NotFoundPage } from './shared/PageNotFound';
import { ProductList } from './pages/product/component/ProductList';
import { ProductInput } from './pages/product/component/ProductInput';

const App=()=>{
  return(
    <Router>
      <div className='container'>
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
      </div>

      <div className='container'>
          {/* Configurasi */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Outlet />}>
              <Route index element={<ProductList/>}></Route>
              <Route path="input" element={<ProductInput/>}/>
              <Route path="form" element={<ProductForm/>}/>
              <Route path="form/:id" element={<ProductForm/>}/>
            </Route>
            <Route path='customers/*' element={<Customer/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes>
      </div>
      
    </Router>
  );
}

export default App;