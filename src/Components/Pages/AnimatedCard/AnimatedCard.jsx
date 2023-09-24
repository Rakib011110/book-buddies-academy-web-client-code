import React from "react";
import "./AnimatedCard.css"; // Import your CSS stylesheet
const cardData = [
  {
    userName: "Rakibul Islam",
    userEmail: "rakib@example.com",
    userRating: 4,
    userComment:
      "This is a comment about the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, .",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    userName: "Jane Smith",
    userEmail: "jane@example.com",
    userRating: 5,
    userComment:
      "Fantastic card design! The colors and layout are truly eye-catching. consectetur adipiscing elit. Ut enim ad minim veniam,",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MIK6s--5K3qB5E9AZ2uYAeIiBLJ9tTyRgPpl2V5V0CtKluyaa2TpINXGn4nqhWZ1Cco&usqp=CAU",
  },
  {
    userName: "Alex Johnson",
    userEmail: "alex@example.com",
    userRating: 3,
    userComment:
      "Decent work, but could be improved. The concept is interesting. consectetur adipiscing elit. Ut enim ad minim veniam,",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MIK6s--5K3qB5E9AZ2uYAeIiBLJ9tTyRgPpl2V5V0CtKluyaa2TpINXGn4nqhWZ1Cco&usqp=CAU",
  },
  {
    userName: "Emily Brown",
    userEmail: "emily@example.com",
    userRating: 4,
    userComment:
      "Impressive and creative design. I appreciate the attention to detail. consectetur adipiscing elit. Ut enim ad minim veniam,",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
];

function AnimatedCard() {
  return (
    <div className="Cardwrapper container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-40">
        {cardData.map((card, index) => (
          <div key={index} className="reviewCardBox">
            <div className="reviewCard">
              <h2 className="text-xl mt-10 reviewCardHead  ">
                {card.userName}
                <h1 className="text-sm text-white"> Email:{card.userEmail} </h1>
                <h1 className="text-sm mt-4 text-white">
                  {" "}
                  Rating: {card.userRating}⭐⭐⭐⭐⭐{" "}
                </h1>
                <div className="btn text-sm mt-10 bg-[#68fb9a] text-black">
                  {" "}
                  DETAILS{" "}
                </div>
              </h2>
              <img
                src={card.image}
                alt={`${card.title} Image`}
                className="mx-auto my-4 h-40 w-40 mt-20 object-cover rounded-full"
              />
              <div className="content">
                <h3>COMMENT</h3>

                <p className="text-sm text-white">{card.userComment}</p>
                <p className="text-sm">{card.userRating} ⭐⭐⭐⭐⭐ </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCard;
