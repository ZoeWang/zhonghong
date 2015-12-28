<?php
	function get_data(){
		$page = $_GET['page'] ? $_GET['page'] : 1;
		$page_size = 10;
		$data = array();
		for($i=0;$i<50;$i++){
			$data[] = array('id' => $i,'name'=>'test'.$i,'time'=>@date('Y-m-d H:i:s',time()));
		}
		$res = array_slice($data,($page-1)*$page_size,$page_size);
		$return = empty($res) ? null : $res;
		echo json_encode($return); 
	}
	get_data();

?>