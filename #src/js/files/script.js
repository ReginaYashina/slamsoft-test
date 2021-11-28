// WebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// чекбоксы
function checkboxActive() {
	let mainChk = document.getElementById('main-chk');
	let chk = document.querySelectorAll('.check__input');
	mainChk.addEventListener('change', function () {
		if (this.checked) {
			chk.forEach(function (item) {
				item.checked = true;
			})
		} else {
			chk.forEach(function (item) {
				item.checked = false;
			})
		}
	})
	chk.forEach(function (item) {
		item.addEventListener('change', function () {
			let checkList = document.querySelectorAll('input[class="check__input"]:checked').length;
			let commonList = document.querySelectorAll('.check__input').length;
			if (checkList < commonList) {
				mainChk.checked = false;
			}
		})
	})
}

// блок с иконками
function infoActive() {
	let list = document.querySelectorAll('.table__line--c1 p');
	let infoList = document.querySelectorAll('.info');
	for (var i = 0; i < list.length; i++) {
		addClassOnClick(i);
	}
	function addClassOnClick(nmbr) {
		list[nmbr].addEventListener('click', function () {
			infoList[nmbr].classList.toggle('active');
			let infoHeight = infoList[nmbr].offsetHeight;
			list[nmbr].closest('.table__line--c1').style.marginBottom = infoHeight + 'px';
			list[nmbr].closest('.table__line--c1').classList.toggle('active');
		});
	}

	// console.log(list);
}
// подсветка иконок
function iconActive() {
	let iconsOne = document.querySelectorAll('.info__icon--1');
	let iconsTwo = document.querySelectorAll('.info__icon--2');
	let iconsThree = document.querySelectorAll('.info__icon--3');

	iconsOne.forEach(function (item) {
		item.addEventListener('mouseover', function () {
			iconsOne.forEach(function (el) {
				el.classList.add('active');
			})
		})
		item.addEventListener('mouseout', function () {
			iconsOne.forEach(function (el) {
				el.classList.remove('active');
			})
		})
	})
	iconsTwo.forEach(function (item) {
		item.addEventListener('mouseover', function () {
			iconsTwo.forEach(function (el) {
				el.classList.add('active');
			})
		})
		item.addEventListener('mouseout', function () {
			iconsTwo.forEach(function (el) {
				el.classList.remove('active');
			})
		})
	})
	iconsThree.forEach(function (item) {
		item.addEventListener('mouseover', function () {
			iconsThree.forEach(function (el) {
				el.classList.add('active');
			})
		})
		item.addEventListener('mouseout', function () {
			iconsThree.forEach(function (el) {
				el.classList.remove('active');
			})
		})
	})
}

// асинхронная загрузка
window.onload = function () {
	let loader = document.getElementById('preloader');
	async function getTable() {
		let table = document.querySelector('.table');
		let response = await fetch('table.html');
		let content = await response.text();
		table.innerHTML += content;
		checkboxActive();
		infoActive();
		iconActive()
	}
	setTimeout(function () {
		loader.classList.add('preloader-hidden');
		getTable();
	}, 4000);
};