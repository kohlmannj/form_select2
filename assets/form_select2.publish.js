jQuery(document).ready(function() {
	jQuery("select[multiple='multiple'] option:empty").remove();
	jQuery("select:not([multiple='multiple']) option:empty").text("[None]");
	// Apply select2 plugin to the select boxes. Select boxes used for the subsectionmanager will be ignored.
	jQuery('#publish').not('.subsection').find('div.field').not('.field-subsectionmanager, .field-status').find('select').select2();
	jQuery('.select2-choice span, .select2-result-label').on("click", "a", function(e) {
		e.preventDefault();
	});
});
