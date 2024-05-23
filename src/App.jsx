
import {Formulario} from './components/Formulario'
import {Home} from './components/Home'
import {useState} from'react'
import './App.css'

function App() {

  const [user, setUser] = useState([])

  return (
      <div className= "App">
        {
          !user.length > 0 
        ?<Formulario setUser={setUser}/>
        :<Home user={user} setUser = {setUser}/>
        }
         <img src="https://source.unsplash.com/random" alt="Imagen lateral" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat mainImg' />
      </div>
      
  )
}

export default App
