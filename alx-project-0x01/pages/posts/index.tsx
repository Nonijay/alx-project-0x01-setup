import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";

const Posts: React.FC = () => {
    return (
        <div className="h-screen">
            <Header/>
            <div className="flex flex-col-2 justify-center items-center gap-3 px-5 py-2">
                <h1 className="text-2x1 px-3 py-5">Posts Page</h1>
                <PostCard/>
            </div>
            
            <Footer />
        </div>
    )
}

export default Posts