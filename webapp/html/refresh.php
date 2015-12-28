<?php
// header('Content-Type: application/json');
// sleep(2);
// $data = array();

// $image = array('in1', 'in2');
// $count = count($image);

// for($i =0; $i < 10; $i++){
//     $data[] = array(
//         'html'=>'<li class="h-inlist">
//                         <a href="#">
//                             <i class="icon-heart"></i>
//                             <img src="../images/'.($image[rand(0, $count-1)]).'.png" alt="">
//                             <div class="h-bgtext">
//                                 <div class="clearfix">
//                                     <p class="h-bgtext-l">
//                                         <span class="h-fsb">海滨山间顶级豪宅</span><br/>
//                                         美国加利福尼亚洲 旧金山 490平米
//                                     </p>
//                                     <p class="h-bgtext-r">
//                                         USD 4,495,000 <br/> 
//                                         约<span class="h-fsbc">￥2750万</span>
//                                     </p>
//                                 </div>
//                             </div>
//                         </a>
//                     </li>'
//     );
// }


$data = array(
    '0' => array(
        'img'=> '../images/in2.png',
        'title'=> '加载的标题',
        'des'=>'介绍',
        'USD'=> 'USD 9999',
        'yuan'=>'2756 万'
    ),
    '2' => array(
        'img'=> '../images/in2.png',
        'title'=> '加载的标题',
        'des'=>'介绍',
        'USD'=> 'USD 9999',
        'yuan'=>'2756 万'
    ),
    '3' => array(
        'img'=> '../images/in2.png',
        'title'=> '加载的标题',
        'des'=>'介绍',
        'USD'=> 'USD 9999',
        'yuan'=>'2756 万'
    ),
    '4' => array(
        'img'=> '../images/in2.png',
        'title'=> '加载的标题',
        'des'=>'介绍',
        'USD'=> 'USD 9999',
        'yuan'=>'2756 万'
    ),
    '5' => array(
        'img'=> '../images/in2.png',
        'title'=> '加载的标题',
        'des'=>'介绍',
        'USD'=> 'USD 9999',
        'yuan'=>'2756 万'
    )

);

// print_r($data);
echo json_encode($data);
?>