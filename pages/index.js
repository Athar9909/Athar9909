import Head from 'next/head'
import Layout from '../components/layout'
// import { config } from '../constants/config'
import Slider from 'react-slick'
import Image from 'next/image'
import {images, settings} from '../constants/carousel'
import HomeTopSection from '../components/homeTopSection'
import TitleAndDescription from '../components/titleAndDetailsSection'

export default function Home() {
  return (
    <Layout>
      <HomeTopSection/>
      <TitleAndDescription/>
      <section className={'z-0'}>
            <Slider {...settings}>
                {images.map((item) => (
                    <img key={item.imagePath} src={item.imagePath} alt={item.alt} style={{height:item.height}}/>
                ))}
            </Slider>
      </section>
    </Layout>
  )
}
