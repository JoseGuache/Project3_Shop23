import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div 
  style={{
    height: '100vh',  // Ensure the parent div takes the full height of the viewport
    position: 'relative',  // Position relative for video and main to be positioned absolutely
  }} 
  className="bg-body-tertiary"
>
  <video  
    src="/images/Final-Video-Login.mp4"
    autoPlay
    loop
    muted
    playsInline
    onError={(e) => {
      console.error("Video failed to load:", e);
      alert("Video could not be loaded.");
    }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
       // Keep video behind the form
    }}
  />

  <main
    className="form-signin w-100 m-auto"
    style={{
      position: 'absolute',  // Position main absolutely relative to the parent div
      top: '50%',  // Move main to vertical center
      left: '50%',  // Move main to horizontal center
      transform: 'translate(-50%, -50%)',  // Adjust for exact centering
      zIndex: 1, // Ensure the form stays on top of the video
      width: '400px', // Adjust the width of the form if needed
      padding: '2rem', // Optional, add padding to the form
      backgroundColor: 'rgba(255, 255, 255, 0.44)', // Optional, for better readability against the video
      borderRadius: '10px', // Optional, rounded corners for the form
      display: 'flex',  // Flexbox to center content inside main
      flexDirection: 'column',  // Stack elements vertically
      justifyContent: 'center',  // Center content vertically
      alignItems: 'center',  // Center content horizontally
    }}
  >
    <form onSubmit={handleFormSubmit} style={{ width: '50%' }}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
        <input 
          type="email" 
          className="form-control" 
          id="floatingInput" 
          placeholder="name@example.com" 
          onChange={handleChange}
          value={formState.email}
          name='email'
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating">
        <input 
          type="password" 
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password" 
          onChange={handleChange}
          value={formState.password}
          name='password'
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-check text-start my-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="remember-me" 
          id="flexCheckDefault" 
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" style={{ backgroundColor: '#ff7d1a', color: 'white' }} type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-body-secondary">© Shop 23 </p>
    </form>
  </main>
</div>

  );
}

export default Login;
