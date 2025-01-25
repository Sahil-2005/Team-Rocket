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
//     distributionReason: "",
//     moneyRange: 0,
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (API call or form processing)
//     console.log(formData);
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
//             accept="image/,video/"
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

    const formDataObj = new FormData();
    formDataObj.append("region", formData.region);
    formDataObj.append("zipcode", formData.zipcode);
    formDataObj.append("reason", formData.reason);
    formDataObj.append("instagramHandle", formData.instagramHandle);
    formDataObj.append("description", formData.description);
    formDataObj.append("totalMoney", formData.totalMoney);
    formDataObj.append("deadline", formData.deadline);

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
