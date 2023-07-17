const ACTIVECLASS = 'active';
const image = document.querySelector('.slider');

const HELLOACTIVECLASS = 'hello-text-active';
const hello_text = document.querySelector('.hello-text')

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


