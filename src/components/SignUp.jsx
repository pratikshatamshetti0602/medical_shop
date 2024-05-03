// SignUp.jsx

import React from 'react';
import googleIcon from '../assets/google.png'; // Import the google.png file
import facebookIcon from '../assets/facebook.png'; // Import the facebook.png file
import companyLogo from '../assets/company_logo.jpeg'; // Import the company logo

const SignUp = () => {
  return (
    <div  className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '20px'  }}>
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>
          <img src={companyLogo} alt="Company Logo" style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }} /> {/* Company Logo */}
          Login
        </header>
        <form action="#">
          <input type="text" placeholder="Enter your email" style={{ height: '32px', backgroundColor: '#cccc', marginBottom: '12px',  borderRadius: '0' }} /> {/* Reduced height, gray background, square border */}
          <input type="password" placeholder="Enter your password" style={{ height: '32px', backgroundColor: '#cccc', marginBottom: '12px',  borderRadius: '0' }} /> {/* Reduced height, gray background, square border */}
          <a href="#">Forgot password?</a>
          <input type="button" className="button" value="Login" style={{ height: '32px', marginBottom: '8px',  borderRadius: '0' }}/>
        </form>
        <div className="signup">
          <span className="signup">Don't have an account?
           <label htmlFor="check">Signup</label>
          </span>
        </div>
      </div>
      <div className="registration form">
        <header>
          <img src={companyLogo} alt="Company Logo" style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }} /> {/* Company Logo */}
          Signup
        </header>
        <form action="#">
          <input type="text" placeholder="Enter your email" style={{ height: '32px', backgroundColor: '#cccc', marginBottom: '12px', borderRadius: '0' }} /> {/* Reduced height, gray background, square border */}
          <input type="password" placeholder="Create a password" style={{ height: '32px', backgroundColor: '#cccc', marginBottom: '12px',  borderRadius: '0' }} /> {/* Reduced height, gray background, square border */}
          <input type="password" placeholder="Confirm your password" style={{ height: '32px', backgroundColor: '#cccc', marginBottom: '12px', borderRadius: '0' }} /> {/* Reduced height, gray background, square border */}
          <input type="button" className="button" value="Signup" style={{ height: '32px',marginBottom: '10px', borderRadius: '0' }} /> {/* Reduced height */}
        </form>
        <div className="signup" style={{ margin: '0px' }}>
          <span className="signup">Already have an account?
           <label htmlFor="check">Login</label>
          </span>
        </div>
      </div>
      
      <div className="or-container" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <hr style={{ borderTop: '1px solid #ccc', width: '40%', display: 'inline-block', margin: '0 5px' }} />
        <span style={{ color: '#777', fontSize: '16px' }}>OR</span>
        <hr style={{ borderTop: '1px solid #ccc', width: '40%', display: 'inline-block', margin: '0 5px' }} />
      </div>
      <div className="social-icons" style={{ alignSelf: 'flex-end', marginTop: '10px' }}>
        <img src={facebookIcon} alt="Facebook Icon" className="social-icon" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
        <img src={googleIcon} alt="Google Icon" className="social-icon" style={{ width: '30px', height: '30px' }} />
      </div>
      
    </div>
  );
};

export default SignUp;
