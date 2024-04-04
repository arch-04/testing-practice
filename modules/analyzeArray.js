function analyzeArray(arr){
    function calcAvarage(arr){
        return Math.round(arr.reduce((sum, cur) => sum + cur, 0) / arr.length);
    }
    function min(arr){
        return arr.reduce((min, cur) => cur < min ? cur : min , arr[0]);
    }
    function max(arr){
        return arr.reduce((max, cur) => cur > max ? cur : max, arr[0]);
    }

    let len = arr.length; 

    return{
        avarage: calcAvarage(arr),
        minimum: min(arr),
        maximum: max(arr),
        length: len
    }
}

module.exports = analyzeArray;