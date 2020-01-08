'use strict';

function createContact(titre,nom,tel)
{
	let contact = new Object();

	switch(titre)
	{
		case '1':
		contact.titre = 'Mme.';
		break;

		case '2':
		contact.titre = 'Mlle.';
		break;

		case '3':
		contact.titre = 'M.';
		break;
	}

	contact.nom = nom;
	contact.tel = tel;

	return contact;
}

function loadCarnetAdresse()
{
	if(localStorage.getItem('contactList') == null)
	{
		return [];
	}
	else
	{
		return JSON.parse(localStorage.getItem('contactList'));
	}
}

function saveCarnetAdresse(contacts)
{
	localStorage.setItem('contactList',JSON.stringify(contacts));
}


function refreshCarnetAdresse()
{
	//load the contact list
	let carnetAdresse = loadCarnetAdresse();
	//clear the display of the contact list
	$('#contact-list').empty();


	let list = $('<ul>');
	// display the contact
	for (let index =0; index < carnetAdresse.length;index++)
	{
		let link = $('<a>').data('index',index).attr('href','#').text(carnetAdresse[index].titre +' '+carnetAdresse[index].nom + ' '+carnetAdresse[index].tel);
      	$('<li>').append(link).appendTo(list);	
      //$('#contact-list').append('<li><a href="">' + carnetAdresse[index].titre +' '+carnetAdresse[index].nom + ' '+carnetAdresse[index].tel + '</a></li>');
	}

	$('#contact-list').append(list);
}

