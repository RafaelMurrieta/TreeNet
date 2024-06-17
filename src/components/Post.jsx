import React, { useEffect, useState } from 'react';
import './Posts.css';

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3001/postsWithUser');
                const data = await response.json();
                console.log(data);
                setPosts(data);
            } catch (error) {
                console.error('Error al obtener los posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post._id} className='li-pots'>
                        
                        <div className='datepost'><p>{post.date}</p></div>
                        <div className='nameAndPost'>
                        <p className='namepost'>{post.user['name']}</p>
                        <h2 className='postText'>{post.body}</h2>
                        </div>
                        {/* {post.image && <img src={`http://localhost:3001/uploads/${post.image}`} alt="Post" />} */}
                        <div className='buttonspost'>
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M178 36c-20.09 0-37.92 7.93-50 21.56C115.92 43.93 98.09 36 78 36a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 232.14 244 174.34 244 102a66.08 66.08 0 0 0-66-66m-5.49 142.36a328.7 328.7 0 0 1-44.51 31.8a328.7 328.7 0 0 1-44.51-31.8C61.82 159.77 36 131.42 36 102a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 69.4 160.2 60 178 60a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36"/></svg> Like </span>
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 13.5h10q.213 0 .356-.144t.144-.357t-.144-.356T17 12.5H7q-.213 0-.356.144t-.144.357t.144.356T7 13.5m0-3h10q.213 0 .356-.144t.144-.357t-.144-.356T17 9.5H7q-.213 0-.356.144t-.144.357t.144.356T7 10.5m0-3h10q.213 0 .356-.144t.144-.357t-.144-.356T17 6.5H7q-.213 0-.356.144t-.144.357t.144.356T7 7.5M4.616 17q-.691 0-1.153-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615v13.518q0 .534-.497.742t-.876-.171L17.923 17z"/></svg> Comentar</span>
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z"/></svg> Compartir</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Post;
