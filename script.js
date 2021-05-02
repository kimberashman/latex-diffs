// https://stackoverflow.com/questions/60383911/comparing-the-values-of-two-html-forms-using-javascript
// https://stackoverflow.com/questions/43570211/how-to-compare-textarea
// https://jsfiddle.net/brootle/587xLrcj/

$('button').click(function() {
    var identical = $('#first').val()=== $('#second').val();
    alert(identical ? "Drafts are identical" : "Drafts are NOT identical");
});
