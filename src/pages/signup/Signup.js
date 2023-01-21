import { Link } from "react-router-dom";
import "./Signup.css"
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({

    username: Yup.string()
            .required('Username cannot be blank!')
            .matches(/^[A-Za-z][A-Za-z0-9_]+$/, "Invalid username.")
            .min(3,'Must be atleast 3 characters long.')
            .max(25,'Username too long!'),

    email: Yup.string()
            .email()
            .required('Email cannot be blank!'),
  
    password: Yup.string()
            .required('Password cannot be blank!')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character."
            )
            .max(12,'Password too long!'),

    confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords do not match'),

    isChecked: Yup.bool()
            .oneOf([true], 'You need to accept the terms & conditions'),

  });

const Signup = ()=>{

    const [initialFormValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isChecked: false
      })

      const handleFormSubmit = async (elements) => {
        alert("Sign up Successfull!")
      }

    return (
        <div className="signup-form">
            <div className="align">
                <div className="grid">
                    <Formik validationSchema={SignupSchema}  initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {
                            ({errors,touched})=>(
                                <Form action="#" method="#" className="form login">
                                    <div>
                                        <div className="form__field">
                                            <label for="login__username">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                </svg>
                                            </label>
                                            <Field id="login__username" type="text" name="username" className="form__Field" placeholder="Username" required/>
                                        </div>
                                        <div className="error ms-3">{errors.username && touched.username ? errors.username : null}</div>
                                    </div>
                                    <div>
                                        <div className="form__field">
                                            <label for="login__email">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                                </svg>
                                            </label>
                                            <Field id="login__email" type="email" name="email" className="form__Field" placeholder="Email" required/>
                                        </div>
                                        <div className="error ms-3">{errors.email && touched.email ? errors.email : null}</div>
                                    </div>
                                    <div>
                                        <div className="form__field">
                                            <label for="login__password">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                                </svg>
                                            </label>
                                            <Field id="login__password" type="password" name="password" className="form__Field" placeholder="Password" required/>
                                        </div>
                                        <div className="error ms-3">{errors.password && touched.password ? errors.password : null}</div>
                                    </div>
                                    <div>
                                        <div className="form__field">
                                            <label for="login__confirmPassword">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                                </svg>
                                            </label>
                                            <Field id="login__confirmPassword" type="password" name="confirmPassword" className="form__Field" placeholder="Confirm Password" required/>
                                        </div>
                                        <div className="error ms-3">{errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}</div>
                                    </div>
                                    <div>
                                        <div className="form__field">
                                            <Field type="checkbox" name="isChecked" className="me-2"/>
                                            <span>I agree to the terms & conditions</span>
                                        </div>
                                        {errors.isChecked && <div className="error ms-3">{errors.isChecked}</div>}
                                        
                                    </div>
                                   
                                    <div className="form__field">
                                        <Field type="submit" value="Sign Up"/>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                    
                    <p className="text--center">Already have an account? <Link to="/signin">Sign in now</Link> </p>
                </div>     
            </div>
        </div >
    )
}

export default Signup;