var loop;
var selectedObj ;
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loop = JSON.parse(this.responseText);

            loopthrough();
        }
    };
    xhttp.open("GET", "ecart.json", true);
    xhttp.send();
}
loadDoc();
var change = '';

function loopthrough() {
    for (i = 0; i < loop.length; i++) {
        if (ids == loop[i].id) {
            selectedObj = loop[i];
            bindToHtml();
        }
    }
}

function bindToHtml() {
    change += '<div class="inlinediv fle">' +
                ' <div class="imgdiv bor">' +
                '<img src="' + selectedObj.images + '" title="Lenevo" class="bigimg">' +
                '</div>' +
                '<div>';
                if(JSON.parse(localStorage.getItem('itsId')) && JSON.parse(localStorage.getItem('itsId')).includes(selectedObj.id)){
                    change += '<button class="addcart size2" id="removecart"><i class="fa fa-shopping-cart rup" aria-hidden="true"></i> REMOVE</button>';
                }
            else {
                change += '<button class="addcart size2" id="target"><i class="fa fa-shopping-cart rup" aria-hidden="true"></i> ADD TO CART</button>';
            }


            change += '<button class="buy size2"><i class="fa fa-bolt rup" aria-hidden="true"></i> BUY NOW</button>' +
                '</div>' +
                '</div>' +
                '<div class="inlinediv1">' +
                '<div>' +
                '<h3 class="size3">' + selectedObj.name + '' +
                '<p><button class="but" >' + selectedObj.rating + '<i class="fa fa-star" aria-hidden="true"></i></button></p>' +
                '<p>' +
                '<span class="sp "><i class="fa fa-inr rup" aria-hidden="true"></i>45000</span>' +
                '<span class="mrp"><i class="fa fa-inr rup" aria-hidden="true"></i>50000</span>' +
                '<span class="dis">' + selectedObj.dis + '% off</span></p>' +
                '<h3 class="size3">Available Offers</h3>';
            for (j = 0; j < selectedObj.Availableoffer.length; j++) {
                if (j != 3 && j != 4) {
                    change += '<p><span class="size1"><i class="fa fa-tag g" aria-hidden="true"></i> Bank Offer</span> ' + selectedObj.Availableoffer[j] + '<span class="b">T&C</span></p>'
                }
                if (j == 3) {
                    change += '<p><span class="size1"><i class="fa fa-refresh g" aria-hidden="true"></i> Get upto </span> ' + selectedObj.Availableoffer[j] + ' <span class="b">Buy with Exchange </span></p>'
                }
                else if (j == 4) {
                    change += '<p><span class="size1"><i class="fa fa-calendar-check-o g" aria-hidden="true"></i> No cost EMI </span> ' + selectedObj.Availableoffer[j] + '<span class="b">View Plans</span></p>'
                }
            }
            //   '<p><span class="size1"><i class="fa fa-tag g" aria-hidden="true"></i> Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span class="b">T&C</span></p>'+
            //   '<p><span class="size1"><i class="fa fa-tag g" aria-hidden="true"></i> Bank Offer</span> 5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards <span class="b">T&C</span></p>'+
            //   '<p><span class="size1"><i class="fa fa-tag g" aria-hidden="true"></i> Bank Offer</span> Extra 5% off* with Axis Bank Buzz Credit Card <span class="b">T&C</span></p>'+
            //   '<p><span class="size1"><i class="fa fa-refresh g" aria-hidden="true"></i> Get upto </span> ₹8400 off on exchange <span class="b">Buy with Exchange </span></p>'+
            //   '<p><span class="size1"><i class="fa fa-calendar-check-o g" aria-hidden="true"></i> No cost EMI </span> ₹1,583/month. Standard EMI also available <span class="b">View Plans</span></p>'+
            change += '<div class="ds">' +
                '<div class="dslef size1 colr">' +
                ' Delivery' +
                '</div>' +
                '<div class="dsrg">' +
                '<div class="flex">' +
                '<div>+<i class="fa fa-map-marker rup" aria-hidden="true"></i></div>' +
                '<div>' +
                '<form autocomplete="on">' +
                '<input type="text" maxlength="6" placeholder="Enter pin code" class="deli">' +
                ' </form>' +
                '</div>' +
                '</div>' +
                '<div>' +
                '<span class="size">Delivery by Tommorrow,Sunday</span>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="ds">' +
                '<div class="dslef">' +
                '<h5><span class="size1 colr">Highlights </span></h5>' +
                '</div>' +
                '<div>' +
                '<p><ul>';
            for (let j = 0; j < selectedObj.Highlights.length; j++) {
                change += '<li class="size">' + selectedObj.Highlights[j] + '</li>'
            }
            //  '<li class="size">Pre-installed Genuine Windows 10 OS</li>'+
            //      '<li class="size"> Laptop without Optical Disk Drive</li>'+
            //      '<li class="size">15.6 inch HD LED Backlit Anti-glare TN Display (220 nits Brightness)</li>'+
            change += '</ul></p>' +
                '</div>' +
                '</div>' +
                '<div class="ds">' +
                '<div class="dslef">' +
                '<h5><span class="size1 colr">Easy Payment Options</span></h5>' +
                '</div>' +
                '<div class="dsrg">' +
                '<p><ul>' +
                '<li class="size">No cost EMI starting from ₹1,583/month</li>' +
                '<li class="size"> on Delivery</li>' +
                '<li class="size">Net banking & Credit/ Debit/ ATM card</li>' +
                '</ul>' +
                ' </p>' +
                '</div>' +
                '</div>' +
                '<div class="ds">' +
                ' <div class="dslef">' +
                '<h5><span class="size1 colr">Descriptions </span></h5>' +
                '</div>' +
                '<div class="dsrg size">' +
                '<p>Do you carry your work with you wherever you go? Are you looking for a new laptop to support your hectic lifestyle? If yes, this laptop with a thickness of ' +
                '19.9 mm and weight of 1.85 Kg is worthy of your consideration. It features an AMD A6-9225 processor that is paired with 4 GB of RAM.</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'


            document.getElementById('typekara').innerHTML = change;
            if(JSON.parse(localStorage.getItem('itsId')) && JSON.parse(localStorage.getItem('itsId')).includes(selectedObj.id)){
                document.getElementById('removecart').addEventListener('click', removecart);
            }else {

                document.getElementById('target').addEventListener('click', giveId);
            }
            document.getElementById('cart').innerHTML = callCart();

}

var getQueryString = function (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};
var ids = getQueryString('id');


function removecart() {
    var arr = JSON.parse(localStorage.getItem('itsId'));
    var index = arr.indexOf(ids);
    if(index > -1){
        arr.splice(index, 1);
        localStorage.setItem('itsId', JSON.stringify(arr));
        change = '';
        bindToHtml();
    }
}


function giveId() {
    var arr = [];
    let x = localStorage.getItem('itsId');
    if (!x) {
        arr.push(ids);
        localStorage.setItem('itsId', JSON.stringify(arr));
        change = '';
        bindToHtml();
    } else {
        var ret = JSON.parse(x);
        if (!ret.includes(ids)) {
            var z = ret.push(ids);
            localStorage.setItem('itsId', JSON.stringify(ret));
            change = '';
            bindToHtml();
        }
    }
}

function callCart() {
    let cart =  JSON.parse(localStorage.getItem('itsId'));
    let give = cart.length;
    return give;
  }
  







