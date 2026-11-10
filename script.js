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

    (function () {
  // [عنوان کتاب، اسم فایل عکس بدون پسوند، رنگ جلد جایگزین]
  // عکس‌ها باید در پوشه‌ی images/books/ و با پسوند .jpg باشند.
  var BOOKS = {
    7: [
      ["آموزش قرآن",        "7-quran",    "#2e7d6b"],
      ["هدیه‌های آسمان",    "7-hediye",   "#3f7fbf"],
      ["فارسی",             "7-farsi",    "#c0396b"],
      ["نگارش",             "7-negaresh", "#4aa3c7"],
      ["ریاضی",             "7-riazi",    "#6a8f3a"],
      ["علوم تجربی",        "7-oloom",    "#4c9a4c"],
      ["مطالعات اجتماعی",   "7-motaleat", "#c98a2b"],
      ["عربی",              "7-arabi",    "#8a5a9e"],
      ["زبان انگلیسی",      "7-english",  "#d0533f"],
      ["کار و فناوری",      "7-kar",      "#d98c7a"],
      ["تفکر و سبک زندگی",  "7-tafakor",  "#3b6e9c"],
      ["فرهنگ و هنر",       "7-honar",    "#a35c78"]
    ],
    8: [
      ["آموزش قرآن",        "8-quran",    "#2e7d6b"],
      ["پیام‌های آسمان",    "8-payam",    "#3f7fbf"],
      ["فارسی",             "8-farsi",    "#c0396b"],
      ["نگارش",             "8-negaresh", "#4aa3c7"],
      ["ریاضی",             "8-riazi",    "#6a8f3a"],
      ["علوم تجربی",        "8-oloom",    "#4c9a4c"],
      ["مطالعات اجتماعی",   "8-motaleat", "#c98a2b"],
      ["عربی",              "8-arabi",    "#8a5a9e"],
      ["زبان انگلیسی",      "8-english",  "#d0533f"],
      ["کار و فناوری",      "8-kar",      "#d98c7a"],
      ["تفکر و سبک زندگی",  "8-tafakor",  "#3b6e9c"],
      ["فرهنگ و هنر",       "8-honar",    "#a35c78"]
    ],
    9: [
      ["آموزش قرآن",        "9-quran",    "#2e7d6b"],
      ["پیام‌های آسمان",    "9-payam",    "#3f7fbf"],
      ["فارسی",             "9-farsi",    "#c0396b"],
      ["نگارش",             "9-negaresh", "#4aa3c7"],
      ["ریاضی",             "9-riazi",    "#6a8f3a"],
      ["علوم تجربی",        "9-oloom",    "#4c9a4c"],
      ["مطالعات اجتماعی",   "9-motaleat", "#c98a2b"],
      ["عربی",              "9-arabi",    "#8a5a9e"],
      ["زبان انگلیسی",      "9-english",  "#d0533f"],
      ["کار و فناوری",      "9-kar",      "#d98c7a"],
      ["تفکر و سبک زندگی",  "9-tafakor",  "#3b6e9c"],
      ["فرهنگ و هنر",       "9-honar",    "#a35c78"]
    ]
  };
  var GRADE_NAMES = { 7: "هفتم", 8: "هشتم", 9: "نهم" };
  var IMAGE_FOLDER = "images/books/";

  var track = document.getElementById("booksTrack");
  var tabs = document.querySelectorAll("#gradeTabs .grade-tab");

  function renderGrade(grade) {
    track.innerHTML = "";
    BOOKS[grade].forEach(function (b) {
      var item = document.createElement("div");
      item.className = "book";

      var cover = document.createElement("div");
      cover.className = "book-cover";

      // جلد جایگزین (همیشه زیر عکس هست)
      var fb = document.createElement("div");
      fb.className = "book-fallback";
      fb.style.background = b[2];
      fb.innerHTML = "<strong>" + b[0] + "</strong><span>پایه " + GRADE_NAMES[grade] + "</span>";
      cover.appendChild(fb);

      // عکس واقعی روی جلد جایگزین؛ اگر پیدا نشد حذف می‌شود
      var img = document.createElement("img");
      img.src = IMAGE_FOLDER + b[1] + ".jpg";
      img.alt = "کتاب " + b[0] + " پایه " + GRADE_NAMES[grade];
      img.loading = "lazy";
      img.onerror = function () { img.remove(); };
      cover.appendChild(img);

      item.appendChild(cover);
      track.appendChild(item);
    });
    track.scrollTo({ left: 0, behavior: "auto" });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      renderGrade(tab.dataset.grade);
    });
  });

  // فلش‌ها: فلش راست به سمت راست، فلش چپ به سمت چپ اسکرول می‌کند
  function step() { return track.clientWidth * 0.8; }
  document.getElementById("booksRight").addEventListener("click", function () {
    track.scrollBy({ left: step() });
  });
  document.getElementById("booksLeft").addEventListener("click", function () {
    track.scrollBy({ left: -step() });
  });

  renderGrade(7);
})();

const studentsGrid = document.getElementById("studentsGrid");

const studentsNext = document.getElementById("studentsNext");
const studentsPrev = document.getElementById("studentsPrev");

studentsNext.addEventListener("click", () => {
    studentsGrid.scrollBy({
        left: -studentsGrid.clientWidth,
        behavior: "smooth"
    });
});

studentsPrev.addEventListener("click", () => {
    studentsGrid.scrollBy({
        left: studentsGrid.clientWidth,
        behavior: "smooth"
    });
});

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dots button");

let currentSlide = 0;

function showHeroSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

document.getElementById("heroNext").addEventListener("click", () => {
    showHeroSlide(currentSlide + 1);
});

document.getElementById("heroPrev").addEventListener("click", () => {
    showHeroSlide(currentSlide - 1);
});

dots.forEach(dot => {

    dot.addEventListener("click", () => {

        showHeroSlide(Number(dot.dataset.slide));

    });

});

setInterval(() => {
    showHeroSlide(currentSlide + 1);
}, 10000);



//----------*//

const students = {
    "1365930130": "علی رضایی",
    "2222222222": "محمد احمدی",
    "3333333333": "امیر حسینی"
};

const loginForm = document.getElementById("loginForm");
const nationalCode = document.getElementById("nationalCode");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const code = nationalCode.value.trim();

    if (!/^\d{10}$/.test(code)) {
        message.style.color = "red";
        message.textContent = "کد ملی باید ۱۰ رقم باشد.";
        return;
    }

    if (students[code]) {
        localStorage.setItem("studentName", students[code]);

        message.style.color = "green";
        message.textContent = "ورود موفقیت‌آمیز بود!";

        setTimeout(function() {
            window.location.href = "portal.html";
        }, 700);

    } else {
        message.style.color = "red";
        message.textContent = "دانش‌آموزی با این کد ملی پیدا نشد.";
    }
});
