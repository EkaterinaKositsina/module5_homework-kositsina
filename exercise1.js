let meaning = prompt ('Введите любое значение');
let result = +meaning;
if (typeof result !== 'number'){
  console.log ('Упс, кажется, вы ошиблись')}
else if (isNaN(result)){
  console.log ('Упс, кажется, вы ввели не число')}
else if (result % 2 == 0)
  {console.log('число четное')}
else if (result % 2 !== 0)
  {console.log('число не четное')}