var posts=["posts/1.html","posts/2.html","posts/3.html","posts/0.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};