/*
var people = prompt('Введите количество участников группы');
var sharm = 15;
var hurgada = 25;
var taba = 6;

if (isNaN(people)) {
alert('УПС! Введите верное количество участников группы!')
} else if(people > hurgada){
  alert('УПС! По Вашему запросу нет туров')
} else if(people <= taba){
  confirm('По Вашему запросу найден тур TABA');
}
*/

let num = prompt('Выберете желаемый курорт: 1-taba, 2-sharm, 3-hurgada', '');
let numVerified = parseInt(num, 10);
let turPlace;

switch (numVerified) {
  case 1 : turPlace = "Выбран курорт Taba" ; break;
  case 2 : turPlace = "Выбран курорт Sharm"; break;
  case 3 : turPlace = "Выбран курорт Hurgada"  ; break;
  default : turPlace = "Такого курорта не существует"    ;
}

console.log(`"${turPlace}!"`)
