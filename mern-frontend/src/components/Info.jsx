import React, {useState} from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Import required elements
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import TopDonator from "./TopDonator";
import DonationListPopup from "./DonationListPopup ";
import CommentSection from "./CommentSection";
import { UserCircle } from 'lucide-react';


// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

export const Info = () => {
  const location = useLocation(); // Get location state
  const { title, description, donateText, chartData, options, imageSrc, altText } = location.state || {}; // Destructure data from state


  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const topDonatorData = {
    name: "Chirag Sharma",
    img: "https://images.pexels.com/photos/8173269/pexels-photo-8173269.jpeg?auto=compress&cs=tinysrgb&w=600",
    amount: 150000,
  };

  const handleNewComment = (comment) => {
    console.log('New Comment Added:', comment);
  };

  return (

    

      <>
    <div className="info-container">
      {/* Text Content */}
      <div className="info-text-content">
        <h1 className="info-heading">{title}</h1>
        <p className="info-description">{description}</p>
        <div className="info-button-group">

        <Link to="/payment">
          <button className="info-donate-button">{donateText}</button>
        </Link>

          <Link to = "/start-project">
          <button className="info-fundraiser-button">Start a fire relief fundraiser</button>
          </Link>
        </div>

        {/* Chart */}
        <div className="info-chart-container">
          <Doughnut className="info-graph" data={chartData} options={options} />
        </div>
      </div>

      {/* Image */}
      <div className="info-image-container">
        <img src={imageSrc} alt={altText} className="info-image" />
        
      <TopDonator 
        onClick={openPopup}
        name={topDonatorData.name}
        img={topDonatorData.img}
        amount={topDonatorData.amount}
      />

<DonationListPopup isOpen={isPopupOpen} handleClose={closePopup} />
<CommentSection
          initialComments={[
            { id: 1, name: 'Sahil', text: 'Chirag you are so great!' },
            { id: 2, name: 'Swapnil', text: 'I totally agree!' },
          ]}
          onCommentAdd={handleNewComment}
          headerText="User Comments"
          avatarIcon={UserCircle}
          placeholderText="Add your comment here..."
          buttonText="Submit"
        />
      </div>

    </div>

      </>
  );
};

export default Info;