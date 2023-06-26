let formel=document.querySelector("form");


formel.addEventListener('click',(event)=>{
    alert('form')
    console.log(event.target.innerHTML);
})