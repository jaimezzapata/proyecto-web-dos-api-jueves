import Logiin from "./components/layouts/auth/Logiin"

function App() {
  let usuario = 'Jaime'
  let contrasena = '1234'
   return (
    <>
      <Logiin usuario={usuario} contrasena={contrasena}/>
    </>
  )
}

export default App
