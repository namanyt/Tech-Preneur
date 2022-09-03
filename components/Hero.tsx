import { createStyles, Container, Title, Text, Button, Image } from '@mantine/core';
import { url } from 'inspector';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    height: '95vh',
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundRepeat: 'false',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(0, 0, 0, 0) 0%, #000 70%), url("sad farmer.png")',
    paddingTop: theme.spacing.xl * 5,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 20,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Image src='logo.png' style={{ position: 'absolute', width: '30em', marginTop: '-12em', marginLeft:'-5em' }} />
            {/* <Title className={classes.title} mt={'3em'}>
              <Text
                component="span"
                inherit
                // variant="gradient"
                // gradient={{ from: 'pink', to: 'yellow' }}
              >
                Joyful Merging
              </Text>{' '}
            </Title> */}

            <Text className={classes.description} pt={50} mt={'4em'} mb={'10vh'}>
              A solution to the problem of stubble farming
            </Text>

            <Link href='#about'>
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="lg"
                className={classes.control}
                mt={40}
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}