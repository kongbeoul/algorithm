function solution(food_times, k) {
  var start = 0;
  
  function find_food(index) {
      var MIN_VALUE = Infinity; 
      while(true) {
          var nIndex = (index + 1) % food_times.length;
          
          if(food_times[nIndex] == 0) index = nIndex;
          else if(food_times[nIndex] < MIN_VALUE) {
              MIN_VALUE = food_times[nIndex];
              break;
          }
      }
      if(MIN_VALUE == 0) return -1;
      return nIndex;
  }
  
  for(var i = 1; i <= k; i++) {
      food_times[start]--;
      start = find_food(start);
  }
  
  return start == -1 ? -1 : start + 1;

}