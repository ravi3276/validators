import React, { useState } from 'react'
import './Registration.css';

function Registration({focused}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    
    const login=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="registration__container">
         <form onSubmit={login}>
            <h1>Registration</h1>
             <label>Username</label>
             <input type="text" required placeholder="Username" pattern='^[A-Za-z0-9]{4,8}$' value={name}  onChange={(e)=>setName(e.target.value)} />
             <span>name should b/w 3-6 character</span>
             <label>Email</label>
             <input type="email" required placeholder="Email" pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
             <span>email not valid</span>
             <label>Birthday</label>
             <input type="date" placeholder='Birthday' value={birthday}  onChange={(e)=>setBirthday(e.target.value)}/>
             <label>Password</label>
             <input type="password" required placeholder="Password"  pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
             <span>password should b/w 6-10 character (including @,0-9)</span>
            <label>Confirm Password</label>
             <input type="password" required placeholder='Confirm Password' pattern={password}/>
             <span>password should not match</span>
             <button disabled={name && password && email}>Submit</button>
         </form>   
    </div>
  )
}

export default Registration