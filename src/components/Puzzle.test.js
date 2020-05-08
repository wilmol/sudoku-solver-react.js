import { allPuzzles, decodePuzzle } from './Puzzle';
import each from 'jest-each';

const puzzles = allPuzzles();

describe('Decode puzzles', () => {
  each(puzzles).test("Decode '%s'", (puzzle) => {
    const decodedPuzzle = decodePuzzle(puzzle);
    expect(decodedPuzzle).toBeDefined();
    expect(decodedPuzzle).toHaveLength(9);
    decodedPuzzle.forEach((row) => {
      expect(row).toHaveLength(9);
      row.forEach((cell) => {
        expect(cell).toHaveProperty('value');
        expect(cell.value).toBeGreaterThanOrEqual(0);
        expect(cell.value).toBeLessThanOrEqual(9);
        expect(cell).toHaveProperty('initiallySet', cell.value !== 0);
      });
    });
  });
});
