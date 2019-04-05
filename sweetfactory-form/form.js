
// let phoneResult = phone.test(phoneNumber);

function validateEmail(email) {
  email = $("#email").val();
  let emailVal = /^([a-zA-Z0-9_\-\.]+)@([a-zA -Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return emailVal.test(email);
}


function cssEmail() {
  
  let emailValue = $('#email').val();
  console.log(emailValue);
  
  
  if(validateEmail(emailValue)) {
    
    
    // $('#email').css("box-shadow", "green 1px");
    $("#email").css('border-color', 'green');
    $('#email').addClass("green");
    
  }
  else {
    $("#email").css('border-color', 'red');
    $('#email').addClass("red"); 
    
    
  
  }
  return false;
  
}


// _______________NAMN _____________


function validateName(namn) {
  namn = $("#Name").val();
  let nameVal = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  
  return nameVal.test(namn)
}


function cssName() {
  let namnValue = $('#Name').val();
  console.log(namnValue);
  
  if(validateName(namnValue)) {
    $("#Name").css('border-color', 'green');
    $('#Name').addClass("green");
    
  }else {
    
  
    $("#Name").css('border-color', 'red');
    $('#Name').addClass("red");
  }
  return false;
  
}
// _______________Phone_____________


function validatePhone(phone) {
  phone = $("#phone").val();
  let phoneVal = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  
  return phoneVal.test(phone)
}

function cssPhone() {
  let phoneValue = $('#namn').val();
  console.log(phoneValue);
  
  if(validatePhone(phoneValue)) {
    $("#phone").css('border-color', 'green');
    $('#phone').addClass("green");
    
  }else {
    
    $("#phone").css('border-color', 'red');
    $('#phone').addClass("red");
  }
  return false;
  
}






$(document).ready(function () {

  $('#email').on('input', function() {

    console.log(validateEmail()) // email
    console.log(cssEmail()); // email
  });
  $('#Name').on('input', function() {
    
    console.log(validateName()); // namn
    console.log(cssName()); // name
  });
  $('#phone').on('input', function() {
    
    console.log(validatePhone()); // namn
    console.log(cssPhone()); // name
  });
  
  
  
}); // Ready

