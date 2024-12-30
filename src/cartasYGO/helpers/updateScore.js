const calculatePoints = (guessesAmount) => {
    switch (guessesAmount) {
        case 0:
            return 10;
        case 1:
            return 5;
        case 2:
            return 3;
        case 4://no adivino la carta
            return -3;
        default:
            return 0;
    }
}

export const updateScore = (guessesAmount) => {
    //actualizar el estado del store
    //luego llamar al api y actualizar la bd FALTA POR HACER
    console.log('cp ' + calculatePoints(guessesAmount));
    return calculatePoints(guessesAmount);
}