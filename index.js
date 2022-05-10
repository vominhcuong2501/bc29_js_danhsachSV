/* Tìm điều kiện */
    // input: ? mảng điểm [] lấy từ giao diện , mảng tên [] lấy từ giao diện
    var arrDiem = [];
    var arrTen = [];

    // Trả về arrTd tên 
    var arrTdTen = document.querySelectorAll("#tblBody tr td:nth-of-type(3)");
    arrTdTen.forEach(function(td,index){
        //lấy ra tên trên thẻ td
        var tenSV = td.innerHTML;
        arrTen.push(tenSV);
    })

    // Trả về arrTd điểm
    var arrTdDiem = document.querySelectorAll("#tblBody tr td:nth-of-type(4)");
    arrTdDiem.forEach(function(td,index){
        var diemSV = td.innerHTML;
        arrDiem.push(diemSV);
    })

/* Câu 1: Tìm học sinh giỏi nhất */
document.querySelector("#btnSVCaoDiemNhat").onclick = function() {
    /* Cách 1: tìm SV có điểm cao nhất chung 1 hàm
    var max = arrDiem[0]; đặt sv có điểm đầu tiên là max
    var viTriMax = 0;
    for(var i = 0; i <= arrDiem.length -1; i++) {
        mỗi lần duyệt lây ra điểm
        var diem = arrDiem[i];
        if( diem > max) {
            max = diem;
            viTriMax = i;
        }
    }
    */
    var viTriMax = timDiemCaoNhat(arrDiem);
    // output: ? "string"
    var ketQua = "Sinh viên giỏi nhất là "+ arrTen[viTriMax] + " ;điểm là: " + arrDiem[viTriMax];
    document.querySelector("#svGioiNhat").innerHTML = ketQua;
}

    // Cách 2: tách ra làm các hàm nhỏ
function timDiemCaoNhat(arrDiem) {
    var index = 0;
    var max = arrDiem[0];
    for(var i = 1; i <= arrDiem.length; i++) {
        if(arrDiem[i] > max) {
            max = arrDiem[i];
            index = i;
        }
    }
    return index;
}

/* Câu 2: Tìm học sinh yếu nhất */
document.querySelector("#btnSVThapDiemNhat").onclick = function() {
    var viTriMin = timDiemThapNhat(arrDiem);
    var ketQua = "Sinh viên yếu nhất là "+ arrTen[viTriMin] + "; điểm là: " + arrDiem[viTriMin];
    document.querySelector("#svYeuNhat").innerHTML = ketQua;
}
function timDiemThapNhat(arrDiem) {
    var index = 0;
    var min = arrDiem[0];
    for(var i = 0; i <= arrDiem.length -1; i++) {
        if( arrDiem[i] < min) {
            min = arrDiem[i];
            index = i;
        }
    }
    return index;
}

/* Câu 3: Đếm số học sinh giỏi */
// Cách 1
function xepLoai(dtb) {
    if( 8 <= dtb && dtb <= 10) {
        return "Gioi";
    } else if( 7 <= dtb && dtb < 8) {
        return "Kha";
    } else if( 6 <= dtb && dtb < 7) {
        return "TB";
    } else {
        return "Yeu";
    }
}
// callback function: Tham số của hàm gọi đến 1 hàm khác
document.querySelector("#btnSoSVGioi").onclick = function() {
    var count = 0;
    arrDiem.forEach(function(item,index){
        var loai = xepLoai(item);
        if(loai === "Gioi") {
            count++;
        }
    })
    document.querySelector("#soSVGioi").innerHTML = count;
}

// Cách 2
// document.querySelector("#btnSoSVGioi").onclick = function() {
//     var ketQua = 0;
//     for(var i = 0; i <= arrDiem.length -1; i++) {
//         if(arrDiem[i] >= 8) {
//             ketQua++;
//         }
//     }
//     var soSVGioi = document.querySelector("#soSVGioi");
//     soSVGioi.innerHTML = ketQua;
// }


/* Câu 4: Danh sách sinh viên có ĐTB lớn hơn 5 
    Tạo biến ketQua = "";
    Duyệt mảng arrDiem
        + so sánh nếu item > 5
            - lấy được điểm
            - lấy dc index => truy xuất vô arrTen
            - tích lũy chuỗi thông báo vào biến ketQua
    Show ket qua
*/
// Cách 1
 document.querySelector("#btnSVDiemHon5").onclick = function() {
    var content = "";
    arrDiem.forEach(function(item,index){
        if(item > 5) {
            var ten = arrTen[index];
            content += "Tên: "+ ten + " - Điểm: " + item + "<br>";
        }
    })
    document.querySelector("#dsDiemHon5").innerHTML = content;
 }


//Cách 2
// document.querySelector("#btnSVDiemHon5").onclick = function() {
//     // output: ? array
//     var ketQua = "";
//     for(var i = 0; i <= arrDiem.length -1; i++) {
//         if(arrDiem[i] > 5) {
//             ketQua += arrTen[i] + " - Điểm: " + arrDiem[i] + "<br>";
//         }
//     }
//     document.querySelector("#dsDiemHon5").innerHTML = ketQua;
// }

/* Câu 5: Săp xếp tăng dần */
document.querySelector("#btnSapXepTang").onclick = function () {
    // dùng for để sắp tăng dần
    for(var i = 0; i < arrDiem.length - 1; i++) {
        for(var j = i +1; j < arrDiem.length; j++) {
            if(arrDiem[i] > arrDiem[j]) {
                // hoán đổi
                var tam = arrDiem[i];
                arrDiem[i] = arrDiem[j];
                arrDiem[j] = tam;
            }
        }
    }
    document.getElementById("dtbTang").innerHTML = arrDiem;
}

/* cách 2
document.querySelector("#btnSapXepTang").onclick = function () {
    var arrDiem = [];
    var arrTen = [];
    var arrTdDiem = document.querySelectorAll("#tblBody tr td:nth-of-type(4)");
    arrTdDiem.forEach(function (td, index) {
        var diem = td.innerHTML;
        arrDiem.push(diem);
    });

    var arrTd = document.querySelectorAll("#tblBody tr td:nth-of-type(3)");
    arrTd.forEach(function (td, index) {
        var tenSV = td.innerHTML;
        arrTen.push(tenSV);
    });

    var arrCopy = [];
    for( var i = 0; i <arrDiem.length;i++){
        arrCopy.push(arrDiem[i]);
    }

    var arrDiemMoi = arrDiem.sort(function (phanTu, phanTuTruoc) {
        return phanTu - phanTuTruoc;
    })

    var arrPreIndex = []
    for (var i = 0; i < arrCopy.length; i++) {
        var preIndex = arrCopy.indexOf(arrDiemMoi[i]);
        arrPreIndex.push(preIndex);
    }

    ketQua = "";
    for(var i = 0; i < arrPreIndex.length; i++){
        ketQua += arrTen[arrPreIndex[i]] + " - ";
        ketQua += arrDiemMoi[i] + " <br> ";
    }
    document.getElementById("dtbTang").innerHTML = ketQua;
}
/*

/* Cách 3
document.querySelector("#btnSapXepTang").onclick = function () {
        var arrDiem = [];
        var arrTen = [];
        arrTen = getValue(arrTen,"#tblBody tr td:nth-of-type(3)");
        arrDiem = getValue(arrDiem,"#tblBody tr td:nth-of-type(4)");

        var arrCopy = [];
        for( var i = 0; i <arrDiem.length;i++){
            arrCopy.push(arrDiem[i]);
        }
    
        arrDiem = arrDiem.sort(function (phanTu, phanTuTruoc) {
            return phanTu - phanTuTruoc;
        })
    
        var arrPreIndex = []
        for (var i = 0; i < arrCopy.length; i++) {
            var preIndex = arrCopy.indexOf(arrDiem[i]);
            arrPreIndex.push(preIndex);
        }
    
        ketQua = "";
        for(var i = 0; i < arrPreIndex.length; i++){
            ketQua += " - "+ arrTen[arrPreIndex[i]]+ ": " ;
            ketQua += arrDiem[i] + "<br>";
        }
    document.querySelector("#dtbTang").innerHTML = ketQua;
}
function getValue(arrPush, query) {
    var arrTd = document.querySelectorAll(query);
    arrTd.forEach(function (ele, index) {
        var item = ele.innerHTML;
        arrPush.push(item);
    })
    return arrPush;
} */

   
