import { Card, Container, createStyles, Group, Text, Center, Grid, Title } from "@mantine/core";
import { IconArrowsCross, IconEye, IconLeaf, IconMessageCircle } from "@tabler/icons";
import image from "next/image";
import { FeaturesCard } from "./ProductCards";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      height: 280,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    author: {
      color: theme.colors.dark[2],
    },

    Container: {
      height: '70vh',
      marginTop: '10vh',
      [theme.fn.smallerThan("sm")]: {
        justifyContent: "flex-start",
      },
    },

    Title: {
      color: theme.white,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      lineHeight: 1.05,
      maxWidth: '100%',
      fontSize: 48,
      marginTop: "-50px",
      marginBottom: '3em',
      textAlign: 'center',

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        fontSize: 34,
        lineHeight: 1.15,
      },
    },
  };
});

export function Product({ id }: any) {
  const { classes, theme } = useStyles();

  // image, title, author, views, comments, link
  let data = [
    {
      image: 'customers.jpg',
      title: 'I\'m a Consumer',
      subtitle: 'See our products made from 100% recycled materials',
      link: '/shop/customer',
    },
    {
      image: 'farmer.webp',
      title: 'I\'m a Farmer',
      subtitle: 'See our service to make your harvesting easier',
      link: '/shop/farmer'
    }
  ]



  return (
    <Container id={id} className={classes.Container}>
      <Title className={classes.Title}>
        Product Lines
      </Title>

      <Grid>
        <Grid.Col span={5}>
          <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
            href={data[0].link}
            target="_blank"
          >
            <div className={classes.image} style={{ backgroundImage: `url(${data[0].image})` }} />
            <div className={classes.overlay} />

            <div className={classes.content}>
              <div>
                <Text size="lg" className={classes.title} weight={500}>
                  {data[0].title}
                </Text>

                <Group position="apart" spacing="xs">
                  <Text size="sm" className={classes.author}>
                    {data[0].subtitle}
                  </Text>
                </Group>
              </div>
            </div>
          </Card>
        </Grid.Col>

        <Grid.Col span={5} ml={150}>
          <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
            href={data[1].link}
            target="_blank"
          >
            <div className={classes.image} style={{ backgroundImage: `url(${data[1].image})` }} />
            <div className={classes.overlay} />

            <div className={classes.content}>
              <div>
                <Text size="lg" className={classes.title} weight={500}>
                  {data[1].title}
                </Text>

                <Group position="apart" spacing="xs">
                  <Text size="sm" className={classes.author}>
                    {data[1].subtitle}
                  </Text>
                </Group>
              </div>
            </div>
          </Card>
        </Grid.Col>
      </Grid >
    </Container >
  )
}