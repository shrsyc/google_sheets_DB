function doGet(req){
  var usn=req.parameter.usn;
  var doc=SpreadsheetApp.getActiveSpreadsheet();
  var sheet=doc.getSheetByName('MC_attendance');
  var values=sheet.getDataRange().getValues().slice(6);

  var output = [];
  for(var i = 0; i<values.length; i++) {
    var row = {};
    row['name'] = values[i][0];
    row['usn'] = values[i][1];
    row['email'] = values[i][2];
    row['classes'] = values[i][2];
    output.push(row);
  }

  if (usn!=null){
    var outputToReturn = output.filter(obj=> obj.usn.toLowerCase().includes(usn.toLowerCase()));
    return ContentService.createTextOutput (JSON.stringify({data: outputToReturn})).setMimeType (ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput (JSON.stringify({data: output})).setMimeType(ContentService. MimeType.JSON);
}
