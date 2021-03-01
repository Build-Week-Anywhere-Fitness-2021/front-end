import { React, useState, useEffect }  from "react";


function Register() {

    const defaultData = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        type: "",
        auth: ""
    }
    
    const [formData, setFormData] = useState(defaultData)

    const change = event => {
        const { value, name } = event.target
        console.log(event.target.value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submit = event => {
        event.preventDefault()
        setFormData(defaultData)
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div>
            <form>
                <label for="username">Username</label>
                <br></br>
                <input name="username" id="username" type="text" onChange={change} value={formData.username}/>
                <br></br>
                <br></br>


                <label for="email">Email</label>
                <br></br>
                <input name="email" id="email" type="email" onChange={change} value={formData.email}/>
                <br></br>
                <br></br>

                <label for="password">Password</label>
                <br></br>
                <input name="password" id="password" type="password" onChange={change} value={formData.password}/>
                <br></br>
                <br></br>

                <label for="confirmPassword">Confirm Password</label>
                <br></br>
                <input name="confirmPassword" id="confirmPassword" type="password" onChange={change} value={formData.confirmPassword}/>
                <br></br>
                <br></br>

                <label for="type">Account Type</label>
                <br></br>
                <select name="type" id="type" onChange={change} value={formData.type}>
                    <option value="">Select an account type</option>
                    <option value="1">Instructor</option>
                    <option value="2">Student</option>
                </select>
                <br></br>
                <br></br>

                <label for="auth">Instructor Auth Code</label>
                <br></br>
                <input name="auth" id="auth" type="text" onChange={change} value={formData.auth}/>
                <br></br>
                <br></br>

                <input type="submit" onSubmit={submit}/>

            </form>

        </div>
    )
}

export default Register