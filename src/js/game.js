let saveData=null;
if(localStorage.getItem("save")){
 saveData=localStorage.getItem("save");
 document.getElementById('gameReturn').scrollIntoView();
}else{
 if(document.cookie){
  saveData=document.cookie;
  document.getElementById('gameReturn').scrollIntoView();
 }
}
if(saveData){

}


function goTo(id){
 document.getElementById(id).scrollIntoView();
}
function toggleDarkMode(){
 console.log("toggle");
}
