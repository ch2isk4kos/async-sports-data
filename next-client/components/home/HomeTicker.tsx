"use client"
import React, { useState } from 'react';
import Ticker from 'framer-motion-ticker';

export default function HomeTicker() {
  const [isPlaying, setIsPlaying] = useState(true);

  const scores = [
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
    { teamName1: "LV", teamName2: "KC", team1Score: "17", team2Score: "24"},
  ];

  return (
    <div className="absolute w-full invisible md:visible border-2 border-rose-500">
      <Ticker duration={20} onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)} isPlaying={isPlaying}>
        {scores.map((score, index) => (
          <div
            key={index}
            style={{
              // backgroundColor: item,
              margin: '5px',
              height: '5%',
              width: '200px',
            }}
          >
            <p>{score.teamName1}</p> | <p>{score.teamName2}</p>
          </div>
        ))}
      </Ticker>
    </div>
  );
}