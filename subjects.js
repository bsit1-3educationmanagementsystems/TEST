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
        { name: "Science Module 1", url: "1Science-Module-1.pdf" },
        { name: "Science Module 2", url: "1Science-Module-2.pdf" },
        { name: "Science Module 3", url: "1Science-Module-3.pdf" },
        { name: "Science Module 4", url: "1Science-Module-4.pdf" },

        { name: "Science Readings 1", url: "1Science-Readings-1.pdf" },
        { name: "Science Readings 2", url: "1Science-Readings-2.pdf" },
        { name: "Science Readings 3", url: "1Science-Readings-3.pdf" },
        { name: "Science Readings 4", url: "1Science-Readings-4.pdf" },

        { name: "Science Review 1", url: "1Science-Review-part-1.pdf" },
        { name: "Science Review 2", url: "1Science-Review-part-2.pdf" },
        { name: "Science Review 3", url: "1Science-Review-part-3.pdf" },
        { name: "Science Review 4", url: "1Science-Review-part-4.pdf" },

        { name: "Science UPCAT", url: "1Science-UPCAT.pdf" },
    ],

    mathematics: [
        { name: "Sample Math PDF", url: "pdfs/math1.pdf" }
    ],

    english: [

    ],

    reading: [

    ],
    
    abstract: [

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
