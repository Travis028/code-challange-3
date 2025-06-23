const API_URL = 'http://localhost:3000/posts';

// DOM Elements
const postsContainer = document.getElementById('posts-container');
const postContent = document.getElementById('post-content');
const newPostForm = document.getElementById('new-post-form');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');

// Load posts when page loads
window.addEventListener('load', loadPosts);

// Load all posts from API
async function loadPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Display posts in the list
function displayPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-item';
        postElement.dataset.id = post.id;
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
        `;
        postElement.addEventListener('click', () => showPostDetail(post));
        postsContainer.appendChild(postElement);
    });
}

// Show post detail
function showPostDetail(post) {
    postContent.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
        <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
    `;
}

// Add new post
newPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const newPost = {
        title: postTitleInput.value,
        content: postContentInput.value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost)
        });

        if (response.ok) {
            postTitleInput.value = '';
            postContentInput.value = '';
            loadPosts();
        }
    } catch (error) {
        console.error('Error adding post:', error);
    }
});

// Edit post
async function editPost(id) {
    const post = await fetch(`${API_URL}/${id}`)
        .then(response => response.json());

    postContent.innerHTML = `
        <h2>Edit Post</h2>
        <form id="edit-form">
            <input type="text" id="edit-title" value="${post.title}" required>
            <textarea id="edit-content" required>${post.content}</textarea>
            <button type="submit">Save Changes</button>
        </form>
    `;

    const editForm = document.getElementById('edit-form');
    editForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const updatedPost = {
            title: document.getElementById('edit-title').value,
            content: document.getElementById('edit-content').value
        };

        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost)
            });
            loadPosts();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    });
}

// Delete post
async function deletePost(id) {
    if (confirm('Are you sure you want to delete this post?')) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            loadPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }
}
