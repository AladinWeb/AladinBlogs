// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();
});

async function fetchBlogs() {
    try {
        const response = await fetch('/AladinBlogs/assets/blogs.json');
        const blogs = await response.json();
        const blogGrid = document.getElementById('blog-grid');

        blogs.forEach(blog => {
            const card = document.createElement('div');
            card.classList.add('blog-card');

            const title = document.createElement('h3');
            title.textContent = blog.title;

            const category = document.createElement('p');
            category.classList.add('category');
            category.textContent = blog.category;

            const date = document.createElement('p');
            date.classList.add('date');
            date.textContent = blog.date;

            const excerpt = document.createElement('p');
            excerpt.classList.add('excerpt');
            // Assuming first paragraph is blog.content[0], limit to 50 characters
            const firstPara = blog.content[0] || '';
            excerpt.textContent = firstPara.substring(0, 50) + '...';

            const button = document.createElement('a');
            button.classList.add('btn');
            button.href = blog.link;
            button.textContent = 'Read More';

            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(date);
            card.appendChild(excerpt);
            card.appendChild(button);

            blogGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
}