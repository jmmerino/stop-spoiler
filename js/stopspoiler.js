console.log("stop-spoiler");

$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

var selector = "";
for (var i = series.GOT.length - 1; i >= 0; i--) {
	if (selector === ""){
		selector += "body:contains('" + series.GOT[i] + "')";
	} else {
		selector += ",body:contains('" + series.GOT[i] + "')";
	}
		
};

// console.log(selector);

if (selector){
	var $els = $(selector);
	// console.log($els.length);
	// console.log($els);
	
	if ($els.length){
		$('body').append('<div class="stop-spoiler__overlay"></div>')
	}
}
	