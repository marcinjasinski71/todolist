let toDoInput; //miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo; //info o braku zadań/koniecznosci wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL
let newTodo; // nowe zadanie, nowo dodany LI

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	toDoInput = document.querySelector(`.todo-input`);
	errorInfo = document.querySelector(`.error-info`);
	addBtn = document.querySelector(`.btn-add`);
	ulList = document.querySelector(`.todolist ul`);
};

const prepareDOMEvents = () => {
	addBtn.addEventListener(`click`, addNewTodo);
	ulList.addEventListener(`click`, checkClick);
};

const addNewTodo = () => {
	if (toDoInput.value !== '') {
		newTodo = document.createElement(`li`);
		newTodo.textContent = toDoInput.value;
		createToolsArea();

		ulList.append(newTodo);

		toDoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = `Wpisz treść zadania !`;
	}
};

const createToolsArea = () => {
	//TWORZENIE NOWEGO ELEMENTU NA LIŚĆIE -> dodawanie klas
	const toolsPanel = document.createElement(`div`);
	toolsPanel.classList.add(`tools`);
	newTodo.append(toolsPanel);
	//
	const completeBtn = document.createElement(`button`);
	completeBtn.classList.add(`complete`);
	completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
	//
	const editBtn = document.createElement(`button`);
	editBtn.classList.add(`edit`);
	editBtn.textContent = `EDIT`;
	//
	const deleteBtn = document.createElement(`button`);
	deleteBtn.classList.add(`delete`);
	deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;

	toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = e => {
	if (e.target.matches(`.complete`)) {
		e.target.closest(`li`).classList.toggle(`completed`);
		e.target.classList.toggle(`completed`);
	} else if (e.target.matches(`.edit`)) {
		console.log(`edit`);
	} else if (e.target.matches(`.delete`)) {
		console.log(`Delete`);
	}
};

// ===LISTENERY===
// ===LISTENERY===
// ===LISTENERY===
document.addEventListener(`DOMContentLoaded`, main);
