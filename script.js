let toDoInput; //miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo; //info o braku zadań/koniecznosci wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL
let newTodo; // nowe zadanie, nowo dodany LI
// popupy
let popup; // popup
let popupInfo; // tekst w popup jak dodamy pustą linijke
let todoToEdit; // edytopwany toDo
let popupInput; // inpup w srodku popupa
let popupAddBtn; // przycisk 'zatwierdź'
let popupCloseBtn; // przycisk anuluj w popupie

// further=================================================================================
const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	toDoInput = document.querySelector(`.todo-input`);
	errorInfo = document.querySelector(`.error-info`);
	addBtn = document.querySelector(`.btn-add`);
	ulList = document.querySelector(`.todolist ul`);
	//popupy
	popup = document.querySelector(`.popup`);
	popupInfo = document.querySelector(`.popup-info`);
	popupInput = document.querySelector(`.popup-input`);
	popupAddBtn = document.querySelector(`.accept`);
	popupCloseBtn = document.querySelector(`.cancel`);
};
// listenery - dodawanie, zamykanie popupa
const prepareDOMEvents = () => {
	addBtn.addEventListener(`click`, addNewTodo);
	ulList.addEventListener(`click`, checkClick);
	popupCloseBtn.addEventListener(`click`, closePopup);
	popupAddBtn.addEventListener(`click`, changeTodoText);
	toDoInput.addEventListener(`keyup`, enterKeyCheck);
};

// zmienna - nowy todos

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

// checkClick z eventem
const checkClick = e => {
	if (e.target.matches(`.complete`)) {
		e.target.closest(`li`).classList.toggle(`completed`);
		e.target.classList.toggle(`completed`);
	} else if (e.target.matches(`.edit`)) {
		editTodo(e);
	} else if (e.target.matches(`.delete`)) {
		deleteTodo(e);
	}
};

const editTodo = e => {
	todoToEdit = e.target.closest(`li`);

	popupInput.value = todoToEdit.firstChild.textContent;

	console.log(todoToEdit.firstChild);
	popup.style.display = `flex`;
};

const closePopup = () => {
	popup.style.display = `none`;
	popupInfo.textContent = ``;
};

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = `none`;
		popupInfo.textContent = ``;
	} else {
		popupInfo.textContent = `Musisz podać jakąs treść !`;
	}
};

const deleteTodo = e => {
	e.target.closest(`li`).remove();

	const allTodos = ulList.querySelectorAll(`li`);
	if (allTodos.length === 0) {
		errorInfo.textContent = `Brak zadań na liście !`;
	}
};

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		addNewTodo();
	}
};

// ===LISTENERY===
// ===LISTENERY===
// ===LISTENERY===
document.addEventListener(`DOMContentLoaded`, main);
