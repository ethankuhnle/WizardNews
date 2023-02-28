const express = require("express");
const app = express();
const volleyball = require("volleyball");
const postBank = require("./postBank");
const postList = require('./src/views/postList.js');
const postDetails = require('./src/views/postDetails.js');




app.use(volleyball);
app.use(express.static("public"));

const cors = require('cors');
app.use(cors());


app.get("/", (req, res)=>{
  const posts = postBank.list();
  
  res.send(postList(posts));
})

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);

  if (!post.id) {
    // If the post wasn't found, just throw an error
    throw new Error('Not Found')
  }

  res.send(postDetails(post));
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send('Too bad!')
})


const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
