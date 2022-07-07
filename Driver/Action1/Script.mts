'Systemutil.Run"Chrome.exe","https://www.zomato.com"
'executeTest ("TC_0010")
On Error Resume Next
Dim path
path="C:\Users\user246\Documents\Zomato\Test Data\Test Data.xlsx"
DataTable.AddSheet "Test Data"
DataTable.ImportSheet path,"Zomato Data","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Expected_Flag","Test Data")="Y" Then
executeTest (DataTable.Value("testCaseID","Test Data"))
DataTable.Value("Result","Test Data") = Environment.Value("Result")
End If

Next

DataTable.ExportSheet path,"Test Data","Zomato Data"







'___________________________descriptive programming ______________________
'search()
'search1()
'search2()
'search3()
'search4()
'search5()
'search6()
'search7()
'search8()
'search9()

'______________________user function 1__________________
'search11()
'search12()
'search13()
'search14()
'search15()
'search16()
'search17()
'search18()
'search19()
'search20()

'________________test Data_______________________ @@ script infofile_;_ZIP::ssf62.xml_;_



