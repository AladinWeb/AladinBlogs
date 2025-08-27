// header-footer.js

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    createFooter();
});

function createHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="header-content">
            <h1 class="logo">AladinBlogs</h1>
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#latest-blogs">Blogs</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
}

function createFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2025 AladinBlogs. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#latest-blogs">Blogs</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
}