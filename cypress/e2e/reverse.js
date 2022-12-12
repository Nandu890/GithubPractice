// var str1 = "hi hello how are you";

// str1 = str1.split(" ");
// var reverse = "";

// for (let i = 0; i < str1.length; i++) {
//   var arr = str1[i] + " ";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse = reverse + arr[i];
//   }
//   // reverse=reverse+" "
// }
// console.log(str1);
// console.log(reverse + " ");

// //how to extract data from xl sheet?

// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
// <script>
// var ExcelToJSON = function() {

//   this.parseExcel = function(file) {
//     var reader = new FileReader();

//     reader.onload = function(e) {
//       var data = e.target.result;
//       var workbook = XLSX.read(data, {
//         type: 'binary'
//       });

//       workbook.SheetNames.forEach(function(sheetName) {
//         // Here is your object
//         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//         var json_object = JSON.stringify(XL_row_object);
//         console.log(json_object);

//       })

//     };

//     reader.onerror = function(ex) {
//       console.log(ex);
//     };

//     reader.readAsBinaryString(file);
//   };
// };
// </script>










