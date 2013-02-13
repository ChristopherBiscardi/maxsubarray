function max_subarray(arr){
  var max_ending_here = max_so_far = 0;
  arr.forEach(function(item){
    max_ending_here = Math.max(0, max_ending_here + item);
    max_so_far = Math.max(max_so_far, max_ending_here);
  })
  return max_so_far;
}

// max_subarray([1,2,3,-5, 1, 6])
// returns 8
