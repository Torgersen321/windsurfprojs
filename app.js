document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
});

// Create HTML structure
document.body.innerHTML = `
    <nav>
        <div class="logo">Morning Delight</div>
        <div class="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#recipe">Recipe</a>
        </div>
    </nav>

    <section id="hero" class="hero">
        <h1 class="animate-on-scroll">The Perfect Morning Duo</h1>
        <h2 class="animate-on-scroll">Corned Beef Hash & Coffee</h2>
    </section>

    <section id="about" class="about animate-on-scroll">
        <div class="content-wrapper">
            <h2>A Breakfast Story</h2>
            <p>Discover the ultimate morning indulgence: perfectly crispy corned beef hash paired with aromatic coffee. A combination that transforms ordinary mornings into extraordinary experiences.</p>
        </div>
    </section>

    <section id="recipe" class="recipe animate-on-scroll">
        <div class="content-wrapper">
            <h2>The Perfect Pairing</h2>
            <div class="recipe-grid">
                <div class="recipe-item">
                    <h3>The Hash</h3>
                    <p>Crispy, savory corned beef hash with perfectly diced potatoes, caramelized onions, and a touch of herbs.</p>
                </div>
                <div class="recipe-item">
                    <h3>The Coffee</h3>
                    <p>Rich, aromatic coffee with notes of chocolate and caramel, creating the perfect complement to your hash.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>© ${new Date().getFullYear()} Morning Delight. All rights reserved.</p>
    </footer>
`;
