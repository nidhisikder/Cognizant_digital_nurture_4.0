import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Rohit Sharma", score: 85 },
    { name: "Virat Kohli", score: 95 },
    { name: "Shubhman Gill", score: 60 },
    { name: "Hardik Pandya", score: 45 },
    { name: "Surya Kumar Yadav", score: 90 },
    { name: "KL Rahul", score: 30 },
    { name: "Ravindra Jadeja", score: 78 },
    { name: "Bumrah", score: 66 },
    { name: "Shami", score: 89 },
    { name: "Kuldeep", score: 74 },
    { name: "Chahal", score: 50 },
  ];
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            Mr.{player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, idx) => (
          <li key={idx}>
            Mr.{player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
