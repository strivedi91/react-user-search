import React from "react";
import Card from "../card/card.component";

function CardList(props) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {props.users.map((user) => (
        <Card key={user.id} user={user}></Card>
      ))}
    </div>
  );
}

export default CardList;
