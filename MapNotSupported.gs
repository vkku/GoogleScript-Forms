function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Form Actions')
      .addItem('First item', 'createForm')
      .addToUi();
}

//Global Vars
function formData(name, ques){
    this.name = name;
    this.ques = ques;
    return this;
}

//Final Form
var form = [];

//Columnar data
var formData = [];
// 0 Indexed
var emailIdCol = 2;
var emailFormDataMap = new Map();

function createForm(){
  
  var sheetsReadData = SpreadsheetApp.getActiveSpreadsheet().getDataRange().getValues();
  
  //SpreadsheetApp.getActiveSheet().getRange(2,3).setValue('Hello');
  for(var i = 0 ; i < (sheetsReadData.length) ; i++){
    //Columnar Data
    var formDataArr = [];
    var email = sheetsReadData[i][emailIdCol];
    formDataArr.push(new formData(sheetsReadData[i][0], sheetsReadData[i][1]));

    if(!emailFormDataMap.has(email)){
      emailFormDataMap.set(email, new Array());
      emailFormDataMap.get(email).push(formDataArr);
    }
    else{
      emailFormDataMap.get(email).push(formDataArr);
    }
  }
  
  // Create a new form, then add a checkbox question, a multiple choice question,
  // a page break, then a date question and a grid of questions.
  var form = FormApp.create('New Form');
  var item = form.addCheckboxItem();
  item.setTitle('What condiments would you like on your hot dog?');
  item.setChoices([
    item.createChoice('Ketchup'),
    item.createChoice('Mustard'),
    item.createChoice('Relish')
  ]);
  form.addMultipleChoiceItem()
  .setTitle('Do you prefer cats or dogs?')
  .setChoiceValues(['Cats','Dogs'])
  .showOtherOption(true);
  form.addPageBreakItem()
  .setTitle('Getting to know you');
  form.addDateItem()
  .setTitle('When were you born?');
  form.addGridItem()
  .setTitle('Rate your interests')
  .setRows(['Cars', 'Computers', 'Celebrities'])
  .setColumns(['Boring', 'So-so', 'Interesting']);
  
  var item = form.addSectionHeaderItem();
  item.setTitle('Next Section');
  form.addMultipleChoiceItem()
  .setTitle('Do you prefer cats or dogs?')
  .setChoiceValues(['Cats','Dogs'])
  .showOtherOption(true);
  form.addPageBreakItem()
  .setTitle('Getting to know you');
  form.addDateItem()
  .setTitle('When were you born?');
  form.addGridItem()
  .setTitle('Rate your interests')
  .setRows(['Cars', 'Computers', 'Celebrities'])
  .setColumns(['Boring', 'So-so', 'Interesting']);
  
  var values = SpreadsheetApp.getActiveSpreadsheet().getDataRange().getValues();
  SpreadsheetApp.getActiveSpreadsheet().appendRow([form.getPublishedUrl()])

  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());
}
