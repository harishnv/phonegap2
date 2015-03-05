var aDataSet= new Array();
var xmlhttp;
var url;
var server="http://video.co-learn.in/";
//var server="http://10.107.91.62/";

//var server="http://10.129.200.52:8080/test/finalChrome/";

var oTable;
 $('#dynamic').html( "<hr style='width:95%;border:1px solid #000;'/><center><img src='images/abtus.png'></center>");
 $("#dynamic").css("overflow", "hidden");
 //$( "#three" ).html("<video poster='images/atglance150.png' src='"+server+"ChromeExt/AAQ-125_Movei.mp4' width='90%' height='230' controls></video>");

	
 $(".test").click(function(){
						   
	bRetrieve="true";
  	if(this.id==4){
	  aDataSet = [];
	  //url=server+"ask/email/questionlist.php?catid=4";
	   url=server+"ask/email/questionlist_n.php?catid=4";
	  $("#dynamic").css("overflow", "auto");
	  count(url);
  	}if(this.id==6){
	  aDataSet = [];
	  url=server+"ask/email/questionlist_n.php?catid=6";
	  $("#dynamic").css("overflow", "auto");
	  count(url);
  	}
	if(this.id==7){
	  aDataSet = [];
	  url=server+"ask/email/questionlist_n.php?catid=7";
	  $("#dynamic").css("overflow", "auto");
	  count(url);
  	}if(this.id==8){
	  aDataSet = [];
	  url=server+"ask/email/questionlist_n.php?catid=8";
	  $("#dynamic").css("overflow", "auto");
	  count(url);
  	}
		if(this.id==9){
			alert("test");
	   aDataSet = [];
	   url=server+"ask/email/questionlist_n.php?catid=9";
	   $("#dynamic").css("overflow", "auto");
	   count(url);
  	}
	if(this.id==10){
	  aDataSet = [];
	  $('#dynamic').html( "<hr style='width:95%;border:1px solid #000;'/><center><img src='images/abtus.png'></center>");
  	}
	
  });
function count(url) {
	if (window.XMLHttpRequest)
	  {
		  xmlhttp=new XMLHttpRequest();
  	  }
	xmlhttp.onreadystatechange=function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
		var json = xmlhttp.responseText,
    	obj = JSON.parse(json);
		shareInfoLen = Object.keys(obj.Questions).length;
		for (var i=0;i<shareInfoLen;i++)
			{ 
			var aDataSet1= new Array();
			aDataSet1.push(i+1);
			aDataSet1.push(obj.Questions[i].question);
			aDataSet1.push(obj.Questions[i].sname);
			aDataSet1.push(obj.Questions[i].flvpath);
				aDataSet.push(aDataSet1);
			}
			$('#dynamic').html( ' <hr style="width:95%;border:1px solid #000;"/></center> <table width="100%" cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
				var oTable = $('#example').dataTable( {
					"aaData": aDataSet,
					"bRetrieve" : true,
  					 "aoColumns": [
								    
						{ "sTitle": "Id","sWidth": "10%" }	, 
						{ "sTitle": "Questions","sWidth": "90%" }
					 ]} 
				);		
					$('#example').on('click', 'tr', function(){
						
				    var oData = oTable.fnGetData(this);
				    //alert(server+"ask/videos/"+oData[2]+"/questions/"+oData[3]);
				    alert(oData[1]);
					$( "#four" ).html(oData[1]);
					//http://video.co-learn.in/ask/videos/"+oData[2]+"/questions/"+oData[3]+"
					$( "#three" ).html("<video width='100%' style='min-height:300px' controls><source 	src='"+server+"ask/videos/"+oData[2]+"/questions/"+oData[3]+"' type='video/mp4'>Your browser does not support the video tag.</video>");
			    })

		}
	}
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
/* Get the rows which are currently selected */
			function fnGetData( oTableLocal )
			{
				return oTableLocal.$('tr.row_selected');
			}