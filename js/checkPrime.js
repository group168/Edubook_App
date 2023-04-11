
function KTNT(x) {
  if(x < 2)
    return 0;
  for(var i = 2; i <= x/2; i++){
    if(x % i == 0)
      return 0;
  }
  return 1;
}
module.exports = KTNT;