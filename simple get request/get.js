function doGet (req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('school test');
  var values = sheet.getDataRange().getValues().slice(1);

  var output = [];
  for(var i = 0; i<values.length; i++) {
  var row = {};
  row['name'] = values[i][0];
  row['rollno'] = values[i][1];
  row['test1'] = values[i][2];
  output.push(row);
  }
  return ContentService.createTextOutput (JSON.stringify({data: output})).setMimeType(ContentService. MimeType.JSON);
}
