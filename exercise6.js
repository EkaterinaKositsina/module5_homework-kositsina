const arr = [3, 3, 3, 3, 3, 3];
let flag = true;
for (let i = 0; i < arr.length; i++) {   
   if (arr[0] !== arr[i]) {
     flag = false;
   }
};

console.log(flag)
