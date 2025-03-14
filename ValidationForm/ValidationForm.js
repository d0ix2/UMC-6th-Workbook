let name_fail = document.getElementById("name_fail");
let name_success = document.getElementById("name_success");
let email_fail = document.getElementById("email_fail");
let email_success = document.getElementById("email_success");
let age_fail = document.getElementById("age_fail");
let age_success = document.getElementById("age_success");
let age_19 = document.getElementById("age_19");
let pwd_fail = document.getElementById("pwd_fail");
let pwd_12 = document.getElementById("pwd_12");
let pwd_success = document.getElementById("pwd_success");
let pwd_re_fail = document.getElementById("pwd_re_fail");
let pwd_re_success = document.getElementById("pwd_re_success");

let n4me = document.getElementById("name");
let e_mail = document.getElementById("e_mail");
let age = document.getElementById("age");
let pwd = document.getElementById("pwd");
let pwd_re = document.getElementById("pwd_re");
const button = document.getElementById("submit");

let name_right, email_right, age_right, pwd_right, pwd_re_right;

n4me.onkeyup = function() {
    if (isStr(n4me.value)) {
        name_fail.classList.add("hide");
        name_success.classList.remove("hide");
        console.log("이름 입력 조건 만족");
        name_right = true;
    } else {
        name_success.classList.add("hide");
        name_fail.classList.remove("hide");
        console.log("이름 입력 조건 불만족");
    }
}

e_mail.onkeyup =function() {
    if (isEmailRight(e_mail.value)) {
        email_fail.classList.add("hide");
        email_success.classList.remove("hide");
        console.log("이메일 입력 조건 만족");
        email_right = true;
    } else {
        email_fail.classList.remove("hide");
        email_success.classList.add("hide");
        console.log("이메일 입력 조건 불만족");
    }
}

age.onkeyup = function() {
    if (isRightAge(age.value) && is19up(age.value)) {
        age_fail.classList.add("hide");
        age_19.classList.add("hide");
        age_success.classList.remove("hide");
        console.log("나이 조건 만족");
        age_right = true;
    } else if (isRightAge(age.value) && !is19up(age.value)){
        age_fail.classList.add("hide");
        age_19.classList.remove("hide");
        age_success.classList.add("hide");
        console.log("나이 19살 미만");
    } else {
        age_fail.classList.remove("hide");
        age_19.classList.add("hide");
        age_success.classList.add("hide");
        console.log("나이 양식 이상");
    }
}

pwd.onkeyup = function() {
    if (isRightPwdLength(pwd.value) && strongPwd(pwd.value)) {
        pwd_success.classList.remove("hide");
        pwd_fail.classList.add("hide");
        pwd_12.classList.add("hide");
        console.log("비밀번호 형식 일치");
        pwd_right = true;
    } else if (!isRightPwdLength(pwd.value) && strongPwd(pwd.value)) {
        pwd_success.classList.add("hide");
        pwd_12.classList.remove("hide");
        pwd_fail.classList.add("hide");
        console.log("비밀번호 길이 초과");
    } else {
        pwd_success.classList.add("hide");
        pwd_fail.classList.remove("hide");
        console.log("비밀번호 형식 불일치");
    }
}

pwd_re.onkeyup = function() {
    if (isRight(pwd.value, pwd_re.value)) {
        pwd_re_success.classList.remove("hide");
        pwd_re_fail.classList.add("hide");
        console.log("비밀번호 일치");
        pwd_re_right = true;
    } else {
        pwd_re_success.classList.add("hide");
        pwd_re_fail.classList.remove("hide");
        console.log("비밀번호 불일치");
    }
}

button.onclick = function() {
    if (n4me.value !== "" && email.value !== "" && age.value !== "" && pwd.value !== "" && pwd_re.value !== ""){
        return true;
    } else {
        return false;
    }
}

function isEmailRight(value) {
    var rightEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (rightEmail.test(value)) {
        return true;
    } else {
        return false;
    }
}

function isStr(value) {
    return (typeof value === 'string' && value !== "");
}

function isRightPwdLength(pwd) {
    if (pwd.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function strongPwd(pwd) {
    var rightPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/;
    if (rightPwd.test(pwd)){
        return true;
    } else {
        return false;
    }
}

function isRightAge(age) {
    if (age >= 0 && age % 1 === 0) {
        return true
    } else {
        return false;
    }
}

function is19up(age) {
    if (age >= 19){
        return true;
    }
}

function isRight(pwd1, pwd2) {
    if (pwd1 === pwd2) {
        return true;
    } else {
        return false;
    }
}

const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal_body");
const btn_close = document.querySelector(".close");

button.addEventListener("click", ()=>{
    if (name_right && email_right && age_right && pwd_right && pwd_re_right) {
        modal.style.display = "flex";
        modal_body.style.display = "block";
     }
});

btn_close.addEventListener("click", ()=>{
    modal.style.display = "none";
    modal_body.style.display = "none";
    console.log("모달 닫기");
});