window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "cloth.json", true);
	xhr.onload = function(){
		if (xhr.status == 200){
			var data = JSON.parse(xhr.responseText);
			showData(data);
		}
	};
	xhr.onerror = function(){
		alert("ERROR!");
	};
	xhr.send();
}

function showData(data){
	var items = document.getElementById("layer").children;

	for (var i = 0; i < data.length; i++){
		var item = data[i];
		items[i].innerHTML =
			'<img src="' + item.img + '" width="180" height="300" alt="' + item.name + '">' +
			'<p>' + item.name + '</p>' +
			'<p>' + item.brand + '</p>' +
			'<p>Price: ' + item.price + ' Baht</p>';
	}
}
