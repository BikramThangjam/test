import "./ResetPassword.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const ResetPasswordSchema = Yup.object().shape({
   
    new_password: Yup.string()
    .required('Password cannot be blank!')
    .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character."
      )
    .max(12,'Password too long!'),

    confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords do not match')

  });

const ResetPassword = () => {

    const [initialFormValues] = useState({
        new_password: "",
        confirm_password: ""
      })
    
      const handleFormSubmit = async (elements) => {
        alert("Password has been reset successfully!")
      }

    return (
        <div className="signin-form">
            <div className="align">
                <div className="grid">
                    <Formik validationSchema={ResetPasswordSchema}  initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {
                            ({errors, touched})=>(
                                <Form action="#" method="#" className="form login">
                                    <p className="text-center mb-0">FORGOT PASSWORD</p>
                                    <div className="field-row">
                                        <div className="form__field">
                                            <label for="new_password">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                                </svg>
                                            </label>
                                            <Field id="new_password" type="password" name="new_password" className="form__input" placeholder="Enter the new password.." required/>                    
                                        </div>
                                        <div className="error ms-3">{errors.new_password && touched.new_password ? errors.new_password : null}</div>
                                    </div>
                                    <div className="field-row">
                                        <div className="form__field">
                                            <label for="confirm_password">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                                </svg>
                                            </label>
                                            <Field id="confirm_password" type="text" name="confirm_password" className="form__input" placeholder="Confirm new password.." required/>  
                                                    
                                        </div>
                                        <div className="error ms-3">{errors.confirm_password && touched.confirm_password ? errors.confirm_password : null}</div>
                                    </div>
                               
                                    <div className="form__field">
                                        <input type="submit" value="Reset Password"/>
                                    </div>
                                </Form>
                            )                                                        
                        }
                    </Formik>
                </div>     
            </div>
        </div >

    )
}

export default ResetPassword;