module.exports = function zeros(expression) {
  let zero = 0;
  
  const countFactorial = factorial => {
      if (factorial.lastIndexOf('!') === -1) {
          return factorial;
      }

      if (factorial.length - factorial.indexOf('!!') === 2) {
          const base = factorial.slice(0, -2);
          let f = BigInt(1);
          let i = base % 2 === 0 ? 2 : 3
          for ( i; i <= base; i += 2) {
            f *= BigInt(i);
        }
          return f;
      }
      
      if (factorial.length - factorial.lastIndexOf('!') === 1) {
          const base = factorial.slice(0, -1);
          let f = BigInt(1);
          for ( let i = 1; i <= base; i++) {
              f *= BigInt(i);
          }
          return f;
      }
  }
  
  const countZeros = result => {
      const str = String(result);
      for (let i = str.length - 1; i > 0; i--) {
          if (str[i] === '0') {
              zero += 1;
          } else break;
      }
      return zero;
  }

  const numbersArray = expression.split('*').map(item => { 
          return countFactorial(item)
      });

  const resultNum = numbersArray.length > 1 ? numbersArray.reduce((prev, next) => {return BigInt(prev * next)}) : numbersArray[0]

  countZeros(resultNum);

  return zero;
}
