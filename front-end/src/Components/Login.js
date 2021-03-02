import React from 'react';
import {useState} from 'react'

const initialValues = {
        username: "",
        password: "",
        role: "",
    }

function Login() {
    const [formValues, setFormValues] = useState(initialValues);
  
    const inputChange = (name, value) => {
        setFormValues({
            
            [name]: value
        })
    }
    const handleChange = e => {
        const {name, value} = e.target;
        inputChange(name, value)

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
                            value={formValues.username}
                            placeholder='username..'
                            onChange={handleChange}
                        />
                    </label><br />
                    
                    <label>Password
                        <input name='password'
                            type='password'
                            value={formValues.password}
                            placeholder='********'
                            onChange={handleChange}
                        />
                    </label><br />

                    <label>Client
                        <input name='role'
                            type='radio' 
                            value='client' 
                            onChange={handleChange}
                            checked={formValues.role === 'client'}
                        />
                    </label>
                    <label>Instructor
                        <input name='role'
                            type='radio' 
                            value='instructor' 
                            onChange={handleChange}
                            checked={formValues.role === 'instructor'}
                        />
                    </label><br />
                    
                    <label>
                        <button type="submit" >login</button>
                    </label>

                </div>
            </form>
        </div>
    )

}

export default Login;