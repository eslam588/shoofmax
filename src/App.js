import React from 'react';
import Hero  from "./components/Hero/Hero";
import {MovieState}  from "./context/MovieContext"

function App() {
  return (
    
      <MovieState>
         <Hero />        
      </MovieState>  
  );
}

export default App;
