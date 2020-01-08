'use strict'
function onClickAdd()
{
	$("form").fadeIn('Slow');
	$("form").trigger('reset');
}


function onClickSave()
{
	
	let newContact = createContact
	(
		$('#titre').val(),
		$('#nom').val(),
		$('#tel').val()
	);
    
    
    
	let contacts = loadCarnetAdresse();	//array
	if ($('#contact-form').data('mode') == "add")
	{
	contacts.push(newContact);
	}
	else
	{
		let index = $('#edit-contact').data('index');
		contacts[index]= newContact;

	}
		

	saveCarnetAdresse(contacts);

	refreshCarnetAdresse();
	
	
	
}
function onClickClear()
{
	let confirmClear =confirm('clear????')
	if (confirmClear){
	saveCarnetAdresse(new Array());
	refreshCarnetAdresse();
}
}

function onClickShowDetails()
{   
	//index of the current link
	let index = $(this).data('index');
	//load the adress book
	const adressbook = loadCarnetAdresse(); 
	//picking the contact info
	let contact = adressbook[index];
	//injecting the contact info into the html page
	$('#contact-details h3').text(contact.titre + ' '+ contact.nom );
	$('#contact-details p').text(contact.tel);
	$('#contact-details a').data('index', index);
	$('#contact-details').show();
}


function onClickEdit()
{
	let index = $('#edit-contact').data('index');
	
	let addressBook = loadCarnetAdresse();
	let contact = addressBook[index];

	switch (contact.titre) {
		case 'M.' :
		$('#titre').val(1);
		break;

		case 'Mme.' :
		$('#titre').val(2);
		break;

		case 'Mlle.' :
		$('#titre').val(3);
		break;		
	}

	$('#nom').val(contact.nom);
	$('#tel').val(contact.tel);

	$('#contact-form').data('mode','edit').show();

}
