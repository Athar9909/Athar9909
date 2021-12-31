import * as React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { config } from '../constants/config'
import Slider from 'react-slick'
import Image from 'next/image'
import {images, settings, ImageAndDescriptionInfo} from '../constants/carousel'
import HomeTopSection from '../components/homeTopSection'
import TitleAndDescription from '../components/titleAndDetailsSection'
import ImageAndDescription from '../components/imageAndDescription'
import ImageAndDescriptionCustom from '../components/imageAndDescriptionCustom'

export default function Home() {
  const [isVerify,setIsVerify] = React.useState(false);
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  return isVerify?(
    <Layout>
      <HomeTopSection/>
     <section className={'z-0'}>
            <Slider {...settings}>
                {images.map((item) => (
                    <img key={item.imagePath} desc={item.desc} heading={item.heading} src={item.imagePath} alt={item.alt} style={{height:item.height}}/>
                ))}
            </Slider>
      </section>
      <TitleAndDescription/>
      {ImageAndDescriptionInfo.map((item,i) => i === 6?(<div className='bg-gray-200'
                    key={item.imagePath} 
                    >
                              <ImageAndDescriptionCustom
                                image={item.imagePath} 
                                alt={item.alt}
                                desc={item.desc}
                                heading={item.heading} 
                                />
                                </div>):(
        <div className='bg-gray-200'
        key={item.imagePath} 
        >
                  <ImageAndDescription
                    image={item.imagePath} 
                    alt={item.alt}
                    desc={item.desc}
                    heading={item.heading} 
                    />
                    </div>
                ))}
    
    </Layout>

  ):<div className='img-bg-1'>
    <div className='flex flex-col justify-center items-center h-screen'>
      <div>
      <input
        name='name'
        className='p-2 shadow border rounded'
        placeholder='Enter Your Nick Name'
        onChange={(e)=>{
          setValue(e.target.value)
        }}
      />
      <button
      className='bg-indigo-500 text-white rounded m-2 p-2'
      onClick={()=>{
      if(config.authNames?.includes(value?.toLocaleLowerCase())){
         setIsVerify(true);
         setError(false);
        }
        else{
          setError(true)
        }
      }}>
        Enter
      </button>
      </div>
      <br/>
      {error && <div className='mx-4 px-2 bg-white rounded'>
        <text className='text-red-500 font-semibold p-0 m-0'>
          This site is specifically made for Lubna, only she have access to content ahead!!!
        </text>
      </div>}
    </div>
      
  </div>
}
