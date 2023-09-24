import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "Design",
    content:
      "Customer interactions, study and analysis of company branding through creative briefs.",
    image:
      "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  // Add more card data items here
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Card key={index} cardData={card} />
      ))}
    </div>
  );
};

export default CardList;
