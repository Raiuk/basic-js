
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 0
    arr.forEach(element => {
        if (Array.isArray(element)) {
            let arrDeapth = this.calculateDepth(element)
            if (arrDeapth > max) max = arrDeapth
        }
    });
    return ++max
}
};
