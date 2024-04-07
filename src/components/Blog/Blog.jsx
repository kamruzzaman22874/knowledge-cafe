import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddBookmark, handleAddReadigTime, bookMarks }) => {

    const isBookmarked = bookMarks.find(item => item.id === blog.id);
    // const buttonStyle = {
    //     backgroundColor: isBookmarked ? '' : '',
    //     // Add any other styles you want
    // };
    const { id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-20 space-y-3">
            <img className="w-full mb-8" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)} className={`ml-2 text-2xl p-1 ${isBookmarked ? 'bg-red-500' : ''}`}><CiBookmark /></button>
                </div>
            </div>
            <h2>{title}</h2>
            <p>
                {hashtags.map((hash, idx) => <span key={idx}>#{hash}</span>)}
            </p>
            <button onClick={() => handleAddReadigTime(id, reading_time)} className="underline text-blue-600 font-bold">Marks as read</button>
        </div >
    );
};

export default Blog;