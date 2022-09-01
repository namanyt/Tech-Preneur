import { Container, createStyles, Grid, Title } from "@mantine/core";
import { ArticleCardImage } from "./Article";

const useStyles = createStyles((theme) => ({
  Containter: {
    display: 'grid',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    height: '100vh',
    paddingTop: '10em',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },

  },

  Title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,
    marginTop: '-100px',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

}
))

export function About() {
  const { classes } = useStyles();

  return (
    <Container className={classes.Containter}>
      <Title className={classes.Title}>
        Articles
      </Title>

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
            title="Stories"
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
  );
}