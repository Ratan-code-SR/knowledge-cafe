import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, addBookMark,readTimeSetFunction }) => {
    const { cover, id, author, author_img, time, hashtag, published_date, title } = blog;

    return (
        <div >

            <img className='my-3 rounded-lg' src={cover} alt="" />
            <div className='mt-4 flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className='text-3xl'>{author}</h1>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <h1 >{time} min read </h1>
                    <button onClick={() => {
                        addBookMark(title)
                    }} className='text-2xl '> <CiBookmark /></button>
                </div>
            </div>
            <h3 className='text-3xl'>{title}</h3>
            <h2>{hashtag}</h2>
            <button onClick={()=>readTimeSetFunction(time,id)} className='btn btn-error text-white'>Mark as read</button>
        </div>
    );
};

export default Blog;