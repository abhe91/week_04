/*
initialisasi angkaTerbanyak untuk menampung angka yang keluar lebih dari 1
baca array dari kiri ke kanan dengan index i 
baca array dari kiri ke kanan dengan index j di dalam index i
return angka terbanyak yang tercetak terakhir dalam looping
jika jumlah countaT lebih dari 4 

*/

function cariModus(arr) {
  var angkaTerbanyak;
  countaT=0;
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      //console.log(arr[i],arr[j]);
      if(arr[i]===arr[j] && i!==j){
        angkaTerbanyak= arr[i];
        countaT++;
      }
    }
    if(countaT>4){
      return -1;
    }
    
  }
  if(countaT<1){
      return -1;
    }  
  console.log(countaT);
  return angkaTerbanyak;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1