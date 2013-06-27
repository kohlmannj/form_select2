jQuery(document).ready(function() {
	// Apply select2 plugin to the select boxes. Select boxes used for the subsectionmanager will be ignored.
	jQuery('#publish').not('.subsection').find('div.field').not('.field-subsectionmanager, .field-status').find('select').select2();
	// Attach an additional event listener to disable links in Select2 boxes.
	// This is a problem when users click on the link text to select an item from the Select2 box,
	// which inadvertently causes the browser to follow the link.
	jQuery('.select2-choice span, .select2-result-label').on("click", "a", function(e) {
		e.preventDefault();
	});
});
