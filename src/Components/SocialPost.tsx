import { Post } from "../Models/Post";
import {useState} from "react"
import {PostInList} from "./PostInList"
import {PostForm} from "./PostForm"




export function SocialPosts() {





        const [posts, setPosts] = useState<Post[]>(
            [{title: "Grand Circus" , thought: "Grand Circus is cool"},
            {title: "React" , thought: "React will one day give me power, for now it's giving confusion"},
            {title: "Book of Boba Fett" , thought: "Am I officially a Star Wars fan???"}]
            )



            function handleDelete(index:number) {

                const newList= posts.splice(0)

                newList.splice(index, 1)

                setPosts(newList)
                
            }

            function addFormPost() {

                setPosts(posts => [...posts, ])
            }

                return (

                        <div className="main-container">

                            <header>
                                <h1>My Thoughts</h1>
                            </header>

                            <button className="new-thought-button">New Thought</button>

                                <main className="main">

                                
                               
                                        {posts.map((posts, i) => (
                                            <PostInList  
                                            key={i}
                                            post={posts} 
                                            onDelete={() => handleDelete(i)}

                                            ></PostInList>
                                        ))}

                                    
                                        </main>

                                        <PostForm
                                        onSubmit={(post) => setPosts([...posts, post])}
                                        onClose={() => console.log("close")}
                                        ></PostForm>
                                    


                            
                        </div>



                )





}