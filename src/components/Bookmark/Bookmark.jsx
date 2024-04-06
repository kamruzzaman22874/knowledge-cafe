const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-slate-300 p-4 m-4 rounded-xl">
            <h3 className="text-xl font-semibold my-4">{title}</h3>
        </div>
    );
};

export default Bookmark;