module.exports = function getZerosCount(number, base) {

 const getPrimeFactors = _number => {
   let primes = [];
   for(i =2; i <= _number;i++){
     while((_number %i ) === 0){
       primes.push(i);
       _number /= i;
     }
   }
   return primes;
 };

 const getNumberFactors = (_number, prime) =>{
  let res = 0;
  while(_number > 0){
    _number = Math.floor(_number / prime );
    res += _number;
  }
  return res;
 };
  
 let primeFactors = getPrimeFactors(base); 
 if(primeFactors.length > 0){
   let degree = 1, result=0;
   primeFactors.reduce( (prev,val) => {
    let factors_count = getNumberFactors(number,val);
     if(prev === val){
       degree++;
       factors_count = Math.floor(factors_count/degree);
     }else{
       degree = 1;
     }
      result = (result > factors_count || result === 0) ? factors_count : result;
      return val;
   },0);
   return result;
 }
 return 0;
};

