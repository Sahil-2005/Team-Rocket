// import React, { useState } from "react";

// const StartProject = () => {
//   const [formData, setFormData] = useState({
//     region: "",
//     zipcode: "",
//     reason: "",
//     instagramHandle: "",
//     description: "",
//     files: [],
//     totalMoney: "",
//     deadline: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       files: e.target.files,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataObj = new FormData();
//     formDataObj.append("region", formData.region);
//     formDataObj.append("zipcode", formData.zipcode);
//     formDataObj.append("reason", formData.reason);
//     formDataObj.append("instagramHandle", formData.instagramHandle);
//     formDataObj.append("description", formData.description);
//     formDataObj.append("totalMoney", formData.totalMoney);
//     formDataObj.append("deadline", formData.deadline);

//     for (const file of formData.files) {
//       formDataObj.append("files", file);
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/projects", {
//         method: "POST",
//         body: formDataObj,
//       });

//       if (response.ok) {
//         alert("Fundraising campaign started successfully!");
//         setFormData({
//           region: "",
//           zipcode: "",
//           reason: "",
//           instagramHandle: "",
//           description: "",
//           files: [],
//           totalMoney: "",
//           deadline: "",
//         });
//       } else {
//         console.error("Failed to submit the form.");
//         alert("Failed to start the campaign. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="start-funding-container">
//       <form className="start-funding-form" onSubmit={handleSubmit}>
//         <h2>Start Your Fundraising Campaign</h2>

//         {/* Region */}
//         <label>Region</label>
//         <select
//           name="region"
//           value={formData.region}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a Region</option>
//           <option value="India">India</option>
//           <option value="North Africa">North Africa</option>
//           <option value="USA">USA</option>
//           <option value="Canada">Canada</option>
//         </select>

//         {/* Zipcode */}
//         <label>Zipcode</label>
//         <input
//           type="text"
//           name="zipcode"
//           value={formData.zipcode}
//           onChange={handleChange}
//           required
//         />

//         {/* Reason for Fundraising */}
//         <label>Reason for Fundraising</label>
//         <select
//           name="reason"
//           value={formData.reason}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a Reason</option>
//           <option value="Education">Education</option>
//           <option value="Medical">Medical</option>
//           <option value="Charity">Charity</option>
//           <option value="Business">Business</option>
//           <option value="Other">Other</option>
//         </select>

//         {/* Instagram Handle */}
//         <label>Social Media Handle</label>
//         <input
//           type="text"
//           name="instagramHandle"
//           value={formData.instagramHandle}
//           onChange={handleChange}
//           placeholder="@username"
//           required
//         />

//         {/* Description of the Issue */}
//         <div className="textarea-container">
//           <label>Description of the Issue</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Describe the issue and how the funds will help..."
//             required
//           />
//         </div>

//         {/* Total Money Required */}
//         <label>Total Money Required</label>
//         <input
//           type="number"
//           name="totalMoney"
//           value={formData.totalMoney}
//           onChange={handleChange}
//           placeholder="Enter total amount"
//           required
//         />

//         {/* Deadline */}
//         <label>Deadline</label>
//         <input
//           type="date"
//           name="deadline"
//           value={formData.deadline}
//           onChange={handleChange}
//           required
//         />

//         {/* Image/Video Upload */}
//         <div className="file-upload-container">
//           <label>Upload Images/Videos</label>
//           <input
//             type="file"
//             name="files"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleFileChange}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button className="submit-btn" type="submit">
//           Start Fundraising
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StartProject;







// // import React, { useState, useEffect } from "react";

// // const StartProject = () => {
// //   const [formData, setFormData] = useState({
// //     region: "",
// //     zipcode: "",
// //     reason: "",
// //     instagramHandle: "",
// //     description: "",
// //     files: [],
// //     totalMoney: "",
// //     deadline: "",
// //     userEmail: "", // Add user email
// //     userName: "", // Add user name
// //   });

// //   useEffect(() => {
// //     // Retrieve stored user info (assuming it's stored in localStorage after login)
// //     const user = JSON.parse(localStorage.getItem("user"));
// //     if (user) {
// //       setFormData((prevData) => ({
// //         ...prevData,
// //         userEmail: user.email,
// //         userName: user.name,
// //       }));
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleFileChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       files: e.target.files,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formDataObj = new FormData();
// //     formDataObj.append("region", formData.region);
// //     formDataObj.append("zipcode", formData.zipcode);
// //     formDataObj.append("reason", formData.reason);
// //     formDataObj.append("instagramHandle", formData.instagramHandle);
// //     formDataObj.append("description", formData.description);
// //     formDataObj.append("totalMoney", formData.totalMoney);
// //     formDataObj.append("deadline", formData.deadline);
// //     formDataObj.append("userEmail", formData.userEmail);
// //     formDataObj.append("userName", formData.userName);

// //     for (const file of formData.files) {
// //       formDataObj.append("files", file);
// //     }

// //     try {
// //       const response = await fetch("http://localhost:5000/api/projects", {
// //         method: "POST",
// //         body: formDataObj,
// //       });

// //       if (response.ok) {
// //         alert("Fundraising campaign started successfully!");
// //         setFormData({
// //           region: "",
// //           zipcode: "",
// //           reason: "",
// //           instagramHandle: "",
// //           description: "",
// //           files: [],
// //           totalMoney: "",
// //           deadline: "",
// //           userEmail: formData.userEmail,
// //           userName: formData.userName,
// //         });
// //       } else {
// //         console.error("Failed to submit the form.");
// //         alert("Failed to start the campaign. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting the form:", error);
// //       alert("An error occurred. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="start-funding-container">
// //       <form className="start-funding-form" onSubmit={handleSubmit}>
// //         <h2>Start Your Fundraising Campaign</h2>

// //         <label>Region</label>
// //         <select name="region" value={formData.region} onChange={handleChange} required>
// //           <option value="">Select a Region</option>
// //           <option value="India">India</option>
// //           <option value="North Africa">North Africa</option>
// //           <option value="USA">USA</option>
// //           <option value="Canada">Canada</option>
// //         </select>

// //         <label>Zipcode</label>
// //         <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required />

// //         <label>Reason for Fundraising</label>
// //         <select name="reason" value={formData.reason} onChange={handleChange} required>
// //           <option value="">Select a Reason</option>
// //           <option value="Education">Education</option>
// //           <option value="Medical">Medical</option>
// //           <option value="Charity">Charity</option>
// //           <option value="Business">Business</option>
// //           <option value="Other">Other</option>
// //         </select>

// //         <label>Social Media Handle</label>
// //         <input
// //           type="text"
// //           name="instagramHandle"
// //           value={formData.instagramHandle}
// //           onChange={handleChange}
// //           placeholder="@username"
// //           required
// //         />

// //         <div className="textarea-container">
// //           <label>Description of the Issue</label>
// //           <textarea
// //             name="description"
// //             value={formData.description}
// //             onChange={handleChange}
// //             placeholder="Describe the issue and how the funds will help..."
// //             required
// //           />
// //         </div>

// //         <label>Total Money Required</label>
// //         <input type="number" name="totalMoney" value={formData.totalMoney} onChange={handleChange} required />

// //         <label>Deadline</label>
// //         <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />

// //         <div className="file-upload-container">
// //           <label>Upload Images/Videos</label>
// //           <input type="file" name="files" accept="image/*,video/*" multiple onChange={handleFileChange} required />
// //         </div>

// //         <button className="submit-btn" type="submit">
// //           Start Fundraising
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default StartProject;






// // import React, { useState, useEffect } from "react";
// // import { redirect, useNavigate } from "react-router-dom";

// // const StartProject = () => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState(null);

// //   // Fetch user details from local storage (set during Google login)
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     if (!storedUser) {
// //       navigate("/signup"); // Redirect to signup if no user is found
// //     } else {
// //       setUser(storedUser);
// //     }
// //   }, [navigate]);

// //   const [formData, setFormData] = useState({
// //     region: "",
// //     zipcode: "",
// //     reason: "",
// //     instagramHandle: "",
// //     description: "",
// //     files: [],
// //     totalMoney: "",
// //     deadline: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleFileChange = (e) => {
// //     setFormData({ ...formData, files: e.target.files });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formDataObj = new FormData();
// //     formDataObj.append("region", formData.region);
// //     formDataObj.append("zipcode", formData.zipcode);
// //     formDataObj.append("reason", formData.reason);
// //     formDataObj.append("instagramHandle", formData.instagramHandle);
// //     formDataObj.append("description", formData.description);
// //     formDataObj.append("totalMoney", formData.totalMoney);
// //     formDataObj.append("deadline", formData.deadline);

// //     for (const file of formData.files) {
// //       formDataObj.append("files", file);
// //     }

// //     // Include user email in the request
// //     formDataObj.append("userEmail", user.email); 
// //     formDataObj.append("userName", user.name);

// //     try {
// //       const response = await fetch("http://localhost:5000/api/projects", {
// //         method: "POST",
// //         body: formDataObj,
// //       });

// //       if (response.ok) {
// //         alert("Fundraising campaign started successfully!");
// //         setFormData({
// //           region: "",
// //           zipcode: "",
// //           reason: "",
// //           instagramHandle: "",
// //           description: "",
// //           files: [],
// //           totalMoney: "",
// //           deadline: "",
// //         });
// //       } else {
// //         console.error("Failed to submit the form.");
// //         alert("Failed to start the campaign. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting the form:", error);
// //       alert("An error occurred. Please try again.");
// //     }
// //   };

// //   return user ? (
// //     <div className="start-funding-container">
// //       <form className="start-funding-form" onSubmit={handleSubmit}>
// //         <h2>Start Your Fundraising Campaign</h2>

// //         <label>Region</label>
// //         <select name="region" value={formData.region} onChange={handleChange} required>
// //           <option value="">Select a Region</option>
// //           <option value="India">India</option>
// //           <option value="North Africa">North Africa</option>
// //           <option value="USA">USA</option>
// //           <option value="Canada">Canada</option>
// //         </select>

// //         <label>Zipcode</label>
// //         <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required />

// //         <label>Reason for Fundraising</label>
// //         <select name="reason" value={formData.reason} onChange={handleChange} required>
// //           <option value="">Select a Reason</option>
// //           <option value="Education">Education</option>
// //           <option value="Medical">Medical</option>
// //           <option value="Charity">Charity</option>
// //           <option value="Business">Business</option>
// //           <option value="Other">Other</option>
// //         </select>

// //         <label>Social Media Handle</label>
// //         <input type="text" name="instagramHandle" value={formData.instagramHandle} onChange={handleChange} placeholder="@username" required />

// //         <div className="textarea-container">
// //           <label>Description of the Issue</label>
// //           <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the issue and how the funds will help..." required />
// //         </div>

// //         <label>Total Money Required</label>
// //         <input type="number" name="totalMoney" value={formData.totalMoney} onChange={handleChange} placeholder="Enter total amount" required />

// //         <label>Deadline</label>
// //         <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />

// //         <div className="file-upload-container">
// //           <label>Upload Images/Videos</label>
// //           <input type="file" name="files" accept="image/*,video/*" multiple onChange={handleFileChange} required />
// //         </div>

// //         <button className="submit-btn" type="submit">Start Fundraising</button>
// //       </form>
// //     </div>
// //   ) : navigate("/signup");
// // };

// // export default StartProject;



// import React, { useState } from "react";

// const StartProject = () => {
//   const [formData, setFormData] = useState({
//     region: "",
//     zipcode: "",
//     reason: "",
//     instagramHandle: "",
//     description: "",
//     files: [],
//     totalMoney: "",
//     deadline: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       files: e.target.files,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const user = JSON.parse(localStorage.getItem("user")); // Retrieve user info
//     if (!user) {
//       alert("Please log in to start a project.");
//       return;
//     }
  
//     const formDataObj = new FormData();
//     formDataObj.append("region", formData.region);
//     formDataObj.append("zipcode", formData.zipcode);
//     formDataObj.append("reason", formData.reason);
//     formDataObj.append("instagramHandle", formData.instagramHandle);
//     formDataObj.append("description", formData.description);
//     formDataObj.append("totalMoney", formData.totalMoney);
//     formDataObj.append("deadline", formData.deadline);
//     formDataObj.append("userEmail", user.email); // Add user email
//     formDataObj.append("userName", user.name); // Add user name
  
//     for (const file of formData.files) {
//       formDataObj.append("files", file);
//     }
  
//     try {
//       const response = await fetch("http://localhost:5000/api/projects", {
//         method: "POST",
//         body: formDataObj,
//       });
  
//       if (response.ok) {
//         alert("Fundraising campaign started successfully!");
//         setFormData({
//           title: '',
//           region: "",
//           zipcode: "",
//           reason: "",
//           instagramHandle: "",
//           description: "",
//           files: [],
//           totalMoney: "",
//           deadline: "",
//         });
//       } else {
//         console.error("Failed to submit the form.");
//         alert("Failed to start the campaign. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };
  



//   return (
//     <div className="start-funding-container">
//       <form className="start-funding-form" onSubmit={handleSubmit}>
//         <h2>Start Your Fundraising Campaign</h2>

//         {/* Region */}
//         <label>Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <label>Region</label>
//         <select
//           name="region"
//           value={formData.region}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a Region</option>
//           <option value="India">India</option>
//           <option value="North Africa">North Africa</option>
//           <option value="USA">USA</option>
//           <option value="Canada">Canada</option>
//         </select>

//         {/* Zipcode */}
//         <label>Zipcode</label>
//         <input
//           type="text"
//           name="zipcode"
//           value={formData.zipcode}
//           onChange={handleChange}
//           required
//         />

//         {/* Reason for Fundraising */}
//         <label>Reason for Fundraising</label>
//         <select
//           name="reason"
//           value={formData.reason}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a Reason</option>
//           <option value="Education">Education</option>
//           <option value="Medical">Medical</option>
//           <option value="Charity">Charity</option>
//           <option value="Business">Business</option>
//           <option value="Other">Other</option>
//         </select>

//         {/* Instagram Handle */}
//         <label>Social Media Handle</label>
//         <input
//           type="text"
//           name="instagramHandle"
//           value={formData.instagramHandle}
//           onChange={handleChange}
//           placeholder="@username"
//           required
//         />

//         {/* Description of the Issue */}
//         <div className="textarea-container">
//           <label>Description of the Issue</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Describe the issue and how the funds will help..."
//             required
//           />
//         </div>

//         {/* Total Money Required */}
//         <label>Total Money Required</label>
//         <input
//           type="number"
//           name="totalMoney"
//           value={formData.totalMoney}
//           onChange={handleChange}
//           placeholder="Enter total amount"
//           required
//         />

//         {/* Deadline */}
//         <label>Deadline</label>
//         <input
//           type="date"
//           name="deadline"
//           value={formData.deadline}
//           onChange={handleChange}
//           required
//         />

//         {/* Image/Video Upload */}
//         <div className="file-upload-container">
//           <label>Upload Images/Videos</label>
//           <input
//             type="file"
//             name="files"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleFileChange}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button className="submit-btn" type="submit">
//           Start Fundraising
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StartProject;







import React, { useState } from "react";

const StartProject = () => {
  const [formData, setFormData] = useState({
    title: "", // Added title here
    region: "",
    zipcode: "",
    reason: "",
    instagramHandle: "",
    description: "",
    files: [],
    totalMoney: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")); // Retrieve user info
    if (!user) {
      alert("Please log in to start a project.");
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("title", formData.title); // Ensure title is included
    formDataObj.append("region", formData.region);
    formDataObj.append("zipcode", formData.zipcode);
    formDataObj.append("reason", formData.reason);
    formDataObj.append("instagramHandle", formData.instagramHandle);
    formDataObj.append("description", formData.description);
    formDataObj.append("totalMoney", formData.totalMoney);
    formDataObj.append("deadline", formData.deadline);
    formDataObj.append("userEmail", user.email); // Add user email
    formDataObj.append("userName", user.name); // Add user name

    for (const file of formData.files) {
      formDataObj.append("files", file);
    }

    try {
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        alert("Fundraising campaign started successfully!");
        setFormData({
          title: "",
          region: "",
          zipcode: "",
          reason: "",
          instagramHandle: "",
          description: "",
          files: [],
          totalMoney: "",
          deadline: "",
        });
      } else {
        console.error("Failed to submit the form.");
        alert("Failed to start the campaign. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="start-funding-container">
      <form className="start-funding-form" onSubmit={handleSubmit}>
        <h2>Start Your Fundraising Campaign</h2>

        {/* Title */}
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        {/* Region */}
        <label>Region</label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        >
          <option value="">Select a Region</option>
          <option value="India">India</option>
          <option value="North Africa">North Africa</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Zipcode */}
        <label>Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          required
        />

        {/* Reason for Fundraising */}
        <label>Reason for Fundraising</label>
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        >
          <option value="">Select a Reason</option>
          <option value="Education">Education</option>
          <option value="Medical">Medical</option>
          <option value="Charity">Charity</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>

        {/* Instagram Handle */}
        <label>Social Media Handle</label>
        <input
          type="text"
          name="instagramHandle"
          value={formData.instagramHandle}
          onChange={handleChange}
          placeholder="@username"
          required
        />

        {/* Description of the Issue */}
        <div className="textarea-container">
          <label>Description of the Issue</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the issue and how the funds will help..."
            required
          />
        </div>

        {/* Total Money Required */}
        <label>Total Money Required</label>
        <input
          type="number"
          name="totalMoney"
          value={formData.totalMoney}
          onChange={handleChange}
          placeholder="Enter total amount"
          required
        />

        {/* Deadline */}
        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />

        {/* Image/Video Upload */}
        <div className="file-upload-container">
          <label>Upload Images/Videos</label>
          <input
            type="file"
            name="files"
            accept="image/*,video/*"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          Start Fundraising
        </button>
      </form>
    </div>
  );
};

export default StartProject;
