
		console.log(doSomething);
		doSomething();

		function doSomething()
		{
			console.log("Declare something");
		}

		/*
		// Give an error.
		console.log(something);
		something();
		*/

		var something = function(){
			console.log("Express Something")
		}

		console.log(something);
		something();


		var runIt = function(a){
			console.log(a);
			a();
		}

		runIt(function(){
			var b =  "Now";
			console.log("Running " + b);
		});

	