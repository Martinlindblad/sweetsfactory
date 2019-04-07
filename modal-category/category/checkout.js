
/*------------------ toggle shopping cart -------------------*/

// (function () {
//     const cartInfo = document.querySelector('.cart-info');
//     const cart = document.querySelector('.cart');

//     cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
// })();


/*---------------- checkout validation ---------------*/
$(function () {

    // Check firstname, lastname, address and city form
    $('#firstname,#lastname,#address,#city').on('blur', function () {
        // $(this).addClass('bg');
        let chose = $(this).val();
        if (chose === '') {
            $(this).prev().fadeIn();
            $(this).attr('data-valid', 'false');
        }
        else if (chose !== '') {
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });

    // Check Email form
    let mailerror = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $('#mail').on('blur', function () {
        let mail = $('#mail').val();
        if (mail === '') {
            $(this).prev().fadeIn();
            $(this).attr('data-valid', 'false');
        }
        else if (!mail.match(mailerror)) {
            $(this).prev().fadeIn().html("Check your email address");
            $(this).attr('data-valid', 'false');
        }
        else if (mail !== '') {
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });

    // Check phone number form
    $('#tel').on('blur', function () {
        let tel = $('#tel').val();
        if (tel.match(/[^0-9]+/)) {
            $(this).prev().fadeIn().html("Check your phone number");
            $(this).attr('data-valid', 'false');
        }
        if (tel.length < 10) {
            $(this).prev().fadeIn().html("10 characters minimum");
            $(this).attr('data-valid', 'false');
        }
        else {
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });

    // Check postcode form          
    $('#postcode').on('blur', function () {
        let postcode = $('#postcode').val();
        if (postcode === '') {
            console.log("inne");
            $(this).prev().fadeIn();
            $(this).attr('data-valid', 'false');
        }
        if (postcode.match(/[^0-9]+/)) {
            $(this).prev().fadeIn().html("Check your postcode");
            $(this).attr('data-valid', 'false');
        }
        else if (postcode !== '') {
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });


    //Loopar genom alla input fältet om de är fyllda
    //kollar om attribute data-valid = true eller false
    //Om det är false då visar man fel meddelande
    //Om alla är godkända då visas order confirm

    $('button[type="submit"]').on('click', function (e) {
        e.preventDefault();
        let trueCount = 0; // räknar hur många true
        let falseCount = 0; // räkn
        $("input").each(function (i) {
            let valid = $(this).attr('data-valid');
            if (valid === 'true') {
                $(this).prev().fadeOut(); // Ingen error message
                trueCount++;
            }
            else if (valid === 'false') {
                $(this).prev().fadeIn(); // Visa error message
                falseCount++;
            }
        });
        // Här kollar hur många trueCount och falseCount
        //Om alla 7 fältet är fyllda då gå vidare till modalSubmit() funktion vilket är  
        if (trueCount === 7) {
            false;
            modalSubmit();
        }
        else if (falseCount < 7) {
            true;
        }

    });

});



/*-------- Show modal order confirm page ---------------*/
function modalSubmit() {
    // Lägga till attribute värde #check-modal för att kunna öppna modal form
    $('button[type="submit"]').attr('data-target', '#check-modal');

    // Visa de valda produkterna via locakstorage
    getItem();

    function getItem() {

    }


    // caching modal ID av personal infomation
    let firstname = $('#firstName');
    let lasttname = $('#lastName');
    let email = $('#eMail');
    let tel = $('#telNmb');
    let address = $('#addRess');
    let cityname = $('#cityName');
    let postcode = $('#postCode');

    //Visa värdet på order confirm sidan
    firstname.html($('#firstname').val());
    lasttname.html($('#lastname').val());
    email.html($('#mail').val());
    tel.html($('#tel').val());
    address.html($('#address').val());
    cityname.html($('#city').val());
    postcode.html($('#postcode').val());

    
    // spara information i en array (personInfoArray)
    let personInfoArray = [
        ($('#firstname').val()),
        ($('#lastname').val()),
        ($('#mail').val()),
        ($('#tel').val()),
        ($('#address').val()),
        ($('#city').val()),
        ($('#postcode').val())
    ];

    personInfoLocalStorage(personInfoArray);
}

/* -------------- Lagra personal info(personInfoArray) i LocalStorage  --------------------*/
function personInfoLocalStorage(personInfoArray){

    //Konvertera en array till en JSON innan lagrar i LS
    let myList = JSON.stringify(personInfoArray);
    localStorage.setItem('personInfoArray', myList);
    console.table(localStorage);
    console.log(typeof myList);
}

/*------------- Hämta värdet från en personInfoArray till en thankyou.html sidan ------------*/
    $(function () {
        // Om det finns redan infomationen i personInfoArray när man kommer till en ny sidan.
        //Om man kan hämta en personInfoArray från LocalStorage
        //då konvertera tillbaka från en JSON-sträng till en array
        let personInfoArray = localStorage.getItem('personInfoArray') ? JSON.parse(localStorage.getItem('personInfoArray')) : []; 
        console.table(personInfoArray);
        
        let result = `<div class="row d-flex text-center mx-auto">`;
        personInfoArray.forEach(info => 
        result += `<div class="col-md-6 ">
                    <div class="row mx-auto boroderbtm">${info}</div></div>`
        );
        result += `<div class="col-md-6 mx-auto my-3">
                    <a href="index.html" id="backtohome" class="btn btn-secondary text-uppercase mx-3">back to home page</a></div></div></div>`;
        console.log(result);
        $('#thankyou-info').append().html(result);
        $('#orderName').append(personInfoArray[0]); // Visa förnamn på högstupp före 'Thank you....

});
    
   



