const ACTIVECLASS = 'active';
const image = document.querySelector('.slider');

const HELLOACTIVECLASS = 'hello-text-active';
const hello_text = document.querySelector('.hello-text')

const open_all_tabs = document.querySelector('.open-all-tabs')
const TABACTIVECLASS = 'tab-active';

function removeActiveClass() {
	const elm = document.querySelector(`.active`);
	if (elm) {
		elm.classList.remove(ACTIVECLASS);
	}
}

function addHelloClass() {
	const elm = document.querySelector(`.hello-text-active`);
	if (elm) {
		elm.classList.remove(HELLOACTIVECLASS);
	}
	else {
		hello_text.classList.add(HELLOACTIVECLASS);
	}
}

function addTabClass() {

	const elm = document.querySelector(`.tab-active`);
	if (elm) {
		let style = document.createElement('style');
		style.innerHTML = '#sidebar button { width: 50px; color: transparent; }';
		document.head.appendChild(style);

		elm.classList.remove(TABACTIVECLASS);
	}
	else {
		let style = document.createElement('style');
		style.innerHTML = '#sidebar button { width: 190px; color: black; }';
		document.head.appendChild(style);

		open_all_tabs.classList.add(TABACTIVECLASS);
	}
}

function addClass() {
	const elm = document.querySelector(`.active`);
	if (elm) {
		elm.classList.remove(ACTIVECLASS);
	}
	else {
		image.classList.add(ACTIVECLASS);
	}
}

image.addEventListener('click', addClass);

hello_text.addEventListener('mouseover', addHelloClass);

open_all_tabs.addEventListener('click', addTabClass);


