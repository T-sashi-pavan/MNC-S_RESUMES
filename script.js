<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Templates</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .container {
            padding: 20px;
        }
        .heading {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .company-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }
        .company-buttons button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #007BFF;
            color: white;
            border-radius: 5px;
        }
        .templates {
            display: none;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .template {
            border: 1px solid #ccc;
            padding: 10px;
            width: 200px;
            cursor: pointer;
            text-align: center;
        }
        .template img {
            width: 100%;
            height: auto;
        }
        .full-template {
            display: none;
            padding: 20px;
        }
        .buttons {
            margin-top: 20px;
        }
        .buttons button {
            padding: 10px 15px;
            font-size: 16px;
            margin: 5px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        .back {
            background-color: #6c757d;
            color: white;
        }
        .edit {
            background-color: #28a745;
            color: white;
        }
        .download {
            background-color: #ffc107;
            color: black;
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="companyPage">
            <h1 class="heading">Choose Famous Multi-National Companies Shortlisted Resumes Templates</h1>
            <div class="company-buttons">
                <button onclick="showTemplates('Google')">Google</button>
                <button onclick="showTemplates('Facebook')">Facebook</button>
                <button onclick="showTemplates('Tata')">Tata</button>
                <button onclick="showTemplates('Wipro')">Wipro</button>
                <button onclick="showTemplates('Nestle India')">Nestle India</button>
                <button onclick="showTemplates('Aditya Birla')">Aditya Birla</button>
                <button onclick="showTemplates('Infosys')">Infosys</button>
                <button onclick="showTemplates('Tech Mahindra')">Tech Mahindra</button>
                <button onclick="showTemplates('Deloitte')">Deloitte</button>
                <button onclick="showTemplates('Capgemini')">Capgemini</button>
            </div>
        </div>

        <div id="templatePage" class="templates"></div>

        <div id="fullTemplatePage" class="full-template">
            <div id="fullTemplateContent"></div>
            <div class="buttons">
                <button class="back" onclick="goBackToTemplates()">Back</button>
                <button class="edit" onclick="editTemplate()">Edit</button>
                <button class="download" onclick="downloadPDF()">Download as PDF</button>
            </div>
        </div>
    </div>

    <script>
        const templates = {
            Google: [
                { name: "Google Template 1", img: "google1.jpg" },
                { name: "Google Template 2", img: "google2.jpg" },
                { name: "Google Template 3", img: "google3.jpg" },
                { name: "Google Template 4", img: "google4.jpg" },
                { name: "Google Template 5", img: "google5.jpg" },
                { name: "Google Template 6", img: "google6.jpg" }
            ],
            Facebook: [
                { name: "Facebook Template 1", img: "facebook1.jpg" },
                { name: "Facebook Template 2", img: "facebook2.jpg" },
                { name: "Facebook Template 3", img: "facebook3.jpg" },
                { name: "Facebook Template 4", img: "facebook4.jpg" },
                { name: "Facebook Template 5", img: "facebook5.jpg" },
                { name: "Facebook Template 6", img: "facebook6.jpg" }
            ],
            Tata: [
                { name: "Tata Template 1", img: "tata1.jpg" },
                { name: "Tata Template 2", img: "tata2.jpg" },
                { name: "Tata Template 3", img: "tata3.jpg" },
                { name: "Tata Template 4", img: "tata4.jpg" },
                { name: "Tata Template 5", img: "tata5.jpg" },
                { name: "Tata Template 6", img: "tata6.jpg" }
            ],
            Wipro: [
                { name: "Wipro Template 1", img: "wipro1.jpg" },
                { name: "Wipro Template 2", img: "wipro2.jpg" },
                { name: "Wipro Template 3", img: "wipro3.jpg" },
                { name: "Wipro Template 4", img: "wipro4.jpg" },
                { name: "Wipro Template 5", img: "wipro5.jpg" },
                { name: "Wipro Template 6", img: "wipro6.jpg" }
            ],
            // Add other companies similarly...
        };

        function showTemplates(company) {
            document.getElementById("companyPage").style.display = "none";
            const templatePage = document.getElementById("templatePage");
            templatePage.innerHTML = `<h2>${company} Resume Templates</h2>`;
            templates[company].forEach((template) => {
                templatePage.innerHTML += `
                    <div class='template' onclick="showFullTemplate('${template.name}')">
                        <img src="${template.img}" alt="${template.name}">
                        <p>${template.name}</p>
                    </div>
                `;
            });
            templatePage.style.display = "flex";
        }

        function showFullTemplate(templateName) {
            document.getElementById("templatePage").style.display = "none";
            const fullTemplatePage = document.getElementById("fullTemplatePage");
            const template = Object.values(templates).flat().find(t => t.name === templateName);
            document.getElementById("fullTemplateContent").innerHTML = `<img src="${template.img}" alt="${template.name}" style="width:100%;"><h3>${template.name}</h3>`;
            fullTemplatePage.style.display = "block";
        }

        function goBackToTemplates() {
            document.getElementById("fullTemplatePage").style.display = "none";
            document.getElementById("templatePage").style.display = "flex";
        }

        function editTemplate() {
            const content = document.getElementById("fullTemplateContent");
            const currentContent = content.innerHTML;
            content.innerHTML = `<textarea style='width: 100%; height: 200px;'>${currentContent}</textarea>`;
        }

        function downloadPDF() {
            const content = document.getElementById("fullTemplateContent").innerText;
            const doc = new jsPDF();
            doc.text(content, 10, 10);
            doc.save("resume.pdf");
        }
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
</body>
</html>
