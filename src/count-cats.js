const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsMap) {
  let result = 0;
  if(catsMap==undefined||catsMap==null) return result;
  catsMap.map(element => {
    element.forEach(item=>{
       if(item!=null&&item=='^^') result++
    });
  });
  return result
};
