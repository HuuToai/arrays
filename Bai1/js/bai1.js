function findNthLargest(){
    var n = document.getElementById("input_n").value;

    var arr = document.getElementById("input_arr").value.split(",");
    

    var arr1 = Array.from(new Set(arr));//remove duplicate


    console.log("arr1:", arr1);
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = parseInt(arr1[i]);
    }
    if (!isPositiveInteger(parseInt(n)) || n > arr1.length) {
        alert("Vui lòng nhập n là một số nguyên dương nhỏ hơn hoặc bằng độ dài của mảng, độ dài mảng là: " + arr1.length);
        return;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (!isPositiveInteger(arr1[i])) {
            alert("Vui lòng nhập mảng là một mảng số nguyên dương");
            return;
        }
    }
    arr1.sort(function(a, b){return a - b});
    
    console.log(arr1);
    document.getElementById("result").value = arr1[n-1];
}

function isPositiveInteger(value) {
    return Number.isInteger(Number(value)) && Number(value) > 0;
}

function handleInput(event, inputId) {
    var inputValue = event.target.value;

    // Kiểm tra xem giá trị nhập vào có phải là số không
    if (!isNumeric(inputValue)) {
        alert("Vui lòng nhập giá trị số.");
        // Đặt giá trị trống nếu không phải là số
        document.getElementById(inputId).value = "";
    }
}




