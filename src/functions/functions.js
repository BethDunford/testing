function squareDigits(num) {
    let arr = (num + "").split('');
    arr = arr.map(val => {
      return val ** 2;
    })
    return parseInt(arr.join(''))
  }
  console.log(squareDigits(42));
  
  
  
  function GetSum(a, b) {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let arr = []
    while(min <= max){
      arr.push(min++)
    }
    return(arr.reduce((acc, cr)=> acc + cr))
  }
  


  function getMiddle(s)
  {
    if(s.length % 2==0) {
      return s.charAt(s.length/2 -1) + s.charAt(s.length/2);
    } else {
      return s.charAt(Math.floor(s.length/2));
    }
  }
  


  function findEvenIndex(arr) {
      for(let i = 1; i < arr.length-1; i++) {
          let arr1 = arr.slice(0,i);
          let arr2 = arr.slice(i+1);
          let sum1 = arr1.reduce((acc, val) => acc+val);
          let sum2 = arr2.reduce((acc, val) => acc+val);
          if(sum1===sum2) {
              return i;
          }
      }
      return -1;
  }

  module.exports = {
      squareDigits,
      GetSum,
      getMiddle,
      findEvenIndex
  }