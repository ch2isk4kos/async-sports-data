import React from 'react';
import Ticker from 'framer-motion-ticker';

export default function HomeTicker() {
  const scores = [
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
    { teamName1: "Las Vegas Raiders", teamName2: "Kansas City Chiefs", team1Score: "17", team2Score: "24"},
  ];

  return (
    <div className="">
      <Ticker duration={20}>
        {scores.map((score, index) => (
          <div
            key={index}
            // style={{
            //   backgroundColor: item,
            //   margin: '5px',
            //   height: '250px',
            //   width: '200px',
            // }}
          >
            <p>{score.teamName1}</p> | <p>{score.teamName2}</p>
          </div>
        ))}
      </Ticker>
    </div>
  );
}