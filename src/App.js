import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData,productDataTwo } from './components/Products/Data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Chosse your favourate' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
