const dateFormattedET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();

	const monthnameET = [
		"jaanuar", "veebruar", "märts", "aprill",
		"mai", "juuni", "juuli", "august",
		"september", "oktoober", "november", "detsember"
	];

	return dateNow + "." + monthnameET[monthNow] + " " + yearNow;
}

const weekDayET = function(){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();

	const dayNameET = [
		"pühapäev", "esmaspäev", "teisipäev",
		"kolmapäev", "neljapäev", "reede", "laupäev"
	];

	return dayNameET[dayNow];
}

const addLeadZero = function(numValue){
	if(numValue < 10){
		numValue = "0" + numValue;
	}
	return numValue;
}

const timeFormattedET = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();

	return hourNow + ":" + addLeadZero(minuteNow) + ":" + addLeadZero(secondNow);
}

const dayPartET = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let dayNow = timeNow.getDay();
	let dayPart = "";

	//nädalavahetus
	if(dayNow == 0 || dayNow == 6){

		if(hourNow < 9){
			dayPart = "öö";
		}

		if(hourNow >= 9 && hourNow < 12){
			dayPart = "hommik";
		}

		if(hourNow >= 12 && hourNow < 18){
			dayPart = "päev";
		}

		if(hourNow >= 18 && hourNow < 24){
			dayPart = "õhtu";
		}
	}

	//argipäev
	if(dayNow >= 1 && dayNow <= 5){

		if(hourNow < 7){
			dayPart = "öö";
		}

		if(hourNow >= 7 && hourNow < 9){
			dayPart = "hommik";
		}

		if(hourNow >= 9 && hourNow < 16){
			dayPart = "koolipäev";
		}

		if(hourNow >= 16 && hourNow < 19){
			dayPart = "pärastlõuna";
		}

		if(hourNow >= 19 && hourNow < 24){
			dayPart = "õhtu";
		}
	}

	return dayPart;
}

module.exports = {
	time: timeFormattedET,
	date: dateFormattedET,
	weekDay: weekDayET,
	dayPart: dayPartET
};