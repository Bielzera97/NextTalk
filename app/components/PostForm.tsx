"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { db } from "@/lib/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";


const PostForm = () => {

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    
    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title,
                content : post,
                createdAt : new Date()
            });
            setTitle("");
            setPost("");
            console.log("Document written with ID: ", docRef.id);
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <form onSubmit={submitPost} className="flex flex-col gap-3">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-white" />
            <textarea placeholder="Post" value={post} onChange={(e) => setPost(e.target.value)} className="bg-white" />
            <Button variant="outline" type="submit" className=" cursor-pointer">Submit</Button>
        </form>
    )
}


export default PostForm;