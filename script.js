// Sayfa yüklendiğinde yumuşak scroll native CSS 'scroll-behavior: smooth' ile sağlanmaktadır.

/* ---- Ürünlerimiz Filtre Sistemi ---- */
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns  = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aktif sınıfı güncelle
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach(card => {
                const categories = card.dataset.category || '';

                // Kart bu kategoriye dahil mi?
                const isMatch = filter === 'all' || categories.split(' ').includes(filter);

                if (isMatch) {
                    card.classList.remove('hidden');
                    // Kısa gecikme ile fade-in animasyonu tetikle
                    void card.offsetWidth; // reflow
                    card.classList.add('fade-in');
                    card.addEventListener('animationend', () => {
                        card.classList.remove('fade-in');
                    }, { once: true });
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

console.log("Wise Tech yüklendi.");
