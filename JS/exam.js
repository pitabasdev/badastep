document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("examTableBody");
    const itemsPerPage = 10;
    let currentPage = 1;
    let examsData = [];

    function renderTable(page) {
        tableBody.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        const paginatedData = examsData.slice(start, end);

        paginatedData.forEach(exam => {
            const row = document.createElement("tr");

            const serialNoCell = document.createElement("td");
            serialNoCell.textContent = exam.serialNo;

            const examNameCell = document.createElement("td");
            const img = document.createElement("img");
            img.src = exam.logo ? exam.logo : 'assets/images/default-logo.png';
            img.width = 50;
            img.height = 50;
            img.className = "mr-2";

            const link = document.createElement("a");
            link.href = "./exam.html";
            link.textContent = exam.examName;
            examNameCell.appendChild(img);
            examNameCell.appendChild(link);

            const modeCell = document.createElement("td");
            modeCell.textContent = exam.mode;

            const collegesCell = document.createElement("td");
            collegesCell.textContent = exam.participatingColleges;

            const dateCell = document.createElement("td");
            const examDate = new Date(exam.examDate);
            dateCell.textContent = examDate.toLocaleDateString();

            const levelCell = document.createElement("td");
            levelCell.textContent = exam.examLevel;

            row.appendChild(serialNoCell);
            row.appendChild(examNameCell);
            row.appendChild(modeCell);
            row.appendChild(collegesCell);
            row.appendChild(dateCell);
            row.appendChild(levelCell);

            tableBody.appendChild(row);
        });
    }

    fetch("http://localhost:5000/exams")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            examsData = data;
            renderTable(currentPage);
            setupPagination();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    function setupPagination() {
        const totalPages = Math.ceil(examsData.length / itemsPerPage);
        const paginationContainer = document.getElementById("pagination");

        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.className = "page-btn";
            if (i === currentPage) {
                pageButton.classList.add("active");
            }

            pageButton.addEventListener("click", function() {
                currentPage = i;
                renderTable(currentPage);
                document.querySelectorAll(".page-btn").forEach(btn => btn.classList.remove("active"));
                pageButton.classList.add("active");
            });

            paginationContainer.appendChild(pageButton);
        }
    }
});
