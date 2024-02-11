import React from 'react'
import { Button } from 'react-bootstrap'


function Display({email,password,setEmail,setPassword}) {
  return <>
      <h1>Form Input Data is</h1>
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>
      <Button variant="primary" onClick={
        ()=>{
          setEmail("")
          setPassword("")
        }
      }>
        Clear
      </Button>
    </>
  
}

export default Display
