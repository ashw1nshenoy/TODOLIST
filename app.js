const list=document.getElementById("list")
const note=document.getElementById("note")
function addnote(){
    if(note.value===""){
        alert("Enter Some Data")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML = note.value
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }

    note.value=""
    savetask()
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savetask()
    }
})
function savetask(){
    localStorage.setItem("data",list.innerHTML)
}

function showtask(){
    list.innerHTML = localStorage.getItem("data")
}
showtask()