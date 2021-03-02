import React, { useEffect } from 'react';
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
                    </label>
                    <label>Password
                        <input name='password'
                            type='password'
                            value={password}
                            placeholder='********'
                            onChange={ (e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        <button type="submit" disabled={!validateForm()}>login</button>
                    </label>

                </div>
            </form>
        </>
    )

}

export default Login;