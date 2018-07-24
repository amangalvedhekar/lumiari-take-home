export const commonBetweenArrays = (listOne = [], listTwo = []) => {
  let commonElements = [];
  let hashTable ={};

  //if either of the element is empty we dont have any intersection element
  //return early
  if(listOne.length === 0 || listTwo.length === 0){
    return commonElements;
  }

  /**
   * for the sake of this exercise we don't need to worry
   * about the value of the key in the hash table. We just
   * need to compare the keys from one element to another
   * element.
   *
   */
  listOne.map(element => hashTable[element] = true);
  listTwo.forEach(elm => {
    if(hashTable[elm]){
      commonElements.push(elm);
    }
  });
  return commonElements;
};
