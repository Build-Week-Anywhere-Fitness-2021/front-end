//STYLING IMPORTS
import "../App.css";

//TECH IMPORTS 
import { React, useState, useEffect }  from "react";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from "../Helpers/axiosWithAuth";

const Input = ({id, type, label, value, onChange, errors}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <br></br>
            <input name={id} id={id} type={type} onChange={onChange} value={value}/>
            <p style={{color: "red"}}>{errors}</p>
            <br></br>
        </div>
    )
}

function Register() {

    const history=useHistory();

    const defaultData = {
        username: "",
        email: "",
        password: "",
        // confirmPassword: "",
        role: "",
        // auth: ""
    }

    const defaultErrors = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        auth: ""
    }

    const [formData, setFormData] = useState(defaultData)
    const [formErrors, setFormErrors] = useState(defaultErrors)
    const [submitDisabled, setSubmitDisabled] = useState(false)
    const [authRequired, setAuthRequired] = useState(false)

    const schema = yup.object().shape({
        username: yup
            .string()
            .required("Please choose a username")
            .min(5, "Usernames must be at least 5 characters long"),
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
        role: yup
            .string()
            .oneOf(["1","2"], "Please choose an account type")
            .required("Please choose an account type"),
        auth: yup
            .string()
            .concat( authRequired ? yup.string().required("You need an auth code to create an instructor account") : null)
    })

    const updateErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ""}))
            .catch((error) => setFormErrors({...formErrors, [name]: error.errors[0]}))
    }

    const inputChange = event => {
        const { value, name } = event.target
        updateErrors(name, value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const typeChange = event => {
        const { value, name } = event.target
        updateAuth(value)
        updateErrors(name, value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const updateAuth = (value) => {
        if (value === "instructor") {
            setAuthRequired(true)
        } else {
            setAuthRequired(false)
        }
    }

    useEffect(() => {
        schema.isValid(formData).then(validSchema => setSubmitDisabled(!validSchema))
    }, [formData])



    //>>>>>>>>>>>>>>>>>>>>>SUBMIT LOGIC HERE <<<<<<<<<<<<<<<<<<<< 

    const submit = event => {
        event.preventDefault()
        console.log(formData)
        axiosWithAuth()
        .post("/api/auth/register", formData)
        .then((res)=>{
            console.log("CREATE ACCOUNT SUBMISSION SUCCESS", res);
            return res.config.data.role==="student" ? history.push("/client-onboarding") : history.push("/instructor-onboarding")
        })
        .catch((err)=>{
            console.log("FAILED TO SUBMIT REGISTRATION", err);
        })
        //Temporary clearing after sumbission
        // setFormData(defaultData)
    }
    //>>>>>>>>>>>>>>>>>>>>>SUBMIT LOGIC HERE <<<<<<<<<<<<<<<<<<<< 
    
    return (
        <div className="registerPageMainDiv">
            <h2>Create your Anywhere Fitness account</h2>
            <Link to="/">Home</Link>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <form onSubmit={submit}>
                <label htmlFor="role">Account Role</label>
                <br></br>
                <select name="role" id="role" onChange={typeChange} value={formData.role}>
                    <option value="">Select an account type</option>
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                </select>
                <p style={{color: "red"}}>{formErrors.type}</p>
                <br></br>

                <Input 
                    id="username" 
                    type="text" 
                    label="Username" 
                    value={formData.username} 
                    onChange={inputChange} 
                    errors={formErrors.username}/>
                <Input 
                    id="email" 
                    type="email" 
                    label="Email" 
                    value={formData.email} 
                    onChange={inputChange} 
                    errors={formErrors.email}/>
                <Input 
                    id="password" 
                    type="password" 
                    label="Password" 
                    value={formData.password} 
                    onChange={inputChange} 
                    errors={formErrors.password}/>
                {/* <Input 
                    id="confirmPassword" 
                    type="password" 
                    label="Confirm Password" 
                    value={formData.confirmPassword} 
                    onChange={inputChange} 
                    errors={formErrors.confirmPassword}/> */}
                {/* {authRequired && <Input 
                    id="auth" 
                    type="text" 
                    label="Auth Code" 
                    value={formData.auth} 
                    onChange={inputChange} 
                    errors={formErrors.auth}/>}     */}
                <input type="submit" value="Create Account"/>
            </form>

        </div>
    )
}
//took disabled={disabled} out of last input above 
export default Register