import {
  HIGHLIGHT_RANDOM_SEASON_BUTTON_TEXT,
  START_TO_CLICK_SEASON,
} from "../../constants/common";

const GameController = ({ handleSeasonHighlight, handleSeasonClick }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSeasonHighlight}
      >
        {HIGHLIGHT_RANDOM_SEASON_BUTTON_TEXT}
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSeasonClick}
      >
        {START_TO_CLICK_SEASON}
      </button>
    </div>
  );
};

export default GameController;
