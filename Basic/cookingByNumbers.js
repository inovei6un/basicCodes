function cookingByNums(inputnum, ...commands) {

    for (let i = 0; i < commands.length; i++){
        inputnum = manipulator(inputnum, commands[i])
    }

    // alternate variant
    // commands.forEach(command=> {inputnum = manipulator(inputNumber, command)})

    function manipulator(num, command) {
        switch (command) {
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num += 1;
                console.log(num);
                break;
            case "bake":
                num *= 3;
                console.log(num);
                break;
            case "fillet":
                num -= 20 / 100 * num;
                console.log(num);
                break;
        }
        return num
    }
}

cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('---------------------')
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet')