import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

const NewPost = () =>
{
    const [ username, setUsername ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    
    const history = useHistory();

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const newPost  = {
            username,
            title,
            content,
            timestamp: new Date().getTime() + 60000,
        };

        let posts;

        posts = JSON.parse(window.localStorage.getItem('posts')) || [];

        posts.push(newPost);

        window.localStorage.setItem('posts', JSON.stringify(posts));

        history.push("/posts")
    }

    return(
        <div className="Panel">
            <form onSubmit={ handleSubmit }>
                <label>
                    Benutzername:
                    <input type="text" value={ username} onChange={ (e) =>  setUsername(e.target.value) } />
                    Titel:
                    <input type="text" value={ title } onChange={  (e) => setTitle(e.target.value) } />
                    Inhalt:
                    <textarea rows="12" onChange={ (e) => setContent(e.target.value) }>
                        { content }
                    </textarea>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Posten" disabled={ username === "" || title === "" || content === "" }/>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default NewPost;
