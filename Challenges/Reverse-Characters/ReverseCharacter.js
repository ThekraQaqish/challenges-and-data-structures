
let Characters="Thekra AbdelKarim AbdelRahim Qaqish";
let ReversedCharacters="";
let x="";
function ReverseCharacters(Characters){
    for(let i=Characters.length-1;i>=0;i--){
        if(Characters[i]===" "){
            x+=ReversedCharacters+=" ";
            ReversedCharacters="";}
        else{ ReversedCharacters += Characters[i];}}
    x+=ReversedCharacters+=" ";
    return x;}
console.log(ReverseCharacters(Characters));