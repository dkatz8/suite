Browser("Tanks - Tops - Men - Magento").Page("Openbare Magento 2 demo").Sync
Browser("Tanks - Tops - Men - Magento").Navigate "https://magento2demo.firemultimedia.nl/"
Browser("Browser_3").Page("Openbare Magento 2 demo").WebEdit("q").Set Parameter("product")
Browser("Browser_3").Page("Openbare Magento 2 demo").WebEdit("q").Submit
Browser("Browser_3").Page("Zoekresultaten voor: ‘bug’").Image("Push It Messenger Bag").Click
Browser("Browser_3").Page("Push It Messenger Bag").Link("Reviews 3").Click @@ script infofile_;_ZIP::ssf99.xml_;_
Browser("Browser_3").Page("Push It Messenger Bag").Link("Meer informatie").Click @@ script infofile_;_ZIP::ssf100.xml_;_
Browser("Browser_3").Page("Push It Messenger Bag").Image("Fusion Backpack").Click
Browser("Browser_3").Page("Fusion Backpack - Magento").Link("3  Reviews").Click
Browser("Browser_3").Page("Fusion Backpack - Magento").Link("Meer informatie").Click
Browser("Browser_3").Page("Fusion Backpack - Magento").Link("Gegevens").Click
Browser("Browser_3").Page("Fusion Backpack - Magento").WebButton("In Winkelwagen").Click @@ script infofile_;_ZIP::ssf105.xml_;_
Browser("Browser_3").Page("Fusion Backpack - Magento").Link("Winkelwagen 1 1 items").Click
Browser("Browser_3").Page("Fusion Backpack - Magento").WebButton("Ga door naar afrekenen").Click @@ script infofile_;_ZIP::ssf107.xml_;_
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("username").Set Parameter("Email")
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("firstname").Set "avi"
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("lastname").Set "nimni"
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("street[0]").Set "terkom" @@ script infofile_;_ZIP::ssf111.xml_;_
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("city").Set "123657135" @@ script infofile_;_ZIP::ssf112.xml_;_
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("postcode").Set "32145659"
Browser("Browser_3").Page("Afrekenen - Magento").WebEdit("telephone").Set "050986552"
Browser("Browser_3").Page("Afrekenen - Magento").WebRadioGroup("Free").Select "freeshipping_freeshipping"
Browser("Browser_3").Page("Afrekenen - Magento").WebButton("Volgende").Click
Browser("Browser_3").Page("Afrekenen - Magento").WebRadioGroup("payment[method]").Select "cashondelivery"
Browser("Browser_3").Page("Afrekenen - Magento").WebButton("Nu bestellen en betalen").Click
