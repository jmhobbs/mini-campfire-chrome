(function () {
	var index = document.body.className.indexOf('minicf');
	if( index === -1  ) {
		document.body.className = document.body.className + ' minicf';
	}
	else {
		document.body.className = document.body.className.substr(0, index) + document.body.className.substr(index + 6);
	}
}());
