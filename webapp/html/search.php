<?php
$txt = $_POST['txt'];

if($txt){
	$data = array(
		0 =>array(
			'txt' => '上海'
		),
		1=>array(
			'txt' => '长白山'
		),
		2=>array(
			'txt' => '幽都'
		)
		
	 );
}
echo json_encode($data);
?>