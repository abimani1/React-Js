// const formEl=document.forms.signUp;
// const submit_but=document.getElementById("submit-but");
// const errorElement=document.querySelectorAll('.error-box .error')
// const{userName,email,password}=formEl.elements
// const errorMessage=Array.from(document.getElementsByClassName("error"));
// console.log(errorElement);
// const error=(element)=>{
//     element.innerHTML='error'
// }
// const handlingEvent=(event)=>{
//     event.preventDefault()    
// if(userName.value=='',email.value=='',password.value==''){
//     // errorMessage[0].innerHTML='hai'
//     errorMessage.forEach(error)
//     }
//     else{
//         document.getElementById('error-userName').innerHTML=''
//         document.getElementById('error-email').innerHTML=''
//         document.getElementById('error-password').innerHTML=''
//     }
//     // alert(userName.value)
// }
// // errorText.textContent='Hai'
// submit_but.addEventListener("click",handlingEvent)

// document.getElementById('demo').classList.add('error')

// const element = document.getElementById('box'); // find the element

// // Calculating dimensions
// const width = element.offsetWidth;
// const height = element.offsetHeight;
// const clientWidth = element.clientWidth;
// const clientHeight = element.clientHeight;

// // window.document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// // console.log(window.document.cookie.);

// const widths=window.innerWidth
// const hights=window.innerHeight
// console.log(hights);

// const bio={
//     name:'mani',
//     age:'25'
// } 

// let person=sessionStorage.setItem('name',bio)
// let bioObj=sessionStorage.getItem('name')
// console.log(bioObj);

const div=document.querySelector('div')

div.addEventListener('click',(event)=>{
    const traget=event.target
    if(traget.tagName==="BUTTON"){
        console.log(traget.innerText);
    }
})

const a=document.querySelector('div')
const c=document.getElementsByClassName('form-inner-box')
console.log(a);
console.log(c);