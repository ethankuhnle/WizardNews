function postDetails(post) {

  return (
    html`<!DOCTYPE html>
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
    </html>`
  )
}


module.exports = postDetails;