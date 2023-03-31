// function submitForm() {
//   const usernameInput = document.getElementById("username");
//     const username = usernameInput.value;
//       // const passwordInput = document.getElementById("password");
//   // const password = passwordInput.value;
//   const errorMessage = document.getElementById("error-message");
//   // const errorMessage2 = document.getElementById("error-message2");
//   if(username.trim() === "" ) {
//     errorMessage.innerText = "يرجى تعبئة حقل اسم المستخدم";
//     // errorMessage2.innerText = "يرجى تعبئة كلمة المرور";
//   } else {
//     // Perform form submission
//     // Do more processing here
//     console.log("تم إرسال النموذج بنجاح");
//   }
// }
function submitForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (password.length < 6  && username.trim()==="") {
    alert("الرجاء تعبأت جميع البيانات");
    return false;
  }
   else if  (username.trim() === "") {
        alert("الرجاء ادخال اسم المستخدم لاكمال العملية ");
  }
     else if  (password.trim()==="" && password.trim()==="") {
        alert("الرجاء ادخال كلمة السر الصحيحة  لاكمال العملية ");
  }
  else {
    console.log("ممتاز")
  return true;
  }
}

