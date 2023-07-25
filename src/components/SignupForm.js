import { Form } from 'react-bootstrap';
import '../css/style.css'
import Facebook from '../images/Facebook Logo.svg';
import Google from '../images/Google Logo.svg';
import Apple from '../images/Apple Logo.svg';
import captcha from '../images/default.png'
import ReactPasswordChecklist from 'react-password-checklist';
import ShowPasswordEye from '../images/show.png'
import { useState } from 'react';
function SignupForm() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCheckList, setShowCheckList] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [matched, setMatched] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return(
        <div className="body-part">
            <div className="box">
                <h2 className="head-text">
                    Create Your Account
                </h2>
                <h3 className="text">
                    Lorem ipsum dolor sit amet, consectetur adipi
                </h3>
                <Form className='Form'>
                    <div className="field">
                        <label htmlFor="Fname">First Name</label>
                        <input type="text" placeholder='John'/>
                    </div>
                    <div className="field">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='johndoe@gmail.com'/>
                    </div>
                    <div className="field" style={{ position: 'relative' }} >
                        <div style={{ display: 'flex', alignItems: 'center', columnGap: "8px" }} >
                            <label htmlFor="Password">Password</label>
                            {
                                isValidPassword &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                    <path d="M17.65 0L6.66667 9.79406L2.35 5.95966L0 8.0552L6.66667 14L20 2.1104L17.65 0Z" fill="#66B855"/>
                                </svg>
                            }
                        </div>
                        <div style={{ position: 'relative' }} >
                            <input style={ isValidPassword ? (confirmPassword && !matched) ? {borderColor: "#EA4335", backgroundColor: "rgba(234, 67, 53, 0.10)", outline: 'none', width: "100%"} : { borderColor: "#66B855", backgroundColor: "rgba(102, 184, 85, 0.10)", width: "100%" } : { width: "100%" }} onFocus={() => setShowCheckList(true)} onBlur={() => setShowCheckList(false)} value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? "text" : "password"} id='Password'/>
                            {
                                showPassword ?
                                <svg onClick={() => setShowPassword(false)} style={{ marginLeft: "-40px", cursor: 'pointer' }}  xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                                    <path d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14.0005 8.34057 13.943 8.67873 13.83 9L10 5.17C10.3213 5.05698 10.6594 4.99949 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.1839 10.0732 19.7969 11.8727 18 13.19L16.58 11.76C17.9629 10.8034 19.0782 9.50906 19.82 8C19.0116 6.34994 17.7564 4.95977 16.1973 3.9875C14.6381 3.01524 12.8375 2.49988 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C2.98844 9.65006 4.24357 11.0402 5.80273 12.0125C7.36189 12.9848 9.16254 13.5001 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C10.0242 10.9254 9.37482 10.6149 8.87997 10.12C8.38512 9.62518 8.07458 8.97584 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z" fill="#B4B4B4"/>
                                </svg>
                                :
                                <img onClick={() => {setShowPassword(true)}} style={{ marginLeft: "-40px", cursor: 'pointer', width: 22 }} src={ShowPasswordEye} alt='' />
                            }
                        </div>
                        {
                            showCheckList &&
                            <div className='password-checklist-container' >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <span style={{ fontWeight: 700 }} >Default password requirements:</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                        <path d="M0.277045 6.41475L6.48285 0.202776C6.55673 0.129043 6.63676 0.0766931 6.72296 0.0457254C6.80915 0.0147577 6.9015 -0.00048034 7 1.12148e-05C7.09851 1.12191e-05 7.19085 0.0154951 7.27705 0.0464628C7.36324 0.0774305 7.44327 0.129535 7.51715 0.202776L13.7414 6.41475C13.9138 6.58679 14 6.80185 14 7.05991C14 7.31797 13.9077 7.53917 13.723 7.7235C13.5383 7.90783 13.3228 8 13.0765 8C12.8303 8 12.6148 7.90783 12.4301 7.7235L7 2.30416L1.56992 7.7235C1.39754 7.89555 1.18501 7.98157 0.932349 7.98157C0.679684 7.98157 0.461249 7.8894 0.277045 7.70507C0.0923487 7.52074 6.34333e-07 7.30568 6.45076e-07 7.05991C6.55819e-07 6.81413 0.0923488 6.59908 0.277045 6.41475Z" fill="#66B855"/>
                                    </svg>
                                </div>
                                <ReactPasswordChecklist
                                    rules={["minLength","lowercase","number","capital"]}
                                    minLength={8}
                                    value={password}
                                    // valueAgain={confirmPassword}
                                    onChange={(isValid) => {setIsValidPassword(isValid)}}
                                    messages={{
                                        minLength: "Must be at least 8 characters long.",
                                        capital: "Must include at least one English uppercase character (A — Z).",
                                        lowercase: "Must include at least one English lowercase character (a — z).",
                                        number: "Must include at least one numeric character (0 — 9).",
                                        // match: "Las contraseñas coinciden.",
                                    }}
                                    style={{ padding: '1rem', fontSize: "14px", fontWeight: 600 }}
                                    iconSize={14}
                                    iconComponents={{
                                        ValidIcon: <div style={{ height: "100%", margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '0.5rem' }} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path d="M7.5 0C3.375 0 0 3.375 0 7.5C0 11.625 3.375 15 7.5 15C11.625 15 15 11.625 15 7.5C15 3.375 11.625 0 7.5 0ZM7.5 13.5C4.1925 13.5 1.5 10.8075 1.5 7.5C1.5 4.1925 4.1925 1.5 7.5 1.5C10.8075 1.5 13.5 4.1925 13.5 7.5C13.5 10.8075 10.8075 13.5 7.5 13.5ZM10.9425 4.185L6 9.1275L4.0575 7.1925L3 8.25L6 11.25L12 5.25L10.9425 4.185Z" fill="#66B855"/>
                                            </svg>
                                        </div>
                                        ,
                                        InvalidIcon: <div style={{ height: "100%", margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '0.5rem' }} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/> </svg>
                                        </div>
                                        }}
                                />
                            </div>
                        }
                    </div>
                    <div className="field">
                    <div style={{ display: 'flex', alignItems: 'center', columnGap: "8px" }} >
                        <label htmlFor="CPassword">Confirm Password</label>
                        {
                            matched &&
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                <path d="M17.65 0L6.66667 9.79406L2.35 5.95966L0 8.0552L6.66667 14L20 2.1104L17.65 0Z" fill="#66B855"/>
                            </svg>
                        }
                        </div>
                        <div style={{ position: 'relative' }} >
                            <input style={ matched ? { borderColor: "#66B855", backgroundColor: "rgba(102, 184, 85, 0.10)", outline: 'none', width: "100%" } : (confirmPassword && !matched) ? {borderColor: "#EA4335", backgroundColor: "rgba(234, 67, 53, 0.10)", outline: 'none', width: "100%"} : { width: "100%" }} value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value); (((event.target.value === password) && (isValidPassword))? setMatched(true) : (matched && setMatched(false)))}} type={ showConfirmPassword ? "text" : "password" }id='CPassword'/>
                            {
                                showConfirmPassword ?
                                <svg onClick={() => setShowConfirmPassword(false)} style={{ marginLeft: "-40px", cursor: 'pointer' }}  xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                                    <path d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14.0005 8.34057 13.943 8.67873 13.83 9L10 5.17C10.3213 5.05698 10.6594 4.99949 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.1839 10.0732 19.7969 11.8727 18 13.19L16.58 11.76C17.9629 10.8034 19.0782 9.50906 19.82 8C19.0116 6.34994 17.7564 4.95977 16.1973 3.9875C14.6381 3.01524 12.8375 2.49988 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C2.98844 9.65006 4.24357 11.0402 5.80273 12.0125C7.36189 12.9848 9.16254 13.5001 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C10.0242 10.9254 9.37482 10.6149 8.87997 10.12C8.38512 9.62518 8.07458 8.97584 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z" fill="#B4B4B4"/>
                                </svg>
                                :
                                <img onClick={() => {setShowConfirmPassword(true)}} style={{ marginLeft: "-40px", cursor: 'pointer', width: 22 }} src={ShowPasswordEye} alt='' />
                            }
                        </div>
                    </div>
                    {
                        (confirmPassword && !matched) &&
                        <div style={{ display: 'flex', alignItems: 'center', columnGap: "0.5rem" }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14C11 13.7167 10.904 13.479 10.712 13.287C10.52 13.095 10.2827 12.9993 10 13C9.71667 13 9.479 13.096 9.287 13.288C9.095 13.48 8.99933 13.7173 9 14C9 14.2833 9.096 14.521 9.288 14.713C9.48 14.905 9.71733 15.0007 10 15ZM10 11C10.2833 11 10.521 10.904 10.713 10.712C10.905 10.52 11.0007 10.2827 11 10V6C11 5.71667 10.904 5.479 10.712 5.287C10.52 5.095 10.2827 4.99933 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6V10C9 10.2833 9.096 10.521 9.288 10.713C9.48 10.905 9.71733 11.0007 10 11ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20Z" fill="#EA4335"/>
                            </svg>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: "#EA4335" }} >Passwords Does Not Match!</span>
                        </div>
                    }
                    <div className="terms">
                        <input type="checkbox" name="terms&con" id="terms&con" className='check' />
                        <label htmlFor="terms&con" className="termsText">I agree to the <a href="#">Terms and conditions</a> and <a href="#">Privacy Policy</a> </label>
                    </div>
                    <div className='captcha-part'>
                        <img src={captcha} alt='captcha' style={{ width: '100%'}}/>
                    </div>
                    <div className="btnPart">
                        <button className='Btn'>Sign Up</button>
                    </div>
                    <div className="devider">
                        <h5 className="text">
                            or sign up with
                        </h5>
                    </div>
                    <div className='signUpOptions'>
                        <button className="facebook">
                            <img src={Facebook} alt="FaceBook" />
                        </button>
                        <button className="google">
                            <img src={Google} alt="Google" />
                        </button>
                        <button className="apple">
                            <img src={Apple} alt="Apple" />
                        </button>
                    </div>
                    <div className="bottomPart">
                        <h5 className="text">
                            Already have an account?
                        </h5>
                        <a href="#" className="link">Login</a>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignupForm;