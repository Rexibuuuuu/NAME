

function CheckData(event) {
	let secondName = document.querySelector('#second_name');
	let name = document.querySelector('#name');
	let lastName = document.querySelector('#last_name');
	let password = document.querySelector('#password');
	let repeatPassword = document.querySelector('#repeat_password');

	event.preventDefault();

	if (!/^[А-Яа-яЁё\s]+$/.test(secondName.value)){
    secondName.style.borderColor = "red";
    alert('поле "фамилия" доолжно содержать только кириллицу');
	}

	if (!/^[А-Яа-яЁё\s]+$/.test(name.value)){
    name.style.borderColor = "red";
    alert('поле "имя" доолжно содержать только кириллицу');
	}

	if (!/^[А-Яа-яЁё\s]+$/.test(lastName.value)){
    lastName.style.borderColor = "red";
    alert('поле "отчество" доолжно содержать только кириллицу');
	}

	if (password.value.length < 11) {
        password.style.borderColor = "red";
        alert('поле "пароль" доолжно иметь длину не меньше 11 символов');
    }

    if (repeatPassword.value != password.value) {
        repeatPassword.style.borderColor = "red";
        alert('пароли не совпадают');
    }

    if (/^[А-Яа-яЁё\s]+$/.test(secondName.value) && /^[А-Яа-яЁё\s]+$/.test(name.value) 
    	&& /^[А-Яа-яЁё\s]+$/.test(lastName.value) && password.value.length >= 11 
    	&& repeatPassword.value == password.value) {
    	window.location = 'form2.html';
    }
	
}


function CheckDataKid(event) {
	let secondNameKid = document.querySelector('#second_name_kid');
	let nameKid = document.querySelector('#name_kid');
	let lastNameKid = document.querySelector('#last_name_kid');


	event.preventDefault();

	if (!/^[А-Яа-яЁё\s]+$/.test(secondNameKid.value)){
    secondNameKid.style.borderColor = "red";
    alert('поле "фамилия" доолжно содержать только кириллицу');
	}

	if (!/^[А-Яа-яЁё\s]+$/.test(nameKid.value)){
    nameKid.style.borderColor = "red";
    alert('поле "имя" доолжно содержать только кириллицу');
	}

	if (!/^[А-Яа-яЁё\s]+$/.test(lastNameKid.value)){
    lastNameKid.style.borderColor = "red";
    alert('поле "отчество" доолжно содержать только кириллицу');
	}

	if (/^[А-Яа-яЁё\s]+$/.test(secondNameKid.value) && /^[А-Яа-яЁё\s]+$/.test(nameKid.value) 
		&& /^[А-Яа-яЁё\s]+$/.test(lastNameKid.value)) {
		alert('Регистрация прошла успешно');
	}
}


function AddKid() {
	let secondNameKid = document.querySelector('#second_name_kid');
	let nameKid = document.querySelector('#name_kid');
	let lastNameKid = document.querySelector('#last_name_kid');
	let list = document.querySelector('#list_of_kids');
	let optoins = list.optoins;
	let newOption = new Option(`${secondNameKid.value} ${nameKid.value} ${lastNameKid.value}`, '');
	list.prepend(newOption);
}
