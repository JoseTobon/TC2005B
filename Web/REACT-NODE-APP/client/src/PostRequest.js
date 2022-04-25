import React from 'react';
import axios from 'axios';
import './App.css';

function PostRequest() {
    const simplePost = () => {
        axios.post('https://6265f2ac63e0f382567a7f8d.mockapi.io/addPets', {
            name : "nala",
            type : "dog",
            owner : "eldercesar",
            color : "salt and peper",
            id : 4
        })
    }

    return (
        <div className="App">
            <h5 >Simple POST Request</h5>
            <button onClick={simplePost} className="App-header2">Make Post Request</button>
        </div>
    )
}

export default PostRequest;