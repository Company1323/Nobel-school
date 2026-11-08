fetch("students.json")
    .then(response => response.json())
    .then(students => {

        const container = document.getElementById("studentsGrid");

        students.forEach(student => {

            const card = document.createElement("div");
            card.className = "student-card";

            card.innerHTML = `
                <div class="student-background">
                    <div class="student-color-bg"></div>
                    <img src="${student.image}" alt="تصویر دانش‌آموز">
                </div>

                <div class="student-info">
                    <span class="student-label">دانش‌آموز نوبل</span>
                    <h3></h3>
                    <p></p>
                </div>
            `;

            card.querySelector("h3").textContent = student.name;
            card.querySelector("p").textContent = "پایه " + student.grade;

            container.appendChild(card);
        });

    });