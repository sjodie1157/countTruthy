function countTrueAndFalse(arr) {
    let countTrue = 0;
    let countFalse = 0;
    document.querySelector('[data-arr]').textContent = array1
    
    for ( let i = 0;i<arr.length;i++ ) {
        if (arr[i] == true) {
            countTrue++;
        } else if (arr[i] == false) {
            countFalse++;
        }
    }
    
    return {
        countTrue: countTrue,
        countFalse: countFalse
    };
}

let array1 = [true, false, true, false, true];
let counts = countTrueAndFalse(array1);
document.querySelector('[data-true]').textContent = counts.countTrue
document.querySelector('[data-false]').textContent = counts.countFalse

