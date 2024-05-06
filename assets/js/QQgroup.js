$(function(){
    clipboard = new ClipboardJS(".qqgroup");
    clipboard.on("success",function(e){
        alert("已复制\"" + e.text + "\"至剪贴板");
    })
    clipboard.on("error",function(e){
        alert("自动复制失败，请手动复制>_<");
    })
}); 