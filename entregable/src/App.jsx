import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './Components/Formulario.jsx'


let id=0

function App() {

  const [usuarios, setUsuarios] = useState([])

  function handleAddUsuario (usuario) {
    
    const newUsuarios = [...usuarios]
    newUsuarios.push({
      id: id++,
      nombre: usuario,
       

    })
    setUsuarios(newUsuarios)
  }
  

  return (
    <div className="App">
     <Formulario onSubmit={handleAddUsuario}>
      {usuarios.map((usuario) => {
        return <Usuario key={usuario.id} usuario={usuario} />
      })}
     </Formulario>

    </div>
  )
}

export default App
