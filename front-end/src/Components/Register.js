import { React, useState, useEffect }  from "react";
import * as yup from "yup";


function Register() {

    const defaultData = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        type: "",
        auth: ""
    }

    const defaultErrors = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        type: "",
        auth: ""
    }

    

    

    const [formData, setFormData] = useState(defaultData)
    const [formErrors, setFormErrors] = useState(defaultErrors)
    const [submitDisabled, setSubmitDisabled] = useState(false)
    const [authRequired, setAuthRequired] = useState(false)

    const authReqSchema = yup.string().required("You need an auth code to create an instructor account")

    const schema = yup.object().shape({
        username: yup
            .string()
            .required("Please choose a username")
            .min(2, "Usernames must be at least 2 characters long"),
        email: yup
            .string()
            .required("Please enter an email")
            .email("Please enter a valid email address"),
        password: yup
            .string()
            .required("Please choose a password")
            .min(8, "Passwords must be at least 8 characters long"),
        confirmPassword: yup
            .string()
            .required("Please confirm the password")
            .oneOf([formData.password],"The passwords don't match"),
        type: yup
            .string()
            .oneOf(["1","2"], "Please choose an account type")
            .required("Please choose an account type"),
        auth: yup
            .string()
            .concat( authRequired ? authReqSchema : null)
    })

    const updateErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ""}))
            // .catch((error) => console.log(error.errors[0]))
            .catch((error) => setFormErrors({...formErrors, [name]: error.errors[0]}))
    }

    const change = event => {
        const { value, name } = event.target
        if (name === "type") {updateAuth(value)}
        updateErrors(name, value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const updateAuth = (value) => {
        if (value === "1") {
            setAuthRequired(true)
            console.log("Auth value TRUE")
        } else {
            setAuthRequired(false)
            console.log("Auth value FALSE")
        }
    }

    const submit = event => {
        event.preventDefault()
        //Do something with the data
        console.log(formData)
        //Temporary clear
        setFormData(defaultData)
    }

    useEffect(() => {
        schema.isValid(formData).then(validSchema => setSubmitDisabled(!validSchema))
    }, [formData])

    // useEffect(() => {
    //     if (authRequired) {
    //         setSchema(instructorSchema)
    //     } else {
    //         setSchema(studentSchema)
    //     }
    // }, [authRequired])

    // const Field = (id, type, label) => {
    //     return (
    //         <div>
    //             <label for={id}>Username</label>
    //             <br></br>
    //             <input name={id} id={id} type={type} onChange={change} value={formData.id}/>
    //             <br></br>
    //             <br></br>
    //         </div>
    //     )
    // }

    return (
        <div>
            <form>
                <label for="username">Username</label>
                <br></br>
                <input name="username" id="username" type="text" onChange={change} value={formData.username}/>
                <p style={{color: "red"}}>{formErrors.username}</p>
                <br></br>

                {/* <Field id="username" type="text" label="Username"> */}


                <label for="email">Email</label>
                <br></br>
                <input name="email" id="email" type="email" onChange={change} value={formData.email}/>
                <p style={{color: "red"}}>{formErrors.email}</p>
                <br></br>

                <label for="password">Password</label>
                <br></br>
                <input name="password" id="password" type="password" onChange={change} value={formData.password}/>
                <p style={{color: "red"}}>{formErrors.password}</p>
                <br></br>

                <label for="confirmPassword">Confirm Password</label>
                <br></br>
                <input name="confirmPassword" id="confirmPassword" type="password" onChange={change} value={formData.confirmPassword}/>
                <p style={{color: "red"}}>{formErrors.confirmPassword}</p>
                <br></br>

                <label for="type">Account Type</label>
                <br></br>
                <select name="type" id="type" onChange={change} value={formData.type}>
                    <option value="">Select an account type</option>
                    <option value="1">Instructor</option>
                    <option value="2">Student</option>
                </select>
                <p style={{color: "red"}}>{formErrors.type}</p>
                <br></br>
                
                <div style={{ display: authRequired ? "block" : "none" }}>
                    <label for="auth">Auth Code (only for instructors)</label>
                    <br></br>
                    <input name="auth" id="auth" type="text" onChange={change} value={formData.auth}/>
                    <p style={{color: "red"}}>{formErrors.auth}</p>
                    <br></br>
                </div>
                

                <input type="submit" onSubmit={submit} disabled={submitDisabled}/>

            </form>

        </div>
    )
}

export default Register