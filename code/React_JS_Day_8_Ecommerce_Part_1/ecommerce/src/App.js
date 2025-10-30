import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center text-primary mb-4">Product Store</h1>
        <ProductList />
      </div>
    </>
  );
}

export default App;
