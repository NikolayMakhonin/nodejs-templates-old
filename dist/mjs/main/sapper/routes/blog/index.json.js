import posts from './_posts.js';
var contents = JSON.stringify(posts.map(function (post) {
  return {
    title: post.title,
    slug: post.slug
  };
}));
export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(contents);
}