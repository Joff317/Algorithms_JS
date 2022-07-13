const exo1 = (n, array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == n) return true;
    }
  }
  return false;
};

// console.log(exo1(17, [23, 10, 3, 7]));

const exo2 = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    // On part du principe qu'il a la vision
    let canSee = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] >= array[i]) {
        // Si il n'a pas la vision, casse la boucle
        canSee = false;
        break;
      }
    }
    if (canSee == true) {
      // Si il a la vision, compteur +1
      count++;
    }
  }
  return count;
};

// console.log(exo2([90, 7, 65, 10, 52, 32, 40]));

const exo3 = (n, array) => {
  for (let i = 0; i < array.length; i++) {
     let diff = n - array[i]
    if (array.includes(diff)) return true;
  }
  return false
};

// console.log(exo3(17, [10, 12, 20, 7]));

const exo4 = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] > array[i + 1]);
  }
  arr = arr.filter(Boolean);
  return arr.length + 1;
};

// console.log(exo4([3, 7, 8, 3, 6, 1, 2]));

const exo5 = (n, arr) => {
   // arr.some((item, i) => arr.slice(i + 1).includes(n - item));
 return arr.some((item) => arr.includes(n-item))
}
// console.log(exo5(17, [23, 10, 3, 7]));

const exo6 = (array) => {
    let count = 0;
    let result = 1;
    let num_max = array[array.length - 1];
    for (let i = array.length - 1; i >= 1; i--) {
      count++;
      if (array[i] > num_max) {
        result++;
        num_max = array[i];
      }
    }
    return [result, count];
}

console.log(exo6([3, 7, 8, 3, 6, 1, 2]))