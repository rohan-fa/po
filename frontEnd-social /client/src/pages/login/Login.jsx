import { useRef } from 'react';
import './login.css'

function Login() {
    const email = useRef();
    const password = useRef();  //we could have used useState but each time it will rerender this component, so to prevent that useRef 

    const handleClick = (e) => {
        //when we click in this page it will refresh, so (e) is required. 
        e.preventDefault();         //how we are going to send data? lets have a hook
        console.log(email.current.value);
    }

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SnowSocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on SnowSocial.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Email' type="email" className='loginInput' required ref={email}/>
                    <input placeholder='Password' type="password" className='loginInput' minLength="6" required ref={password}/>
                    <button className='loginButton'>Log In</button>
                    <span className="loginForgot">forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
