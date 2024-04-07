import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark, handleAddReadigTime, bookMarks }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="w-3/2">
            {
                blogs.map(blog => <Blog key={blog.id}
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleAddReadigTime={handleAddReadigTime}
                    bookMarks={bookMarks}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;