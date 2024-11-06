{
  type CountWordOccurrences = (sentence: string, targetWord: string) => number;

  const countWordOccurrences: CountWordOccurrences = (sentence, targetWord) => {
    const words: string[] = sentence.split(" ");
    let count = 0;

    words.forEach((word) => {
      const sanitizedWord = word.replace(/[!@#$%^&*]/g, "");
      const sanitizedTargetWord = targetWord.replace(/[!@#$%^&*]/g, "");

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
