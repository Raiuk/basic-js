const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str += ""
  let res = ""
  let subres = ""
  let addition = ""
  let separator = "+"
  let additionSeparator = "|"
  let repeatTimes = 0
  let additionRepeatTimes = 0

  if(options.addition!=undefined) addition+=options.addition
  if(options.addition===null) addition=""+options.addition
  if(options.separator!=undefined) separator=options.separator+""
  if(options.additionSeparator!=undefined) additionSeparator=options.additionSeparator+""
  if(options.repeatTimes!=undefined) repeatTimes=options.repeatTimes
  if(options.additionRepeatTimes!=undefined) additionRepeatTimes=options.additionRepeatTimes


  for(let i=0;i<options.additionRepeatTimes-1;i++) {
      subres+=addition + additionSeparator
  }
  subres+=addition
  subres = str + subres


  for(let i=0;i<options.repeatTimes-1;i++) {
      res+=subres + separator
  }
  res+=subres

  return res
};
  