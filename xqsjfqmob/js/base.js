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
/**
 * 下拉导航
 */
function toggleKey(){
    if(document.getElementById('navcl').style.display=='block'){
        document.getElementById('navcl').style.display='none';
    }else{
        document.getElementById('navcl').style.display='block';
    }
}
/**
 * 弹出提示信息
 */
function showmsg(msg)
{

    if ($('#maskBox').length > 0)
    {
        $('#maskBox').remove();
    }
    var html = '<div id="maskBox"><div id="gLoadingMask" class="h-mask-container"></div><div class="mask-alert"><p class="cue">'+msg+'</p><button id="msgbtn" class="btn-white">取消</button></div></div>';
    $(html).appendTo($(document.body));
    $('#gLoadingMask').css('display', 'block');

    $('#msgbtn').tap(function(){
        $('#maskBox').remove();
    });
}
/**
 * 千分位转换
 */
Number.prototype.formatMoney = function (places, symbol, thousand) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    // decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand);
};