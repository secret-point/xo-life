import React from "react";
import { SEASON_COLOR } from "../../constants/seasonButton";

const SeasonButton = ({ season, highlighted, onClick }) => {
  const [curSeasonColor, borderStyle] = highlighted
    ? SEASON_COLOR[season]
    : ["bg-lightGray", SEASON_COLOR[season][1]];

  return (
    <div
      className={`w-32 h-32 border-darkGray border-solid border-[0.5rem]  ${curSeasonColor} ${borderStyle}`}
      onClick={onClick}
    />
  );
};

export default SeasonButton;
