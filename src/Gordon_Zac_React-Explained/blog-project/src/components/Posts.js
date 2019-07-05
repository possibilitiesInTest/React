import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => (
    <article className={"posts container"}>
        <h1>Posts</h1>
        <ul>
            {posts.length < 1 && (
                <li key="empty">No posts yet!</li>
            )}
            {posts.map(post => (
                <li key={post.id}>
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
        <p>
            <Link TO={`/EDIT/${post.slug}`}>Edit</Link>
        </p>
    </article>
)

export default Posts;