// recriando o método map

Array.prototype.myMap = function(callback){
  const newMappedArray = [];
  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index);
    newMappedArray.push(result);
  }
  return newMappedArray;
};
const values = [2, 1, 4, 6];

const newValues = values.myMap((value,index) => {
  console.log(value)
  return value+1;
});
console.log(values);
console.log(newValues);
