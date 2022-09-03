import { useTheme } from "@emotion/react";
import { Container, createStyles, Grid, Title, Text, Button } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import { ArticleCardImage } from "./Article";

const useStyles = createStyles((theme) => ({
  Containter: {
    display: 'grid',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    height: '300vh',
    // paddingTop: '10em',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  Title: {
    textAlign: 'center',
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    fontSize: 48,
    marginTop: '1em',
    marginBottom: '1em',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },


  image: {
    filter: 'brightness(0.7)',
    // boxShadow: '0 0 10px rgba(0,0,0,1)'
  }
}
))

export function About({ id }: { id: string }) {
  const { classes } = useStyles();
  const [buttonValue, toggle] = useToggle(['blue', 'red']);

  return (
    <Container id={id} className={classes.Containter}>
      <Title className={classes.Title}>
        Articles
      </Title>

      <Container style={{ marginTop: '-20em' }}>
        <Grid>
          <Grid.Col span={4}>
            <ArticleCardImage
              image="article_1.webp"
              title="The Problem"
              category="1"
              button_text="Read More"
              description={
                <p>
                  Fire, stubble and smoke <br />
                  The problem of stubble farming after the harvesting season is one of the <br />
                  major reasons for the deteriorating air quality leading to alarming pollution levels in North India, <br />
                  especially in Delhi NCR
                </p>
              } />
          </Grid.Col>

          <Grid.Col span={4}>
            <ArticleCardImage
              image="article_2.webp"
              title="Conditions"
              category="2"
              button_text="Read More"
              description={
                <p>
                  Stubble burning in Punjab, Haryana, and Uttar Pradesh in north India has been cited <br />
                  as a major cause of air pollution in Delhi since 1980. Consequently, <br />
                  the government is considering the implementation of the 1,600 km long and 5 km wide ...
                </p>
              } />
          </Grid.Col>

          <Grid.Col span={4}>
            <ArticleCardImage
              image="article_3.png"
              title="Solutions"
              category="3"
              button_text="Read More"
              description={
                <p>
                  It was introduced in 2016, “The machine works well, no doubt. <br />
                  But what’s the use if it runs for only 25-30 days and has to be parked in my shed for the rest of the year?” <br />
                  asks Palwinder Singh...
                </p>
              } />
          </Grid.Col>
        </Grid>
      </Container>

      <Container style={{ marginTop: '-30vh', textAlign: 'center', marginBottom: '-50em' }}>
        <Title className={classes.Title} style={{ marginBottom: '2em' }}>
          Mission Statement
        </Title>

        <Text size={'xl'}>
          Stubble Manure – A Step Towards The Change
          <br />
          <br />
          Our mission is to bring the environmental change with a tinge of profit. Our mission is to solve the stubble farming issue and replace it with thresh instead going to manure and providing them with seeds in very nominal amount .
        </Text>
      </Container>

      <Container mt={'-10vh'} mb={'-20vh'}>
        <Title className={classes.Title} style={{ marginBottom: '2em' }}>
          Our Alternative
        </Title>

        <img src="our_alternative.webp" alt="" className={classes.image} style={{ position: 'absolute', width: '65vw', zIndex: '-1000' }} />
        <Text style={{ zIndex: '100', textAlign: 'center', fontWeight: 600, fontSize: 20, color: 'white', textShadow: '0 0 5px rgba(0,0,0,1)' }} pt={'3em'} pb={0} pl={'3em'} pr={'3em'}>
          Agriculture residues can have other uses, such as in particle board and biofuel, though these uses can still cause problems like erosion and nutrient loss. Spraying an enzyme, which decomposes the stubble into useful fertiliser, improves the soil, avoids air pollution and prevents carbon dioxide emissions.
        </Text>
      </Container>

      <Container mt={'20em'} mb={'5em'} style={{ height: '40vh', textAlign: 'center' }}>
        <Title className={classes.Title} style={{ fontSize: '30px' }}>Do you want to be the part of this Solution</Title>

        <Link href={'#buy'}>
          <Button style={{ width: '10em', height: '3em', fontSize: '2em' }} compact color={buttonValue} onClick={() => { toggle(); }}>
            {buttonValue == 'blue' ? 'Yes' : 'No'}
          </Button>
        </Link>

      </Container>

    </Container>
  );
}