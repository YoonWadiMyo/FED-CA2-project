const words = ["Programmer", "Software Developer", "Website Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    const typingSpan = document.querySelector('.typing');
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j++);
            typingSpan.textContent = currentWord;
            typingSpan.style.borderRight = '2px solid #face30';
        }

        if (isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j--);
            typingSpan.textContent = currentWord;
            typingSpan.style.borderRight = '2px solid #face30';
        }

        if (j == words[i].length) {
            isDeleting = true;
            typingSpan.style.borderRight = 'none';
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            if (i === words.length) {
                i = 0;
            }
        }
    }
    setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener('DOMContentLoaded', type);