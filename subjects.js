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
            window.location.href = "sbjctGuest.html";
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

    else files[subject].splice(index, 1);
    updateFileList();
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