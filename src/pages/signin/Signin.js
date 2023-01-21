import "./Signin.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const SigninSchema = Yup.object().shape({

    username: Yup.string()
    .required('Username cannot be blank!')
    .matches(/^[A-Za-z][A-Za-z0-9_]+$/, "Invalid username.")
    .min(3,'Must be atleast 3 characters long.')
    .max(25,'Username too long!'),
  
    password: Yup.string()
    .required('Password cannot be blank!')
    .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character."
      )
    .max(12,'Password too long!')

  });

const Signin = () => {

    const [initialFormValues] = useState({
        firstname: "",
        lastname: "",
        useremail: "",
        userpassword: ""
      })
    
      const handleFormSubmit = async (elements) => {
        alert("Sign in Successfull!")
      }

    return (
        <div className="signin-form">
            <div className="align">
                <div className="grid">
                    <Formik validationSchema={SigninSchema}  initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {
                            ({errors, touched})=>(
                                <Form action="#" method="#" className="form login">
                                    <div className="field-row">
                                        <div className="form__field">
                                            <label for="login__username">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                </svg>
                                            </label>
                                            <Field id="login__username" type="text" name="username" className="form__input field_username" placeholder="Username" required/>                    
                                        </div>
                                        <div className="error ms-3">{errors.username && touched.username ? errors.username : null}</div>
                                    </div>
                                    <div className="field-row">
                                        <div className="form__field">
                                            <label for="login__password">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                                </svg>
                                            </label>
                                            <Field id="login__password" type="password" name="password" className="form__input field_password" placeholder="Password" required/>  
                                                    
                                        </div>
                                        <div className="error ms-3">{errors.password && touched.password ? errors.password : null}</div>
                                    </div>
                                    <Link to="/reset_password">
                                    <p className="ms-3 mt-0 mb-0">Forgot Password?</p>
                                    </Link>
                                    
                                    <div className="form__field">
                                        <input type="submit" value="Sign In"/>
                                    </div>
                                </Form>
                            )                                                        
                        }
                    </Formik>
                    <p className="text--center">Don't have an account? <Link to="/signup">Sign up now</Link></p>
                </div>     
            </div>
        </div >

    )
}

export default Signin;