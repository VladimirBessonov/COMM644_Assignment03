let first, second, operator;
let re = /(\+|\-|\/|\*)/;
function dataRequest(cb) {
    first = parseFloat(prompt('enter first value ', 0));
    second = parseFloat(prompt('enter second value', 0));
    operator = prompt('enter + - / *', '+');

    if (!re.test(operator) ) {
        alert('Enter valid operator: + - / *')
       dataRequest()
    }
    let calc = cb(first, second, operator)
    if (calc === null) {
        dataRequest(calculate);
    }
    return
}

function calculate(first, second, operator) {
    let result
    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first*second;
            break;
        case '/':
            if (second !=0) {
                result = first/second;

            } else {alert('cannot divide by 0!!, try again')
            return null;
            break}
    }
    alert(`the calc result: ${result}`);
    return result;

}
// let result = eval(`${fisrt} ${operator} ${second}`);
dataRequest(calculate);
