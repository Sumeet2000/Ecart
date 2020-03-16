var loop;
var cartItems = localStorage.getItem('itsId');
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loop = JSON.parse(this.responseText);
            bind();
        }
    };
    xhttp.open("GET", "ecart.json", true);
    xhttp.send();
}

loadDoc();

var bind2 = '';

function sp(mrp,off) {
    return Math.round(mrp-((off*mrp)/100))
  }

function bind() {
    console.log(JSON.parse(cartItems), loop)
    if(JSON.parse(cartItems).length == 0){
        bind2 += '<div class=" main">'
            +'<div><h1>Your cart is empty</1></div>'+
            '</div>';
    }else {
        for (let i = 0; i < loop.length; i++) {
            if (JSON.parse(cartItems) && JSON.parse(cartItems).includes(loop[i].id)) {
                bind2 += '<div class="main1 padding">' +
                    '<a href="#" class="anchor" class="link">' +
                    '<div class="imagediv">' +
                    '<a href="http://127.0.0.1:5500/description.html?id=' + loop[i].id + '" title="laptop" class="link">' +
                    '<img src="' + loop[i].images + '" alt="Lenevo-Ideapad" class="image">' +
                    '</a>' +
                    '</div>' +
                    '<div class="textdiv">' +
                    '<a href="description.html" title="laptop" target="blank" class="link">' +
                    '<h3 class="text">' + loop[i].name + '</h3>' +
                    '</a>' +
                    '</div>' +
                    '<div class="textdiv">' +
                    '<h3 class="text text1">15.6 inch, Platinum Grey, 1.85 kg</h3>' +
                    '</div>' +
                    '<div class="textdiv">' +
                    '<a href="description.html" title="laptop" target="blank" class="link">' +
                    '<button class="but">' +
                    '' + loop[i].rating + '<i class="fa fa-star" aria-hidden="true"></i>' +
                    '</button>' +
                    '</a>' +
                    '</div>' +
                    '<div class="textdiv">' +
                    '<a href="description.html" title="laptop" target="blank" class="link">' +
                    '<span class="sp"><i class="fa fa-inr rup" aria-hidden="true"></i>' + sp(loop[i].mrp, loop[i].dis) + '</span>' +
                    '<span class="mrp"><i class="fa fa-inr rup" aria-hidden="true"></i>' + loop[i].mrp + '</span>' +
                    '<span class="dis"> ' + loop[i].dis + '%off</span>' +
                    '</a>' +
                    '</div>' +
                    '</a>' +
                    '</div>'
            }
    
        }
    }

    document.getElementById("a1").innerHTML = bind2;
}
