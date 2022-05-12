import './App.css';
import BlogTitles from './components/BlogTitles';
import ColdEmail from './components/ColdEmail';
import Navigation from './components/Navigation';
import ProductDescription from './components/ProductDescription';
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
   <Router>
      <div className="App">
      <Navigation />

      <Routes>
     <Route path='/' exact element={ <Home/>} />
     <Route path='/blog-titles' element={ <BlogTitles/>} />
     <Route path='/product-descriptions' element={ <ProductDescription/>} />
     <Route path='/cold-emails' element={ <ColdEmail/>} />
      
      </Routes>
    </div>
   </Router>
  );
}

export default App;
