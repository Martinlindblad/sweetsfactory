// lagra produkter i LS
// $(function () {
//     let product = {
//         "sweets": [
//             { "picture": "" ,
//                "name": "", 
//                "price": "" , 
//                "qty": "" },
//             { "picture": "" ,
//                "name": "", 
//                "price": "" , 
//                "qty": "" },
//         ],
//         "totalAmount": [
//             {
//                 "total": "",
//                 "totalQty": ""
//             }
//         ]
//     };

//     let productList = JSON.stringify(product);
//     localStorage.setItem('product', productList);
// }); // ready
/* -------------end of test --------------------*/

$(function () {
    /*--------- Visa de valda produkterna på beställnings sidan -------*/
    //Hämta produkter från lokalStorage
    // Om det finns redan product i en array(product) när man kommer till beställnings sidan.
    //Om man kan hämta innehållet av product från LocalStorage
    //då konvertera tillbaka från en JSON-sträng till en array
    let productList = localStorage.getItem('sweets') ? JSON.parse(localStorage.getItem('sweets')) : [];
    let totalList = localStorage.getItem('totalt') ? JSON.parse(localStorage.getItem('totalt')) : [];

    console.table(productList);
    // console.log(totalList);
    // let productList = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
    // console.table(productList.sweets);
    // console.log(productList);
    // console.log(localStorage)
    
    let value = '';
    // let value = `<tr id="product">
    // <th scope="col"></th>
    // <th scope="col">item</th>
    // <th scope="col">price</th>
    // <th scope="col">qty</th>
    // </tr>`;
                            for (let i of productList){
                                value += `<tr>
                                  <td>${i}</td>
                                
                                </tr>`
                            }
    // productList.sweets.forEach(item =>
    //     value += productList.sweets
        // value += `<tr>
        // <td><img src="${item.picture}" alt="" width="110"></td>
        // <td>${item.name}</td>
        // <td>${item.price}</td>
        // <td>${item.qty}</td>
        // </tr>`
        // )
        // value += `<tr>
        // <td></td>
        // <td class="text-right">total</td>
        // <td >$ ${totalList}</td>
        // <td></td>
        // </tr>`
        
    //     // Skriva ut alla valda produkter
        $('table').append().html(value);

        
    /*---------------- checkout personlig uppgifter validation ---------------*/
    // Check firstname, lastname, address and city form
    $('#firstname,#lastname,#address,#city').on('blur', function () {
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

    }); // check button

}); // ready



/*-------- Show modal order confirm page ---------------*/
function modalSubmit() {
    // Lägga till attribute värde #check-modal för att kunna öppna modal form
    $('button[type="submit"]').attr('data-target', '#check-modal');

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
} // modal confirm page

/* -------------- Lagra personal info(personInfoArray) i LocalStorage  --------------------*/
function personInfoLocalStorage(personInfoArray) {

    //Konvertera en array till en JSON innan lagrar i LS
    let myList = JSON.stringify(personInfoArray);
    localStorage.setItem('personInfoArray', myList);
    
}

/*------------- Hämta värdet från en personInfoArray i LocalStorage till en thankyou.html sidan ------------*/
$(function () {
    //Om man kan hämta en personInfoArray från LocalStorage
    //då konvertera tillbaka från en JSON-sträng till en array
    let personInfoArray = localStorage.getItem('personInfoArray') ? JSON.parse(localStorage.getItem('personInfoArray')) : [];


    let result = `<div class="row d-flex text-center mx-auto">`;
    personInfoArray.forEach(info =>
        result += `<div class="col-md-6 ">
                    <div class="row mx-auto boroderbtm">${info}</div></div>`
    );
    result += `<div class="col-md-6 mx-auto my-3">
                    <a href="index.html" id="backtohome" class="btn btn-secondary text-uppercase mx-3">back to home page</a></div></div></div>`;
    $('#thankyou-info').append().html(result);
    $('#orderName').append(personInfoArray[0]); // Visa förnamn på högstupp före 'Thank you....

    $('#backtohome').on('click', function(){
         localStorage.clear();
    })

});





