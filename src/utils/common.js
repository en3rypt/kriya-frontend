import * as Snowball from "snowball-stemmers";
import questions from "../constants/questions.json";

export const checkAnswer = (text, index) => {
    let answers = questions[index].answer;
    const stemmer = Snowball.newStemmer("English");
    const words = text.split(/\s+/);
    const stemmedWords = words.map((word) => stemmer.stem(word));
    const stemmedAnswers = new Set();

    answers.forEach((answer) =>
        answer.split(/\s+/).forEach((word) => stemmedAnswers.add(stemmer.stem(word)))
    );
    console.log("🚀 ~ checkAnswer ~ stemmedAnswers:", stemmedAnswers)
    const answerMatch = stemmedWords.filter((answer) => stemmedAnswers.has(answer));


    return answerMatch.length > 0;
};
