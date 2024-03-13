import Mark from "../Mark/Mark";


const Bookmarks = ({ bookMark,readTime }) => {
    // console.log(bookMark);
    return (
        <div className='md:w-1/3'>
            <h1 className=" bg-[#efecfd] p-2 rounded-md text-blue-500 text-2xl font-bold">Spent time on read : {readTime}</h1>
            <div className="bg-[#f3f3f3] mt-4 p-2 ">
                <h1 className="text-2xl my-2">Bookmarked Blogs : {bookMark.length}</h1>
                <div className="flex flex-col gap-2">

                    {
                        bookMark.map((markTitle,index) => <Mark key={index} markTitle={markTitle} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Bookmarks;