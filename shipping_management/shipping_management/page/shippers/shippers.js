frappe.pages['shippers'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Shipping Lines',
		single_column: true
	});
}