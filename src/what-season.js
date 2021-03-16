const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date==undefined)
      return 'Unable to determine the time of year!'
    if (!(date.getTime()===date.getTime()))
      throw Error
    let seasonArr = ['winter', 'spring', 'summer', 'fall', 'winter']
      return seasonArr[Math.floor((date.getMonth()+1)/3)]
};
