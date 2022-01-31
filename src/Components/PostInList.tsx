import { Post } from "../Models/Post";




interface Props{
    post:Post;
    onDelete:() => void;
}

export function PostInList({post, onDelete}: Props) {



            return (
                // <li>
               
                <div className="list">
                    <h2> {post.title}</h2>
                    {/* would be props.post.title */}
                    <p>{post.thought}</p>
               
                <button className="delete-button" onClick={onDelete}>delete</button>

               </div>
                
            )


}