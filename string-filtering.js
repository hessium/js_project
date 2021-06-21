  const string = "Привет! Как дела?";

  const voweles = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

  const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
      const currentLetter = stringToFilter[i].toLowerCase();

      if (voweles.includes(currentLetter)) {
        extractedVowels += currentLetter;
      }
    }
    return extractedVowels;
  }

  console.log(getVowels(string));