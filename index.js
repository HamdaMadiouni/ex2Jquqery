'use strict'
$(function()
{
	$('#add').on('click',onClickAdd);
	$('#save').on('click',onClickSave);
	$('#clear').on('click',onClickClear);


	$(document).on('mouseenter','#contact-list a',onClickShowDetails);
	$('#edit-contact').on('click',onClickEdit);
	// call refrech
	refreshCarnetAdresse();


});