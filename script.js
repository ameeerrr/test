import translaition from "./translaition.js";
let myToggle = document.querySelector(".toggle-menu")
let myList = document.querySelector("ul")
let myBtn= document.querySelector(".btn")

myToggle.addEventListener("click",()=>{
myToggle.classList.toggle("menu-active")
myList.classList.toggle("menu-active")
myBtn.classList.toggle("menu-active")
})
const form =document.querySelector("form")
const from_name =document.getElementById("name")
const email_id= document.getElementById("email_id")
const message = document.getElementById("message")
const serviceID ="service_4772wjb";
const templateID ="template_fpltdqx";
const publicKey = "sOu90vClYffFwhieC";
emailjs.init(publicKey)

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    const inputData = {
        from_name:from_name.value,
        email_id:email_id.value,
        message:message.value
    }
    emailjs.send(serviceID,templateID,inputData).then(
        ()=> {
            from_name.value="";
            email_id.value="";
            message.value="";
            alert("Your message sent successfully!!")
            console.log("succes");
        },
        (error)=> {
            console.log(error);
        }
    )
})

//////////////////////////////////////////////////////////

const lngSelector =document.querySelector("select")
lngSelector.addEventListener("change",(e)=>{
setLang(e.target.value);
localStorage.setItem("lang",e.target.value);
})
document.addEventListener("DOMContentLoaded",()=> {
    
    setLang(localStorage.getItem("lang"));
})
const setLang = (lang) => {
const elements = document.querySelectorAll("[data-i18n]");
elements.forEach((element)=> {
    const translaitionKey = element.getAttribute("data-i18n");
    element.textContent=translaition[lang][translaitionKey]
});
 if (lang==="ar"){
    document.dir="rtl"
}else {
    document.dir="ltr"
}
}