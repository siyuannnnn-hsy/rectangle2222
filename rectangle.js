/* global $: true */
$(function () {
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event*/
    $btnCal.click(function(){
        //解决浮点舍入误差的问题
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        }

        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = roundFractional(2 * (w + h),2),
            a = roundFractional(w * h,2);
        //output
        $perimeter.val(p);
        $area.val(a);

    });
        
});