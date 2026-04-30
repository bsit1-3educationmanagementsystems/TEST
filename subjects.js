const searchbar = document.getElementById('searchbar');
const easteregg = document.getElementById('EASTEREGG');
const pics = document.getElementById('PICS');

searchbar.addEventListener("keydown", function(event){
        
        if (event.key === "Enter"){
            if (
            searchbar.value === "home" ||
            searchbar.value === "Home" ||
            searchbar.value === "Main" ||
            searchbar.value === "main" ||
            searchbar.value === "Index" ||
            searchbar.value === "index"
            ) {
            window.location.href = "index.html";
            }

            if (
            searchbar.value === "application" ||
            searchbar.value === "sign-in" ||
            searchbar.value === "student" ||
            searchbar.value === "teacher" ||
            searchbar.value === "users"
            ) {
            window.location.href = "application.html";
            }

            if (
            searchbar.value === "subjects" ||
            searchbar.value === "subject" ||
            searchbar.value === "courses" ||
            searchbar.value === "guest"
            ) {
            window.location.href = "sbjctGuestmain.html";
            }

            if (
            searchbar.value === "science"
            ) {
            window.location.href = "sbjctGuest.html";
            }

            if (
            searchbar.value === "math"
            ) {
            window.location.href = "sbjctGuestMath.html";
            }

            if (
            searchbar.value === "english"
            ) {
            window.location.href = "sbjctGuestEng.html";
            }

            if (
            searchbar.value === "reading"
            ) {
            window.location.href = "sbjctGuestRead.html";
            }

            if (
            searchbar.value === "abstract"
            ) {
            window.location.href = "sbjctGuestAbs.html";
            }

  }})





const role = document.body.dataset.role;
// Subject 

/* To add more files, use the format:

 science: [
    { name: "Module 1", url: "pdfs/module1.pdf" },
    { name: "Lab Guide", url: "pdfs/labguide.pdf" }
]

*/
 
const files = {
    science: [
        { name: "Science Lessons 1 - Academic Clinic", url: "1Science-Readings-1.pdf" },
        { name: "Science Lessons 2 - Academic Clinic", url: "1Science-Readings-2.pdf" },
        { name: "Science Lessons 3 - Academic Clinic", url: "1Science-Readings-3.pdf" },
        { name: "Science Lessons 4 - Academic Clinic", url: "1Science-Readings-4.pdf" },

        { name: "Science Practice Test 1 - Academic Clinic", url: "1Science-Module-1.pdf" },
        { name: "Science Practice Test 2 - Academic Clinic", url: "1Science-Module-2.pdf" },
        { name: "Science Practice Test 3 - Academic Clinic", url: "1Science-Module-3.pdf" },
        { name: "Science Practice Test 4 - Academic Clinic", url: "1Science-Module-4.pdf" },

        { name: "Science Practice Test 5 - UPCAT", url: "1Science-Review-part-1.pdf" },
        { name: "Science Practice Test 6 - UPCAT", url: "1Science-Review-part-2.pdf" },
        { name: "Science Practice Test 7 - UPCAT", url: "1Science-Review-part-3.pdf" },
        { name: "Science Practice Test 8 - UPCAT", url: "1Science-Review-part-4.pdf" },

        { name: "Science UPCAT Mock Exam", url: "1Science-UPCAT.pdf" },
    ],

    mathematics: [
        { name: "Basic Calculus - Commission on Higher Education", url: "2Basic-Calculus.pdf" },

        { name: "Math 9 - FreeVocabulary.com", url: "2Math-9.pdf" },

        { name: "Math Readings 2 - Academic Clinic", url: "2Math-Readings-2.pdf" },
        { name: "Math Readings 3 - Academic Clinic", url: "2Math-Readings-3.pdf" },
        { name: "Math Readings 4 - Academic Clinic", url: "2Math-Readings-4.pdf" },

        { name: "Math Formula Guide - Magoosh", url: "2Math-Formula-Guide.pdf" },

        { name: "Math Diagnostic - Reason Prep' SAT Diagnostic", url: "2Math-Diagnostic.pdf" },

        { name: "Math Practice Test 1 - UPCAT", url: "2Practice-Test-1.pdf" },
        
        { name: "Math Practice Test 2 - Academic Clinic", url: "2Math-Module-2.pdf" },

        { name: "Math Practice Test 3", url: "2Math-Review.pdf" },

    ],

     abstract: [
        { name: "Abstract Reasoning (Testing Series) Mike Bryon", url: "3(Testing Series)-Mike-Bryon.pdf" },

        { name: "Abstract Reasoning Test 1 - Psychometric Success", url: "3Abstract-Reasoning-test(1).pdf" },
        { name: "Abstract Reasoning Test 2 - Practice4Me", url: "3Abstract-Reasoning-test(2).pdf" },
        { name: "Abstract Reasoning Test 3 - Practice Aptitude Test", url: "3Abstract-Reasoning-test(3).pdf" },
        { name: "Abstract Reasoning Test 4 - Psychometric Test Online", url: "3Abstract-Reasoning-test(4).pdf" },
        { name: "Abstract Reasoning Test 5 - Psychometric Success", url: "3Abstract-Reasoning-test(5).pdf" },
        { name: "Abstract Reasoning Test 6 - Psychometric Success", url: "3Abstract-Reasoning-test(6).pdf" },

        { name: "ASET Abstract Reasoning Sample Test - Department of Education Australia", url: "3ASET-Abstract-Reasoning-sample-test.pdf" },

        { name: "NCE Abstract Reasoning Reviewer", url: "3NCE-ABSTRACT-Reviewer.pdf" },

        { name: "ACET 2015 Simulated Exam Abstract Reasoning", url: "3ACET2015_SIMULATED-EXAM-SET-B_SECTION-4_ABSTRACT-REASONING.pdf" },
    ],

    english: [
        { name: "English Lessons 1 - Academic Clinic", url: "4English-Readings-1.pdf" },
        { name: "English Lessons 2 - Academic Clinic", url: "4English-Readings-2.pdf" },
        { name: "English Lessons 3 - Academic Clinic", url: "4English-Readings-3.pdf" },
        { name: "English Lessons 4 - Academic Clinic", url: "4English-Readings-4.pdf" },
        { name: "English Lessons 5 - EPS Book", url: "4English-reading_comp.pdf" },
        { name: "Subject-Verb Agreement - Diana Hacker", url: "4SUBJECT-VERB_AGREEMENT.pdf" },  

        { name: "English Practice Test 4 - Academic Clinic", url: "4English-Module-4.pdf" },

        { name: "Compiled UPCAT Questions Language Reading", url: "4Compiled-UPCAT-Questions-Language-Reading.pdf" },

        { name: "UPCAT Language", url: "4UPCAT_LANGUAGE.pdf" },
    ],

    reading: [
        { name: "Reading Comprehension Lesson 1", url: "5reading-review.pdf" },

        { name: "Reading Comprehension Practice Test 1 - Academic Clinic", url: "5Academic-Clinic-Eng-Module-4.pdf" },

        { name: "ACET 2015 Reading Comprehension Practice Test 2", url: "5ACET2015_SIMULATED-EXAM-SET-B_SECTION-5_RE55ADING-COMPREHENSION.pdf" },
        
        { name: "DCAT 2014 Reading Comprehension Practice Test 3", url: "5DCAT2014_SIMULATED-SET-B_SECTION-3_READING-COMPREHENSION_final.pdf" },

        { name: "Reading Comprehension Practice Test 4 - Academic Clinic", url: "5English-Module-4.pdf" },

        { name: "Practice Test 5 - MCAS g10ela 2012", url: "5MCAS-g10ela-2012.pdf" },

        { name: "Practice Test 6 - Department of Human Resources County of Los Angeles", url: "5Reading-Comprehension-v1.pdf" },

        { name: "Practice Test 7", url: "5READING-COMPREHENSION1.pdf" },

        { name: "UPCAT 2014 Reading Comprehension", url: "5UPCAT-2014_SIMULATED-EXAM_SET-A_SECTION-4_READING-COMPREHENSION-v.5.26.2014.pdf" },

        { name: "UPCAT 2015 Reading Comprehension", url: "5UPCAT-2015_SIMULATED-EXAM_SET-B_SECTION-4_READING-COMPREHENSION-Final-Copy_v08.08.2015.pdf" },
    ]
    
};

// DOM Elements
const subjectSelect = document.getElementById("subjectSelect");
const fileList = document.getElementById("fileList");
const pdfViewer = document.getElementById("pdfViewer");
const uploadInput = document.getElementById("uploadInput");
const uploadBtn = document.getElementById("uploadBtn");

// Display File List
function updateFileList() { 
    const subject = subjectSelect.value;
    const subjectFiles = files[subject];

    fileList.innerHTML = "";

    subjectFiles.forEach((file, index) => {
        const li = document.createElement("li");

        let buttons = `
            <button onclick="viewPDF('${file.url}')">View</button>
        `;

        // STUDENTS + TEACHERS can download
        if (role === "teacher" || role === "student") {
            buttons += `
                <button onclick="downloadFile('${file.url}', '${file.name}')">Download</button>
            `;
        }

        // ONLY teachers can remove files
        if (role === "teacher") {
            buttons += `
                <button onclick="removeFile('${subject}', ${index})">Remove</button>
            `;
        }

        li.innerHTML = `
            ${file.name}
            <div>${buttons}</div>
        `;

        fileList.appendChild(li);
    });
}

// View PDF
function viewPDF(url) {
    pdfViewer.src = url;
}

// Remove PDF
function removeFile(subject, index) {

    if (role !== "teacher") return;

    const confirmDelete = confirm("Are you sure you want to remove this file?");

    if (confirmDelete) {
        files[subject].splice(index, 1);
        updateFileList();
    }
}

// Upload PDF
uploadBtn.addEventListener("click", () => {
    const file = uploadInput.files[0];

    if (role !== "teacher") return;
    else if (!file || file.type !== "application/pdf") {
        alert("Please upload a valid PDF file.");
        return;
    }

    const subject = subjectSelect.value;

    const fileURL = URL.createObjectURL(file);

    files[subject].push({
        name: file.name,
        url: fileURL
    });

    uploadInput.value = "";
    updateFileList();
});

// Update list when changing subjects
subjectSelect.addEventListener("change", updateFileList);

// Initial Load
updateFileList();

// Quiz chuchu

const quizBtn = document.getElementById("quizBtn");
const quizModal = document.getElementById("quizModal");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

// quiz subject
const quizzes = {
    abstract: {
        questions: [
        { // 1
            q: "Select a suitable option that would complete the figure matrix.",
            image: "abstract_qstn1.png",
            options: ["A", "B", "C", "D"],
            answer: "D"
        },
        { // 2
            q: "Which figure is the odd one out?",
            image: "abstract_qstn2.png",
            options: ["A", "B", "C", "D"],
            answer: "C"
        },
        { // 3
            q: "Which figure belongs in neither group?",
            image: "abstract_qstn3.png",
            options: ["A", "B", "C", "D"],
            answer: "C"
        },
        { // 4
            q: "Which figure is next in the series?",
            image: "abstract_qstn4.png",
            options: ["A", "B", "C", "D"],
            answer: "B"
        },
        { // 5
            q: "Choose the image that completes the pattern (From left to right).",
            image: "abstract_qstn5.png",
            options: ["A", "B", "C", "D"],
            answer: "D"
        },
        { // 6
            q: "Which figure is the odd one out?",
            image: "abstract_qstn6.png",
            options: ["A", "B", "C", "D"],
            answer: "D"
        },
        { // 7
            q: "Which figure is the odd one out?",
            image: "abstract_qstn7.png",
            options: ["A", "B", "C", "D"],
            answer: "D"
        },
        { // 8
            q: "Which figure belongs in neither group?",
            image: "abstract_qstn8.png",
            options: ["A", "B", "C", "D"],
            answer: "A"
        },
        { // 9
            q: "Which figure is next in the series?",
            image: "abstract_qstn9.png",
            options: ["A", "B", "C", "D"],
            answer: "D"
        },
        { // 10
            q: "Which figure is the odd one out?.",
            image: "abstract_qstn10.png",
            options: ["A", "B", "C", "D"],
            answer: "C"
        },
        { // 11
            q: "Choose the analogy that best matches the example provided.<br>Drip : Gush",
            options: ["A. Cry : Laugh", "B. Curl : Roll", "C. Stream : Tributary", "D. Dent : Destroy"],
            answer: "D. Dent : Destroy"
        },
        { // 12
            q: "Find the odd one out.",
            options: ["A. 121", "B. 144", "C. 169", "D. 196"],
            answer: "A. 121"
        },
        { // 13
            q: "Choose the analogy that best matches the example provided.<br>Enfranchise : Slavery",
            options: ["A. Equation : Mathematics", "B. Liberate : Confine", "C. Bondage : Subjugation", "D. Appeasement : Unreasonable"],
            answer: "B. Liberate : Confine"
        },
        { // 14
            q: "If RED = 27, BLUE = 40, what is GREEN?",
            options: ["A. 49", "B. 50", "C. 51", "D. 52"],
            answer: "D. 52"
        },
        { // 15
            q: "A, C, G, M, U",
            options: ["A. C", "B. D", "C. E", "D. F"],
            answer: "C. E"
        }
        
    ]
    },
    mathematics: {
        questions: [
        { // 1
            q: "Decreasing a number by 40% and then decreasing the result by 30% is the same as decreasing the original number by what percent?",
            options: ["A. 70", "B. 58", "C. 42", "D. 35"],
            answer: "B. 58"
        },
        { // 2
            q: "Simplify and write using positive exponents: (-3x⁻²)(-3x)² ÷ 3 - x⁰",
            options: ["A. -10", "B. 13.5", "C. -9x", "D. -2x⁻⁴"],
            answer: "A. -10"
        },
        { // 3
            q: "How many permutations are there of the letters A, B, and C?",
            options: ["A. 4", "B. 7", "C. 6", "D. 3"],
            answer: "C. 6"
        },
        { // 4
            q: "Simplify 4y² + 5y - 3y² - 4y",
            options: ["A. 2y² + 2y", "B. y² + y", "C. 2y + 2y²", "D. y + y²"],
            answer: "B. y² + y"
        },
        { // 5
            q: "Suppose K, A, and I are statements such that I is true if exactly one of K and A is true. If I is false, which of the following statements must be true?",
            options: ["A. If K is true, then A is false", "B. If K is false, then A is false", "C. Both K and A are true", "D. Both K and A are false"],
            answer: "B. If K is false, then A is false"
        },
        { // 6
            q: "In the figure below, what is the area of the shaded region?",
            image: "math_qstn6.png",
            options: ["A. (32 - 8π)cm²", "B. (32 - 16π)cm²", "C. (64 - 16π)cm²", "D. (16π - 64)cm²"],
            answer: "A. (32 - 8π)cm²"
        },
        { // 7
            q: "A car runs 375 km in 10,800 seconds. What’s the car’s speed in km/hr?",
            options: ["A. 180 km/hr", "B. 120 km/hr", "C. 125 km/hr", "D. 25 km/hr"],
            answer: "C. 125 km/hr"
        },
        { // 8
            q: "Five horses are in the race. A woman picks two of the horses at random and bets one of them. Find the probability that a person picked the winner.",
            options: ["A. 10%", "B. 20%", "C. 30%", "D. 40%"],
            answer: "D. 40%"
        },
        { // 9
            q: "Find the root mean square of 11, 23, and 35.",
            options: ["A. 24", "B. 25", "C. 26", "D. 27"],
            answer: "B. 25"
        },
        { // 10
            q: "John is 24 years old. When John was the age that James is now, James was half the age that John is now. How old is James?",
            options: ["A. 32", "B. 24", "C. 16", "D. 12"],
            answer: "C. 16"
        },
        { // 11
            q: "Evaluate the limit.",
            image: "math_qstn11.png",
            options: ["A. 4", "B. 5", "C. 6", "D. 7"],
            answer: "B. 5"
        },
        { // 12
            q: "In the given triangle, find h.",
            image: "math_qstn12.png",
            options: ["A. 3", "B. 6", "C. 9", "D. 12"],
            answer: "B. 6"
        },
        { // 13
            q: "Lola Penyang who wishes to fence her agricultural land using only a 600-meter-long material. If the land is quadrilateral in shape, what should be the dimensions of the fence in order to enclose the maximum area?",
            options: ["A. 200m x 100m", "B. 150m x 150m", "C. 250m x 50m", "D. 270m x 30m"],
            answer: "B. 150m x 150m"
        },
        { // 14
            q: "Find the derivative of the function:<br>f(x) = x² sin(x³)",
            options: ["A. 2x sin(x³) + 3x⁴ cos(x³)", "B. 2x² sin(x³) + 3x³ cos(x³)", "C. 2x sin(x⁴) + 3x⁴ cos(x³)", "D. 4x sin(x³) + 6x⁴ cos(x³)"],
            answer: "A. 2x sin(x³) + 3x⁴ cos(x³)"
        },
        { // 15
            q: "Alice can complete a project in 10 hours, while Bob can complete the same project in 15 hours. If Alice and Bob work together on the project, how long will it take them to complete it?",
            options: ["A. 5 hours", "B. 6 hours", "C. 7 hours", "D. 8 hours"],
            answer: "B. 6 hours"
        }
        ]
    },
    science: {
        questions: [
            {
            q: "la pa hehe",
            options: ["A", "B", "C", "D"],
            answer: "A"
        }
        ]
    },
    english: {
        questions: [
            {
            q: "la pa hehe",
            options: ["A", "B", "C", "D"],
            answer: "A"
        }
        ]
    },
    reading: {
        questions: [
            {
            q: "la pa hehe",
            options: ["A", "B", "C", "D"],
            answer: "A"
        }
        ]
    }
};

// open quiz
quizBtn.addEventListener("click", () => {
    quizModal.style.display = "block";
    loadQuiz();
});

function loadQuiz() {
    const subject = subjectSelect.value;
    const quiz = quizzes[subject];

    let html = "";

    quiz.questions.forEach((item, index) => {
        html += `<div style="margin-bottom:15px;">`;

        html += `<p>${index + 1}. ${item.q}</p>`;

        // image kemerlu
        if (item.image) {
            html += `<img src="${item.image}" style="max-width:100%; margin:10px 0;">`;
        }

    item.options.forEach(opt => {
        html += `
            <label style="
                display:block;
                padding:8px;
                margin:6px 0;
                border:1px solid #ccc;
                border-radius:6px;
                cursor:pointer;
            ">
                <input type="radio" name="q${index}" value="${opt}" style="margin-right:8px;">
                ${opt}
            </label>
        `;
    });

        html += `</div>`;
    });

    html += `<br>
        <button type="submit">Submit Quiz</button>
        <button type="button" onclick="document.getElementById('quizModal').style.display='none'">Close</button>`;

    quizForm.innerHTML = html;
}

// submission
quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // confirmation keme
    const confirmSubmit = confirm("Are you sure you want to submit your answers?");
    if (!confirmSubmit) return;

    const subject = subjectSelect.value;
    const quiz = quizzes[subject];

    let score = 0;
    let output = "";

    quiz.questions.forEach((item, index) => {
        const userAnswer = quizForm[`q${index}`]?.value;

        if (userAnswer === item.answer) {
            score++;
            output += `<p>Q${index + 1}: ✔ Correct</p>`;
        } else {
            output += `<p>Q${index + 1}: ❌ Wrong (Correct: ${item.answer})</p>`;
        }
    });

    quizResult.innerHTML = `
        <h3>Score: ${score} / ${quiz.questions.length}</h3>
        ${output}
    `;
});
