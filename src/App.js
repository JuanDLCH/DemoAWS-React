import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

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
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center><h1>Deja un mensaje para tus amigos :3</h1>
      <ul>
        {
          data &&
          data.map(note => (
            <li key={note.id}><p><strong>{note.nombre}</strong></p></li>
          ))
        }
      </ul>
      <form >
        <textarea name='nombre' onChange={handleOnChange} value={textAreaValue}></textarea>
        <button type='submit' onClick={handleClick}>add</button>
      </form> </center>
    </div>
  );
}

export default App;
