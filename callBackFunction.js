function call_back(name,age,task){
    console.log("name:",name,age,task);
    task();
}
 function shower(){
     console.log("you can take shower");
 }
 function washHand(){
     console.log("Wash hand with shop");
 }
function scrollFacebook(){
    console.log("scrolling facebook but dont like any post");
}
 call_back("yasin",24,washHand);
 call_back("Momin",20,scrollFacebook);
 call_back("Dipty",18,shower);
