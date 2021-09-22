//const form = document.getElementById("email")
const email = document.getElementById("email")
const text = document.getElementById("text")
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/gm
const patternpsw = /^\w.{8,12}$/gm
const psw = document.getElementById('password')
const pswtext = document.getElementById('pswtext')
const btn = document.getElementById('btn')
const username = document.getElementById('username')


function mailValidation(){
  const mailData = document.getElementById("email").value
  if(mailData.match(pattern)){
    text.innerText="Valid email adress"
    text.classList.remove('invalid')
    text.classList.add('valid')
  }else{
    text.innerText="Invalid email adress"
    text.classList.remove('valid')
    text.classList.add('invalid')
  }
}
function pswValidation(){
  const pswData = psw.value
  if(pswData.match(patternpsw)){
    pswtext.innerText="Valid password"
    pswtext.classList.remove('invalid')
    pswtext.classList.add('valid')
  }else{
    pswtext.innerText="Invalid password"
    pswtext.classList.remove('valid')
    pswtext.classList.add('invalid')
  }
}

btn.addEventListener("click", ()=>{
  if(pswtext.classList=='valid' && text.classList== 'valid' && username.value != ""){
    alert('All input filed is correct')
  }else{
    alert('Some input field is not correct')
  }
})
