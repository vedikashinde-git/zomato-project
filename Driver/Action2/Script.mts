Systemutil.Run"Chrome.exe","https://www.zomato.com"
Function demo()
Browser("Zomato").Page("Zomato").WebEdit("Search for restaurant,").Set "Restaurants" @@ script infofile_;_ZIP::ssf89.xml_;_
Browser("Zomato").Page("Zomato").WebElement("Sangeeta Restaurant &_3").Click @@ script infofile_;_ZIP::ssf90.xml_;_
Browser("Zomato").Page("Sangeeta Restaurant &").Check CheckPoint("Sangeeta Restaurant & Bar, Akurdi, Pune") @@ script infofile_;_ZIP::ssf91.xml_;_


End Function
'demo()
