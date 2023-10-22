"use client"
import React, { useState, useEffect } from 'react';
import Ticker from 'framer-motion-ticker';
import { Button, Card, CardHeader, CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";
import { log } from 'console';

export default function HomeTicker() {
  const [scores, setScores] = useState([])
  const [isPlaying, setIsPlaying] = useState(true);

  interface Score {
    id: string,
    sport_key: string,
    sport_title: string,
    home_team: string,
    away_team: string,
    scores: number | null,
    commence_time: string,
    completed: boolean,
    last_update: string | null
  }

  //   interface Score {
  //   id: "949fd4373890ee339add53eb5f343dc0",
  //   sport_key: "americanfootball_nfl",
  //   sport_title:"NFL",
  //   home_team:"Tampa Bay Buccaneers",
  //   away_team:"Atlanta Falcons",
  //   scores:null,
  //   commence_time:"2023-10-22T17:01:00Z",
  //   completed:false,
  //   last_update:null
  // }

  // const scores = [
  //   { id:"949fd4373890ee339add53eb5f343dc0", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T17:01:00Z", completed :false, home_team: "Tampa Bay Buccaneers", away_team: "Atlanta Falcons", scores: null, last_update: null},
  //   { id:"17d4277bfa01c37a1c599fb1fb3d3d13", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T17:01:00Z", completed :false, home_team: "Baltimore Ravens",  away_team: "Detroit Lions", scores: null, last_update: null},
  //   { id:"3080378924a7a8fa778d90243a1f4d54", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T17:01:00Z", completed :false, home_team: "New England Patriots", away_team: "Buffalo Bills", scores: null, last_update: null},
  //   { id:"2decc44ccdfb309756fa93d864f5773f", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T17:01:00Z", completed :false, home_team: "Chicago Bears", away_team: "Las Vegas Raiders", scores: null, last_update: null},
  //   { id:"5daeacbcda1ca66cf0ac102b1b6c3728", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T17:01:00Z", completed :false, home_team: "Indianapolis Colts", away_team: "Cleveland Browns", scores: null, last_update: null},
  //   { id:"50bd8049327bddb2433b90e98994d98b", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T17:01:00Z", completed :false, home_team: "New York Giants", away_team: "Washington Commanders", scores: null, last_update: null},
  //   { id:"547cb2dc8c177f05c94b27b7ba6adaae", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T20:06:00Z", completed :false, home_team: "Seattle Seahawks", away_team: "Arizona Cardinals", scores: null, last_update: null},
  //   { id:"1c4772551a69fb6409e6a77dbd6845ab", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T20:06:00Z", completed :false, home_team: "Los Angeles Rams", away_team: "Pittsburgh Steelers", scores: null, last_update: null},
  //   { id:"e5a039468378fe43795987ade2d44536", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T20:26:00Z", completed :false, home_team: "Denver Broncos", away_team: "Green Bay Packers", scores: null, last_update: null},
  //   { id:"c992a4e4d0046cd4926bf3524e35ff79", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-22T20:26:00Z", completed :false, home_team: "Kansas City Chiefs", away_team: "Los Angeles Chargers", scores: null, last_update: null},
  //   { id:"029287f953eb89c62eb833591b639086", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-23T00:21:00Z", completed :false, home_team: "Philadelphia Eagles", away_team: "Miami Dolphins", scores: null, last_update: null},
  //   { id:"42ccfa93a908006e5677687427c528db", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-24T00:16:00Z", completed :false, home_team: "Minnesota Vikings", away_team: "San Francisco 49ers", scores: null, last_update: null},
  //   { id:"623ebe645e0e4dec5759ce364b68682f", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-27T00:16:00Z", completed :false, home_team: "Buffalo Bills", away_team: "Tampa Bay Buccaneers", scores: null, last_update: null},
  //   { id:"97819f71c474956d24e436f0465f1591", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Tennessee Titans", away_team: "Atlanta Falcons", scores: null, last_update: null},
  //   { id:"e8fd2231245ca0c308b65b0f736f5e0c", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Carolina Panthers", away_team: "Houston Texans", scores: null, last_update: null},
  //   { id:"3bd722d85e1bb286bb75111a0787eb87", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Dallas Cowboys", away_team: "Los Angeles Rams", scores: null, last_update: null},
  //   { id:"93991757289dd5b650742a6e18184271", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Green Bay Packers", away_team: "Minnesota Vikings", scores: null, last_update: null},
  //   { id:"f6d472a6b7b7e70ba2d43f8a975fdccc", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Indianapolis Colts", away_team: "New Orleans Saints", scores: null, last_update: null},
  //   { id:"21c7005a3e6cd5da08d67e737a83d89d", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Miami Dolphins", away_team: "New England Patriots", scores: null, last_update: null},
  //   { id:"b82f30e931a965bc7277d187549ca294", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "New York Giants", away_team: "New York Jets", scores: null, last_update: null},
  //   { id:"4d8b130d0b5c36b7eac558283ebb4490", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T17:01:00Z", completed :false, home_team: "Washington Commanders", away_team: "Philadelphia Eagles", scores: null, last_update: null},
  //   { id:"787552bac1bf53711f90ae8de5c55aef", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T20:06:00Z", completed :false, home_team: "Seattle Seahawks", away_team: "Cleveland Browns", scores: null, last_update: null},
  //   { id:"ada6e4fa41270f4b036701448503cea6", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T20:26:00Z", completed :false, home_team: "Arizona Cardinals", away_team: "Baltimore Ravens", scores: null, last_update: null},
  //   { id:"aba08270582c4520f5ee43171e98e269", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T20:26:00Z", completed :false, home_team: "San Francisco 49ers", away_team: "Cincinnati Bengals", scores: null, last_update: null},
  //   { id:"4b3bf6a14799c3aba60073fab153a9b1", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-29T20:26:00Z", completed :false, home_team: "Denver Broncos", away_team: "Kansas City Chiefs", scores: null, last_update: null},
  //   { id:"56fab852b2d32615b5a38fb949e166e5", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-30T00:21:00Z", completed :false, home_team: "Los Angeles Chargers", away_team: "Chicago Bears", scores: null, last_update: null},
  //   { id:"8b59fe43939a2e45652c93373a06fa05", sport_key: "americanfootball_nfl", sport_title: "NFL", commence_time: "2023-10-31T00:16:00Z", completed :false, home_team: "Detroit Lions", away_team: "Las Vegas Raiders", scores: null, last_update: null}
  // ];

    useEffect(() => {
      fetch(`/api/the-odds-nfl`)
        .then((res) => res.json())
        .then((obj) => {
          console.log("data", obj.data);
          setScores(obj.data);
        })
        .catch((err) => console.log(err));
    }, [])

  // fetch(`/api/the-odds-nfl`)
  //   .then((res) => res.json())
  //   .then((obj) => {
  //     console.log("data", obj.data);
  //     setScores(obj.data);
  //   })
  //   .catch((err) => console.log(err));

  return (
    <div className="absolute w-full invisible md:visible border-2 border-rose-500">
      <Ticker duration={20} onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)} isPlaying={isPlaying}>
        {scores && scores.map((score: Score) => (
          <div className="flex max-w-[20em] max-h-full mx-3" key={score.id}>
            <Card className="">
              <CardHeader className="">
                <Image
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  height={10}
                  width={40}
                  radius="sm"
                  alt="nextui logo"
                />
                <div className="">
                  <p className="text-md">{score?.home_team}</p>
                  <p className="text-small text-default-500">{score?.away_team}</p>
                </div>
              </CardHeader>
              <Divider/>
              {/* <CardBody className="">
                <Image
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  height={10}
                  width={40}
                  radius="sm"
                  alt="nextui logo"
                />
                <div className="">
                  <p className="text-md">NextUI</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardBody> */}
            </Card>
          </div>
        ))}
      </Ticker>
    </div>
  );
}

{/* {scores && Object.keys(scores).map((score, index) => ( */}
