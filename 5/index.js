for (var i = 0; i < 5; i++) {
	(function (i) {
		setTimeout(function() { console.log(i); }, i * 1000 );
	})(i);
}
/*
    Basically in for loop the function only "sees" one instance of the i variable.
    So once the loop is over, i is equal to 5, so it is 5 for all functions.
    we  need to wrap the call in another anonymous function to create a scope.
    The outer function will create a new scope, and inside it i will be equal to the value of i in the loop and stay like this.
*/