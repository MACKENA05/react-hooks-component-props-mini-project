import React from "react";
import Article from "./Article";

function ArticleList({ posts = [] }) {
  if (posts.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    
    <main className="App main">
      {posts.map((post) => (
        <Article
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
    
  );
}

export default ArticleList;
