import './App.css';
import React from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from './newlogo.png'

function App() {
  return (
    <div className="App m-5">
      <section id="navbar-home">
      <nav class="navbar navbar-expand-lg" >
        <img src={Logo} width='250px'/>
        <div className="collapse navbar-collapse" id="homepage"></div>
        <button class="btn btn-danger" id="logout-button">Logout</button>
      </nav>
      </section>  
      <div className="row rounded mt-3">
        <div className="col-md-12 col-md-offset-8">
          <div className="weather rounded">
            <div className="current">
              <div className="info">
                <div>&nbsp;</div>
                  <div className="city"><small><small>CITY: </small></small>JAKARTA</div>
                  <div className="temp">37&deg; <small>C</small></div>
                  <div className="wind"><small><small>MAIN: </small></small>INDONESIA</div>
                  <div>&nbsp;</div>
              </div>
              <div class="icon">
              <span class="wi-day-sunny"></span>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
