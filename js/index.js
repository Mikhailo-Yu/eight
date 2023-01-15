let userArr = [];
userArr.length = prompt('Введіть довжину масива');

let count = userArr.length;
console.log(count)

for (let i = 0; i < count; i++) {
    userArr.splice(i, count, +prompt(`Введіть елемент № ${i + 1} (будь-ласка тільки числа)`));
}
document.write('Mасив до сортування виглядає так: ' + userArr);

document.write('<br>' + 'Mасив після сортування виглядає так: ' + userArr.sort());
userArr.splice(1, 4)
document.write('<br>' + 'Mасив після видалення з 2 по 4 елемент виглядає так: ' + userArr);
