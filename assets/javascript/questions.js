var questions = [{
    id: 1,
    question: "What is the function for creating a prompt box?",
    choices: ["alert();", "prompt();", "document.prompt();", "message()"],
    answer: "prompt();"
},
{
    id: 2,
    question: "What function can I use to change the background color?",
    choices: ["document.color.background = \"\"", "document.backgroundColor= \"\"", "document.body.style.backgroundColor = \"\"", "me.changeColor = \"\""],
    answer: "document.body.style.backgroundColor = \"\""
},
{
    id: 3,
    question: "In JavaScript the function for changing the background image is document.body.image.",
    choices: ["true", "false"],
    answer: "false"
},
{
    id: 34,
    question: "When you combine JavaScript, XML, and a server side scripting language, you get a technology that allows JavaScript to communicate with the server. What is this technology called?",
    choices: ["Dynamic Hyper Text Markup Language", "Hypertext Preprocessor", "Asynchronous JavaScript and XML", "Python"],
    answer: "Asynchronous JavaScript and XML"
},
{
    id: 5,
    question: "<div> is a block level tag",
    choices: ["true", 
              "false"],
    answer: "true"
}, 
{
    id: 6,
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["true", "false"],
    answer: "false"
},
{
    id: 7,
    question: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    answer: "function myFunction()"
},
{
    id: 8,
    question: "How do you call a function named \"myFunction\"?",
    choices: ["call myFunction()", "myFunction()", "call function myFunction()"],
    answer: "myFunction()"
},
{
    id: 9,
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i = 5", "if (i == 5)", "if i = 5 then", "if i == 5 then"],
    answer: "if (i == 5)"
},
{
    id: 10,
    question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
    choices: ["if i <> 5", "if i =! 5 then", "if (i != 5)", "if (i <> 5)"],
    answer: "if (i != 5)"
},
{
    id: 11,
    question: "How does a WHILE loop start?",
    choices: ["while (i <= 10)", "while (i <= 10; i++)", "while i = 1 to 10"],
    answer: "while (i <= 10)"
},
{
    id: 12,
    question: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
    answer: "for (i = 0; i <= 5; i++)"
},
{
    id: 13,
    question: "How can you add a comment in a JavaScript?",
    choices: ["'This is a comment", "<!--This is a comment-->", "//This is a comment"],
    answer: "//This is a comment"
},
{
    id: 14,
    question: "How to insert a comment that has more than one line?",
    choices: ["//This comment has\nmore than one line//", 
              "<!--This comment has \n more than one line-->", 
              "/*This comment has \n more than one line*/"],
    answer: "/*This comment has \n more than one line*/"
},
{
    id: 15,
    question: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = \"red\", \"green\", \"blue\"", 
              "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", 
              "var colors = (1:\"red\", 2:\"green\", 3:\"blue\"", 
              "var colors = [\"red\", \"green\", \"blue\"]"],
    answer: "var colors = [\"red\", \"green\", \"blue\"]"
},
{
    id: 16,
    question: "How do you round the number 7.25, to the nearest integer?",
    choices: ["rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)"],
    answer: "Math.round(7.25)"
},
{
    id: 17,
    question: "Which of the following is not a reserved word in JavaScript?",
    choices: ["default", "finally", "throw", "undefined"],
    answer: "undefined"
},
{
    id: 18,
    question: "JavaScript can be combined with CSS and a markup language to create Dynamic HTML.",
    choices: ["true", "false"],
    answer: "true"
},
{
    id: 19,
    question: "JavaScript is the same as Java",
    choices: ["false", "true"],
    answer: "false"
},
{
    id: 20,
    question: "How can you detect the client's browser name?",
    choices: ["client.navName", "navigator.appName", "browser.name"],
    answer: "navigator.appName"
},
{
    id: 21,
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseover", "onmouseclick", "onclick", "onload"],
    answer: "onclick"
},
{
    id: 22,
    question: "How do you declare a JavaScript variable?",
    choices: ["var carName;", "variable carName;", "v carName;"],
    answer: "var carName;"
},
{
    id: 23,
    question: "Which operator is used to assign a value to a variable?",
    choices: ["X", "-", "=", "*"],
    answer: "="
},
{
    id: 24,
    question: "What will the following code return: Boolean(10 > 9)",
    choices: ["NaN", "false", "undefined", "true"],
    answer: "true"
},
{
    id: 25,
    question: "Null is an object, yes or no?",
    choices: ["Yes", "No"],
    answer: "Yes"
},
{
    id: 26,
    question: "Who created JavaScript?",
    choices: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"],
    answer: "Netscape"
},
{
    id: 27,
    question: "How long did Brendan Eich take to write the JavaScript programming language?",
    choices: ["10 days", "2 weeks", "2 months", "10 months"],
    answer: "10 days"
},
{
    id: 28,
    question: "JavaScript wasn’t always called that. What name was it initally released under?",
    choices: ["Latte", "Mocha", "LiveScript", "BScript", "Spidermonkey"],
    answer: "Mocha"
},
{
    id: 29,
    question: "Is JavaScript a front-end, back-end, or full-stack programming language?",
    choices: ["Front-end", "Back-end", "Full-stack"],
    answer: "Full-stack"
},
{
    id: 30,
    question: "Is JavaScript dynamically typed or statically typed?",
    choices: ["Dynamic", "Static"],
    answer: "Dynamic"
},
];