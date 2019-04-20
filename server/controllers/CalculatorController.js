const addAction = (req, res, next)=> {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    console.log("body",req);

    if(!isNaN(num1) ||  !isNaN(num2)){
        var sum = parseInt(num1) + parseInt(num2);
        return res.json(sum);
    }
    res.status(400);
    return res.send('You can add up to 10 numbers and all should be integers');
};

const subtractAction = (req, res, next) => {

    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(!isNaN(num1) ||  !isNaN(num2)){
        const result =  parseInt(num1) - parseInt(num2);
        return res.json(result);
    }

    res.status(400);
    return res.send('Please input 2 numbers');
};


const multiplyAction = (req, res, next) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    if(!isNaN(num1) ||  !isNaN(num2)){
        var result = parseInt(num1) * parseInt(num2);
        return res.json(result);
    }
    res.status(400);
    return res.send('Please input 2 numbers');
};

const divideAction = (req, res, next) => {
    var dividend = req.body.dividend;
    var divisor = req.body.divisor;


    if(!isNaN(dividend) ||  !isNaN(divisor)){
        var result = parseInt(dividend) / parseInt(divisor);
        return res.json(result);
    }
    res.status(400);
    return res.send('Please input 2 numbers parameters [dividend , divisor]');
}

const factorialsAction = (req, res, next) => {

    var num = req.body.number;

    if(!isNaN(num)){
        num = parseInt(num);
        var result=1;
        for (var i = 2; i <= num; i++){
            result = result * i;
        }

        return res.json(result);
    }


    res.status(400);
    return res.send('Please input 1 number to get factorials');
};

const qrtAction = (req,res, next) =>{
    var num1 = req.body.number;

    if(!isNaN(num1)){
        var result =  Math.cbrt(num1);
        return res.json(result);
    }

    return res.send('Please input number for cuebic root root');
};

const sqrtAction = (req, res, next) => {
    var num1 = req.body.number;

    if(!isNaN(num1)){
        var result = Math.sqrt(num1);
        return res.json(result);
    }

    res.status(400);
    return res.send('Please input number for square root');
};

const powerAction = (req, res, next) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    if(!isNaN(num1) ||  !isNaN(num2)){
        var result = Math.pow(parseInt(num1), parseInt(num2));
        return res.json(result);
    }

    res.status(400);
    return res.send('Please input 2 numbers');
};

module.exports = {
    addAction: addAction,
    subtractAction: subtractAction,
    multiplyAction: multiplyAction,
    factorialsAction: factorialsAction,
    qrtAction: qrtAction,
    sqrtAction:sqrtAction,
    powerAction: powerAction,
    divideAction: divideAction
}