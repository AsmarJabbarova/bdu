import React from 'react'
import axios from "axios"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'


  
  import { Button, ButtonGroup } from '@chakra-ui/react'
 function Login({login,setTablee,setLogin}) {

  // const products = () => {
  //   axios
  //     .get("https://6556185084b36e3a431f047a.mockapi.io/api/products")
  //     .then((res) => setData(res.data));
  // };
  return (
    <>
    <FormControl>
  <FormLabel>Username</FormLabel>
  <Input type='text'/>
 
  <FormLabel>Password</FormLabel>
  <Input type='number'/>
  </FormControl>
  <Button colorScheme='blue' onClick={()=>{
    axios.get("https://6556185084b36e3a431f047a.mockapi.io/api/products").then((res)=>{
      let user= res.data;
      let isLogged = user.find((user)=> user.name == name && user.password ==parse)
      if(isLogged){
     }
        setLogin(true)
        setTablee(true)
        console.log(login);;
      
    })
  }}>Login</Button>
  <Button colorScheme='blue' variant='outline' style={{marginRight:10}} onClick={()=>
 setLogin(false)
}>Regsiter</Button>




 
    </>
  )
}
export default Login