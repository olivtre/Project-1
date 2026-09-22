const http = require('http');
//moodul URL-i parsimiseks
const url = require("url")
//moodul fialiteede haldamiseks
const path = require("path");
const fs = require ("fs");
const dateET = require ("./scr/dateTimeET");
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Oliver Trei, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Oliver Trei, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أœlikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageBanner = "<img src=veebiprogrammeerimine_2026_ID.png" alt="">\n";
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
	// vaatan url-i
	console.log("Päring: " + req.url);
	//parsin URL-i
	let currentURL = url.parse(req.url, true);
	console.log("parsituna: " + currentURL.pathname);	
	//console.log("parsituna: " + currentURL.port);
	
	if(currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		//res.write("Veebiserver käivitus!");
		res.write(pageHead);
		res.write(pageBody);
		res.write(pageFoot);
		return res.end();
	}
	
	else if (currentURL.pathname === "/vanasona"){
		res.writeHead(200, {"Content-type": "text/html"});
		//res.write("Veebiserver käivitus!");
		res.write(pageHead);
		res.write(pageBanner);
		res.write("\t<h1>Tänane Eesti vanasona</h1>\n\t<p>Siin näed tänaseks päevaks loostud vanasna.</p>\n\t<hr>");
		res.write(pageFoot);
		return res.end();
	}
	
	else if (currentURL.pathname === "/veebiprogrammeerimine_2026_ID.png"){
		//liidme kättesaamatu päris kataloogi jms virtuaalseks failiteeks
		let bannerPath = path.join(__dirname, "pic", currentURL.pathname);
		fs.readFile(bannerPath, (err, data)=>{
			if(err){
				throw(err);
			} else {
				res.writeHead(200, {"content-type": "image/png"});
				return res.end(data);
			}
		});
	}
	
	else {
		return res.end("Viga 404! Ei leia sellist lehte");
	}
}).listen(5208);