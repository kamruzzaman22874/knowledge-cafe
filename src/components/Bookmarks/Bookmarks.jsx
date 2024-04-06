import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingsTime }) => {
    return (
        <div className="w-1/3 my-2">
            <h2 className="text-blue-700 font-bold mb-4">Spent time on read : {readingsTime}</h2>
            <div className="bg-slate-400 p-5 rounded-xl">
                <h2>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;