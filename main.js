/**
 * Bài 1: Tìm nguyên dương nhỏ nhất  sao cho: 1 + 2 + … + n > 10000
 * 
 * B1: input số nguyên dương
 * B2: Handle : 
 *  -  Đặt biến numBai1 và sumBai1 
 *  -  Dùng vong lặp for lặp numBai1 tăng dần đến khi sumBai1 > 1000
 * B3: Xuất numBai1 ra màn hình 
 */



function getEle (id) {
    return document.getElementById(id);
}

function timSoBai1 () {
    var showKqBai1 = getEle('showKqBai1');
    var sumBai1 = 0;   
    for (var numBai1 = 0 ; numBai1 <= 1000; ++numBai1) {
        sumBai1 += numBai1;
        if (sumBai1 > 10000) {
            break;
        }
    };    

    if (isDisplay) {
        showKqBai1.innerHTML = ``
        isDisplay = !isDisplay;
    }else {
        showKqBai1.innerHTML = `<h4 style = "background-color: aquamarine; padding-bottom: 10px">Số nguyên dương nhỏ nhất: ${numBai1}</h4>`;
        isDisplay = !isDisplay;
    }
    
}
var isDisplay = false;
var btnTimSoBai1 = getEle('btnTimSoBai1').addEventListener('click',timSoBai1 )


/**
 * bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n
 * 
 * B1: Input so x và n
 * B2: Handle 
 *  - Đặt biến: ipSoXBai2, ipSoNBai2, tongBai2, btnTongBai2, showTongBai2
 *  - Dùng vòng lặp for duyệt biến i từ 1 đến i <=n 
 *  - tongBai2 = tongBai2 + ipSoXBai2**i
 * B3: Output : Xuất kết quả ra màn hình
 */




var btnTongBai2 = getEle('btnTongBai2');
var showTongBai2 = getEle('showTongBai2');


function tinhTongBai2 () {
    var ipSoNBai2 = getEle('ipSoNBai2').value;
    var ipSoXBai2 = getEle('ipSoXBai2').value;

    if (!ipSoXBai2 || !ipSoNBai2 || isNaN(ipSoXBai2) || ipSoNBai2 < 0 || Number.isInteger(+ipSoNBai2) == false  ) {
        alert('Vui lòng nhập lại số  x và n')
    }
    else {
        var tongBai2 = 0;
        for (var i = 1; i <= ipSoNBai2; i++ ) {
        tongBai2 = tongBai2 + ipSoXBai2**i;
        }    
        showTongBai2.style.display = 'inline-block';
        showTongBai2.innerHTML = `<h4> Kết quả: ${tongBai2} </h4>`


    }

}

btnTongBai2.addEventListener('click', tinhTongBai2)


/**
 * Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
 * Input: người dùng nhập vào số n
 * B2: handle:
 *  - Đặt biến ipSoNBai3, giaiThuaBai3, btnGiaiThua, showGiaiThua
 *  - Kiểm tra người dung nhập có hợp lệ không
 *  - Dùng hàm for để duyệt biến i = 1 => i <= n
 *  - gaiThuaBai3 *=i
 * B3: Xuất kết quả ra màn hình 
 */ 

var btnGiaiThua = getEle('btnGiaiThua');
var showGiaiThua = getEle('showGiaiThua');

function tinhGiaiThua() {    
    var ipSoNBai3 = getEle('ipSoNBai3').value;
    giaiThuaBai3 = 1;
    if (ipSoNBai3 <= 0 || Number.isInteger(+ipSoNBai3) == false) {
        alert('Vui lòng nhập số nguyên dương n>0')
    } else {
        for ( var i = 1; i <=ipSoNBai3; i++) {
            giaiThuaBai3 *= i;            
        }
        showGiaiThua.style.display = 'block';
        showGiaiThua.innerHTML = `<h3> Kết quả: ${giaiThuaBai3}</h3>`;
    }
}

btnGiaiThua.onclick = tinhGiaiThua;



/**
 * Bài 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.
 * 
 * B1: Input 10 thẻ div 
 * B2: Handle 
 * B3: Xuất kết quả ra màn hình
 */
 

showTaoDiv = getEle('showTaoDiv');
btnTaoDiv = getEle('btnTaoDiv');
var isDisplayB4 = false;
function taoTheDiv () {
    kqTheDiv = '';
    for ( var i = 1; i <=10; i++) {
        ( i % 2 != 0 ) ? kqTheDiv += `<div style = "background-color: red;">DIV ${i}</div>` : kqTheDiv += `<div style = "background-color: blue;">DIV ${i}</div>`;
     
    }
    

    if (!isDisplayB4) {
        showTaoDiv.innerHTML = kqTheDiv;
        isDisplayB4 = !isDisplayB4;
    } else {
        showTaoDiv.innerHTML = '';
        isDisplayB4 = !isDisplayB4;
    }

}

btnTaoDiv.addEventListener('click',taoTheDiv)