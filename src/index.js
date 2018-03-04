module.exports = function longestConsecutiveLength(array) {
//function longestConsecutiveLength(array) {
  // your solution here
  const len = array.length;

  if(len == 0)return 0;
  if(len == 1)return 1;

  function compareNumbers(a, b){
    return a - b;
  }

  array = array.sort(compareNumbers);

  //console.log(array)

  let count = 1;
  let maxLength = 0;
  

  for (let index = 1; index < len; index++) {
    let prev = array[index - 1];
    if(prev + 1 == array[index]){
      count++;
      if(count > maxLength) maxLength = count;
    }else{
      count = 1;
    }
    
  }


  return maxLength
}

//et arr = [3]
//let arr = [22,1,5,5,4,2,3,32, 67,68, 69, 70]

//console.log(longestConsecutiveLength(arr));