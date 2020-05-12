import { easyPuzzles } from './EasyPuzzles';
import { mediumPuzzles } from './MediumPuzzles';
import { hardPuzzles } from './HardPuzzles';

const puzzles = [easyPuzzles, mediumPuzzles, hardPuzzles];

export const emptyPuzzle = () => decodePuzzle('0'.repeat(81));

export const firstPuzzle = () => decodePuzzle(puzzles[0][0]);

export const randomPuzzle = () => {
  const difficulty = random(0, 2);
  console.log(`Difficulty: ${difficulty}`);
  const boardArray = puzzles[difficulty];
  const i = random(0, boardArray.length);
  const boardString = boardArray[i];
  return decodePuzzle(boardString);
};

// [low, high]
const random = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);

export const decodePuzzle = (encodedPuzzle) =>
  encodedPuzzle.match(/.{9}/g).map((rowString) =>
    rowString
      .split('')
      .map((cellString) => parseInt(cellString))
      .map((cellInt) => {
        // cell properties
        return {
          value: cellInt,
          initiallySet: cellInt !== 0,
        };
      })
  );

export const allPuzzles = () => [easyPuzzles, mediumPuzzles, hardPuzzles].flatMap((a) => a);
