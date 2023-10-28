import { ConstructorOf } from "./core.js";
import { is } from "./nil.js";

/**
 * Places the items in the array in random order.
 * @param array The array to shuffle.
 * @returns The passed array in random order.
 */
export const shuffleArray = <T>(array: Array<T>) => {
  for (let index = array.length - 1; index > 0; index--) {
    const targetIndex = Math.floor(Math.random() * (index + 1));
    const temp = array[index];
    array[index] = array[targetIndex];
    array[targetIndex] = temp;
  }
  return array;
};

/**
 * Returns an array that holds all items that appear in both
 * passed arrays.
 * @param a The first array.
 * @param b The second array.
 * @returns A new array which holds the items that appear in
 * both passed arrays.
 */
export const intersect = <T>(a: Array<T>, b: Array<T>) => {
  return a.filter(x => b.includes(x));
};

/**
 * Returns an array that holds all items that only appear in `a`.
 * @param a The first array.
 * @param b The second array.
 * @returns A new array which holds the items that ony appear
 * in `a`.
 */
export const difference = <T>(a: Array<T>, b: Array<T>) => {
  return a.filter(x => !b.includes(x));
};

/**
 * From an array with unknown contents, retrieve all the elements
 * that are of a certain type and return them as a new array.
 * @param array The array to filter.
 * @param InstanceType The type to search for.
 * @returns A new array with the filtered items.
 */
export const filterType = <T>(array: Array<unknown>, InstanceType: ConstructorOf<T>) =>
  array.filter(element => is(element, InstanceType)) as Array<T>;
