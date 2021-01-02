function submit(){


let Qu = document.getElementById("Quizes").value;
let Me =document.getElementById("Midterm").value;
let Fi = document.getElementById("FinalTest").value;
let Or = document.getElementById("Oral").value;
let grade = +Qu + +Me + +Fi + +Or

console.log(grade)



if (grade<=100 && grade>=90)
{   document.getElementById("total_grades").innerText=`${grade}`}
else if ( grade>= 80)
{ document.getElementById("total_grades").innerText=`${grade}`  }
else if ( grade>= 70)
{document.getElementById("total_grades").innerText=`${grade}`}
else if (grade>= 60)
{document.getElementById("total_grades").innerText=`${grade}`}

else{document.getElementById("total_grades").innerText=`${grade}`}

if (grade<= 100 && grade>= 90)
{document.getElementById("final_grade").innerText="A" }
else if ( grade>=80)
{ document.getElementById("final_grade").innerText="B"}
else if ( grade>=70)
{document.getElementById("final_grade").innerText="C"}
else if (grade>=60)
{document.getElementById("final_grade").innerText="D"}

else{document.getElementById("final_grade").innerText="F"}










}


