import { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [form, setForm] = useState({
    name: "", 
    color: ""
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const isValidInput = () => {
    const { name, color } = form

    if (name.length < 3 || name.startsWith(" ") || color.length < 6) {
      console.log("error")
      setError(prev => !prev)
    } else {
      console.log("correcto")
      setShow(prev => !prev)
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    isValidInput()
    console.log(form)
  }

  const { name, color } = form

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <input id="name" name="name" value={name}  type="text" placeholder="Ingresa tu nombre" onChange={handleChange} className="input" />
        </div>
        <div className="input-container">
          <input id="color" name="color" value={color} type="text" placeholder="Ingresa tu color favorito (formato HEX)" onChange={handleChange} className="input" />
        </div>
        <button type="submit">Enviar</button>
        {error && 
          <p>Por favor chequea que la información sea correcta</p>
        }
      </form>

      {show && <Card name={name} color={color} />}
    </div>
  );
}

export default App;
