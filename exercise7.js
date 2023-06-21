const arr = [3, 2, 7, 3, null, 0, -4, -1, 'b'];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

for (let i = 0; i < arr.length; i++) {  
    if (arr[i] !== null && typeof arr[i] !== 'string' && typeof arr[i] !== undefined) {
      if (arr[i] === 0) {
       countZero++;
      } else {
        
       if (arr[i] % 2 === 0) {
         countEven++;
       }
      
       if (arr[i] % 2 !== 0) {
         countOdd++;
       }
      }
    }
  };
  
  
  console.log('Количество нулей в массиве ' + countZero);
  console.log('Количество четных чисел в массиве ' + countEven);
  console.log('Количество не четных чисел в массиве ' + countOdd);
  