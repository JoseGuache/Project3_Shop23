import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        position: 'relative',  // Position relative for video and content to be positioned absolutely
        display: 'flex',  // Flexbox to center the content
        justifyContent: 'center',  // Horizontal centering
        alignItems: 'center',  // Vertical centering
        flexDirection: 'column',  // Stack elements vertically
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
          position: 'absolute', // Video stays behind everything
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      
      {/* Link to Login */}
      <Link to="/login" style={{ zIndex: 1, marginBottom: '20px', color: '#ff7d1a', fontSize: '60px', fontFamily:'ini'}}>
        ← Go to Login
      </Link>

      {/* Form */}
      <div 
        style={{
          position: 'relative',  // Keep the form in front of the video
          zIndex: 1, // Ensure the form is in front of the video
          backgroundColor: 'rgba(255, 125, 26, 0.7)', // Optional: add background to form for readability
          padding: '2rem',  // Space inside the form
          borderRadius: '20px',  // Optional: rounded corners
          width: '400px',  // Set form width
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Signup</h2>
        <form onSubmit={handleFormSubmit} style={{alignContent: 'center'}} >
          <div className="flex-row space-between my-2"  >
            <label htmlFor="firstName" >First Name:</label>
            <input 
              placeholder="First"
              name="firstName"
              type="text"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="text"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
