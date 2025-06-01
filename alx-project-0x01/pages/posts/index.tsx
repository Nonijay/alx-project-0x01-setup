import PostCard from "@/components/common/PostCard";
import React from "react";

const Posts: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2x1 px-3 py-5">Posts Page</h1>
            <PostCard/>
        </div>
    )
}

export default PostCard