#! /usr/bin/env node
const fs = require('fs');
const fileName = process.argv[2];
const getData = (fileName) => {
       const data = fs.readFileSync(fileName, 'utf8');
       let array = data.split(' ').map(string => string = parseInt(string))
       if (array.length === 1)  throw "La liste est vide";
       if (array.includes(NaN))  throw "Il n'y à pas que des nombres";
       return array;
}

 const bubbleSort = (array) => {
   var bubbleComparison = 0
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
        bubbleComparison += 1
      }
    }
    console.log(`Tri à bulle : ${bubbleComparison} comparaisons, voici le résultat: [${array}]`); 
    
  }
  var bubbleComparison = 0
  const insertionSort = (array) => {
    
    for(let i = 1; i < array.length; i ++){
      var current = array[i]
      var j = i - 1
      while (j >= 0 && array[j] > current){
        array[j+1] = array[j];
        j--;
      }
      bubbleComparison += 1
      array[j+1] = current;
    }
    console.log(`Tri à insertion: ${bubbleComparison} comparaisons, voici le résultat: [${array}]`); 
  }

  const selectionSort = (array) => {
    var bubbleComparison = 0
    for(let i = 0; i < array.length - 1; i++){
      let minIndex = i 
      for(let j = i + 1; j < array.length; j ++){
        if(array[j] < array[minIndex]){
          minIndex = j; 
        }
        bubbleComparison += 1
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    console.log(`Tri à selection : ${bubbleComparison} comparaisons, voici le résultat: [${array}]`);
  }

  const quickSort = (array) => {
    if(array.length <= 1){
      return array
    }

    const pivot = array[array.length - 1];
    let arrLeft = [];
    let arrRight = [];
    var bubbleComparison = 0

    
    for (let i = 0; i < array.length - 1; i ++){
      array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
      bubbleComparison += 1
    }

     [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];

  return `Tri à selection : ${bubbleComparison} comparaisons, voici le résultat: [${array}]`;
  }

  const mergeSort = (array) => {
    var bubbleComparison = 0
    if(array.length > 1){
      // La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
      const middleIndex = Math.floor(array.length / 2);
      const leftSide = array.slice(0, middleIndex); // On prends tout ce qui se trouve entre 0 et le middle index (côté gauche)
      const rightSide = array.slice(middleIndex); // On prends tout ce qui se trouve après le middle index (côté droit)

      mergeSort(leftSide); // Utilise la récursion pour appeler la partie gauche
      mergeSort(rightSide); // Utilise la récursion pour appeler la partie droite

      let leftIndex = 0, rightIndex = 0, globalIndex = 0 // On définit des index de défault

      
    // loop until we reach the end of the left or the right array
    // we can't compare if there is only one element
      while(leftIndex < leftSide.length && rightIndex < rightSide.length){
        bubbleComparison += 1
       // actual sort comparaison is here
      // if the left element is smaller its should be first in the array
      // else the right element should be first
      // move indexes at each steps
      if (leftSide[leftIndex] < rightSide[rightIndex]) {
        array[globalIndex] = leftSide[leftIndex]
        leftIndex++
      } else {
        array[globalIndex] = rightSide[rightIndex]
        rightIndex++
      }
      globalIndex++
    }

    // making sure that any element was not left behind during the process
    while(leftIndex < leftSide.length) {
      array[globalIndex] = leftSide[leftIndex]
      leftIndex++
      globalIndex++
    }
    while(rightIndex < rightSide.length) {
      array[globalIndex] = rightSide[rightIndex]
      rightIndex++
      globalIndex++
    }
  }
  return `Tri à fusion : ${bubbleComparison} comparaisons, voici le résultat: [${array}]`;
}


    
  
  const result = (fileName) => {
    try{
      let data = getData(fileName);
      console.log(`${bubbleSort(data)}`);
      console.log(`${insertionSort(data)}`);
      console.log(`${selectionSort(data)}`);
      console.log(quickSort(data));
      console.log(mergeSort(data));

    }
    catch(e) {
      console.error(e);
    }
  }

  result(fileName)








  


