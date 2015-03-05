<?php 
 $mysql = mysql_connect('10.107.91.62', 'root', 'root');
mysql_select_db('courses', $mysql);

 
 $query="select q.qid,q.question,q.gpname,s.sname,fnm.facname from question as q,aaqsession as s,q_faculty as qf,faculty as fnm,category as ct where q.sid=s.sid AND q.qid=qf.qid AND qf.facid=fnm.facid AND q.catid=ct.catid AND  ct.fudid=".$_GET['catid'];
    // get a product from products table
    $result = mysql_query($query);
	//echo $query;

    if (!empty($result)) {
        // check for empty result
		$cpunt=0;
		 $response["Questions"] = array();
        if (mysql_num_rows($result) > 0) {
 
           while ($row = mysql_fetch_array($result)) {
        // temp user array
		//&& (stristr($row["gpname"],'.mp4') >0)
		//echo " <br>aav=[".$row["gpname"]."]".strpos($row["gpname"],'.mp4');
		$pos = stristr($row["gpname"],'.mp4');
		 //stristr("Hello world!","WORLD");
		 if($pos!=NULL){
		if($row["gpname"]!='' && $row["gpname"]!='0' ){
//if ($pos === true) {
        $product = array();
		$product["qid"]= $row["qid"];
        $product["question"] = $row["question"];
        $product["flvpath"] = $row["gpname"];
		 $product["sname"] = $row["sname"]; 
		  $product["facname"] = $row["facname"];
       
        // push single product into final response array
        array_push($response["Questions"], $product);
		}
		}
    }
            // echoing JSON response
            echo json_encode($response);
			}}
      
?>