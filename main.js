//Isongram


function isIsogram(str) {
    if (str === "") {
        return true
    }
    let finalOrder = str.toLowerCase().split("").sort()
    for (i = 0; i < finalOrder.length; i++) {
        if (finalOrder[i] == finalOrder[i + 1]) {
            return false
        }
    }
    return true
}