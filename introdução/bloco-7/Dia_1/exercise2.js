const longestWord = string => {
    let splitString = string.split(' ');
    let longest = '';
    for (const words of splitString){
        if (words.length > longest.length){
            longest = words;
        }
    }
    console.log(longest);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");