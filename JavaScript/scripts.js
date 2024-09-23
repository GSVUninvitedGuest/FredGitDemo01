document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('modeToggle');
    const currentMode = localStorage.getItem('mode') || 'light';

    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Form submitted');

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const date = new Date().toLocaleDateString();

    console.log('Author:', author);
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Date:', date);

    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';

    const blogImage = document.createElement('img');
    blogImage.src = './assets/images/reader_sub_02.png'; 
    blogImage.alt = 'Reader Submission logo';
    blogImage.className = 'blog-image';

    const blogText = document.createElement('div');
    blogText.className = 'blog-text';

    const blogTitle = document.createElement('h2');
    blogTitle.textContent = title;

    const blogDate = document.createElement('p');
    blogDate.className = 'date';
    blogDate.textContent = `Posted on: ${date}`;

    const blogContent = document.createElement('p');
    blogContent.textContent = content;

    blogText.appendChild(blogTitle);
    blogText.appendChild(blogDate);
    blogText.appendChild(blogContent);
    blogPost.appendChild(blogImage);
    blogPost.appendChild(blogText);

    console.log('Blog post created:', blogPost);

    const blogContainer = document.querySelector('.blog-container');
    if (blogContainer) {
        blogContainer.appendChild(blogPost);
        console.log('Blog post appended to container');
    } else {
        console.error('Blog container not found');
    }

    document.getElementById('blogForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('modeToggle');
    const currentMode = localStorage.getItem('mode') || 'light';

    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});


