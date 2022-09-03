import { Button } from '@mantine/core'
import { NextLink } from '@mantine/next'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Container, Text, Grid } from '@mantine/core'
import { View } from '../components/View'
import { HeaderMiddle as Header } from '../components/Header'
import { HeroImageRight as Hero } from '../components/Hero'
import { About } from '../components/About'
import { Product } from '../components/Product'
import { FooterSimple as Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      {/* <div id='#'></div> */}
      {/* <Header height="7.5vh" links={[{ label: 'Home', link: "#" }, { label: 'About', link: 'https://projectmarket861.wixsite.com/tech-preneur' }, { label:'Buy', link:'/shop'}]} /> */}
      <Header id='#' height="7.5vh" links={[{ label: 'Home', link: "#" }, { label: 'About', link: '#about' }, { label: 'Buy', link: '#buy' }]} />
      <Hero />

      <About id='about' />
      {/* <Container style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh'
      }}>
        <iframe src="https://projectmarket861.wixsite.com/tech-preneur" width='1270vw' height='100%' />
      </Container>
       */}
      <Product id='buy' />

      <Footer data={[
        {
          title: 'Quick Links', links: [
            { label: 'Your Orders', link: '' },
            { label: 'Your Account', link: '' },
            { label: 'Customers Service', link: '' },
            { label: 'Returns', link: '' },
            { label: 'Contact Us', link: 'https://joyful.tk/Contact.php' },
          ]
        },
        {
          title: 'Contact Us', descirption: [
            'Delhi Public School Jaipur, Ajmer Road Branch NH-8, Jaipur Ajmer Highway, 302026',
            '',
            'Phone : +91-829-056-5656, +91-9680006938',
            'For Enquiry : +91- 9116405333+91-9828982987',
            'E-mail : joyfulmerger@dpsjaipur.com'
          ]
        }
      ]} />

      {/* NOTE: Use this as fallback in case of emergency */}
    </>
  )
}

export default Home
