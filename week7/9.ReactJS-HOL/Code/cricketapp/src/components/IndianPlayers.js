import React from "react";

const IndianPlayers = () => {
  const team = ["Rohit Sharma", "Virat Kohli", "Shubhman Gill", "Hardik Pandya", "KL Rahul", "Surya Kumar Yadav"];

  const oddTeam = team.filter((_, i) => i % 2 === 1);
  const evenTeam = team.filter((_, i) => i % 2 === 0);

  const T20players = ["Rinku", "Tilak", "Samson"];
  const RanjiTrophy = ["Pujara", "Rahane", "Iyer"];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
          <li>First : {oddTeam[0]}</li>
          <li>Second : {oddTeam[1]}</li>
          <li>Third : {oddTeam[2]}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
          <li>First : {evenTeam[0]}</li>
          <li>Second : {evenTeam[1]}</li>
          <li>Third : {evenTeam[2]}</li>
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
