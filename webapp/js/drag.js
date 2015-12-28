function hDrag(wrap,box){

        var oWrap = document.getElementById(wrap);
        var oDiv = document.getElementById(box);
        var aLi=oDiv.children;
        var wrapwidth=oWrap.offsetWidth;
        var oUlwidth=aLi.length*aLi[0].offsetWidth;
        var widthX=oUlwidth-wrapwidth
        //点击父级的盒子进行拖拽竖向移动。
        oDiv.style.width=oUlwidth+'px';
        oDiv.addEventListener("touchstart",function(ev){
            //手指按下。
            var downX = ev.targetTouches[0].pageX,  //手指按下的位置。
                iLeft = oDiv.offsetLeft, //UL offsetLeft
                disX = downX-iLeft,  //手指与当前的dom元素的差值。（定制）
                _this = this;
            var downX2=null;
            //手指移动
            function fnMove(ev){
                downX2 = ev.targetTouches[0].pageX;
                oDiv.style.left=iLeft+(downX2-downX)+'px';
            };
            //手指抬起
            function fnEnd(ev){
                var iupX = ev.changedTouches[0].pageX;   //手指抬起，事件细节用changedTouches

                if(iLeft+(downX2-downX)>0){
                    oDiv.style.left=0;
                    return false;
                }
                else if((iLeft+(downX2-downX))<-widthX)
                {
                    oDiv.style.left=-widthX+'px';

                }

                //取消绑定事件。
                oDiv.removeEventListener("touchmove",fnMove,false);
                oDiv.removeEventListener("touchend",fnEnd,false);
                _this.releaseCapture && _this.releaseCapture();
            };
            //绑定事件。
            oDiv.addEventListener("touchmove",fnMove,false);
            oDiv.addEventListener("touchend",fnEnd,false);
            //取消默认层。
            ev.preventDefault();
        },false);
    }