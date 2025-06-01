import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";

const UserOne: React.FC = () => {
    return (
        <main className=" flex justify-center items-center h-screen">
            <Header />
            <h1 className="text-2xl"> Welcome User</h1>
            <Footer />
        </main>
        
    )
}

export default UserOne