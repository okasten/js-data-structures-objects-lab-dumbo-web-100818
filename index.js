// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  let new_array = {...driver};
  new_array[key] = value;
  return new_array;
}