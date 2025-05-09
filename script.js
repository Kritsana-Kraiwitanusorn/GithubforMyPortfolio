// นำเข้า library สำหรับ animation (ถ้าใช้ CDN)
// import gsap from 'gsap';


// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Hamburger Menu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    function toggleMenu() {
        hamburgerIcon.classList.toggle('open');
        navMenu.classList.toggle('active');
    }
    
    hamburgerIcon.addEventListener('click', toggleMenu);
    
});

// Animation สำหรับ Navbar เมื่อ scroll
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(122, 185, 170, 0.95)'; // ปรับสีพื้นหลังเมื่อ scroll
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'linear-gradient(100deg, #7ab9aa, #f1dc9c)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation สำหรับ Nav Menu Items
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-menu li');
    
    // Fade In animation เมื่อโหลดหน้า
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
});

// Animation สำหรับ Nav Brand
document.addEventListener('DOMContentLoaded', () => {
    const brand = document.querySelector('.nav-brand');
    brand.style.opacity = '0';
    brand.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        brand.style.transition = 'all 0.8s ease';
        brand.style.opacity = '1';
        brand.style.transform = 'translateX(0)';
    }, 300);
});


// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


const heroTitle = document.querySelector('.hero-content h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < text.length) {
        heroTitle.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// For PopUp Experience Modals
function openModal(type) {
    const modalId = type + 'Modal';
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(type) {
    const modalId = type + 'Modal';
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}


// ------------------------------------------------------
const galleryData = {
    DataCamp: {
        title: "Datacamp Certificates Collection",
        images: [
            {
                url: "Image/Certificate/DataCamp/01.png",
                description: "Data Manipulation with pandas",
                completed: "Sep 2023"
            },
            {
                url: "Image/Certificate/DataCamp/02.png",
                description: "Introduction to Python",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/DataCamp/03.png",
                description: "Data Manipulation in SQL",
                completed: "Nov 2024"
            }
        ]
    },
    '365 Data Science': {
        title: "365 Data Science Certificates Collection",
        images: [
            {
                url: "Image/Certificate/365 Data Science/01.png",
                description: "Data Analyst Career Track",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/02.png",
                description: "Introduction to Excel",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/03.png",
                description: "SQL",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/04.png",
                description: "Advanced SQL",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/05.png",
                description: "Data Cleaning and Preprocessing with Pandas",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/06.png",
                description: "Introduction to Data and Data Science",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/07.png",
                description: "Introduction to Python",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/08.png",
                description: "SQL for Data Science Interviews",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/09.png",
                description: "Statistics",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/10.png",
                description: "Data Preprocessing with NumPy",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/11.png",
                description: "Data Visualization Course with Python, R, Tableau and Excel",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/12.png",
                description: "Machine Learning in Python",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/13.png",
                description: "Mathematics",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/14.png",
                description: "Python Programmer Bootcamp",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/15.png",
                description: "Deep Learning with TensorFlow 2",
                completed: "Nov 2024"
            },
            {
                url: "Image/Certificate/365 Data Science/16.png",
                description: "Probability",
                completed: "Nov 2024"
            }
        ]
    },
    DataRockie: {
        title: "DataRockie Certificates Collection",
        images: [
            {
                url: "Image/Certificate/DataRockie/01.png",
                description: "Correlation and Regression for The Curious",
                completed: "Mar 2024"
            },
            {
                url: "Image/Certificate/DataRockie/02.png",
                description: "Mini Data Science Bootcamp 2023",
                completed: "Apr 2024"
            },
            {
                url: "Image/Certificate/DataRockie/03.png",
                description: "SQL Crash Course",
                completed: "Apr 2024"
            },
            {
                url: "Image/Certificate/DataRockie/04.png",
                description: "Google Sheets Crash Course",
                completed: "Apr 2024"
            },
            {
                url: "Image/Certificate/DataRockie/05.png",
                description: "Mini Data Science Bootcamp 2024",
                completed: "Apr 2024"
            },
            {
                url: "Image/Certificate/DataRockie/06.png",
                description: "Data Analyst Manifesto",
                completed: "Dec 2024"
            },
            {
                url: "Image/Certificate/DataRockie/07.png",
                description: "Mini Bootcamp 2025",
                completed: "Mar 2025"
            }
        ]
    },
    MOOCs: {
        title: "MOOCs Certificates Collection",
        images: [
            {
                url: "Image/Certificate/MOOCs/Chula_01.jpg",
                description: "Chula Mooc : Database Management with SQL",
                completed: "Aug 2024"
            },
            {
                url: "Image/Certificate/MOOCs/Chula_02.jpg",
                description: "Chula Mooc : Data for Everyone",
                completed: "Aug 2024"
            },
            {
                url: "Image/Certificate/MOOCs/Chula_03.jpg",
                description: "Chula Mooc : เขียนโค้ดคู่กับ AI เสร็จไว ไม่ตกเทรนด์",
                completed: "Oct 2024"
            },
            {
                url: "Image/Certificate/MOOCs/Chula_04.jpg",
                description: "Chula Mooc : Cloud Computing for Everyone",
                completed: "Apr 2025"
            },
            {
                url: "Image/Certificate/MOOCs/MU_01.png",
                description: "MU Mooc : Introduction to Data Analytics",
                completed: "Mar 2024"
            },
            {
                url: "Image/Certificate/MOOCs/MU_02.png",
                description: "MU Mooc : Excel",
                completed: "May 2024"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_01.png",
                description: "Thai Mooc : Introduction to Data Science",
                completed: "Feb 2021"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_02.png",
                description: "Thai Mooc : Data Driven Decision Making",
                completed: "Sep 2023"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_03.png",
                description: "Thai Mooc : Python for Data Analysis and Data Visualization Part1",
                completed: "Sep 2023"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_04.png",
                description: "Thai Mooc : Python for Data Analysis and Data Visualization Part2",
                completed: "Sep 2023"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_05.png",
                description: "Thai Mooc : Data Analysis for Business Management",
                completed: "Dec 2023"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_06.png",
                description: "Thai Mooc : Big Data Analysis",
                completed: "Dec 2023"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_07.png",
                description: "Thai Mooc : Data Science",
                completed: "Mar 2025"
            },
            {
                url: "Image/Certificate/MOOCs/Thai_08.png",
                description: "Thai Mooc : Python Programming for Data Science",
                completed: "Mar 2025"
            }
        ]
    },
    DIGI: {
        title: "DIGI Certificates Collection",
        images: [
            {
                url: "Image/Certificate/DIGI/01.png",
                description: "Data Storytelling 101 เล่าเรื่องอย่างไรให้น่าสนใจ",
                completed: "Oct 2023"
            },
            {
                url: "Image/Certificate/DIGI/02.png",
                description: "Introduction to Power BI",
                completed: "Oct 2023"
            },
            {
                url: "Image/Certificate/DIGI/03.png",
                description: "Basic Python",
                completed: "Oct 2023"
            },
            {
                url: "Image/Certificate/DIGI/04.png",
                description: "Basic Tableau",
                completed: "Oct 2023"
            },
            {
                url: "Image/Certificate/DIGI/05.png",
                description: "การปรับปรุงข้อมูลให้เป็น Machine Readable",
                completed: "Oct 2023"
            }
        ]
    },
    SAMSUNG: {
        title: "SAMSUNG Certificates Collection",
        images: [
            {
                url: "Image/Certificate/SAMSUNG/01.png",
                description: "Introduction to Artificial Intelligence in the Workplace",
                completed: "Jul 2024"
            },
            {
                url: "Image/Certificate/SAMSUNG/02.png",
                description: "Introduction to Programming with Python",
                completed: "Jul 2024"
            }
        ]
    }
};

let currentGallery = null;
let currentImageIndex = 0;

function openGalleryModal(galleryId) {
    currentGallery = galleryData[galleryId];
    currentImageIndex = 0;
    
    const modal = document.getElementById('galleryModal');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    
    // แสดง modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // อัพเดทรูปภาพและรายละเอียด
    updateGalleryDisplay();
    
    // สร้าง thumbnails
    thumbnailContainer.innerHTML = '';
    currentGallery.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.url;
        thumb.classList.add('thumbnail');
        if (index === 0) thumb.classList.add('active');
        thumb.onclick = () => showImage(index);
        thumbnailContainer.appendChild(thumb);
    });
    
    // อัพเดทจำนวนรูปทั้งหมด
    document.getElementById('totalImages').textContent = currentGallery.images.length;
}

function updateGalleryDisplay() {
    const image = currentGallery.images[currentImageIndex];
    document.getElementById('galleryImage').src = image.url;
    document.getElementById('galleryTitle').textContent = currentGallery.title;
    document.getElementById('galleryDescription').textContent = image.description;
    document.getElementById('completed').textContent = image.completed;
    document.getElementById('currentImageNum').textContent = currentImageIndex + 1;
    
    // อัพเดท active thumbnail
    const thumbnails = document.getElementsByClassName('thumbnail');
    Array.from(thumbnails).forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function changeImage(direction) {
    const totalImages = currentGallery.images.length;
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    updateGalleryDisplay();
}

function showImage(index) {
    currentImageIndex = index;
    updateGalleryDisplay();
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}


// ปิด modal เมื่อคลิกพื้นที่นอก modal
window.onclick = function(event) {
    // ปิด Experience Modal
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    // ปิด Certificates Modal
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeGalleryModal();
    }
}


// ปิด modal ด้วยปุ่ม ESC
document.addEventListener('keydown', function(event) {
        // ปิด Experience Modal
    if (event.key === 'Escape') {
        const modals = document.getElementsByClassName('modal');
        for (let modal of modals) {
            modal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    }
        // ปิด Certificates Modal
        if (document.getElementById('galleryModal').style.display === 'none') {
            if (event.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (event.key === 'ArrowRight') {
                changeImage(1);
            } else if (event.key === 'Escape') {
                closeGalleryModal();
            }
        }
});
