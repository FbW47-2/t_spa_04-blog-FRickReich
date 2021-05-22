import React, { useState, useEffect } from "react";
import Post from './../Components/Post';

const Posts = () =>
{
    const [ posts, setPosts ] = useState([]);

    useEffect(() =>
    {
        const oldPosts = JSON.parse(window.localStorage.getItem('posts'));

        setPosts(oldPosts);
    }, []);

    return(
        <>
            {
                posts.length > 0 ?
                <>
                    {
                        posts.map((post, i) =>
                        {
                                return (
                                    <Post key={ i } post={ post } />
                                )
                        }).reverse()
                    }
                </>
                :
                <p>Lade Einträge...</p>
            }
        </>
    )
}

export default Posts;
