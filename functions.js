const changeEmailFromGmailToHicoders = (pArray) => {
let result = pArray
            .filter((number) => number.includes("41"))
            .map((item) => item.toLowerCase())
            .sort()
            .map(item => item.replace("gmail.com", "hicoders.ch"))
    return  result;
    
};

const findSuperNumbers = (pArray) => {
const result = pArray.filter((item) => {
  let number1= item %10;
  let number2= Math.floor(item/10) %10
  let number3= Math.floor(item/100) %10
  let total= (Math.pow(number1,3))+ (Math.pow(number2,3))+ (Math.pow(number3,3))
  return total === item
} )
return result
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };
