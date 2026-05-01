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
        { name: "Science Lessons 1 - Academic Clinic", url: "0assets/0materials/1Science-Readings-1.pdf" },
        { name: "Science Lessons 2 - Academic Clinic", url: "0assets/0materials/1Science-Readings-2.pdf" },
        { name: "Science Lessons 3 - Academic Clinic", url: "0assets/0materials/1Science-Readings-3.pdf" },
        { name: "Science Lessons 4 - Academic Clinic", url: "0assets/0materials/1Science-Readings-4.pdf" },

        { name: "Science Practice Test 1 - Academic Clinic", url: "0assets/0materials/1Science-Module-1.pdf" },
        { name: "Science Practice Test 2 - Academic Clinic", url: "0assets/0materials/1Science-Module-2.pdf" },
        { name: "Science Practice Test 3 - Academic Clinic", url: "0assets/0materials/1Science-Module-3.pdf" },
        { name: "Science Practice Test 4 - Academic Clinic", url: "0assets/0materials/1Science-Module-4.pdf" },

        { name: "Science Practice Test 5 - UPCAT", url: "0assets/0materials/1Science-Review-part-1.pdf" },
        { name: "Science Practice Test 6 - UPCAT", url: "0assets/0materials/1Science-Review-part-2.pdf" },
        { name: "Science Practice Test 7 - UPCAT", url: "0assets/0materials/1Science-Review-part-3.pdf" },
        { name: "Science Practice Test 8 - UPCAT", url: "0assets/0materials/1Science-Review-part-4.pdf" },

        { name: "Science UPCAT Mock Exam", url: "0assets/0materials/1Science-UPCAT.pdf" },
    ],

    mathematics: [
        { name: "Basic Calculus - Commission on Higher Education", url: "0assets/0materials/2Basic-Calculus.pdf" },

        { name: "Math 9 - FreeVocabulary.com", url: "0assets/0materials/2Math-9.pdf" },

        { name: "Math Readings 2 - Academic Clinic", url: "0assets/0materials/2Math-Readings-2.pdf" },
        { name: "Math Readings 3 - Academic Clinic", url: "0assets/0materials/2Math-Readings-3.pdf" },
        { name: "Math Readings 4 - Academic Clinic", url: "0assets/0materials/2Math-Readings-4.pdf" },

        { name: "Math Formula Guide - Magoosh", url: "0assets/0materials/2Math-Formula-Guide.pdf" },

        { name: "Math Diagnostic - Reason Prep' SAT Diagnostic", url: "0assets/0materials/2Math-Diagnostic.pdf" },

        { name: "Math Practice Test 1 - UPCAT", url: "0assets/0materials/2Practice-Test-1.pdf" },
        
        { name: "Math Practice Test 2 - Academic Clinic", url: "0assets/0materials/2Math-Module-2.pdf" },

        { name: "Math Practice Test 3", url: "0assets/0materials/2Math-Review.pdf" },

    ],

     abstract: [
        { name: "Abstract Reasoning (Testing Series) Mike Bryon", url: "0assets/0materials/3(Testing Series)-Mike-Bryon.pdf" },

        { name: "Abstract Reasoning Test 1 - Psychometric Success", url: "0assets/0materials/3Abstract-Reasoning-test(1).pdf" },
        { name: "Abstract Reasoning Test 2 - Practice4Me", url: "0assets/0materials/3Abstract-Reasoning-test(2).pdf" },
        { name: "Abstract Reasoning Test 3 - Practice Aptitude Test", url: "0assets/0materials/3Abstract-Reasoning-test(3).pdf" },
        { name: "Abstract Reasoning Test 4 - Psychometric Test Online", url: "0assets/0materials/3Abstract-Reasoning-test(4).pdf" },
        { name: "Abstract Reasoning Test 5 - Psychometric Success", url: "0assets/0materials/3Abstract-Reasoning-test(5).pdf" },
        { name: "Abstract Reasoning Test 6 - Psychometric Success", url: "0assets/0materials/3Abstract-Reasoning-test(6).pdf" },

        { name: "ASET Abstract Reasoning Sample Test - Department of Education Australia", url: "0assets/0materials/3ASET-Abstract-Reasoning-sample-test.pdf" },

        { name: "NCE Abstract Reasoning Reviewer", url: "0assets/0materials/3NCE-ABSTRACT-Reviewer.pdf" },

        { name: "ACET 2015 Simulated Exam Abstract Reasoning", url: "0assets/0materials/3ACET2015_SIMULATED-EXAM-SET-B_SECTION-4_ABSTRACT-REASONING.pdf" },
    ],

    english: [
        { name: "English Lessons 1 - Academic Clinic", url: "0assets/0materials/4English-Readings-1.pdf" },
        { name: "English Lessons 2 - Academic Clinic", url: "0assets/0materials/4English-Readings-2.pdf" },
        { name: "English Lessons 3 - Academic Clinic", url: "0assets/0materials/4English-Readings-3.pdf" },
        { name: "English Lessons 4 - Academic Clinic", url: "0assets/0materials/4English-Readings-4.pdf" },
        { name: "English Lessons 5 - EPS Book", url: "0assets/0materials/4English-reading_comp.pdf" },
        { name: "Subject-Verb Agreement - Diana Hacker", url: "0assets/0materials/4SUBJECT-VERB_AGREEMENT.pdf" },

        { name: "English Practice Test 4 - Academic Clinic", url: "0assets/0materials/4English-Module-4.pdf" },

        { name: "Compiled UPCAT Questions Language Reading", url: "0assets/0materials/4Compiled-UPCAT-Questions-Language-Reading.pdf" },

        { name: "UPCAT Language", url: "0assets/0materials/4UPCAT_LANGUAGE.pdf" },
    ],

    reading: [
        { name: "Reading Comprehension Lesson 1", url: "0assets/0materials/5reading-review.pdf" },

        { name: "Reading Comprehension Practice Test 1 - Academic Clinic", url: "0assets/0materials/5Academic-Clinic-Eng-Module-4.pdf" },

        { name: "ACET 2015 Reading Comprehension Practice Test 2", url: "0assets/0materials/5ACET2015_SIMULATED-EXAM-SET-B_SECTION-5_READING-COMPREHENSION.pdf" },
        
        { name: "DCAT 2014 Reading Comprehension Practice Test 3", url: "0assets/0materials/5DCAT2014_SIMULATED-SET-B_SECTION-3_READING-COMPREHENSION_final.pdf" },

        { name: "Reading Comprehension Practice Test 4 - Academic Clinic", url: "0assets/0materials/5English-Module-4.pdf" },

        { name: "Practice Test 5 - MCAS g10ela 2012", url: "0assets/0materials/5MCAS-g10ela-2012.pdf" },

        { name: "Practice Test 6 - Department of Human Resources County of Los Angeles", url: "0assets/0materials/5Reading-Comprehension-v1.pdf" },

        { name: "Practice Test 7", url: "0assets/0materials/5READING-COMPREHENSION1.pdf" },

        { name: "UPCAT 2014 Reading Comprehension", url: "0assets/0materials/5UPCAT-2014_SIMULATED-EXAM_SET-A_SECTION-4_READING-COMPREHENSION-v.5.26.2014.pdf" },

        { name: "UPCAT 2015 Reading Comprehension", url: "0assets/0materials/5UPCAT-2015_SIMULATED-EXAM_SET-B_SECTION-4_READING-COMPREHENSION-Final-Copy_v08.08.2015.pdf" },
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
        { // 1
            q: "How many milligrams are there in 5.78 decigrams?",
            options: ["A. 0.0578", "B. 0.578", "C. 578", "D. 57.8"],
            answer: "C. 578"
        },
        { // 2
            q: "Significant figures are important part of scientific and mathematical calculations because they deal with the accuracy and precision of numbers. How many significant figures are there in 507.000 m/s?",
            options: ["A. 2", "B. 3", "C. 6", "D. 4"],
            answer: "C. 6"
        },
        { // 3
            q: "The atmosphere is an important part of what makes Earth liveable. In which layer of the atmosphere do weather disturbances probably occur?",
            options: ["A. Thermosphere", "B. Stratosphere", "C. Exosphere", "D. Troposphere"],
            answer: "D. Troposphere"
        },
        { // 4
            q: "Many years ago, people liked to make up stories about constellations. These constellations are groups of stars that form a particular shape in the sky and have been given a name. The following analogies about constellations are correct except one.",
            options: ["A. Ursa Major: The Great Bear", "B. Sagittarius: The Archer", "C. Orion: The Hunter", "D. Cygnus: The Dove"],
            answer: "D. Cygnus: The Dove"
        },
        { // 5
            q: "Siblings, though they come from same parents, are not identical to each other. Which stage of cell division is mainly responsible for genetic variability?",
            options: ["A. Prophase", "B. Prophase I", "C. Metaphase I", "D. Anaphase II"],
            answer: "B. Prophase I"
        },
        { // 6
            q: "If a DNA strand with a sequence of 5'...AAT GCG ATA...3' will undergo transcription, which is its correct mRNA complementary strand?",
            options: ["A. 3'...ТTA CGC TAT...5'", "B. 3'...UUA CGC UAU...5'", "C. 3'...TTU CGC UAU...5'", "D. 5'...UUA CGC UAU...3'"],
            answer: "B. 3'...UUA CGC UAU...5'"
        },
        { // 7
            q: "All of the following scientists have contributed to the discovery of the subatomic particles of an atom except one.",
            options: ["A. Eugene Goldstein", "B. James Chadwick", "C. Joseph John Thomson", "D. Neils Bohr"],
            answer: "D. Neils Bohr"
        },
        { // 8
            q: "How many grams are present in 3.5 mol of aluminum? (Al = 27 g/mol)",
            options: ["A. 80 g", "B. 95 g", "C. 100 g", "D. 72 g"],
            answer: "B. 95 g"
        },
        { // 9
            q: "How much pressure is exerted by a 4-kg object on a spring balance with an area of 4m²",
            options: ["A. 16 Pa", "B. 10 Pa", "C. 8 Pa", "D. 64 Pa"],
            answer: "B. 10 Pa"
        },
        { // 10
            q: "A vehicle is moving with a constant velocity of 95 km/hr for 1.3 min. What is the vehicle's acceleration?",
            options: ["A. 450 m/s²", "B. 9.8 m/s²", "C. 0.34 m/s²", "D. 0 m/s²"],
            answer: "D. 0 m/s²"
        },
        { // 11
            q: "Starting from rest, a 0.200-kg ball rolls down a hill with a velocity of 1.5 m/s when it suddenly strikes a rock and changed its direction in 2.0 seconds. What is the total force needed by the ball to change its momentum?",
            options: ["A. 1500 N", "B. 0.15 N", "C. 1.50 N", "D. 200 N"],
            answer: "B. 0.15 N"
        },
        { // 12
            q: "What is the empirical formula of a compound that contains 20% B, and 80% F? (B = 10 g/mol; F = 19 g/mol)",
            options: ["A. BF<sub>3</sub>", "B. BF", "C. B<sub>2</sub>F<sub>3</sub>", "D. BF<sub>2</sub>"],
            answer: "D. BF<sub>2</sub>"
        },
        { // 13
            q: "In plants, tall (T) is dominant over short (t) while round (R) is dominant over wrinkled seed (r). If a plant with a genotype of ttRr is crossed with another plant with the genotype TTrr, how many out of 16 offspring are tall and have wrinkled seeds?",
            options: ["A. 4", "B. 8", "C. 12", "D. 16"],
            answer: "B. 8"
        },
        { // 14
            q: "Which sequence is arranged from specific to general level of classification?",
            options: ["A. Kingdom > Class > Phylum > Order", "B. Kingdom > Class > Family > Order", "C. Species < Order < Class < Kingdom", "D. Order < Family < Class < Phylum"],
            answer: "C. Species < Order < Class < Kingdom"
        },
        { // 15
            q: "The following are true about photosynthesis except one",
            options: ["A. Glucose is a direct product of Photosystem II", "B. Photosystem II has a lower amount of energy created than Photosystem I", "C. Carbon dioxide is needed in dark reaction", "D. Water is used during light reaction"],
            answer: "A. Glucose is a direct product of Photosystem II"
        }
        ]
    },
    english: {
        questions: [
        { // 1
            q: "Identify the incorrect part of the sentence. Choose the letter of the error.<br>Joyce's salad is better than Janice.",
            options: ["A. Joyce's", "B. salad", "C. better", "D. Janice", "E. No error"],
            answer: "D. Janice"
        },
        { // 2
            q: "One must consider their strengths and weaknesses in dealing with difficult decisions.",
            options: ["A. must", "B. their", "C. in", "D. difficult", "E. No error"],
            answer: "B. their"
        },
        { // 3
            q: "The informations he gave us was not advantageous so I consulted our professor instead.",
            options: ["A. The informations", "B. was not", "C. advantageous", "D. instead", "E. No error"],
            answer: "A. The informations"
        },
        { // 4 
            q: "Choose the correct answer for the underlined part.<br>The results of the examination <u>is posted on the bulletin board beside the Dean's Office.</u>",
            options: ["A. No error", "B. have posted on the bulletin board besides the Dean's Office.", "C. are posted on the bulletin board beside the Dean's Office.", "D. is posted on the bulletin board besides the Dean's Office."],
            answer: "C. are posted on the bulletin board beside the Dean's Office."
        },
        { // 5 
            q: "<u>The number of participants in the poster making competition is higher than any division of the program.</u>",
            options: ["A. No error", "B. The number of participants in the poster making competition is higher than those of any other division of the program.", "C. The number of participants in the poster making competition is higher than that of any other division of the program.", "D. The number of participants in the poster making competition is higher than any other division of the program."],
            answer: "C. The number of participants in the poster making competition is higher than that of any other division of the program."
        },
        { // 6
            q: "Read each sentence. Use context clues to determine the meaning of the boldfaced word.<br>After the robbery, the bank became <b>insolvent.</b>",
            options: ["A. Filled", "B. Bankrupt", "C. Rife", "D. Full"],
            answer: "B. Bankrupt"
        },
        { // 7
            q: "Most Filipinos, as long as they are not directly affected, can still seem to continue a <b>cavalier</b> attitude despite all the injustices happening around the country.",
            options: ["A. Attentive", "B. Indifferent", "C. Emphatic", "D. Sympathetic"],
            answer: "C. Emphatic"
        },
        { // 8
            q: "Humans go through crises all throughout their lives and question the mundanity of their <b>quotidian</b> lives.",
            options: ["A. Everyday", "B. Own", "C. Family", "D. Mortal"],
            answer: "A. Everyday"
        },
        { // 9
            q: "They think that Robert is <b>morose</b> because he gets easily angry.",
            options: ["A. Cordial", "B. Sullen", "C. Irritable", "D. Festive"],
            answer: "B. Sullen"
        },
        { // 10
            q: "Read each sentence. Use context clues to choose the most appropriate word.<br>Brittany was greatly saddened to see her long time friend ______ from cancer.",
            options: ["A. Emaciated", "B. Incited", "C. Rectified", "D. Adroited"],
            answer: "A. Emaciated"
        },
        { // 11
            q: "Dr. Meredith Grey felt ______ after conducting a whole day of surgery.",
            options: ["A. Isolated", "B. Braced", "C. Secluded", "D. Enervated"],
            answer: "D. Enervated"
        },
        { // 12
            q: "Temperance has always had a great sense of self-assurance and deals with people with such ______.",
            options: ["A. Rudeness", "B. Indolence", "C. Aversion", "D. Panache"],
            answer: "B. Indolence"
        },
        { // 13
            q: "Choose the word with the same meaning as the given word.<br>Splenetic",
            options: ["A. Irascible", "B. Static", "C. Marvelous", "D. Extravagant"],
            answer: "A. Irascible"
        },
        { // 14
            q: "Piquant",
            options: ["A. Bland", "B. Unique", "C. Boring", "D. Fascinating"],
            answer: "D. Fascinating"
        },
        { // 15
            q: "Aphorism",
            options: ["A. Verb", "B. Adages", "C. Act", "D. Deed"],
            answer: "B. Adages"
        }
        ]
    }, 
    reading: {
        questions: [
        { // 1
            q: "The Arctic fox, a small predator native to the Arctic regions, is known for its incredible adaptability to cold environments. One of its most remarkable features is its fur, which changes color with the seasons for camouflage; it turns white during the winter to blend in with the snow and brownish-gray in the summer to match the tundra. Another notable adaptation is its ability to reduce its metabolic rate in extreme cold, conserving energy and minimizing food requirements. This ability is crucial for survival during the harsh winter months when food is scarce.",
            options: ["A. To regulate its body temperature in different seasons", "B. To provide camouflage in varying environmental conditions", "C. To attract mates during the breeding season", "D. To signal changes in its metabolic rate"],
            answer: "B. To provide camouflage in varying environmental conditions"
        },
        { // 2
            q: "Myths are stories, the products of fertile imagination, sometimes simple, often containing profound truths. They are not meant to be taken too literally. Details may sometimes appear childish, but most myths express a culture's most serious beliefs, eternity, and God. What is the main idea of the passage?",
            options: ["A. Myths are created primarily to entertain young children", "B. Myths are purposely written for the reader who lacks imagination", "C. Myths provide the reader with a means of escape from reality", "D. Myths illustrate the values that are considered important to a society"],
            answer: "D. Myths illustrate the values that are considered important to a society"
        },
        { // 3
            q: "The ultimate source of energy for all plants and animals is sunlight. But the sun's energy can be harnessed by plants, through photosynthesis, and stored in molecules of carbohydrates. When animals eat these enzymes, large amounts of energy become available. Animals immediately convert this energy into molecules of high-energy ATP (adenosine triphosphate) - the universal currency of energy in living things. Excluding only the very first stages in carbohydrate breakdown, which are called glycolysis, the entire complicated process of energy transfer to ATP takes place within the mitochondria. Glycolysis refers to?",
            options: ["A. Initial stages of carbohydrate breakdown", "B. The process of plants producing oxygen and carbohydrates", "C. The production of ATP", "D. The production of body heat which occurs in the mitochondria"],
            answer: "A. Initial stages of carbohydrate breakdown"
        },
        { // 4
            q: "Unemployment was the overriding fact of life when Franklin D. Roosevelt became President of the United States on March 4, 1933. An anomaly of the time was that the government did not systematically collect statistics of joblessness; actually it did not start doing so until 1940. The Bureau of Labor Statistics later estimated that 12,830,000 persons were out of work in 1933, about one-fourth of a civilian labor force of over fifty-one million. Roosevelt signed the Federal Emergency Relief Act on May 12, 1933. The President selected Harry L. Hopkins, who headed the New York relief program, to run FERA. A gifted administrator, Hopkins quickly put the program into high gear. He gathered a small staff in Washington and brought the state relief organizations in to the FERA system. While the agency tried to provide all the necessities, food came first. City dwellers usually got an allowance for fuel, and rent for one month was provided in case of eviction. FERA paid for medicine, some doctor bills, but no hospital costs, work-relief, sewing rooms, and renovated hand-me-down clothing. This passage is primarily about?",
            options: ["A. Unemployment in the 1930's", "B. The effect of unemployment on United States families", "C. President Franklin Roosevelt's presidency", "D. President Roosevelt's FERA program"],
            answer: "D. President Roosevelt's FERA program"
        },
        { // 5
            q: "The Spider has a bad name: to most of us, she represents an odious, noxious animal, which every one hastens to crush under foot. Against this summary verdict the observer sets the beast's industry, its talent as a weaver, its wiliness in the chase, its tragic nuptials and other characteristics of great interest. Yes, the Spider is well worth studying, apart from any scientific reasons; but she is said to be poisonous and that is her crime and the primary cause of the repugnance wherewith she inspires us. Poisonous, I agree, if by that we understand that the animal is armed with two fangs which cause the immediate death of the little victims which it catches; but there is a wide difference between killing a Midge and harming a man. However immediate in its effects upon the insect entangled in the fatal web, the Spider's poison is not serious for us and causes less inconvenience than a Gnat-bite. That, at least, is what we can safely say as regards the great majority of the Spiders of our regions. <br><br>What is the main idea of the paragraph?",
            options: ["A. Spiders are hard workers", "B. Spiders are not worth studying", "C. Most people hate spiders", "D. Spiders have an undeserved bad reputation"],
            answer: "D. Spiders have an undeserved bad reputation"
        },
        { // 6
            q: "Which  of the following words describes the author's attitude to spider bites?",
            options: ["A. Terrified", "B. Lazy", "C. Unafraid", "D. Uninformed"],
            answer: "C. Unafraid"
        },
        { // 7
            q: "Which of the following inferences can be made from the information given above?",
            options: ["A. It takes more poison to kill a person than to kill a midge", "B. There is no such thing as a poisonous spider", "C. Spiders are only interested in killing tiny insects", "D. People are immune to the poison of a spider"],
            answer: "A. It takes more poison to kill a person than to kill a midge"
        },
        { // 8
            q: "Why is the Malmignatte feared?",
            options: ["A. It destroys crops", "B. It is aggressive toward humans", "C. Its bite is believed to be dangerous", "D. It is difficult to see"],
            answer: "C. Its bite is believed to be dangerous"
        },
        { // 9
            q: "With varying success, many women around the world today struggle for equal rights. Historically women have achieved greater equality with men during periods of social adversity. The three following factors initiated the greatest number of improvements for women: violent revolution, world war, or the rigors of pioneering in an undeveloped land. In all three cases, the essential element that improved the status of women was a shortage of men, which required women to perform many of society's vital tasks. <br><br>According to the passage, which situations led to greater equality for women?",
            options: ["A. Economic growth and stability", "B. Peaceful political reforms", "C. Revolution, war, and pioneering conditions", "D. Educational expansion"],
            answer: "C. Revolution, war, and pioneering conditions"
        },
        { // 10
            q: "What is identified as the essential element for improving women’s status?",
            options: ["A. Increased education", "B. Shortage of men", "C. Government laws", "D. Technological progress"],
            answer: "B. Shortage of men"
        },
        { // 11
            q: "Why did women perform more vital tasks during these periods?",
            options: ["A. They preferred working", "B. Men refused to work", "C. Laws required them to work", "D. There were fewer men available"],
            answer: "D. There were fewer men available"
        },
        { // 12
            q: "Which statement is best supported by the passage?",
            options: ["A. Equality for women has always been consistent", "B. Women’s progress often depends on social conditions", "C. Men actively promote women’s equality", "D. Women only succeed during peaceful times"],
            answer: "B. Women’s progress often depends on social conditions"
        },
        { // 13
            q: "The Italians have bestowed a bad reputation on the Tarantula, who produces convulsions and frenzied dances in the person stung by her. To cope with 'tarantism,' the name given to the disease that follows on the bite of the Italian Spider, you must have recourse to music, the only efficacious remedy, so they tell us. Special tunes have been noted, those quickest to afford relief. There is medical choreography, medical music. And have we not the tarentella, a lively and nimble dance, bequeathed to us perhaps by the healing art of the Calabrian peasant?<br><br>What is tarantism according to the passage?",
            options: ["A. A cultural term for uncontrolled dancing unrelated to any medical cause", "B. A nervous disorder attributed to spider bites and treated through music", "C. A localized infection caused by the venom of Italian spiders", "D. A traditional healing ritual involving both music and medical herbs"],
            answer: "B. A nervous disorder attributed to spider bites and treated through music"
        },
        { // 14
            q: "Which statement is best supported by the passage?",
            options: ["A. Tarantula bites always cause death", "B. Music is scientifically proven to cure diseases", "C. Doctors commonly prescribe dancing today", "D. Beliefs about tarantism are rooted in tradition"],
            answer: "D. Beliefs about tarantism are rooted in tradition"
        },
        { // 15
            q: "What best describes the author’s attitude toward the belief in tarantism?",
            options: ["A. Fully accepting of its medical validity", "B. Skeptical but describing it in an observational tone", "C. Actively promoting it as a treatment method", "D. Dismissive and ridiculing without explanation"],
            answer: "B. Skeptical but describing it in an observational tone"
        }
        ]
    }
};

// open quiz
quizBtn.addEventListener("click", () => {
    quizModal.style.display = "block";
    quizSubmitted = false;
    loadQuiz();
});

// bawal close pag di tapos!
function closeQuiz() {
    if (!quizSubmitted) {
        alert("You must complete and submit the quiz first.");
        return;
    }
    quizModal.style.display = "none";
}

function loadQuiz() {
    quizResult.innerHTML = "";

    const subject = subjectSelect.value;
    const quiz = quizzes[subject];

    let html = "";

    quiz.questions.forEach((item, index) => {
        html += `<div style="margin-bottom:15px;">`;
        html += `<p class="quiz-question">${index + 1}. ${item.q}</p>`;

        if (item.image) {
            html += `<img src="${item.image}" style="max-width:100%; margin:10px 0;">`;
        }

        item.options.forEach(opt => {
            html += `
                <label style="display:block;padding:8px;margin:6px 0;border:1px solid #ccc;border-radius:6px;cursor:pointer;">
                    <input type="radio" name="q${index}" value="${opt}">
                    ${opt}
                </label>
            `;
        });

        html += `</div>`;
    });

    html += `
        <button id="submitQuizBtn" type="submit">Submit Quiz</button>
        <button type="button" onclick="closeQuiz()">Close</button>
    `;

    quizForm.innerHTML = html;

    const submitBtn = document.getElementById("submitQuizBtn");
    submitBtn.disabled = true;

    // submit pag lahat may answers!
    quizForm.addEventListener("change", () => {
        const total = quiz.questions.length;
        let answered = 0;

        for (let i = 0; i < total; i++) {
            if (quizForm[`q${i}`]?.value) answered++;
        }

        submitBtn.disabled = answered !== total;
    });
}

// submission
quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

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

    quizSubmitted = true;
});
