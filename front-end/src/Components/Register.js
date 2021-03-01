import { React, useState, useEffect }  from "react";


function Register() {

    const defaultData = {
        username: "",
        email: "",
        password: "",
        type: "",
        auth: ""
    }
    
    const [formData, setFormData] = useState(defaultData)

    const change = event => {
        console.log(event.target.value)
    }

    const submit = event => {
        event.preventDefault()
    }

    return (
        <div>
            <p>This is the register component</p>
            <form>
                <label for="username">Username</label>
                <br></br>
                <input name="username" id="username" type="text"/>
                <br></br>
                <br></br>


                <label for="email">Email</label>
                <br></br>
                <input name="email" id="email" type="email" onChange={change}/>
                <br></br>
                <br></br>

                <label for="password">Password</label>
                <br></br>
                <input name="password" id="password" type="password" onChange={change}/>
                <br></br>
                <br></br>

                <label for="confirm-password">Confirm Password</label>
                <br></br>
                <input name="confirm-password" id="confirm-password" type="password" onChange={change}/>
                <br></br>
                <br></br>

                <label for="type">Account Type</label>
                <br></br>
                <select name="type" id="type" onChange={change}>
                    <option value="">Select an account type</option>
                    <option value="1">Instructor</option>
                    <option value="2">Student</option>
                </select>
                <br></br>
                <br></br>

                <label for="auth">Instructor Auth Code</label>
                <br></br>
                <input name="auth" id="auth" type="text" onChange={change}/>
                <br></br>
                <br></br>

                <input type="submit" onSubmit={submit}/>

            </form>

        </div>
    )
}

export default Register