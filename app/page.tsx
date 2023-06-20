import Image from 'next/image'

import { BsTwitter } from 'react-icons/bs'
import { BiHomeCircle } from 'react-icons/bi'
import { FiSearch } from 'react-icons/Fi'
import { VscBell } from 'react-icons/Vsc'
import {CiMail} from 'react-icons/Ci'
import {CgList} from 'react-icons/Cg'
import {BsBookmark} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import {BsPerson} from 'react-icons/bs'
import {TbDotsCircleHorizontal} from 'react-icons/tb'
import FeedCard from './components/FeedCard/page'



interface TwitterSlidebarButton {
  title: string,
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSlidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <FiSearch />
  },
  {
    title: 'Bell',
    icon: <VscBell />
  },
  {
    title: 'Message',
    icon: <CiMail />
  },
  {
    title: 'List',
    icon: <CgList />
  },
  {
    title: 'Bookmark',
    icon: <BsBookmark />
  },
  {
    title: 'Verified',
    icon: <GoVerified />
  },
  {
    title: 'Profile',
    icon: <BsPerson />
  },
  {
    title: 'More',
    icon: <TbDotsCircleHorizontal />
  }

]


export default function Home() {
  return (
    <div>
      <div className='px-52 grid grid-cols-12 h-screen w-screen'>

        <div className='col-span-3 pt-1 pr-3'>
          <div className=' justify-start text-2xl h-fit hover:bg-gray-900 rounded-full p-3 cursor-pointer w-fit'>
            <BsTwitter />
          </div>
          <div className='mt-1 text-xl pr-4'>
            <ul>
              {sidebarMenuItems.map(item => <li className='flex justify-start items-center gap-4 hover:bg-gray-900 rounded-full px-5 py-2 w-fit cursor-pointer mt-2'
                key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <div className='mt-4 px-2'>
            <button className='bg-[#1d9bf0] p-3 font-semibold rounded-full ml-0 text-xl w-11/12 '>Tweet</button>
            </div>
          </div>
        </div>
        <div className='col-span-6 h-screen overflow-y-scroll border-r-[1px] border-l-[1px] border-gray-700 border-opacity-80'>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}
