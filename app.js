const express = require("express");
const app = express();
const volleyball = require("volleyball");
const postBank = require("./postBank");


app.use(volleyball);
app.use(express.static("public"));

const cors = require('cors');
app.use(cors());


app.get("/", (req, res)=>{
  const posts = postBank.list();
  
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href=/posts/${post.id}>${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
</html>`;
  res.send(html)
})

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);

  if (!post.id) {
    // If the post wasn't found, just throw an error
    throw new Error('Not Found')
  }

  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="single-news-item">
      <header><img src="/logo.png"/>Wizard News</header>
      <div class="single-news-list">
        <p>${post.title} <span class="news-position">(by ${post.name})</span></p>
        <p>${post.content}</p>
      </div>
    </div>
  </body>
</html>`);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send('Too bad!')
})


const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
