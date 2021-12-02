/**
 * Bài 3: Quy đổi tiền
 * 
 * Khối 1: Input
 * usdCoin, vndCoin
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo hàm
 * B2: Tìm tới các thẻ trên form và lấy giá trị từ các thẻ đó 
 * B3: Lập công thức quy đổi tiền
 *      coinChange = usdCoin * vndCoin
 * B4: Điền kết quả cho thẻ thông báo
 * B5: Gắn hàm vào onclick
 * Khối 3: Output
 * coinChange
 * 
 */
function changeCoin() {
    var usdCoin = document.getElementById('txtUSD').value;
    var vndCoin = 23500;
    var coinChange = usdCoin * vndCoin;
    
    document.getElementById('txtResult').innerHTML = new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(coinChange) + ' VND'

}

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * Khối 1: Input
 * widthRectangle , longRectangle 
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo hàm
 * B2: Tìm tới các thẻ trên form và lấy giá trị từ các thẻ đó 
 * B3: Lập công thức tính chu vi và diện tích hình chữ nhật
 *      perRectangle = (widthRectangle + longRectangle) * 2
 *      ereaRectangle = widthRectangle *  longRectangle
 * B4: Điền kết quả cho thẻ thông báo
 * B5: Gắn hàm vào onclick
 * Khối 3: Output
 * perRectangle 
 * ereaRectangle 
 * 
 */


// Tính chu vi
function calPerRectangle() {
    var widthRectangle = document.getElementById('txtWidth').value;
    var longRectangle = document.getElementById('txtLong').value;
    var perRectangle = (parseInt(widthRectangle) + parseInt(longRectangle)) * 2;
    document.getElementById('txtResult2').innerHTML = 
    "<p>Chu vi hình chữ nhật là: "+perRectangle+"</p>";
}

// Tính diện tích
function calEreaRectangle() {
    var widthRectangle = document.getElementById('txtWidth').value;
    var longRectangle = document.getElementById('txtLong').value;
    var ereaRectangle = widthRectangle * longRectangle
    document.getElementById('txtResult3').innerHTML = 
    "<p>Diện tích hình chữ nhật là: "+ereaRectangle+"</p>";
}


/**
 * Bài 5: Tính tổng 2 kí số
 * 
 * Khối 1: Input
 * number
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo hàm
 * B2: Tìm tới các thẻ trên form và lấy giá trị từ các thẻ đó 
 * B3: Lập công thức 
 *      ten = number / 10
 *      unit = number % 10
 * 
 * B4: Điền kết quả cho thẻ thông báo
 * B5: Gắn hàm vào onclick
 * sumNumber
 * 
 */

function calSum(){

    var number = document.getElementById('txtNum').value;
    var ten = Math.floor(number / 10);
    var unit = number % 10;
    var sumNumber = ten + unit;
    console.log(sumNumber);
    document.getElementById('txtResult4').innerHTML = 
    "<p>Tổng của kí số là: "+sumNumber+"</p>";

}
