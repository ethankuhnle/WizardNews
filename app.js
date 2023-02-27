const express = require("express");
const app = express();
const volleyball = require("volleyball");
const postBank = require("./postBank");


app.use(volleyball);

app.get("/", (req, res)=>{
  const posts = postBank.list();
  const mappedPost = posts.map(post => {
    return(
      `<li>Author: ${post.name} Title: ${post.title}</li>`
    )
  })
  const html = `
  <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <ul>
        ${mappedPost.join('')}
      </ul>
    </body>
  </html>`;
  res.send(html)
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
