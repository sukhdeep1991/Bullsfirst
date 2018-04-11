"use strict";
angular.module("bullsfirst")
.component("accountsList", {
	templateUrl: "./templates/accounts-list.html",
	controller: ["accountsService", function(accountsService){
		var $ctrl = this;

		accountsService.getAccounts()
		.then(function(response){
			$ctrl.accounts = response.accounts;
			$ctrl.total = response.total;
		});

		$ctrl.addAccount = function(){
			//Service method will automatically add new account and update the total
			accountsService.addAccount($ctrl.accounts, $ctrl.total);
		};
	}]
});