function isSonglistTable(table_element) {
    thead_element = table_element.firstElementChild;
    thead_first_row = thead_element.firstElementChild;
    first_th = thead_first_row.firstElementChild;
    if (first_th.innerHTML == "歌名") {
        return true;
    }
    return false;
}

// function copy2clipboard(s) {
//     alert("已复制\"" + s + "\"至剪贴板");
// }

function replaceSongNames() {
    var table_elements = document.getElementsByTagName("table")
    var i = 0, len = table_elements.length;

    var target_list = [];
    for (; i < len; i++) {
        if (isSonglistTable(table_elements[i])) {
            var tbody_element = table_elements[i].children[1]
            var j = 0, lenj = tbody_element.children.length;
            for (; j < lenj; j++) {
                var tr_element = tbody_element.children[j];
                var target_td = tr_element.firstElementChild;
                target_td.innerHTML = "<a class='songname' href=\"\" data-clipboard-text='"+target_td.innerHTML+"'>" + target_td.innerHTML + "</a>";
                target_list.push([target_td]);
            }
            break;
        }
    }
    clipboard = new ClipboardJS(".songname");
    clipboard.on("success",function(e){
        alert("已复制\"" + e.text + "\"至剪贴板");
    })
    clipboard.on("error",function(e){
        alert("自动复制失败，请手动复制>_<");
    })
}

$(replaceSongNames()); 