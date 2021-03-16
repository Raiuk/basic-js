const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members1) {
  let members = members1
  if(members==undefined||members==null) return ''
  let result = []
  for(let i = 0; i<members.length;i++) {
    if(members[i]!=null&&Object.prototype.toString.call(members[i])=='[object String]') {
    while(members[i].includes(" ")) {
          members[i] = members1[i].replace(' ','')
        }
        result.push(members[i][0].toUpperCase())
    }
  }
  return result.sort().join("")
};
