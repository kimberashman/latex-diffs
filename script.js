// https://stackoverflow.com/questions/60383911/comparing-the-values-of-two-html-forms-using-javascript
// https://stackoverflow.com/questions/43570211/how-to-compare-textarea
// https://jsfiddle.net/brootle/587xLrcj/
// var form1 = document.querySelector('#first')
// var form2 = document.querySelector('#second')
//
// var form1Content = document.querySelector('#first').textContent.split('\n');
// var form2Content = document.querySelector('#second').textContent.split('\n');
//
// form1Content.forEach(line => {
//     var key_value = line.split('=');
//     // just make sure we don't catch empty line
//     if(key_value.length > 1){
//         var key = key_value[0];
//         var value = key_value[1];
//         listOriginal[key] = value;
//         // console.log(key_value);
//     }
// });
// var listModified = {};
//
// form2Content.forEach(line => {
//     var key_value = line.split('=');
//     // just make sure we don't catch empty line
//     if(key_value.length > 1){
//         var key = key_value[0];
//         var value = key_value[1];
//         listModified[key] = value;
//         // console.log(key_value);
//     }
// });
//
// console.log(listModified);

$('button').click(function() {
    // var identical = $('#first').serialize() === $('#second').serialize();
    var identical = $('#first').val()=== $('#second').val();
    // var identical = form1Content === form2Content;
    alert(identical ? "Values are identical" : "Values are NOT identical");
    // alert(checkIdentical(listModified,listOriginal) ? "Values are identical" : "Values are NOT identical");
});

// function checkIdentical(list1,list2){
//     for (var key in list2) {
//         if (list1[key] != list2[key]){
//             return false
//         }
//     }
//     return true
// }
