import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'

 function Register({register , setRegister}) {
    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [pass , setPass] = useState("")
  return (
    <>
<FormControl>
  <FormLabel>Username</FormLabel>
  <Input type='text' onChange={(e)=>{
    setName(e.target.value)
  }}/>
 
  <FormLabel>Email address</FormLabel>
  <Input  type='email' onChange={(e)=>{
    setEmail(e.target.value)
  }}/>
  
  <FormLabel>Password</FormLabel>
  <Input type='number'onChange={(e)=>{
    setPass(e.target.value)
  }} />
</FormControl>
<Button colorScheme='blue' variant='outline' style={{marginRight:10}} onClick={()=>
 setRegister(false)
}>Login</Button>
<Button colorScheme='blue'  variant='outline'>Register</Button>

    </>
  )
}
export default Register