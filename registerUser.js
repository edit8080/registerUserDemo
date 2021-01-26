const form = document.getElementById("registerForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const passwordCheck = document.getElementById("passwordCheck");
var isValid;

function showError(errInput, err) {
  const formControl = errInput.parentElement;
  const errMessage = formControl.querySelector("small");

  errInput.style.border = "1px solid red";
  errMessage.style.color = "red";
  errMessage.innerHTML = err;
  isValid = false;
}
function clear(input) {
  const formControl = input.parentElement;
  const errMessage = formControl.querySelector("small");

  input.style.border = "1px solid black";
  errMessage.innerHTML = "";
}
// 이름 유효성 검증
function checkName(nameInput) {
  var nameReg = /^[a-zA-Zㄱ-힣\s]+$/; // 영문자, 한글, 공백만 허용
  var name = nameInput.value;

  clear(nameInput);
  // 이름을 입력하지 않으면
  if (name.length == 0) {
    showError(nameInput, "이름을 입력하세요");
  }
  // 이름이 문자로 이루어져있지 않으면
  else if (!nameReg.test(name)) {
    showError(nameInput, "유효하지 않은 이름입니다");
  }
}
// 이메일 유효성 검증
function checkEmail(emailInput) {
  var emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  var email = emailInput.value;

  clear(emailInput);
  // 이메일을 입력하지 않으면
  if (email.length == 0) {
    showError(emailInput, "이메일 주소를 입력하세요");
  }
  // 이메일 형식을 준수하지 않으면
  else if (!emailReg.test(email)) {
    showError(emailInput, "유효하지 않은 이메일입니다");
  }
}
// 비밀번호 유효성 검증
function checkPassword(pwInput, pwCheckInput) {
  var pw = pwInput.value;
  var pwCheck = pwCheckInput.value;

  clear(pwInput);
  clear(pwCheckInput);
  // 비밀번호와 비밀번호 확인이 서로 다르면
  if (pw != pwCheck) {
    showError(pwCheckInput, "비밀번호가 다릅니다");
  }

  // 비밀번호를 입력하지 않으면
  if (pw.length == 0) {
    showError(pwInput, "비밀번호를 입력하세요");
  }
  // 비밀번호 확인을 입력하지 않으면
  if (pwCheck.length == 0) {
    showError(pwCheckInput, "비밀번호 확인란을 입력하세요");
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  isValid = true;

  checkName(userName);
  checkEmail(userEmail);
  checkPassword(userPassword, passwordCheck);

  if (isValid) {
    alert("회원가입이 완료되었습니다.");
  }
});
