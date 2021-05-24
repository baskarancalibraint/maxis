let roman = 'IX';
let mappingObj = {'X': 10, 'V': 5, 'I': 1};
let sum = 0;
let last = 0;
for(var i = roman.length - 1; i >= 0; i--){
    if(!last){
        console.log('without value');
        const currentValue = mappingObj[roman[i]];
        last = currentValue
        sum = sum + last;
    } else {
        console.log('with value');
        const currentValue = mappingObj[roman[i]];
        sum = currentValue >= last ? sum + currentValue : sum - currentValue;
        last = currentValue;
    }
}
console.log(sum);