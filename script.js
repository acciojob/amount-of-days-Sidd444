//your JS code here. If required.
function NoOfDays(year){
if(year%4==0){
	if(year%100==0){
		if(year%400==0) return 366;
		else return 365
	}else return 366;
}
return 365;
}  
let year=prompt();
alert(NoOfDays(year));