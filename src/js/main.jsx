import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css'

// components
import Home from './components/Home';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
