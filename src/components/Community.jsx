import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Community.css";

export const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        comment: '',
        picture: '',
        gif: '',
        emoji: ''
    });
    const [editPost, setEditPost] = useState(null);

    const emojis = ['😀', '😂', '😍', '😎', '🥳', '😢', '👍', '👎', '🔥', '❤️'];

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

    const createPost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:7500/community', newPost);
            setPosts([...posts, { ...newPost, id: response.data.post, likes: 0 }]);
            setNewPost({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' });
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const updatePost = async (postId) => {
        try {
            const response = await axios.put(`http://127.0.0.1:7500/community/${postId}`, editPost);
            setPosts(posts.map(post => post.id === postId ? { ...post, ...editPost } : post));
            setEditPost(null);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    const deletePost = async (postId) => {
        try {
            await axios.delete(`http://127.0.0.1:7500/community/${postId}`);
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const likePost = async (postId) => {
        try {
            const response = await axios.post(`http://127.0.0.1:7500/community/${postId}/like`);
            setPosts(posts.map(post => post.id === postId ? { ...post, likes: response.data.likes } : post));
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    return (
        <div className="community">
            <h1>Community Posts</h1>

            <div className="post-form">
                <h2>Create a New Post</h2>
                <form onSubmit={createPost}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newPost.title}
                        onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={newPost.description}
                        onChange={e => setNewPost({ ...newPost, description: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Comment"
                        value={newPost.comment}
                        onChange={e => setNewPost({ ...newPost, comment: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Picture URL"
                        value={newPost.picture}
                        onChange={e => setNewPost({ ...newPost, picture: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="GIF URL"
                        value={newPost.gif}
                        onChange={e => setNewPost({ ...newPost, gif: e.target.value })}
                    />

                    <div className="emoji-picker">
                        <p>Choose an Emoji:</p>
                        <div className="emojis">
                            {emojis.map((emoji, index) => (
                                <span
                                    key={index}
                                    className="emoji"
                                    onClick={() => setNewPost({ ...newPost, emoji })}
                                >
                                    {emoji}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>Comment: {post.comment}</p>
                        {post.picture && <img src={post.picture} alt="Post visual" />}
                        {post.gif && <img src={post.gif} alt="GIF" />}
                        <p>Emoji: {post.emoji}</p>
                        <p>{post.likes} Likes</p>
                        <button onClick={() => likePost(post.id)}>Like</button>
                        <button onClick={() => deletePost(post.id)} style={{ marginLeft: '10px', backgroundColor: '#dc3545' }}>Delete</button>
                        <button onClick={() => setEditPost(post)} style={{ marginLeft: '10px', backgroundColor: '#ffc107' }}>Edit</button>
                        {editPost?.id === post.id && (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    placeholder="New Title"
                                    value={editPost.title}
                                    onChange={e => setEditPost({ ...editPost, title: e.target.value })}
                                />
                                <textarea
                                    placeholder="New Description"
                                    value={editPost.description}
                                    onChange={e => setEditPost({ ...editPost, description: e.target.value })}
                                />
                                <button onClick={() => updatePost(post.id)}>Save</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
