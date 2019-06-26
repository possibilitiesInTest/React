import React from "react";

const Practice3 = () => {
  const title = "Hello World";
  const author = "Zac Gordon";
  return (
    <div className="practice">
      {/* 
        1. Pass title and author into Post as props        
      */}
      <Post title={title} author={author}/>
    </div>
  );
};

/*
  2. Make the Post component accept props
  3. Pass title to the Heading component as props
  4. Pass author to the Byline component as props
*/
const Post = ({title, author}) => (
  <article className="post">
    <Heading title={title}/>
    <Byline author={author}/>
    </article>
);

/*
  5. Create a component named <Heading /> that accepts props
  6. Have it display an H1 with a title from props
*/
const Heading = ({title}) => (
    <h1>{title}</h1>
)

/*
  5. Create a component named <Byline /> that accepts props
  6. Have it display a p with the author
*/
const Byline = ({author}) => (
    <p>{author}</p>
)

export default Practice3;
