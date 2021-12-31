import { useState } from 'react'
import styles from './layout.module.css'
import Head from 'next/head'
import TypeProps from 'prop-types'
import { Ionicons } from 'react-web-vector-icons'
import Link from 'next/link'
import { socialMediaDetails } from '../constants/socialMediaDetails'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { headerLinks,  } from '../constants/headerLinks'
import { config } from '../constants/config'
import Image from 'next/image'


export default function Layout ({ children }) {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
        <div className={styles.container}>
            <Parallax scrolling={true}>
                <Head>
                    <meta charSet="utf-8"/>
                        <link rel="shortcut icon" href="new.ico"/>
                        <meta name="viewport"
                          content="width=device-width, initial-scale=1"/>
                        <meta name="robots" content="index, follow"/>
                        <meta name="theme-color" content="#000000"/>
                        <meta name="" content={config.metaTitle}/>
                        <meta name="description"
                              content={config.metaDescription}/>
                        <meta property="og:type" content="website"/>
                        <meta property="og:url" content={config.domain}/>
                        <meta property="og:title" content={config.metaTitle}/>
                        <meta property="og:description"
                              content={config.metaDescription}/>
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content={config.domain}/>
                        <meta property="twitter:title" content={config.metaTitle}/>
                        <meta property="twitter:description"
                              content={config.metaDescription}/>
                        <link rel="apple-touch-icon" href="new.ico"/>
                        <link rel="manifest" href="manifest.json"/>
                    <meta name="google-site-verification" content={config.siteVerificationCode}/>
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            config.siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={config.metaTitle}/>
                    <link rel="icon" href="favicon.svg"/>
                    <meta name="twitter:card" content="summary_large_image" />
                    <title>{config.siteTitle}</title>
                </Head>
                <header>
                    <ParallaxLayer offset={0}>
                        <div className={'shadow-md'}>
                            <div
                                className={`flex flex-row items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-around py-2  ${styles.upperHeader}`}>
                                {config?.headerPhoneNumber&& false && <div
                                    className={'text-white transition duration-500 ease-in-out transform hover:scale-110'}>
                                    <Ionicons name={'ios-call'} color={'#fff'} size={20}/>
                                    {' '}
                                    {config?.headerPhoneNumber}
                                </div>}
                                <div>
                                    {socialMediaDetails.map(Item => (
                                        <a
                                            key={Item.link}
                                            rel="noreferrer"
                                            href={Item.link}
                                            target={'_blank'}
                                            className={'mx-2'}
                                            style={{ textDecoration: 'none' }}
                                        ><Ionicons
                                            name={Item.icon}
                                            color={Item.color}
                                            size={Item.size}
                                            key={Item.icon}
                                        />
                                        </a>))}
                                </div>
                            </div>
                            <div
                                className={`${styles.learnGray} flex flex-row  justify-center items-start lg:items-center xl:items-center 2xl:items-center p-1`}>
                                <Link href={'/'}>
                                    <img
                                        width={config.logoWidth}
                                        src={config.logo}
                                        className={`${styles.headerHomeImage} mx-3`}
                                        alt={'logo'}
                                    />
                                </Link>
                                {/* <div className={'flex flex-row items-center justify-center'}> */}
                                    {/* <div className={'hidden lg:flex flex-row items-center justify-center'}>
                                        {headerLinks.map(({ link, title }) => (
                                            <div className={'m-2 flex flex-row items-center'} key={link}>
                                                <Link href={`${link}`}>
                                                    <a className={`font-medium text-gray-700 
                                                colorBlue transition duration-500 
                                                ease-in-out transform 
                                                hover:scale-110`}>{title}</a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div> */}
                                    {/* <div className={'z-50 animate flex lg:hidden xl:hidden 2xl:hidden' +
                                    ' justify-center items-end flex-col'}>
                                        <div onClick={() => {
                                          setMenuVisible(!menuVisible)
                                        }} className={'mx-2'}>
                                            <Ionicons name={'ios-menu'} size={25}/>
                                        </div>
                                        <div className={`z-50 ${menuVisible ? '' : 'hidden'}`}>
                                            {headerLinks.map(({ link, title }) => (
                                                <div className={`m-2 flex flex-col items-end 
                                                justify-center`}
                                                     key={link}>
                                                    <Link href={`${link}`}>
                                                        <a className={`font-medium text-gray-700 
                                                colorBlue transition duration-500 
                                                ease-in-out transform 
                                                hover:scale-110`}>{title}</a>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </ParallaxLayer>
                </header>
                {/* <div className={`${styles.upperSpace} ${menuVisible ? '' : 'hidden'}`}/> */}
                <div className={`${styles.upperSpace}`}/>
                <main className={`z-30 ${styles.childContainer}`}>
                    {children}
                </main>
                <br/>
                <div className={`${styles.learnGray}`}>
                    <div className={'flex flex-col text-center justify-between items-center p-2 '}>
                        <img
                            src={config.footerLogo}
                            className={`${styles.headerHomeImage} mx-3`}
                            alt={'footerLogo'}
                            width={config.footerLogoWidth}
                        />
                        <text>
                            {config.footerTag}
                        </text>
                    </div>
                </div>
            </Parallax>
        </div>
  )
}
Layout.propTypes = {
  children: TypeProps.any
}