export const TWO_PI = Math.PI * 2;

/**
 * Converts the degrees to radians.
 * @param degrees The degrees to convert to radians.
 * @returns The degrees in radians.
 */
export const deg2rad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

/**
 * Convertrs the radians to degrees.
 * @param radians The radians to convert to degrees.
 * @returns The radians as degrees.
 */
export const rad2deg = (radians: number) => {
  return radians * (180 / Math.PI);
};

/**
 * Calculates the sine for a given degree value.
 * @param value The value in degrees to calculate the sine for.
 * @returns The sine for the given value.
 */
export const sinDeg = (value: number) => {
  return Math.sin(deg2rad(value));
};

/**
 * Calculates the cosine for a given degree value.
 * @param value The value in degrees to calculate the cosine for.
 * @returns The cosine for the given value.
 */
export const cosDeg = (value: number) => {
  return Math.cos(deg2rad(value));
};

/**
 * Calculates the distance between two vectors.
 * @param x1 The X component of the first vector.
 * @param y1 The Y comoinent of the first vector.
 * @param x2 The X component of the second vector.
 * @param y2 The Y component of the second vector.
 * @returns The distance between the two vectors.
 */
export const distance = (x1: number, y1: number, x2: number, y2: number) => {
  const distx = x2 - x1;
  const disty = y2 - y1;
  return Math.sqrt(distx * distx + disty * disty);
};

/**
 * Finds the integer square root of a positive number.
 * @param value The value to calcuate the square root for.
 * @returns The square root for the given value.
 */
export const Isqrt = (value: number) => {
  if (0 === value) {
    return 0;
  } // Avoid zero divide
  let n = value / 2 + 1; // Initial estimate, never low
  let n1 = (n + value / n) / 2;
  while (n1 < n) {
    n = n1;
    n1 = (n + value / n) / 2;
  }
  return n;
};

/**
 * Checks whether a number is an integer.
 * @param value The value to check.
 * @returns `true` when the value is an integer, `false` otherwise.
 */
export const isInteger = (value: number) => {
  return Math.trunc(value) === value;
};
