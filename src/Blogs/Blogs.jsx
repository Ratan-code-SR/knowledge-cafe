import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ data,addBookMark, readTimeSetFunction }) => {
    return (
        <div className='w-2/3 border-2 m-5 p-2'>
           {data.map((blog,index)=>  <Blog 
           key={index} 
           blog={blog}
           addBookMark={addBookMark}
           readTimeSetFunction={readTimeSetFunction}
          
           />)}
        </div>
    );
};

export default Blogs;