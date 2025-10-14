import "dotenv/config";

function normalizeBadWords(text: string): string {
  const forbiddenWords = JSON.parse(process.env.FORBIDDEN_WORDS_JSON || "[]");

  const normalizedText = text
    .split(" ")
    .map((word) => {
      const startPunctuationMatch = word.match(/^\W+/);
      const endPunctuationMatch = word.match(/\W+$/);

      const startPunctuation = startPunctuationMatch
        ? startPunctuationMatch[0]
        : "";
      const endPunctuation = endPunctuationMatch ? endPunctuationMatch[0] : "";

      const coreWord = word.slice(
        startPunctuation.length,
        word.length - endPunctuation.length
      );

      const normalizedCore = forbiddenWords.includes(coreWord.toLowerCase())
        ? "*".repeat(coreWord.length)
        : coreWord;

      return startPunctuation + normalizedCore + endPunctuation;
    })
    .join(" ");

  return normalizedText;
}

export { normalizeBadWords };
