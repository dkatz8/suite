
Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank_2").Navigate "https://advantageonlinebanking.com/"
Browser("Home - Advantage Bank_3").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Home - Advantage Bank_3").Page("Home - Advantage Bank").WebEdit("password").SetSecure "6810a627e96717347c6fbb7d21143fa6c968918e17f4e5c39f70b6d8" @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Home - Advantage Bank_3").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Home - Advantage Bank_3").Page("Dashboard - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf44.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebEdit("recipient.name").Set "tal" @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set "name" @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set "13565" @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set "FA" @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebNumber("amount").Set "70" @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebEdit("description").Set "prod test" @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Home - Advantage Bank_3").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf51.xml_;_
