function doPost(req) {
  var doc=SpreadsheetApp.getActiveSpreadsheet();
  var sheet=doc.getSheetByName('MC_attendance');

  // if(req.parameter.del){
  //   var usns=sheet.getRange(7,1,sheet.getLastRow()-1,1).getValues().map(r => r[0])
  //   var pos=usns.indexOf(req.parameter.usn)
  //   var rowNumber = pos===-1?0:pos+7;
  //   sheet.deleteRow(rowNumber)
  //   return ContentService.createTextOutput ("Data Deleted!")
  // }
  // else if(req.parameter.update){
  //   var usns=sheet.getRange(7,1,sheet.getLastRow()-1,1).getValues().map(r => r[0])
  //   var pos=usns.indexOf(req.parameter.usn)
  //   var rowNumber = pos===-1?0:pos+7;

  //   sheet.getRange(rowNumber,4).setValue(req.parameter.classes);
  //   return ContentService.createTextOutput ("Data Updated!")
  // }

  
  let data= JSON.parse(req.postData.contents)
  sheet.appendRow( [data.name,data.usn,data.email,data.classes])
  return ContentService.createTextOutput ("Data Received!")
}