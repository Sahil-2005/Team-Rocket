// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LeftPanelCard = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
//   return (
//     <div className="left-panel-card" onClick={() => onClick(id)}>
//       <img src={image} alt={title} className="card-image" />
//       <h3 className="card-title">{title}</h3>
//       <p className="card-donations">{donations} donations</p>
//       <div className="progress-bar-container">
//         <div
//           className="progress-bar"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//       <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
//       <p className="card-description">{description}</p>
//     </div>
//   );
// };

// const RightPanelCard = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
//   return (
//     <div className="right-panel-card" onClick={() => onClick(id)}>
//       <img src={image} alt={title} className="card-image" />
//       <h3 className="card-title">{title}</h3>
//       <p className="card-donations">{donations} donations</p>
//       <div className="progress-bar-container">
//         <div
//           className="progress-bar"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//       <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
//       <p className="card-description">{description}</p>
//     </div>
//   );
// };

// const LeftPanel = ({ card, onClick }) => (
//   <div className="left-panel">
//     <LeftPanelCard {...card} onClick={onClick} />
//   </div>
// );

// const RightPanel = ({ cards, onClick }) => (
//   <div className="right-panel">
//     {cards.map((card, index) => (
//       <RightPanelCard key={index} {...card} onClick={onClick} />
//     ))}
//   </div>
// );

// const Maincard = () => {
//   const navigate = useNavigate();
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/projects");
//         const data = await response.json();

//         console.log(data)
//         // Map backend data to card properties
//         const formattedCards = data.map((project) => ({
//           id: project._id,
//           // image: project.files[0], // Use the first file as the image
//           image: project.files?.[0]
//           ? `http://localhost:5000/${project.files[0]}`
//           : "http://localhost:5000/uploads/default.jpg",
//           title: project.reason,
//           donations: "2.5K", // Placeholder for donations
//           amountRaised: project.totalMoney,
//           progress: Math.min((project.totalMoney / 100000) * 100, 100), // Example progress calculation
//           description: project.description,
//         }));
//         setCards(formattedCards);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch projects", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handlePanelClick = (id) => {
//     const selectedCard = cards.find((card) => card.id === id);
//     navigate("/info", {
//       state: {
//         title: selectedCard.title,
//         description: selectedCard.description,
//         donateText: "Donate Now",
//         chartData: {
//           labels: ["Donated", "Remaining"],
//           datasets: [
//             {
//               data: [selectedCard.amountRaised, 100000 - selectedCard.amountRaised],
//               backgroundColor: ["#36A2EB", "#FF6384"],
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: {
//               position: "top",
//             },
//           },
//         },
//         imageSrc: selectedCard.image,
//         altText: selectedCard.title,
//       },
//     });
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="app-container">
//       <div className="layout">
//         <LeftPanel card={cards[0]} onClick={handlePanelClick} />
//         <RightPanel cards={cards.slice(1)} onClick={handlePanelClick} />
//       </div>
//     </div>
//   );
// };

// export default Maincard;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftPanelCard = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
  return (
    <div className="left-panel-card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-donations">{donations} donations</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

const RightPanelCard = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
  return (
    <div className="right-panel-card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-donations">{donations} donations</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

const LeftPanel = ({ card, onClick }) => (
  <div className="left-panel">
    <LeftPanelCard {...card} onClick={onClick} />
  </div>
);

const RightPanel = ({ cards, onClick }) => (
  <div className="right-panel">
    {cards.map((card, index) => (
      <RightPanelCard key={index} {...card} onClick={onClick} />
    ))}
  </div>
);

const Maincard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();

        console.log(data);
        // Map backend data to card properties
        const formattedCards = data.map((project) => ({
          id: project._id,
          image: project.files?.[0]
            ? `http://localhost:5000/${project.files[0]}`
            : "http://localhost:5000/uploads/default.jpg",
          title: project.title, // Updated to use `title` from backend
          donations: "2.5K", // Placeholder for donations
          amountRaised: project.totalMoney,
          progress: Math.min((project.totalMoney / 100000) * 100, 100), // Example progress calculation
          description: project.description,
        }));
        setCards(formattedCards);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch projects", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePanelClick = (id) => {
    const selectedCard = cards.find((card) => card.id === id);
    navigate("/info", {
      state: {
        title: selectedCard.title, // Correct title passed here
        description: selectedCard.description,
        donateText: "Donate Now",
        chartData: {
          labels: ["Donated", "Remaining"],
          datasets: [
            {
              data: [selectedCard.amountRaised, 100000 - selectedCard.amountRaised],
              backgroundColor: ["#36A2EB", "#FF6384"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
        imageSrc: selectedCard.image,
        altText: selectedCard.title,
      },
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app-container">
      <div className="layout">
        <LeftPanel card={cards[0]} onClick={handlePanelClick} />
        <RightPanel cards={cards.slice(1)} onClick={handlePanelClick} />
      </div>
    </div>
  );
};

export default Maincard;
