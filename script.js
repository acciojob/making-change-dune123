const makeChange = (c) => {
  // your name here
	let ans={
		q:0,
		d:0,
		n:0,
		p:0
	}

	let coins=[25,10,5,1];

	coins.map((item)=>{
    let currCoin=0;

		if(item<=c) currCoin=Math.floor(c/item);
		
		if(item==25){
			ans.q=currCoin;
		}
		if(item==10){
			ans.d=currCoin;
		}
		if(item==5){
			ans.n=currCoin;
		}
		if(item==1){
			ans.p=currCoin;
		}
		c=c%item;
	})

	return ans;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
