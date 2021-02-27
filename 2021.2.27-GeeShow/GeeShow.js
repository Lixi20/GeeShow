function SwapTxt() {
    var textarea = document.getElementById("first").value;//获取first文本框里的值 
    document.getElementById("second").innerHTML = textarea;//在second显示文本框的值
}