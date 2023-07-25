import { Form } from 'react-bootstrap';
import '../css/style.css'
import Facebook from '../images/Facebook Logo.svg';
import Google from '../images/Google Logo.svg';
import Apple from '../images/Apple Logo.svg';
import captcha from '../images/default.png'
import ReactPasswordChecklist from 'react-password-checklist';
import { useState } from 'react';
function SignupForm() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCheckList, setShowCheckList] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [matched, setMatched] = useState(false);

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
                        <input style={ isValidPassword ? { borderColor: "#66B855", backgroundColor: "rgba(102, 184, 85, 0.10)" } : {}} onFocus={() => setShowCheckList(true)} onBlur={() => setShowCheckList(false)} value={password} onChange={(event) => setPassword(event.target.value)} type="password" id='Password'/>
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
                                        lowercase: "Must include at least one English uppercase character (A — Z).",
                                        number: "Must include at least one English lowercase character (a — z).",
                                        capital: "Must include at least one numeric character (0 — 9).",
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
                        <input style={ matched ? { borderColor: "#66B855", backgroundColor: "rgba(102, 184, 85, 0.10)" } : {}} value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value); (((event.target.value === password) && (isValidPassword))? setMatched(true) : (matched && setMatched(false)))}} type="password" id='CPassword'/>
                    </div>
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