 <h1>📒 Note Pad App</h1>
  <p>A simple full-stack note-taking app built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>EJS</strong> that allows users to create, view, and manage notes.</p>

  <h2>📌 Features</h2>
  <ul>
    <li>✍️ Create and save new notes</li>
    <li>📄 View all existing notes</li>
    <li>🗑️ Delete notes</li>
    <li>🎨 Clean, minimal UI with basic CSS</li>
    <li>🗂️ Server-side rendering with EJS</li>
  </ul>

  <h2>🚀 Live Demo</h2>
  <p><em>Add your deployed link here if hosted:</em><br />
  <code>https://your-project-name.onrender.com</code></p>

  <h2>🛠️ Tech Stack</h2>
  <table border="1" cellpadding="8">
    <tr><th>Tech</th><th>Usage</th></tr>
    <tr><td>Node.js</td><td>Server runtime</td></tr>
    <tr><td>Express.js</td><td>Backend framework</td></tr>
    <tr><td>EJS</td><td>Templating engine</td></tr>
    <tr><td>HTML/CSS</td><td>Frontend</td></tr>
    <tr><td>JavaScript</td><td>Client-side logic</td></tr>
    <tr><td>UUID / ShortID</td><td>Unique note IDs</td></tr>
  </table>

  <h2>📂 Folder Structure</h2>
  <pre>
note-pad-app/
│
├── public/             # CSS, JS, static files
│   ├── style.css
│   └── script.js
│
├── views/              # EJS templates
│   ├── index.ejs
│   └── show.ejs
│
├── index.js            # Entry point (Express server)
├── package.json
└── README.md
  </pre>

  <h2>⚙️ Installation & Usage</h2>
  <ol>
    <li>Clone the repository:<br />
      <code>git clone https://github.com/your-username/note-pad-app.git</code><br />
      <code>cd note-pad-app</code>
    </li>
    <li>Install dependencies:<br />
      <code>npm install</code>
    </li>
    <li>Start the server:<br />
      <code>node index.js</code>
    </li>
    <li>Open in browser:<br />
      <code>http://localhost:3000</code>
    </li>
  </ol>

  <h2>✏️ How It Works</h2>
  <ul>
    <li><code>GET /</code> – Display form and list of notes</li>
    <li><code>POST /create</code> – Add a new note</li>
    <li><code>GET /note/:id</code> – Show a single note</li>
    <li><code>POST /delete/:id</code> – Delete a note</li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is open source and free to use. Feel free to modify it for your own use!</p>
