function formData(name, ques){
    this.name = name;
    this.ques = ques;
    return this;
}

//Final Form
var form = [];

// 0 Indexed
var emailIdCol = 1;
let emailFormDataMap = {};

var sheetsReadData = [["vivek", "kumar.vivekten@gmail.com"], ["demo", "demo@example.com"], ["vkku", "kumar.vivekten@gmail.com"]];

for(var i = 0 ; i < (sheetsReadData.length) ; i++){
    //Columnar Data
    var formDataArr = [];
    var email = sheetsReadData[i][emailIdCol];
    formDataArr.push(new formData(sheetsReadData[i][0], sheetsReadData[i][1]));

    if(!(email in emailFormDataMap)){
      emailFormDataMap[email] = new Array();
      emailFormDataMap[email].push(formDataArr);
    }
    else{
    emailFormDataMap[email].push(formDataArr);
    }
  }

    Object.keys(emailFormDataMap).forEach((email)=> {
      //"kumar.vivekten@gmail.com" -> [[{"name":"vivek","ques":"kumar.vivekten@gmail.com"}],[{"name":"vkku","ques":"kumar.vivekten@gmail.com"}]]
        console.log(`key: ${email}`);

          var colArr = emailFormDataMap[email];
         //console.log(colArr.length);
          for(i = 0 ; i < colArr.length ; i++){
            if(i == 0){
              
            }
            else{
              createSection(colArr[i][0]);
            }
            createForm();
          }

        //console.log(` value: ${emailFormDataMap[key]}`);
    });

    function createForm(row){
      Object.keys(row).forEach(colData => {
        console.log(`colname: ${colData} colValue: ${row[colData]}`);
      })
    }

/* Working Key Value Print
//{"kumar.vivekten@gmail.com":[[{"name":"vivek","ques":"kumar.vivekten@gmail.com"}],[{"name":"vkku","ques":"kumar.vivekten@gmail.com"}]],"demo@example.com":[[{"name":"demo","ques":"demo@example.com"}]]}
  Object.keys(emailFormDataMap).forEach((email)=> {
    //"kumar.vivekten@gmail.com" -> [[{"name":"vivek","ques":"kumar.vivekten@gmail.com"}],[{"name":"vkku","ques":"kumar.vivekten@gmail.com"}]]
      console.log(`key: ${email}`);

        var colArr = emailFormDataMap[email];
       //console.log(colArr.length);
        for(i = 0 ; i < colArr.length ; i++){
          //console.log(colArr[i][0]);
          //formData { name: 'vivek', ques: 'kumar.vivekten@gmail.com' }
          Object.keys(colArr[i][0]).forEach(colData => {
            console.log(`colname: ${colData} colValue: ${colArr[i][0][colData]}`);
          })
        }

      //console.log(` value: ${emailFormDataMap[key]}`);
  });

*/

/*
  console.log(JSON.stringify(emailFormDataMap));
*/

/*
for(var email in emailFormDataMap){
  for(var data in emailFormDataMap[email])
    for(var i = 0 ; i < data.length ; i++)
      console.log(data[i]);
}

// setting the values
myMap.set(keyString, "value associated with 'a string'")


myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
*/
