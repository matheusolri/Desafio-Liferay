function adicionar() {
    let text = document.getElementById("texto").value;
    let list = document.getElementById("lista").innerHTML;


    list += "<li>" + text + "</li>"
    document.getElementById("lista").innerHTML=list;

}
function remover(){
    let list = document.getElementById("lista").innerHTML="";
    let text = document.getElementById("texto").value; 
   
   list -="<li>" +text+ "</li>";
 }