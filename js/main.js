var csvArray;
var csvData=[];
function ajax_get_json() {
	$.ajax({
		url:"contracts.csv",
		}).success(function(data){
		csvData = $.csv.toArrays(data);
	}).complete(function(){
		var table = document.getElementById("table");
		csvData.forEach(function(value,index){
			var appendText='<tr>'
			if(index==0){
				value.forEach(function(v,i){
					appendText+='<th>'+v+'</th>';
				});
			}else{
				value.forEach(function(v,i){
					appendText+='<td>'+v+'</td>';
				});
			}	
			appendText+='</tr>'
			table.innerHTML += appendText;
		});
	});
}

window.onload = function() {
	ajax_get_json();
}