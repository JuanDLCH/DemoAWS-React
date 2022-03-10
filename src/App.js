import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react'

function App() {
  const [data, setData] = useState(null)
  const [textAreaValue, setTextAreaValue] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('http://3.93.151.175:3001/sapos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }

  const handleClick = e => {
    e.preventDefault();
    const note = {
      nombre: textAreaValue
    }
    axios.post('http://3.93.151.175:3001/sapos', note)
    setTextAreaValue('')
    getData()
  }

  const handleOnChange = (e) => {
    setTextAreaValue(e.target.value)
    getData()
  }

  function tick() {
    const element = (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <div className="badge bg-primary text-wrap">
            <h1>Deja un mensaje para tus amigos :3</h1>
          </div>
          <ul className="list-group">
            {
              data &&
              data.map(note => (
                <li className="list-group-item" key={note.id}><p><strong>- {note.nombre} - <br></br></strong></p></li>
              ))
            }
          </ul>
          <form >
            <textarea name='nombre' onChange={handleOnChange} value={textAreaValue}></textarea> <br></br>
            <button type='submit' className="btn btn-primary" onClick={handleClick}>Agregar</button>
          </form> </center>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <div className="badge bg-primary text-wrap">
          <h1>Deja un mensaje para tus amigos :3</h1>
        </div>
        <ul className="list-group">
          {
            data &&
            data.map(note => (
              <li className="list-group-item" key={note.id}><p><strong>- {note.nombre} - <br></br></strong></p></li>
            ))
          }
        </ul>
        <form >
          <textarea name='nombre' onChange={handleOnChange} value={textAreaValue}></textarea> <br></br>
          <button type='submit' className="btn btn-primary" onClick={handleClick}>Agregar</button>
        </form> </center>
    </div>
  );
}

export default App;
