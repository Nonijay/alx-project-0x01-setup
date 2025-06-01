import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";

const Posts: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Header/>
            <h1 className="text-2x1 px-3 py-5">Posts Page</h1>
            <PostCard/>
            <Footer />
        </div>
    )
}

export default Posts