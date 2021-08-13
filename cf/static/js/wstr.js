
function fuckna() {
var m =0;
var n=0;
var p=0;
var q=0;
var fk={0:"first",1:"second", 2:"third",3:"fourth",4:"fifth",5:"sixth", 6:"seventh",
7:"eighth", 8:"ninth", 9:"tenth",10:"11th",11:"12th",
12:"13th",13:"14th",14:"15th",15:"16th",16:"17th",
17:"18th",18:"19th",19:"20th"};
var x;
for(x in fk){
 
var e = document.getElementById(fk[x]);

var f = e.value;


if (f=="0"){
m+=1 } 
else if(f=="1"){
  n+=1
}
else if (f=="2"){
  p+=1
}
else if (f=="3")
{
q+=1;
}
var person = [];
person[0] = m;
person[1] = n;
person[2] =p;
person[3]=q;

}
//document.write(person);
//console.log(person);
var no=person;
document.getElementById("result1").innerHTML=m;
document.getElementById("result2").innerHTML=n;
document.getElementById("result3").innerHTML=p;
document.getElementById("result4").innerHTML=q;



}




