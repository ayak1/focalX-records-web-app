let emailValue = document.querySelector("form .email").value;
let passwordValue = document.querySelector("form .password input").value;

const ValidateEmail = (value) =>{

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.match(mailformat))
    {
        console.log('true');
        // window.location.href = '../../frame2/frame2.html'
        // return true;
    }
    else {
        console.log('false');
    }
}
let submit = document.querySelector('.submit')
submit.addEventListener('click' , ValidateEmail)