function isEnoughCapacity(products, containerSize) {
    // Створення змінної для зберігання загальної кількості елементів
    let sum = 0;
    // Перебираємо значення обєкта ,щоб підсумувати всі елементи
    for (const product in products) {
        sum += products[product];
    }
    // Перевіряємо чи загальна кількість елементів менша, або дорвівнює розміру контейнера
    return sum <= containerSize;
}




console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false