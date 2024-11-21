import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Community.css";

export const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' });
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:7500/community');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const createPost = async () => {
        try {
            const formData = new FormData();
            formData.append('title', newPost.title);
            formData.append('description', newPost.description);
            formData.append('comment', newPost.comment);
            formData.append('picture', image);
            formData.append('gif', newPost.gif);
            formData.append('emoji', newPost.emoji);

            const response = await axios.post('http://127.0.0.1:7500/community', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setPosts([...posts, { ...newPost, id: response.data.post }]);
            setNewPost({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' });
            setImage(null);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const likePost = async (postId) => {
        try {
            await axios.post(`http://127.0.0.1:7500/community/${postId}/like`);
            setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    return (
        <div className="community">
            <h1>Community Posts</h1>

            <div className="create-post">
                <h2>Create a New Post</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newPost.description}
                    onChange={e => setNewPost({ ...newPost, description: e.target.value })}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                />
                <button onClick={createPost}>Submit</button>
            </div>

            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        {post.picture && <img src={post.picture} alt="Post" className="post-image" />}
                        <div className="post-footer">
                            <p>{post.likes} Likes</p>
                            <button className="like-button" onClick={() => likePost(post.id)}>Like</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};