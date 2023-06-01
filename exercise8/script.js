var button=document.getElementById("button");
var input=document.getElementById("input");
var list=document.querySelector("ul");
button.addEventListener("click", function() {
    if(input.value.length >0){
        var addlist=document.createElement("li");
        addlist.appendChild(document.createTextNode(input.value));
        list.appendChild(addlist);
        input.value="";
    }
});

input.addEventListener("keypress", function(event){
    if(input.value.length >0 && event.code==="Enter"){
        var addlist=document.createElement("li");
        addlist.appendChild(document.createTextNode(input.value));
        list.appendChild(addlist);
        input.value="";
    }
})