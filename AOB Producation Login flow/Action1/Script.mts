
Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank_2").Navigate "https://advantageonlinebanking.com/" @@ hightlight id_;_5185452_;_script infofile_;_ZIP::ssf41.xml_;_
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Exist Then @@ script infofile_;_ZIP::ssf4.xml_;_
Reporter.ReportEvent micPass, "AOB login", " AOB login successes !"
else
	Reporter.ReportEvent micFail, "AOB Login ", " AOB failed to login" 
	ExitTest("500 Internal Server Error returned from /checkout endpoint..")
End If
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "67f4c94d8650d36a35a2fe7fad4120f19df88a19b742abc7aed241cb" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.name").Set "Elad R" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set "New state test" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set "12" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set "OneZ" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebNumber("amount").Set "200" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("description").Set "Transaction number 1" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Home - Advantage Bank").Page("Accounts - Advantage Bank").Link("Dashboard").Click


 @@ script infofile_;_ZIP::ssf23.xml_;_
