function calcularCommission() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var tab = spreadSheet.getActiveSheet();
  var range = tab.getRange("B2:B5");
  var values = range.getValues()

  for (var i = 0; i < values.length; i++) {
    var commission = values[i][0] * 0.1;
    tab.getRange(i + 2, 3).setValue(commission);
  }
}
