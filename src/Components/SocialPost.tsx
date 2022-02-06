import { Post } from "../Models/Post";
import {useState} from "react"
import {PostInList} from "./PostInList"
import {PostForm} from "./PostForm"
import Modal from 'react-modal';




export function SocialPosts() {



        const [show, setShow] = useState(false)
        const showPostForm = () => setShow(true)
        const closePostForm = () => setShow(false)

        const [posts, setPosts] = useState<Post[]>(
            [{title: "Grand Circus" , thought: "Grand Circus is cool"},
            {title: "React" , thought: "React will one day give me power, for now it's giving confusion"},
            {title: "Book of Boba Fett" , thought: "Am I officially a Star Wars fan???"}]
            )

            
        const customStyles = {
            content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            borderRadius: '25px',
            transform: 'translate(-50%, -50%)',
            }}



            function handleDelete(index:number) {

                const newList= posts.splice(0)

                newList.splice(index, 1)

                setPosts(newList)
                
            }

           

                return (

                        <div className="main-container">

                            <header>
                                <h1>My Thoughts</h1>
                            </header>

                            <button className="new-thought-button" onClick={showPostForm}>New Thought</button>

                                <main className="main">

                                
                               
                                        {posts.map((posts, i) => (
                                            <PostInList  
                                            key={i}
                                            post={posts} 
                                            onDelete={() => handleDelete(i)}

                                            ></PostInList>
                                        ))}

                                    
                                        </main>

                                        <Modal isOpen={show} onRequestClose={closePostForm} style={customStyles}>
                                        <PostForm
                                        onSubmit={(post) => setPosts([...posts, post])}
                                        onClose={closePostForm}
                                        ></PostForm>
                                         </Modal>
                                    
                                    </div>

                            
                        



                )





}