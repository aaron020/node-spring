import React, { useState } from "react"


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault()
        const user={email,password}
        fetch("/api/user/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(response=>{
            if(response.ok){
                // user can login 
                console.log("User login ")
            }else{
                console.log("User cant login")
            }
        }).catch(error=>{
            console.log(error)
        })
    }






    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" placeholder="email@gmail.com" value={email}/>
                <label for="email">Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" placeholder="**********" value={password}/>
                <button>Login</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Dont have an account? Register here</button>

        </div>
    )
}