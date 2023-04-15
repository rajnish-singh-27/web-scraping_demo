
function readCSVFile(){
    var files = document.querySelector('#data');

    console.log("In script.js file")

    if(files.length > 0 ){

         // Selected file
         var file = files[0];

         // FileReader Object
         var reader = new FileReader();

         // Read file as string 
         reader.readAsText("dataset_try.csv");

         // Load event
         reader.onload = function(event) {

              // Read file data
              var csvdata = event.target.result;

              // Split by line break to gets rows Array
              var rowData = csvdata.split('\n');

              console.log(rowData)

              // <table > <tbody>
            //   var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
            //   tbodyEl.innerHTML = "";

            //   // Loop on the row Array (change row=0 if you also want to read 1st row)
            //   for (var row = 1; row < rowData.length; row++) {

            //         // Insert a row at the end of table
            //         var newRow = tbodyEl.insertRow();

            //         // Split by comma (,) to get column Array
            //         rowColData = rowData[row].split(',');

            //         // Loop on the row column Array
            //         for (var col = 0; col < rowColData.length; col++) {

            //              // Insert a cell at the end of the row
            //              var newCell = newRow.insertCell();
            //              newCell.innerHTML = rowColData[col];

            //         }

            //   }
         };

    }else{
         alert("Please select a file.");
    }
}

readCSVFile()

// import json
// var1=json.parsar("file path")
// var1.read()

