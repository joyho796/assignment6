function changeText(id, newText) {
    document.getElementById(id).innerHTML = newText;
}

function getText(id) {
    return document.getElementById(id).innerHTML;
}

function getFactors(num) {

    var factors = [];

    for(i = 1; i < num; i++) {
        if(num % i == 0) {
            factors.push(i);
        }
    }

    return factors;

}

function getSum(arr) {

    var sum = 0;

    for(i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

function amicable(form) {

    var num1 = parseInt(form.firstNum.value);
    var num2 = parseInt(form.secondNum.value);

    changeText("first", "Factors of " + num1 + "<br>" + getFactors(num1).join(", "));
    changeText("second", "Factors of " + num2 + "<br>" + getFactors(num2).join(", "));

    var amicableText = " are not amicable";
    if ((getSum(getFactors(num1)) == num2) && (getSum(getFactors(num2)) == num1)) {
        amicableText = " are amicable";
    }

    changeText("amicable", num1 + " and " + num2 + amicableText);

    document.getElementById("summary").style.display = "block";
}

function showFactors() {

    if (document.getElementById("factors").style.display == "none") {
        document.getElementById("factors").style.display = "block";
        changeText("toggle", "Hide Factors");
    } else {
        document.getElementById("factors").style.display = "none";
        changeText("toggle", "Show Factors");
    }

}
