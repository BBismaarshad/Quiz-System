// Import the Inquirer package.
import inquirer from "inquirer";
// Create a prompt with four questions.
const quiz = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "Q.1: What is the capital of Pakistan?",
        choices: [
            "A) Karachi",
            "B) Islamabad",
            "C) Lahore",
            "D) Peshawar"
        ]
    },
    {
        type: "list",
        name: "question_2",
        message: "Q.2: Which mountain range is located in Pakistan?",
        choices: [
            "A) Rocky Mountains",
            "B) Andes Mountains",
            "C) Himalayas",
            "D) Karakoram Range"
        ],
    },
    {
        type: "list",
        name: "question_3",
        message: "Q.3:Which river is known as the River of Pakistan?",
        choices: [
            "A) Ganges",
            "B) Indus",
            "C) Brahmaputra",
            "D) Yamuna"
        ]
    },
    {
        type: "list",
        name: "question_4",
        message: "Who was the founder of Pakistan?",
        choices: ["A) Muhammad Ali Jinnah",
            "B) Jawaharlal Nehru",
            "C) Mahatma Gandhi",
            "D) Liaquat Ali Khan",
        ]
    },
]);
// Initialize score to 0.
let score = 0;
// Check answer for question 1.
switch (quiz.question_1) {
    case "B) Islamabad":
        console.log(" 1. correct answer");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
// Check answer for question 2.
switch (quiz.question_2) {
    case "D) Karakoram Range":
        console.log(" 2. correct answer");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
// Check answer for question 3.
switch (quiz.question_3) {
    case "B) Indus":
        console.log(" 3. correct answer");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
// Check answer for question 4.
switch (quiz.question_4) {
    case "A) Muhammad Ali Jinnah ":
        console.log(" 4. correct answer");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
// Log the final score.
console.log(`Score:${score}`);
