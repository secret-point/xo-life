import React, { useState } from "react";
import SeasonButton from "../SeasonButton";
import {
  MESSAGE_CLICKED_CORRECT_SEASON,
  MESSAGE_CLICKED_WRONG_SEASON,
  MESSAGE_CLICK_GREEN_BUTTON_TO_START,
  MESSAGE_GAME_STARTED,
  MESSAGE_WAIT_FOR_SEASON_TO_HIGHLIGHT,
  SEASONS,
  SEASONS_COUNT,
} from "../../constants/common";
import GameController from "../GameController";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GamePanel = () => {
  const [highlightedSeason, setHighlightedSeason] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleButtonClick = (season) => {
    if (season === highlightedSeason && isStarted) {
      const timeTaken = Math.abs(Date.now() - startTime || 0);
      toast.success(
        `${MESSAGE_CLICKED_CORRECT_SEASON} Time taken: ${timeTaken}ms`
      );
      setHighlightedSeason((prev) => SEASONS[prev]);
      setStartTime(Date.now());
    } else if (!highlightedSeason) {
      toast.warn(MESSAGE_WAIT_FOR_SEASON_TO_HIGHLIGHT);
    } else if (!isStarted) {
      toast.warn(MESSAGE_CLICK_GREEN_BUTTON_TO_START);
    } else {
      toast.error(MESSAGE_CLICKED_WRONG_SEASON);
    }
  };

  const handleSeasonHighlight = () => {
    const randomIndex = Math.floor(Math.random() * SEASONS_COUNT);
    setHighlightedSeason(Object.keys(SEASONS)[randomIndex]);
    setIsStarted(false);
  };

  const handleSeasonClick = () => {
    if (!highlightedSeason) {
      toast.warn(MESSAGE_WAIT_FOR_SEASON_TO_HIGHLIGHT);
    } else {
      setIsStarted(true);
      setStartTime(Date.now());
      toast.info(MESSAGE_GAME_STARTED);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="w-64  rounded-md">
        <div className="flex flex-wrap">
          {Object.keys(SEASONS).map((season) => (
            <SeasonButton
              key={season}
              season={season}
              highlighted={season === highlightedSeason}
              onClick={() => handleButtonClick(season)}
            />
          ))}
        </div>
      </div>
      <GameController
        handleSeasonHighlight={handleSeasonHighlight}
        handleSeasonClick={handleSeasonClick}
      />
      <ToastContainer />
    </div>
  );
};

export default GamePanel;
