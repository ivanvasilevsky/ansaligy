const btn_menu = document.getElementById('menu_btn');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

var elm = document.getElementById("menu_btn");
if (elm) elm.onclick = function (event) {
	menu.classList.toggle('active')
	nav.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};

document.body.addEventListener("click", (e) => {
	menu.classList.remove('active')
	nav.classList.remove('active')

	e.stopPropagation()
});

menu.addEventListener("click", (e) => {
	e.stopPropagation()
});
const btn_search = document.getElementById('search_btn');
const search = document.getElementById('search');
const search_cross = document.getElementById('search_cross');

var elm = document.getElementById("search_btn");
if (elm) elm.onclick = function (event) {
	search.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};

var elm = document.getElementById('search_cross');
if (elm) elm.onclick = function (event) {
	search.classList.remove('active')

	if (event.target !== event.currentTarget) {
		return;
	}

	event.stopPropagation()
};
const basket_btn = document.getElementById('basket_btn');
const basket = document.getElementById('basket');
const basket_cross = document.getElementById('basket_cross');
const body = document.querySelector('body');


var elm = document.getElementById("basket_btn");
if (elm) elm.onclick = function (event) {
	basket.classList.toggle('active')
	body.classList.toggle('no-scroll')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};

var elm = document.getElementById("basket_cross");
if (elm) elm.onclick = function (event) {
	basket.classList.remove('active')
	body.classList.remove('no-scroll')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};

document.body.addEventListener("click", (e) => {
	basket.classList.remove('active')
	body.classList.remove('no-scroll')

	e.stopPropagation()
});

basket.addEventListener("click", (e) => {
	e.stopPropagation()
});
$(".polzunok-5").slider({
  min: 1000,
  max: 50000,
  values: [13000, 40000],
  range: true,
  animate: "fast",
  slide: function (event, ui) {
  $(".polzunok-input-5-left").val(ui.values[0]);
  $(".polzunok-input-5-right").val(ui.values[1]);
  }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function () {
  var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
  opt_left = $(".polzunok-5").slider("option", "min"),
  where_right = $(".polzunok-5").slider("values", 1),
  input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
  opt_right = $(".polzunok-5").slider("option", "max"),
  where_left = $(".polzunok-5").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
  input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
    input_right = 0;
  }
  $(".polzunok-input-5-left").val(input_left);
  $(".polzunok-input-5-right").val(input_right);
    if (input_left != where_left) {
  $(".polzunok-5").slider("values", 0, input_left);
  }
    if (input_right != where_right) {
  $(".polzunok-5").slider("values", 1, input_right);
  }
});


const filter_arrow = document.getElementById('filter_arrow');
const filter = document.getElementById('filter');
const filter_tab = document.getElementById('filter_tab');


var elm = document.getElementById("filter_tab");
if (elm) elm.onclick = function (event) {
  filter_arrow.classList.toggle('active')
  filter.classList.toggle('active')

  if (event.target !== event.currentTarget) {
    return;
  }
  event.stopPropagation()
};
$('.reviews-slide').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 10000,

	responsive: [
		{
			breakpoint: 760,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});
$('#thumbs').delegate('img', 'click', function () {
	$('#largeImage').attr('src', $(this).attr('src').replace('thumb', 'large'));
});