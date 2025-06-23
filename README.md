# Simple Blog Post Manager

A simple web application for managing blog posts with a mock backend using JSON Server.

## Features

- View all blog posts in a list
- Click on a post to view its full details
- Add new blog posts
- Edit existing posts
- Delete posts
- All changes are persisted using JSON Server

## Setup Instructions

1. Install dependencies:
```bash
npm install -g json-server
```

2. Start the JSON Server:
```bash
cd /home/wayne/phase-1-code- challange 3
json-server --watch db.json --port 3000
```

3. Open `index.html` in your web browser

## Project Structure

```
├── css/
│   └── styles.css          # Styles for the application
├── js/
│   └── app.js             # JavaScript functionality
├── db.json                # Mock database for JSON Server
├── index.html             # Main HTML file
├── README.md              # This file
└── LICENSE               # Project license
```

## API Endpoints

- `GET /posts` - Retrieve all blog posts
- `GET /posts/:id` - Retrieve a specific post by ID
- `POST /posts` - Create a new blog post
- `PATCH /posts/:id` - Update an existing post
- `DELETE /posts/:id` - Delete a post

## Usage

1. View Posts:
   - Posts are displayed in a list on the left side
   - Click any post title to view its full content on the right

2. Add New Post:
   - Use the form at the bottom of the page
   - Fill in the title and content
   - Click "Add Post" to save

3. Edit Post:
   - Click on a post to view its details
   - Click the "Edit" button
   - Modify the title and content
   - Click "Save Changes" to update

4. Delete Post:
   - Click on a post to view its details
   - Click the "Delete" button
   - Confirm deletion in the popup dialog

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server
- Browser DOM API
- Fetch API
- `db.json` - Mock database for JSON Server

## License

MIT License

Copyright (c) 2025 Travis028

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.