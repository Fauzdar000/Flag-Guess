const allCountries = [
      { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
      { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
      { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
      { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
      { name: "India", flag: "https://flagcdn.com/w320/in.png" },
      { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
      { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
      { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
      { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
      { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
      { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
      { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
      { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
      { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
      { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
      { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
      { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
      { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
      { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
      { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
      { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
      { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
      { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
      { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
      { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    ];
const image=
[
    document.getElementById("image-flag1"),
    document.getElementById("image-flag2"),
    document.getElementById("image-flag3"),
    
]



 
let questions = document.getElementById("questions");
let flag = document.getElementById("image-flag");
let scorep = document.getElementById("score");


let correctflag=null;
let correctindex = 0;
let scores=0


function shuffle(array){

    for (let i = array.length -1 ; i>0 ;i--){
        let j= Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    return array;
}
function generateRandomFlag() {

let option = shuffle([...allCountries]).slice(0,3);
     correctindex = Math.floor(Math.random() *3);
    correctflag = option[correctindex] ;

   


for(let j=0;j<3;j++){
    image[j].src=option[j].flag;
}

questions.innerHTML = option[correctindex].name;
   


    
}
 function checkAnswer(selectedIndex) {
      if (selectedIndex === correctindex) {
       
        scores++;
      } else {
     alert("Wrong Answer score -1")
        scores--;
      }

      scorep.textContent = scores;
      next();
    }



generateRandomFlag();

function next(){
    
    generateRandomFlag();


}
