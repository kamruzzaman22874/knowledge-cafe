import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookMarks, readingsTime }) => {
    return (
        <div className="w-1/3 my-2">
            <h2 className="text-blue-700 text-2xl font-bold mb-4">Spent time on read :{readingsTime} </h2>
            <div className="bg-slate-400 p-5 rounded-xl">
                <h2>Bookmarked Blogs:{bookMarks.length} </h2>
                {
                    bookMarks?.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;