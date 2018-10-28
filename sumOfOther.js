module.exports = function sumOfOther(arr) {
    let result = arr.reduce(function(sum, current) {
        return sum + current;
      });
    let ans=arr.map(function(current){
      return result-current
    });
  return ans; 
}
