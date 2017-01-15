function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 === 1) { // if current== odd
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
// sumFibs(4);
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
