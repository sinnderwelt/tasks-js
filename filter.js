const string = "Привет! КАк делА?";

const vowels = ["у", "е", "ы", "а", "о", "я", "и", "ю", "э", "ё"];

const getVowels = stringToFilter => {
let extractedVowels = "";

for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
        extractedVowels = extractedVowels + currentLetter;
    }
}

return extractedVowels;
}

console.log(getVowels(string));
