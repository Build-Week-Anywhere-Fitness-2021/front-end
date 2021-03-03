//TECH IMPORTS 

import React from 'react';
import {useState, Route} from 'react';
import {useHistory} from 'react-router-dom';
import styled, {createGlobalStyle, css} from 'styled-components';
import axiosWithAuth from '../Helpers/axiosWithAuth';


//STYLING 

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;        
        background: linear-gradient(to bottom right,  #6B5B95, #FF7B25, #FEB236, #fff);

    }
    body {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        height: 100%;
        margin: 1em;
        color: whitesmoke;
    }
`;

const sharedStyles = css`
    background-color: #eee;
    height: 4em;
    border-radius: .5em;
    border: 1px solid #D64161;
    margin: 1em 0 2em 0;
    padding: 1em;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 2em;
`;

const StyledForm = styled.form`
    font-size: 1.2em;
    width: 100%;
    max-width: 70em;
    padding: 4em;
    background-color: #6B5B95;
    border-radius: 1em;
    box-sizing: border-box;
    box-shadow: 0 0 10em 0 #fff; 
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
    :hover {
        border: .2em solid #FF7B25;
    }
`;

const StyledFieldset = styled.fieldset`
    border: 1px solid #fff;
    border-radius: .5em;
    padding: 1em;
    margin: 2em 0;
    color: #fff;
    :hover {
        border: 1px solid #D64161;
    }

    legend {
        padding: 0 .5em;
    }
    label {
        padding-right: 2em;
    }
    input {
        margin-right: 1em;
    }
`;

const StyledButton = styled.button`
    display: block;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #D64161;
    font-size: 1rem;
    border: 0;
    border-radius: .5em;
    height: 4em;
    padding: 0 2em;
    cursor: pointer;
    box-sizing: border-box;
    
    :hover {
        background-color: #D64161;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase; 
    }
`;

//STYLING END

//BEGIN FUNCTIONAL CODE


const initialValues = {
        username: "",
        password: "",
        role: "",
    }

function Login() {
    const [formValues, setFormValues] = useState(initialValues);
    const history = useHistory();

    //DONT BELIEVE THIS IS NEEDED BUT JUST COMMENTING OUT FOR NOW JUST IN-CASE
    // const inputChange = (name, value) => {
    //     setFormValues({
            
    //         [name]: value
    //     })
    // }
    const handleChange = e => {
        const {name, value, type, checked} = e.target;
        
        const valueToUse= type === "radio" ? checked : value 
        setFormValues({
            ...formValues, [name]: valueToUse
        })

    }
    
    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/api/auth/login", formValues)
        .then((res)=>{
            console.log("LOGIN SUCCESS", res);
            localStorage.setItem("token", JSON.stringify(res.data.payload))
            if (formValues.role === 'client') {
                history.push("/find-class");
            } else if
            (formValues === 'instructor') {
                history.push("/create-class");
            }
        })
        .catch((err)=>{
            console.log("LOGIN SUBMISSION FAILED", err);
        })
    }


    return(
        <>
           <GlobalStyle />
           <StyledFormWrapper>
                
                <StyledForm onSubmit={onSubmit}>
                    <h2>Login</h2>
                    
                    <label>Username
                        <StyledInput name='name'
                            type='text'
                            value={formValues.username}
                            placeholder='username..'
                            onChange={handleChange}
                        />
                    </label>
                    
                    <label>Password
                        <StyledInput name='password'
                            type='password'
                            value={formValues.password}
                            placeholder='********'
                            onChange={handleChange}
                        />
                    </label>

                    <StyledFieldset>
                    <legend>Role</legend>
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
                    </label>
                    </StyledFieldset>
                    
                    <StyledButton type="submit">Login</StyledButton>
                    
        
                </StyledForm>
            </StyledFormWrapper>
        </>
    )

}

export default Login;