import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function Header(insideRegister) {

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 const [isMenuOpen, setIsMenuOpen] = useState(false);


 const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for signup

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", email, password);
      // Your login logic
    } else {
      console.log("Signing up with:", name, email, password);
      // Your signup logic
    }
  };

  

 return (
<>
 {/* <div class="header">
        <div class="left-section">
           <Link to={'./Story'} className='nav-link ms-5 '>Our story</Link>
<Link  to={'Product'} className='nav-link ms-5 '>Shop now</Link>

        </div>
<Link className='nav-head' to={'./'}>         <div class="center-title">RUBBER</div>
</Link>    
    <div class="right-section">
            <Link to={'./Cart'} className='nav-link me-5'><i class="fa-solid fa-cart-shopping subnav"></i></Link>
<Link to={'./Login'} className='nav-link me-5'><i class="fa-solid fa-user subnav"></i></Link>
        </div>
    </div> */}


     {/* <header className="header">
      <div className="logo">
        <Link to="/" className="nav-head">
          <div className="center-title">RUBBER</div>
        </Link>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/story" className="nav-link">Our Story</Link>
        <Link to="/product" className="nav-link">Shop Now</Link>
        <Link to="/cart" className="nav-link"><i className="fa-solid fa-cart-shopping subnav"></i></Link>
        <Link to="/login" className="nav-link"><i className="fa-solid fa-user subnav"></i></Link>
      </nav>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>
    </header> */}



    {/* ------------ */}


     <header className="header">
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/story" className="nav-link ms-5" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
        <Link to="/product" className="nav-link ms-3" onClick={() => setIsMenuOpen(false)}>Shop Now</Link>
      </nav>

      <div className="center-title">
        <Link to="/" className="nav-head">RUBBER</Link>
      </div>
 <nav className={`nav-links right-icons ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/cart" className="nav-link me-3   " onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-cart-shopping"> <span class="badge text-bg-secondary">4</span></i></Link>
        <Link onClick={handleShow}  to={handleShow} className="nav-link me-5 "><i className="fa-solid fa-user"></i></Link>
      </nav>

    
    </header>


 <Modal className='modal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='login-header' closeButton>
        </Modal.Header>
        <Modal.Body>

 {/* <div className="auth-container">
      <h1 className="auth-title">{isLogin ? "Sign In" : "Create Account"}</h1>
      <p className="auth-subtitle">
        {isLogin
          ? "Welcome back! Login to continue."
          : "Join us! Enter your details below."}
      </p>

      {!isLogin && (
        <input className="auth-input" type="text" placeholder="Full Name" />
      )}
      
      <input  className="auth-input" type="email" placeholder="Email" />
      <input className="auth-input" type="password" placeholder="Password" />

      <button className="auth-button">
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="auth-footer">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <span onClick={() => setIsLogin(false)} className="auth-link">
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span onClick={() => setIsLogin(true)} className="auth-link">
              Login
            </span>
          </>
        )}
      </p>
    </div> */}



     <div className="login-container">
      <h2 className="login-title">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
      <p className="login-subtitle">
        {isLogin ? 'Welcome back! Login to continue.' : 'Join us! Sign up to get started.'}
      </p>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="login-input-group">
            <span className="login-icon">👤</span>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="login-input-group">
          <span className="login-icon">📧</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input-group">
          <span className="login-icon">🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="login-footer">
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <span
              className="login-toggle"
              onClick={() => setIsLogin(false)}
              style={{ color: '#7a5d3a', cursor: 'pointer' }}
            >
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span
              className="login-toggle"
              onClick={() => setIsLogin(true)}
              style={{ color: '#7a5d3a', cursor: 'pointer' }}
            >
              Sign In
            </span>
          </>
        )}
      </p>
    </div>


        </Modal.Body>

      </Modal>




</>  )
}

export default Header