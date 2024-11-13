// Membuat bintang secara acak
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(star);
}

// Membuat bintang jatuh secara acak
for (let i = 0; i < 5; i++) {
    const fallingStar = document.createElement('div');
    fallingStar.classList.add('falling-star');
    fallingStar.style.top = Math.random() * -100 + 'vh';
    fallingStar.style.left = Math.random() * 100 + 'vw';
    fallingStar.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(fallingStar);
}