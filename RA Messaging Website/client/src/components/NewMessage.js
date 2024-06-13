import React, { useState } from 'react'
import './NewMessage.css'

function NewMessage({newMessageTl, fetchPosts}) {
        const[message, setMessage] = useState("");

        const closeNewMessageWindow = (e) => {
                if(e.target.className === 'new-message-container'){
                        newMessageTl.reverse();
                }
        }

        const handleSubmit = () => {
                if(message !== ""){
                        console.log('submitting!');
                        // call api request for new post, send json
                        fetch('/newpost', { //send post request to server
                                method: "POST",
                                headers: {
                                        'Content-Type' : 'application/json'
                                },
                                body: JSON.stringify({
                                        'userid' : 2,
                                        'message' : message
                                })
                        }).then( //wait for data to be sent to sql database, then when response from server comes back...
                                (response) => {
                                        console.log(response); //log response
                                        fetchPosts(); //update state, to also update the react DOM
                                        newMessageTl.reverse(); //close the new message window once completed
                                }
                        )
                } else {
                        alert("type something in first!");
                }
                setMessage(""); //reset the message field
        }
 
        return (
                <div className='new-message-container' onClick={(e) => closeNewMessageWindow(e)}>
                        <div className='new-message-window'>
                                <div className='new-message-internals'>
                                        <h3>New Message</h3>
                                        <textarea
                                                type="text" 
                                                name="message"  
                                                maxLength="10000"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <div className='submit-button'>
                                                <button onClick={handleSubmit}>Submit</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default NewMessage