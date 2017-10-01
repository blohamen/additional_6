module.exports = function zeros(expression) {
	var str = expression.split('*'),
	    res = 0,
	    y = 0,
	    chet = 0,
	    nechet = 0;
	for(var i = 0; i< str.length; i++){
		var int = parseInt(str[i]);
		var counterFact = str[i].match(/[!]/gi).length;
		y = int % 2 === 0 ? 1 : 0;
		switch(counterFact){
			case 1: var x = 1;
			while (int>= x){
				x*=5;
				res += Math.floor(int/x) + nechet;
				nechet = 0;
				chet = 1;
			}
			break;
			case 2: var x = 1;
			if(y){
				while (int>=x){
					x*=10;
					res+= Math.ceil(int/x) + nechet;
					nechet = 0;
					chet = 1;
				}
			}
			if(!y){
				nechet += Math.ceil(int/10) + 1;
				if(chet)
				{
					res+= nechet;
					nechet = 0;
					chet = 0;
				}
				
			}

			}
		}
		return res;
	}
	
  // your solution

