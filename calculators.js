class Calculator {
    constructor(nums) {
        this.nums = this.nums_array_as_nums(nums);
    }

    nums_array_as_nums(nums) {
        let numsAsStrings = nums.split(',');
        let arr = [];
        for (let i = 0; i < numsAsStrings.length; i++) {
            let value = Number(numsAsStrings[i]);
            if (Number.isNaN(value)) {
                return new Error(`The value '${numsAsStrings[i]}' is not a valid number.`);
            }
            arr.push(value)
        }
        arr.sort((a, b) => a - b)
        return arr;
    }
    
    mean() {
        let sum = 0;
        this.nums.forEach(num => {
            sum += num;
        })
        let mean = sum / this.nums.length;
        return mean;
    }

    median() {
        if (this.nums.length % 2 === 0 ) {
            let highMidIdx = this.nums.length/2;
            let lowMidIdx = highMidIdx - 1;
            let highMid = this.nums[this.nums.length/2];
            let lowMid = this.nums[lowMidIdx];
            let mid = (highMid + lowMid) / 2;
            return mid;
        }
        else {
            let midIdx = Math.floor(this.nums.length/2)
            let mid = this.nums[midIdx];
            return mid;
        }
    }

    frequency() {
        return this.nums.reduce(function(acc, next) {
            acc[next] = (acc[next] || 0) + 1;
            return acc
        }, {})
    }    

    mode() {
        let frequenciesObj = this.frequency();
        let count = 0;
        let mostFreq;

        for (let key in frequenciesObj) {
            if (frequenciesObj[key] > count) {
                mostFreq = key;
                count = frequenciesObj[key];
            }
        }   
        return parseInt(mostFreq)   
    }
}

module.exports = {Calculator}