function SwapTxt() {
    var textarea = document.getElementById("first").value;//获取first文本框里的值 
    document.getElementById("second").innerHTML = textarea;//在second显示文本框的值
}
function imgChange() {
    var file = document.getElementById("file");//获取file接口
    var imgUrl = window.URL.createObjectURL(file.files[0]);//获取相机图片接口
    var img = document.getElementById('imghead');//获取图片
    file.style.cssText ="background-image:url("+imgUrl+")";//将图片显示在方框内
    // img.setAttribute('src', imgUrl);//在浏览器显示图片
}