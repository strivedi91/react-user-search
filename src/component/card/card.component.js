import React from "react";

function Card({ user }) {
  return (
    <div className="md:flex">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 text-center"
        src={`https://robohash.org/${user.id}?set=set2`}
        alt="img"
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg">{user.name}</h2>
        <div className="text-purple-500">{user.company.name}</div>
        <div className="text-gray-600">{user.email}</div>
        <div className="text-gray-600">{user.phone}</div>
      </div>
    </div>
  );
}

export default Card;
