// $(".header__nav-menu-wrap").mouseover(function(){
//     $(".menu__nav").fadeIn();
// });

// $(".menu__nav").mouseleave(function(){
//     $(".menu__nav").fadeOut();
// });

$(".header__nav-menu-wrap").click(function () {
  $(".menu__nav").toggle();
});

$(".modal__overlay").click(function () {
  $(".main__modal").hide();
});

$(".sale-off__close").click(function () {
  $(".main__modal").hide();
});

$(".product__panel-item").click(function () {
  $(location).attr("href", "product.html");
});

// $(".product__main-img-list img").click(function(){
//     $("product__main-img-primary img").attr('src','product.html');
// });

// $(".header__nav-menu-wrap").click(function(){
//     $(".menu__nav").hide();
// });
//Get the button
var mybutton = document.getElementById("myBtn-scroll");

// Khi người dùng cuộn xuống 20px từ đầu tài liệu, hiển thị nút
window.onscroll = function () {
  scrollFunction();
};
$(".product__main-info-cart-btn").click(function () {
  $(location).attr("href", "cart.html");
});
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Khi người dùng click vào button thì cuộn lên đầu tài liệu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
