const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error
  const COMMAND = ['--discard-next','--discard-prev','--double-next','--double-prev']
  let res = []
  for(let i=0;i<arr.length;i++) {
    switch(arr[i]) {
            case COMMAND[0]:
              i++
              break
            case COMMAND[1]:
              if(arr[i-2]!==COMMAND[0]) res.pop()
              break
            case COMMAND[2]:
              if(arr[i+1]!=null) res.push(arr[i+1])
              break
            case COMMAND[3]:
              if(res.length>0&&arr[i-2]!==COMMAND[0]) res.push(arr[i-1])
              break
            default:
              res.push(arr[i])
          }
  }
  return res

 
};
