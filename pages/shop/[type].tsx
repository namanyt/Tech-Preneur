// Create Next Page
import React from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { Button, Container, createStyles, Title, Text, Grid } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { VisitorType } from '../../utils/Shop'
import { IconArrowsCross, IconHeartHandshake, IconLeaf, IconLeafOff, IconArrowBack, IconMan } from '@tabler/icons'
import { FeaturesCard } from '../../components/ProductCards'

const useStyle = createStyles((theme) => ({
  container: {
    margin: 0,
    width: '95vw',
    borderTop: `1px solid ${theme.colorScheme === "dark"
      ? theme.colors.dark[5]
      : theme.colors.gray[2]
      }`,
  },
  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    width: '95vw',
    fontSize: 48,
    marginTop: '.5em',
    marginBottom: '1em',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },
  button: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: -10
    // marginLeft: 'calc(50% - 461px + 400px)',
  }
}))

interface ItemListing {
  name: string
  subtitle: string
  offer: string
  price: string
  image: string
  data: {
    label: string
    icon: any
  }[]
  button_text: string
}

const Shop: NextPage = () => {
  const router = useRouter()
  const { type } = router.query
  const { classes } = useStyle()

  const data: ItemListing[] = [
    {
      name: 'Paddy Stubble with Wooden Beads',
      subtitle: 'This placemat is a glorious marriage of braids and beads. Handcrafted from repurposed Paddy Stubble, this eco-friendly placemat makes for a beautiful addition to your dining table, countertops or office desks!',
      price: '₹699.00',
      image: 'product_1.webp',
      data: [
        {
          label: 'Made of repurposed Paddy stubble, made by hand',
          icon: IconHeartHandshake,
        },
        {
          label: 'Size: 33 x 33 cm',
          icon: IconArrowsCross
        }
      ],
      button_text: 'Buy Now',
      offer: ''
    }, {
      name: 'Coiled Paddy with Black Raffia',
      subtitle: 'Refined, classy and elegant, this placemat made from recycled paddy stubble and embellished with black raffia edges is perfect for special occasions or everyday use. ',
      price: '₹649.00',
      image: 'product_2.webp',
      data: [
        {
          label: 'Made of repurposed Paddy stubble, made by hand',
          icon: IconHeartHandshake,
        },
        {
          label: 'Size: 33 x 33 cm',
          icon: IconArrowsCross
        }
      ],
      button_text: 'Buy Now',
      offer: ''
    }, {
      name: 'Jute with Raffia Embroidery',
      subtitle: 'Made of Paddy Stubble ensuring your dÃcor brings sustainability to your home as well as our planet',
      price: '₹499.00',
      image: 'product_3.webp',
      data: [
        {
          label: 'Made of repurposed Paddy stubble, made by hand',
          icon: IconHeartHandshake,
        },
        {
          label: 'Size: 39 x 37.79 cm',
          icon: IconArrowsCross
        }
      ],
      button_text: 'Buy Now',
      offer: ''
    }, {
      name: 'Crochet with Raffia Fringes',
      subtitle: 'Handcrafted from repurposed Paddy Stubble, this eco-friendly placemat makes for a beautiful addition to your dining table, countertops or office desks.',
      price: '₹549.00',
      image: 'product_4.webp',
      data: [
        {
          label: 'Made of repurposed Paddy stubble, made by hand',
          icon: IconHeartHandshake,
        },
        {
          label: 'Size: 33 x 33 cm',
          icon: IconArrowsCross
        }
      ],
      button_text: 'Buy Now',
      offer: ''
    }
  ]

  const CElements = data.map((value, index) => {
    return <Grid.Col span={3}>
      <FeaturesCard
        name={value.name}
        subtitle={value.subtitle}
        offer={value.offer}
        price={value.price}
        image={`../${value.image}`}
        button_text={value.button_text}
        data={value.data} />
    </Grid.Col>
  })

  let FElements;

  return (
    <Container className={classes.container}>
      <Link href={'/'}><Button variant='subtle' className={classes.button}><IconArrowBack width={'1.2em'} style={{marginRight:'.5em'}} /> Back To Home</Button></Link>
      
      {type == VisitorType.Customer && (
        <>
          <Title className={classes.title}>Customer</Title>

          <Grid style={{ width: 'calc(95vw - 8em)' }} ml={'5em'}>
            {CElements}
          </Grid>

          <Button variant="subtle" ml={'40em'} size="md">
            Load more
          </Button> 
        </>
      )}


      {type == VisitorType.Farmer && (
        <>
          <Title className={classes.title}>Farmer</Title>

          <Grid style={{ width: 'calc(95vw - 8em)' }} ml={'5em'}>
            {FElements}

            <Grid.Col span={4}>
              <FeaturesCard
                name='Super Seeder'
                subtitle="Super Seeder is a combination of Rotary Tiller & Seed Planter with press wheels Excellet for removing stubble."
                offer="Per Hectare"
                price="₹2000.00"
                image="../super_seeder.jpg"
                imageWidth={'20em'}
                button_text="Hire Now"
                data={[
                  { label: 'Eco Friendly', icon: IconLeaf },
                  { label: '100% Waste used for the mats', icon: IconLeafOff },
                  {label:'Helper will be sent', icon: IconMan }
                ]} />
            </Grid.Col>
            <Grid.Col style={{position:'absolute'}} mt={'4em'} ml={'calc(50em - 1px)'}>
              <Text size={33} weight={500} style={{opacity:.6}}>Demo Video</Text>
            </Grid.Col>
            <Grid.Col style={{position: 'absolute'}} ml={'40em'} mt={'10em'}>
              <iframe src="https://cdn.ciderboi.xyz/super_seeder_video.mp4" style={{border: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 1)', position: 'absolute'}} width={'500em'} height='235em' />
            </Grid.Col>
          </Grid>
        </>
      )}
    </Container>
  )
}

export default Shop;  