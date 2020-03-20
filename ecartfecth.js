var loop;

function sumeet() {
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
sumeet();

var bind2 = '';

function bind() {

  for (i = 0; i < loop.length; i++) {
    bind2 += '<div class="main1 padding">' +
      '<a href="#" class="anchor" class="link">' +
      '<div class="imagediv">' +
      '<a href="https://sumeet2000.github.io/Ecart/description.html?id=' + loop[i].id + '" title="laptop" class="link">' +
      '<img src="' + loop[i].images + '" alt="Lenevo-Ideapad" class="image">' +
      '</a>' +
      '</div>' +
      '<div class="textdiv">' +
      '<a href="http://sumeet2000.github.io/Ecart/description.html?id=' + loop[i].id + '" title="laptop" class="link">' +
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

  document.getElementById("a1").innerHTML = bind2;
  document.getElementById('searchButton').addEventListener('click', filterAccordingToText);
  document.getElementById("cart").innerHTML = callCart();
  // document.getElementById('searchBar').addEventListener('change', filterAccordingToText);
}
function filterAccordingToText() {
  let value = document.getElementById('searchBar').value;
  let filteredArray = [];
  if (value.trim()) {
    filteredArray= loop.filter((obj)=>{
      // console.log(obj.name, value, (obj.name).toLowerCase().includes((value).toLowerCase()))
      return (obj.name).toLowerCase().includes((value).toLowerCase());
    });
    bind2 = '';
    newbind(filteredArray);
  }else{
    bind2 = '';
    newbind(loop);
  }
  
}
function newbind(newLoop) {
  for (i = 0; i < newLoop.length; i++) {
    bind2 += '<div class="main1 padding">' +
      '<a href="#" class="anchor" class="link">' +
      '<div class="imagediv">' +
      '<a href="http://sumeet2000.github.io/Ecart/description.html?id=' + newLoop[i].id + '" title="laptop" class="link">' +
      '<img src="' + newLoop[i].images + '" alt="Lenevo-Ideapad" class="image">' +
      '</a>' +
      '</div>' +
      '<div class="textdiv">' +
      '<a href="http://sumeet2000.github.io/Ecart/description.html?id=' + newLoop[i].id + '" title="laptop" class="link">' +
      '<h3 class="text">' + newLoop[i].name + '</h3>' +
      '</a>' +
      '</div>' +
      '<div class="textdiv">' +
      '<h3 class="text text1">15.6 inch, Platinum Grey, 1.85 kg</h3>' +
      '</div>' +
      '<div class="textdiv">' +
      '<a href="description.html" title="laptop" class="link">' +
      '<button class="but">' +
      '' + newLoop[i].rating + '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</button>' +
      '</a>' +
      '</div>' +
      '<div class="textdiv">' +
      '<a href="description.html" title="laptop" target="blank" class="link">' +
      '<span class="sp"><i class="fa fa-inr rup" aria-hidden="true"></i>' + sp(newLoop[i].mrp, newLoop[i].dis) + '</span>' +
      '<span class="mrp"><i class="fa fa-inr rup" aria-hidden="true"></i>' + newLoop[i].mrp + '</span>' +
      '<span class="dis"> ' + newLoop[i].dis + '%off</span>' +
      '</a>' +
      '</div>' +
      '</a>' +
      '</div>'

  }

  document.getElementById("a1").innerHTML = bind2;
}
function callCart() {
  let cart =  JSON.parse(localStorage.getItem('itsId'));
  let give = cart.length;
  return give;
}

function sp(mrp, off) {
  return Math.round(mrp - ((off * mrp) / 100))
}


