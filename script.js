/* --- THEME SWITCHER LOGIC --- */
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// ตรวจสอบว่ามีตีมที่เซฟไว้ใน localStorage หรือไม่
if (localStorage.getItem('theme') === 'gray-yellow') {
    document.body.classList.add('theme-gray-yellow');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('theme-gray-yellow');
    
    // บันทึกสถานะตีมลงใน LocalStorage
    if (document.body.classList.contains('theme-gray-yellow')) {
        localStorage.setItem('theme', 'gray-yellow');
    } else {
        localStorage.setItem('theme', 'white-blue');
    }
});

/* --- MOBILE MENU --- */
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navList.classList.toggle('active');
});

// ปิดเมนูมือถือเมื่อกดลิงก์ (เพิ่ม UX)
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navList.classList.remove('active');
    });
});

/* --- 3D FLIP CARD LOGIC --- */
const flipCard = document.getElementById('flip-card');
if (flipCard) {
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
    });
}

/* --- TEXT DATA --- */
const translations = {
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_graphics: "Graphics",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm Korakot",
        hero_desc: "You can call me Liger!.",
        click_hint: "Tap card to flip",
        
        // Projects
        proj_title: "Featured Projects",
        proj_1_title: "Comcare Shop",
        proj_1_short: "Website for a one-stop computer sales, repair, and assembly shop.",
        proj_1_desc: "A responsive e-commerce application built with React.js and MySQL.",
        
        proj_2_title: "Auto-GUI Python",
        proj_2_short: "Automated Data Processing Tool.",
        proj_2_desc: "An automation script built with Python (PyAutoGUI/Selenium) to streamline workflow with legacy software 'EasyFo'. It automatically processes PDF files and enters data, significantly reducing manual error and processing time.",
        
        // OWASP UPDATED
        proj_3_title: "OWASP Top 10 (2025) Presentation",
        proj_3_short: "Educational slide deck on the latest web security risks.",
        proj_3_desc: "A comprehensive presentation designed to educate developers and IT professionals about the OWASP Top 10 vulnerabilities for 2025, including mitigation strategies and real-world examples.",

        proj_4_title: "Reactor",
        proj_4_short: "Show images based on gestures",
        proj_4_desc: "A reactor that show images based on gestures",

        // Graphics
        graph_title: "Graphic Design Gallery",
        tap_image_hint: "Tap an image to enlarge",
        
        view_project: "View Project",
        watch_demo: "Watch Demo",
        try_demo: "Try Demo"
    },
    th: {
        nav_home: "หน้าแรก",
        nav_projects: "ผลงานโปรแกรมมิ่ง",
        nav_graphics: "งานกราฟิก",
        nav_contact: "ติดต่อผม",
        hero_greeting: "สวัสดีครับ ผมกรกฎ",
        hero_desc: "เรียกผมว่าไลเกอร์ก็ได้ครับ!",
        click_hint: "แตะที่บัตรเพื่อกลับด้าน",
        
        // Projects
        proj_title: "ผลงานที่ภูมิใจ",
        proj_1_title: "ระบบ ComCare Shop",
        proj_1_short: "เว็บไซต์สำหรับร้านขายและซ่อมประกอบคอมครบวงจร",
        proj_1_desc: "เว็บแอปพลิเคชันขายสินค้าที่พัฒนาด้วย React.js ฐานข้อมูลใช้ MySQL",
        
        proj_2_title: "ระบบบันทึกงานออโต้",
        proj_2_short: "โปรแกรมช่วยทำงานอัตโนมัติ",
        proj_2_desc: "สคริปต์ Python สำหรับทำ GUI Automation เพื่อทำงานกับโปรแกรม EasyFo ช่วยจัดการไฟล์ PDF และกรอกข้อมูลตัวเลขแบบอัตโนมัติ เพื่อช่วยลดความผิดพลาดและประหยัดเวลา",
        
        // OWASP UPDATED
        proj_3_title: "สไลด์ให้ความรู้ OWASP Top 10 (2025)",
        proj_3_short: "สไลด์พรีเซนเทชันสรุปความเสี่ยงด้านความปลอดภัยของเว็บแอปพลิเคชันล่าสุด",
        proj_3_desc: "ผลงานการจัดทำสไลด์นำเสนอ (PowerPoint) เพื่อให้ความรู้เกี่ยวกับช่องโหว่ความปลอดภัย OWASP Top 10 ประจำปี 2025 สรุปเนื้อหาให้อ่านเข้าใจง่าย เหมาะสำหรับใช้บรรยายให้นักพัฒนาซอฟต์แวร์และทีมไอที พร้อมแนวทางการป้องกัน",

        proj_4_title: "ตรวจจับท่าทาง",
        proj_4_short: "แสดงรูปตามท่าทางต่างๆที่กำหนดไว้",
        proj_4_desc: "เมื่อแสดงท่าทางต่างๆ เช่น ชูนิ้วขึ้น อยู่นิ่ง จะแสดงรูปตามที่ได้กำหนดไว้",

        // Graphics
        graph_title: "ผลงานออกแบบกราฟิก",
        tap_image_hint: "แตะที่รูปเพื่อดูขนาดเต็ม",
        
        view_project: "ดูรายละเอียด",
        watch_demo: "ดูคลิปตัวอย่าง",
        try_demo: "ลองใช้งาน"
    }
};

const btnEn = document.getElementById('btn-en');
const btnTh = document.getElementById('btn-th');

function getCurrentLang() {
    return btnTh.classList.contains('active-lang') ? 'th' : 'en';
}

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if(lang === 'th') {
        btnTh.classList.add('active-lang');
        btnEn.classList.remove('active-lang');
    } else {
        btnEn.classList.add('active-lang');
        btnTh.classList.remove('active-lang');
    }
}

btnEn.addEventListener('click', () => updateContent('en'));
btnTh.addEventListener('click', () => updateContent('th'));

/* --- PROJECT MODAL UPDATED --- */
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");     
const modalDemoBtn = document.getElementById("modal-demo-btn"); 
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const titleKey = button.getAttribute('data-title-key');
        const descKey = button.getAttribute('data-desc-key');
        const videoUrl = button.getAttribute('data-link');
        const demoUrl = button.getAttribute('data-demo-link'); 
        const lang = getCurrentLang();

        if (translations[lang][titleKey]) {
            modalTitle.textContent = translations[lang][titleKey];
            modalDesc.textContent = translations[lang][descKey];
        }

        // Logic for YouTube Button
        if (videoUrl && videoUrl !== "") {
            modalLink.href = videoUrl;
            modalLink.style.display = "inline-block";
        } else {
            modalLink.style.display = "none";
        }

        // Logic for Try Demo Button
        if (demoUrl && demoUrl !== "") {
            modalDemoBtn.href = demoUrl;
            modalDemoBtn.style.display = "inline-block";
        } else {
            modalDemoBtn.style.display = "none";
        }
        
        modal.style.display = "flex";
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

/* --- IMAGE LIGHTBOX --- */
const lightbox = document.getElementById("image-modal");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// ฟังก์ชันปิด Modals ครอบคลุมทั้งการคลิกพื้นที่ว่างและการกดปุ่ม ESC
function closeAllModals() {
    modal.style.display = "none";
    lightbox.style.display = "none";
}

window.addEventListener('click', (e) => {
    if (e.target == modal || e.target == lightbox) {
        closeAllModals();
    }
});

// เพิ่มการกด ESC เพื่อปิด Modal (UX ที่ดี)
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeAllModals();
    }
});