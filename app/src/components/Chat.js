import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Swal from 'sweetalert2'

const Chat = () => {
  const [name, setName] = useState("");
  

   const handleSubmit = (event) => {
    event.preventDefault();
    
     
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'A mensagem Foi Enviada, Aguarde ate aparecer alguem Online.',
      showConfirmButton: false,
      timer: 1500
    })
    document.querySelector('textarea').value = ""
  }

    return (
    <div>
      <Container style={{marginTop:90}}> 
        <div style={{marginBottom:90}}>
        <Image src="https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg" roundedCircle  alt="perfil" style={{width:50}} />
         
          <small> Maria: </small>
           <em>{name}</em>
       </div>
      <Form onSubmit={handleSubmit}>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">       
        <Form.Label>
        <i className="material-icons" style={{float:'right'}}>insert_emoticon</i>
        </Form.Label>
        <Form.Control as="textarea" rows={3}
         className="form-control border-info " 
         placeholder="Sua Mensagem!"
         aria-label="Username"
         value={name}
         onChange={(e) => setName(e.target.value)}   
        />
      </Form.Group>
      <div className="d-grid gap-2 col-6 mx-auto ">
         <Button as="input" type="submit" value="Enviar" className="bg-success"/>{' '}    
      </div>
      </Form>             
    </Container>
    </div>
     
    )
}

export default Chat;