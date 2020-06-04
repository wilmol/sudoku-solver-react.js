import { easyPuzzles } from './EasyPuzzles';
import { mediumPuzzles } from './MediumPuzzles';
import { hardPuzzles } from './HardPuzzles';
import { BoardState } from './Board';

const puzzles = [easyPuzzles, mediumPuzzles, hardPuzzles];

export const emptyPuzzle = (): BoardState => decodePuzzle('0'.repeat(81));

export const firstPuzzle = (): BoardState => decodePuzzle(puzzles[0][0]);

export const randomPuzzle = (): BoardState => {
  const difficulty = random(0, 2);
  console.log(`Difficulty: ${difficulty}`);
  const boardArray = puzzles[difficulty];
  const i = random(0, boardArray.length);
  const boardString = boardArray[i];
  return decodePuzzle(boardString);
};

// [low, high]
const random = (low: number, high: number): number =>
  Math.floor(Math.random() * (high - low + 1) + low);

export const decodePuzzle = (encodedPuzzle: string): BoardState =>
  encodedPuzzle.match(/.{9}/g)!.map((rowString) =>
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

export const allPuzzles = (): string[] => [easyPuzzles, mediumPuzzles, hardPuzzles].flat();
