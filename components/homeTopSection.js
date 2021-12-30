import Image from 'next/image'
import { topSectionConfig } from '../constants/homeTopSection'


export default function HomeTopSection() {
  return (
      <div className='relative'>
        <Image
          alt='top-section'
          src={topSectionConfig.imagePath}
          className={topSectionConfig.imageClass}
           layout='responsive' 
        />
        <text className='absolute text-center text-6xl left-1/4 text-white top-1/2 sm: text-xl md:text-6xl '>
            Connection is evolving<br/> and so are we.
        </text>
      </div>
    )
}
