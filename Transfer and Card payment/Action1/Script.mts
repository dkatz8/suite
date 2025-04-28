Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "67f4c94d8650d36a35a2fe7fad4120f19df88a19b742abc7aed241cb" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 2
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.name").Set "Elad R" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set "New state test" @@ script infofile_;_ZIP::ssf7.xml_;_
Wait 2
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set "12" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set "OneZ" @@ script infofile_;_ZIP::ssf9.xml_;_
Wait 2
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebNumber("amount").Set "400000" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("description").Set "Transaction number 1" @@ script infofile_;_ZIP::ssf11.xml_;_
Wait 2
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebButton("Check out").Click @@ script infofile_;_ZIP::ssf12.xml_;_
If Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebButton("Confirmation").Exist Then @@ script infofile_;_ZIP::ssf47.xml_;_
Reporter.ReportEvent micPass, "Transfer transactions ", " Transfer transactions successed "
else
	Reporter.ReportEvent micFail, "Transfer transactions ", " Transfer transactions Failed" 
	ExitTest("payment refused by gateway - status: DECLINED Backoffice Server not reachable")
End If
Browser("Home - Advantage Bank").Page("Accounts - Advantage Bank").Link("Dashboard").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Home - Advantage Bank_2").Page("Dashboard - Advantage").Link("Cards").Click
If Browser("Home - Advantage Bank_2").Page("Cards - Advantage Bank").Link("5164426944235348").Exist Then @@ hightlight id_;_336292_;_script infofile_;_ZIP::ssf45.xml_;_
Reporter.ReportEvent micPass, "Credit card ", " Credit card is Active"
else
	Reporter.ReportEvent micFail, "Credit card  - status: Inactive ", " Credit card - status: Inactive" 
	ExitTest("Credit card - status: Inactive.")
End If
Browser("Home - Advantage Bank_2").Page("Cards - Advantage Bank").WebButton("WebButton_2").Click @@ script infofile_;_ZIP::ssf46.xml_;_
If Browser("Home - Advantage Bank_2").Page("Cards - Advantage Bank").Link("5294279448747549").Exist Then @@ script infofile_;_ZIP::ssf47.xml_;_
Reporter.ReportEvent micPass, "Debit card ", " Debit card is Active"
else
	Reporter.ReportEvent micFail, "Debit card  - status: Inactive ", " Debit card - status: Inactive" 
	ExitTest("Debit card - status: Inactive.")
End If
 @@ script infofile_;_ZIP::ssf56.xml_;_
