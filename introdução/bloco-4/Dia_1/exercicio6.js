const piece = 'KNIGHT';
const piecelowercase = piece.toLowerCase()
switch (piecelowercase) {
    case 'bishop':
        console.log("diagonal");
        break;
    case 'rook':
        console.log("horizontal and vertical");
        break;
    case 'pawn':
        console.log("forward");
        break;
    case 'king':
        console.log("1");
        break;
    case 'queen':
        console.log("all");
        break;
    case 'knight':
        console.log("L shape");
}