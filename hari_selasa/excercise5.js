/*
init abjad a sampai z untuk pembanding dan dilooping dengan index i
init hurufBaru untuk menampung nilai baru
init urutan untuk memasukan nilai indexOf kata dengan index j
*/


function ubahHuruf(kata) {
  var abjad='abcdefghijklmnopqrstuvwxyz';
  urutan=0;
  var hurufBaru='';

    for(var j=0;j<kata.length;j++){
        //console.log(urutan,j,kata[j],hurufBaru);
       /* urutan = abjad.indexOf(kata[j]);
        hurufBaru += abjad[urutan+1];
        console.log(urutan,j,kata[j],hurufBaru);
        urutan = abjad.indexOf(kata[j]);*/
        for(i=0;i<abjad.length;i++){
          if(kata[j]===abjad[i]){
            hurufBaru += abjad[i+1];
          }
        }
      }
    
  return hurufBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu