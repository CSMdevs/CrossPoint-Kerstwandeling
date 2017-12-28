function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 4000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});
var sc_project=11562351;
var sc_invisible=0;
var sc_security="b3fd6ab9";
var sc_text=3;
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure (https://secure/)." : "http://www (http://www/).");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'> (http://statcounter.com/counter/counter.js'%3E%3C/)>");
