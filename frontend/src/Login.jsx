import React, { useState } from "react"
import {Button, Container, Row, Col} from 'react-bootstrap'



export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url_begin = "http://localhost:8080/"




    const handleSubmit = (e) => {
        e.preventDefault()
        const user={email,password}
        const url = url_begin + "user/login"
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(response=> response.json())
        .then(data => {
            if(data === true){
                console.log("User Logged In")
            }else{
                console.log("Not logged in")
            }
        })

    }






    return(
        <Container>
            <Row className="mb-3">
            <h2>Login</h2>
            </Row>
            <Row>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" placeholder="email@gmail.com" value={email}/>
                <label for="email">Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" placeholder="**********" value={password}/>
                <Button variant="outline-light">Login</Button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Dont have an account? Register here</button>
            </Row>

        </Container>
    )
}