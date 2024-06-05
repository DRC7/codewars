// Problem Description:

// As a MotoGP commentator, you're tasked with interpreting qualifying results to determine each racer's starting position on the grid. The grid is organized into rows of three racers each, with positions within a row not aligned. Every rider in a row starts a little forward from the next rider. The lowest position number marks the top of the row, while the highest indicates the bottom, with the middle position between them.

// Write a function that takes the name of a racer and their qualifying position as input and returns a string indicating their starting position on the grid.

// Example grid: https://images.app.goo.gl/ogBU5QvvK6vd5k2j9

// Function Specifications:

// Input: A string representing the racer's name and an integer indicating their qualifying position.
// Output: A string describing the racer's starting position on the grid in the specified format.

//My Solution

const gridPosition = (name, position) => {
  if (position == 1) {
    return `${name} starts from pole position`;
  }

  const rows = {
    1: 'front',
    2: '2nd',
    3: '3rd',
  };

  const columns = {
    0: 'bottom',
    1: 'top',
    2: 'middle',
  };

  const rowPosition = Math.ceil(position / 3);
  const row = rows[rowPosition] || `${rowPosition}th`;
  const place = columns[position % 3];

  return `${name} starts from the ${place} of the ${row} row`;
};