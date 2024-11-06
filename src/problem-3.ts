{
  type CountWordOccurrences = (sentence: string, targetWord: string) => number;

  const countWordOccurrences: CountWordOccurrences = (sentence, targetWord) => {
    const words: string[] = sentence.split(" ");
    let count = 0;

    words.forEach((word) => {
      const sanitizedWord = word.replace(/[!@#$%^&*]/g, ""); // exclude special characters from every single word
      const sanitizedTargetWord = targetWord.replace(/[!@#$%^&*]/g, ""); // exclude special characters from target word

      if (
        sanitizedWord.toLowerCase().includes(sanitizedTargetWord.toLowerCase())
      ) {
        count++;
      }
    });

    return count;
  };

  const result = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );

  console.log(result); // Output: 2
}
