import { Form } from 'react-bootstrap';
import '../css/style.css'
import Facebook from '../images/Facebook Logo.svg';
import Google from '../images/Google Logo.svg';
import Apple from '../images/Apple Logo.svg';
import captcha from '../images/default.png'
function SignupForm() {
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
                    <div className="field">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id='Password'/>
                    </div>
                    <div className="field">
                        <label htmlFor="CPassword">Confirm Password</label>
                        <input type="password" id='CPassword'/>
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