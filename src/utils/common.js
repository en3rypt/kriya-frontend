import * as Snowball from "snowball-stemmers";
import questions from "../constants/questions.json";

export const checkAnswer = (text, index) => {
    let answers = questions[index].answer;
    const stemmer = Snowball.newStemmer("English");
    const words = text.split(/\s+/);
    const stemmedWords = words.map((word) => stemmer.stem(word));
    const answerMatch = stemmedWords.filter(answer => answers.includes(answer));
    return answerMatch.length > 0;
};
