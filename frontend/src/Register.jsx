import React, {useState} from 'react';

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    
    const handleSubmit = (e) => {
        e.preventDefault()
        const user={name,email,password}
        fetch("/api/user/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("added user")
            props.onFormSwitch('login')
        })
    }


    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type="name" onChange={(e)=>setName(e.target.value)} id="name" name="name" placeholder="John" value={name}/>
                <label for="email">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" placeholder="email@gmail.com" value={email}/>
                <label for="email">Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" placeholder="**********" value={password}/>
                <button>Login</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}