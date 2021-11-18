function catAndMouse(x, y, z) {

    let xNeeds = Math.abs(x - z);
    let yNeeds = Math.abs(y - z);

    if (xNeeds < yNeeds) {
        return "Cat A";
    } else if (yNeeds < xNeeds) {
        return "Cat B";
    } else {
        return "Mouse C";
    }

}