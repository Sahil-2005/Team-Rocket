// import React, { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import './signup.css'; // Import the CSS file
// import { Navigate } from 'react-router-dom';

// function Signup () {
//   const [user, setUser] = useState(null); // Initialize user to null
//   const [profile, setProfile] = useState(null); // Initialize profile to null
//   const [email, setEmail] = useState(''); // Store email address for sign-up
//   const [isEmailSignUp, setIsEmailSignUp] = useState(false); // Toggle between Google login and Email sign-up
//   const [error, setError] = useState(''); // Store error messages

//   // Handle Google Login
//   const loginWithGoogle = useGoogleLogin({
//     onSuccess: (codeResponse) => {
//       setUser(codeResponse); // Set user after successful login
//     },
//     onError: (error) => {
//       console.log('Login Failed:', error);
//     },
//   });

//   // Handle Email Sign-Up form submission
//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       setError('Email is required.');
//     } else {
//       try {
//         setError('');
//         // Make an API call to register the email (Replace with your backend URL)
//         const response = await axios.post('http://localhost:5000/api/register', { email });
//         alert(response.data || 'Verification email sent. Please check your inbox.');
//       } catch (err) {
//         console.error(err);
//         setError('Failed to send verification email. Try again.');
//       }
//     }
//   }

//   useEffect(() => {
//     if (user) {
//       axios
//         .get('https://www.googleapis.com/oauth2/v2/userinfo', {
//           headers: {
//             Authorization: `Bearer ${user.access_token}`,
//             Accept: 'application/json',
//           },
//         })
//         .then(async (res) => {
//           setProfile(res.data);
  
//           // Send user data to backend
//           await axios.post('http://localhost:5000/api/auth/google', {
//             googleId: res.data.id,  // Unique Google ID
//             name: res.data.name,
//             email: res.data.email,
//             picture: res.data.picture,
//           });
//           localStorage.setItem("user", profile.name);
//         })
//         .catch((err) => {
//           console.log('Error fetching profile:', err);
//           setError('Failed to fetch profile data.');
//         });
//     }
//   }, [user]);
  



//   useEffect(() => {
//     if (user) {
//       axios
//         .get('https://www.googleapis.com/oauth2/v2/userinfo', {
//           headers: {
//             Authorization: `Bearer ${user.access_token}`,
//             Accept: 'application/json',
//           },
//         })
//         .then(async (res) => {
//           setProfile(res.data);
//           localStorage.setItem("user", JSON.stringify(res.data)); // Store user in localStorage
  
//           // Send user data to backend
//           await axios.post('http://localhost:5000/api/auth/google', {
//             googleId: res.data.id,
//             name: res.data.name,
//             email: res.data.email,
//             picture: res.data.picture,
//           });

//           Navigate("/start-project");
//         })
//         .catch((err) => {
//           console.log('Error fetching profile:', err);
//           setError('Failed to fetch profile data.');
//         });
//     }
//   }, [user]);

  
//   // Log out function
//   const logOut = () => {
//     googleLogout();
//     setProfile(null); // Reset profile state after logout
//     setUser(null); // Reset user state after logout
//     localStorage.clear();
//   };

//   return (
//     <div className="container">
//       <div className="welcome-message">
//         <h2>Welcome!</h2>
//         <p>Login to OpenCas to continue.</p>
//       </div>

//       {profile ? (
//         // Display user info after successful login
//         <div className="profile-info">
//           <img src={profile.picture} alt="User" />
//           <p>Name: {profile.name}</p>
//           <p>Email: {profile.email}</p>
//           <button onClick={logOut}>Log out</button>
//         </div>
//       ) : isEmailSignUp ? (
//         // Show email sign-up form
//         <div className="email-signup-section">
//           <form onSubmit={handleEmailSubmit} className="signup-form">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//               required
//             />
//             {error && <p className="error-message">{error}</p>}
//             <button type="submit" className="continue-btn">Continue</button>
//           </form>
//           {/* <p>
//             Or <span onClick={() => setIsEmailSignUp(false)} className="toggle-signup">sign in with Google</span>
//           </p> */}
//         </div>
//       ) : (
//         // Show Google login button
//         <div className="login-section">
//           <button onClick={loginWithGoogle} className="continue-btn">
//             Sign in with Google 🚀
//           </button>
//           {error && <p className="error-message">{error}</p>}
//           {/* <p>
//             Or <span onClick={() => setIsEmailSignUp(true)} className="toggle-signup">sign up with Email</span>
//           </p> */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;



import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then(async (res) => {
          setProfile(res.data);
          localStorage.setItem("user", JSON.stringify(res.data)); // Store user info

          // Send user data to backend
          await axios.post('http://localhost:5000/api/auth/google', {
            googleId: res.data.id,
            name: res.data.name,
            email: res.data.email,
            picture: res.data.picture,
          });

          // navigate("/start-project");
          navigate("/");
        })
        .catch((err) => {
          console.log('Error fetching profile:', err);
          setError('Failed to fetch profile data.');
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem("user"); // Clear user info
  };

  return (

    




    <div className="signin-container">
      <div className="welcome-box">
        <h2>Welcome!</h2>
        <p>Login to OpenCas to continue.</p>
      </div>
      {profile ? (
        <div className="profile-info">
          <img src={profile.picture} alt="User" />
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Signup;
