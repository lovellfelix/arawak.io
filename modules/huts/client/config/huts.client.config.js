'use strict';

// Configuring the Huts module
angular.module('huts').run(['Menus',
	function(Menus) {
		// Add the Huts dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Huts',
			state: 'huts',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'huts', {
			title: 'List Huts',
			state: 'huts.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'huts', {
			title: 'Create Hut',
			state: 'huts.create'
		});
	}
]);