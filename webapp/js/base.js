/**
 * 页面 返回
 */
function goBack()
{
	var ref=document.referrer;
	if (ref){
		history.go(-1);
	}else{
		redirect('index.html');
	}
}

/**
 * 网址重定向
 */
function redirect(url)
{
	window.location.href=url;
}

/**
 * Js 获取id
 */
function $id(o){
	return document.getElementById(o) || o;
}
/**
 * loadMask 添加遮罩层
 */
function loadMask() {
  $('<div id="gLoadingMask" class="h-mask-container"><div class="h-mask-gif"></div></div>').appendTo('body');
  $('#gLoadingMask').css('display', 'block');
}
/**
 * removeMask 移除遮罩层
 */
function removeMask() {
  $('#gLoadingMask').remove();
}

// 内容溢出部分滑动
function hDrag2(box){

    var oDiv = document.getElementById(box);

    //点击父级的盒子进行拖拽竖向移动。
    oDiv.addEventListener("touchstart",function(ev){
        //手指按下。

        var downY = ev.targetTouches[0].pageY,  //手指按下的位置。
            iTop = oDiv.offsetTop, //UL offsetLeft
            disY = downY-iTop,  //手指与当前的dom元素的差值。（定制）
            _this = this;
        // var oleft=null;
        //手指移动
        function fnMove(ev){
            var downY2 = ev.targetTouches[0].pageY;
            oTop=(iTop+(downY2-downY)); //UL offsetLeft
            //取消绑定事件。
            var hmovewrap=$('#'+box).parent().height();
            var maxTop=$('#'+box).offset().height-hmovewrap

            if(oTop<0  && oTop>-maxTop){

                oDiv.style.top=oTop+'px';
            }
            else{
                return false;
            }
        };
        //手指抬起
        function fnEnd(ev){
            var iupY= ev.changedTouches[0].pageY;   //手指抬起，事件细节用changedTouches
            //取消绑定事件。

            document.removeEventListener("touchmove",fnMove,false);
            document.removeEventListener("touchend",fnEnd,false);
            _this.releaseCapture && _this.releaseCapture();
        };
        //绑定事件。
        document.addEventListener("touchmove",fnMove,false);
        document.addEventListener("touchend",fnEnd,false);
        //取消默认层。
        ev.preventDefault();
    },false);
}


