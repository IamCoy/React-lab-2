import { useState } from "react"
import { Post } from "../Models/Post"
import { SocialPosts } from "./SocialPost"


export function PostForm(props: {onSubmit: (post: Post) => void, onClose: () => void}){

   const [newTitle, setNewTitle] = useState("")
   const [newThought, setNewThought] = useState("")


   function newPost(){


   }

    return (

        <div className="Post-form">

        

                    <form>
                            <button className="close" onClick={() => props.onClose()}>X</button>

                            <label htmlFor="title">title</label>
                            <input type="text" name="title" value ={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
                            <label htmlFor="thought">thought</label>
                            <textarea name="thought" value ={newThought} onChange={(e) => setNewThought(e.target.value)}></textarea>
                            <button onClick={() => 
                            {props.onSubmit({ title: newTitle, thought: newThought})
                            setNewTitle('')
                            setNewThought('')}} type="button" className="submit-button" > Add Post </button>

                            

                            

                    </form> 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>


        
    )

}