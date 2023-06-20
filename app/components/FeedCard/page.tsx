import React from 'react'
import Image from 'next/image';
import { BiMessageRounded } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { HiOutlineUpload } from "react-icons/hi";


const FeedCard: React.FC = () => {
    return (
        <div>
            <div className=' border border-r-0 border-l-0 border-gray-700 border-opacity-85 p-4 hover:bg-slate-950 cursor-pointer transition-all'>

                <div className='grid grid-cols-12 gap-2'>
                    <div className='col-span-1'>
                        <Image src="https://avatars.githubusercontent.com/u/44976328?v=4" alt='user-image' height={50} width={50} />
                    </div>
                    <div className='col-span-11'>
                        <h4 className='font-bold'>Piyush garg</h4>
                            <p className='p-1 pb-0 text-neutral-200'>I discovered two magical spells from Harry Potter during my vacation in LA that can assist you in securing remote jobs.</p>
                        <div className='flex  justify-between mt-5 text-xl text-neutral-500 w-[85%]'>
                            <div>
                                <BiMessageRounded />
                            </div>
                            <div>
                                <FaRetweet />
                            </div>
                            <div>
                                <AiOutlineHeart />
                            </div>
                            <div>
                                <BiBarChart />
                            </div>
                            <div>
                                <HiOutlineUpload />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FeedCard;