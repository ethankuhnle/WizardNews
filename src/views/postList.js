const { getTimeString } = require('../utils/timeCalc');
const html = require('html-template-tag');

function postList(posts) {

  return (
    `<!DOCTYPE html>
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/>Wizard News</header>
          ${posts.map(post => {
            return (
              `<div class='news-item'>
                <p>
                  <span class="news-position">${post.id}. ▲</span>
                  <a href=/posts/${post.id}>${post.title}</a>
                  <small>(by ${post.name})</small>
                </p>
                <small class="news-info">
                  ${post.upvotes} upvotes | ${getTimeString(post.date)}
                </small>
              </div>`
            )
          }).join('')}
        </div>
      </body>
    </html>`
  )
}


module.exports = postList;