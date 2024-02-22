import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



function App() {
  return (
    <div id='body'>
      <div class="container-fluid mt-3">
        <div class="row">
          <div class="col-sm-6 p-3 ">
            <p>summer collection</p>
            <h1>Fall - Winter</h1>
            <h1>Collection 2030</h1>

            <p> label creating luxury essentials.</p>
          </div>

           <div class="col-sm-6 p-3 ">
            <img className='img' src={img}  alt="loading..."/>
           </div>
        </div>
     </div>
    </div>
  );
}

export default App;
