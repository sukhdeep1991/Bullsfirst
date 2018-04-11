"use strict";
angular.module("bullsfirst")
.factory("accountsService", ['$q', function($q){
	var colors = ['orange', 'darkorange', 'red', 'blue', 'gray', 'salmon', 'green', 'darkblue', 'teal'];
	function getAccountsTotal(accounts){
		var total = {
			marketValue: 0,
			cash: 0
		};
		if(accounts && angular.isArray(accounts)){
			angular.forEach(accounts, function(account){
				total.marketValue += account.marketValue;
				total.cash += account.cash;
			});
		}
		return total;
	}

	function getRandomColor(){
		var randomIndex = Math.random()*colors.length;
		randomIndex = Math.floor(randomIndex);
		return colors[randomIndex];
	}
	return {
		getAccounts: function(){
			var deferred = $q.defer();
			$q.when([
		        {
		            name: 'Brokerage Account 3',
		            marketValue: 1999990,
		            cash: 1995826,
		            legend: 'orange'
		        },
		        {
		            name: 'Account 3',
		            marketValue: 1949990,
		            cash: 1695856,
		            legend: 'darkorange'
		        },
		        {
		            name: 'Brokerage Account 1',
		            marketValue: 1349990,
		            cash: 1595866,
		            legend: 'red'
		        },
		        {
		            name: 'Brokerage Account 4',
		            marketValue: 155990,
		            cash: 160826,
		            legend: 'blue'
		        },
		        {
		            name: 'Brokerage Account 2',
		            marketValue: 74560,
		            cash: 19956,
		            legend: 'gray'
		        },
		        {
		            name: 'Account 4',
		            marketValue: 55006,
		            cash: 53006,
		            legend: 'salmon'
		        },
		        {
		            name: 'Account 13',
		            marketValue: 37340,
		            cash: 0,
		            legend: 'green'
		        },
		        {
		            name: 'Joint Account 1',
		            marketValue: 28308,
		            cash: 4167,
		            legend: 'darkblue'
		        },
		        {
		            name: 'Joint Account 2',
		            marketValue: 10000,
		            cash: 10000,
		            legend: 'teal'
		        }
		    ]).then(function(response){
		    	deferred.resolve({
		    		accounts: response,
		    		total: getAccountsTotal(response)
		    	});
		    });

		    return deferred.promise;
		},

		addAccount: function(accounts, total) {
			var newAccount = {
	            name: 'New Account',
	            marketValue: Math.random() * 100000,
	            cash: Math.random() * 400000,
	            legend: getRandomColor()
	        };
			accounts.push(newAccount);
	        total.marketValue += newAccount.marketValue;
	        total.cash += newAccount.cash;
		}
	}
}]);