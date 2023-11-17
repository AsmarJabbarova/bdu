import { useState, useEffect} from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import Tablee from './assets/pages/Tablee'






function App() {
  let [login, setLogin] = useState(true)
  let [register , setRegister] = useState([])
  let [tablee , setTablee] = useState(false)
  let [user , setUser] = useState([])



  

  useEffect(() => {
   
  }, []);
  return (
  
      <ChakraProvider>
  <>
        {login?(
          <>
{
  tablee ?(
    <>
<Tablee tablee={tablee} setTablee={setTablee}/>
    </>
  ):(
    <Login login={login} setLogin={setLogin}
    setTablee={()=> setTablee(true)}/>
  )
}
          </>

          )
          :(
            <Register setUser={setUser} user={user}/>
        )}
      
      
        </> 
    </ChakraProvider>
 
  )
}

export default App
