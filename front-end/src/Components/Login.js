import React from 'react';
import {useState} from 'react'



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }
    const onSubmit = e => {
        e.preventDefault()
    }


    return(
        <div className="Login" onSubmit={onSubmit}>
            
            <form className='form-container'>
                <h3>Login</h3>
                <div className='form-inputs'>
                    
                    <label>Username
                        <input name='name'
                            type='text'
                            value={username}
                            placeholder='username..'
                            onChange={ (e) => setUsername(e.target.value)}
                        />
                    </label><br />
                    
                    <label>Password
                        <input name='password'
                            type='password'
                            value={password}
                            placeholder='********'
                            onChange={ (e) => setPassword(e.target.value)}
                        />
                    </label><br />

                    <label>
                        <input name='role'
                            type='radio' 
                            value='client' 
                            onChange={onchange}
                            checked={role === 'client'}
                        />
                    </label>
                    <label>
                        <input name='role'
                            type='radio' 
                            value='instructor' 
                            onChange={onchange}
                            checked={role === 'instructor'}
                        />
                    </label><br />
                    
                    <label>
                        <button type="submit" disabled={!validateForm()}>login</button>
                    </label>

                </div>
            </form>
        </div>
    )

}

export default Login;