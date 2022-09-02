import { createStyles, Paper, Text, Title, Button } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: '70vh',
    width: 'clamp(15vw, 300, 400)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), ',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.colors.white,
    lineHeight: 1.2,
    fontSize: 'clamp(3.5vw, 2em, 2em)',
    marginTop: theme.spacing.xs,
    opacity: 1,
    textShadow: '0 0 10px rgba(0, 0, 0, 1)',
  },

  description: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    color: theme.colors.gray[1],
    opacity: 1,
    marginTop: theme.spacing.xs,
    fontSize: 'clamp(1.3vw, 1.3vw, 1.5em)',
    fontWeight: 500,
    textShadow: '0 0 20px rgba(0, 0, 0, 2)',
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  category: string;
  description: any;
  button_text: string;
}

export function ArticleCardImage({ image, title, category, description, button_text }: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ background: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <p className={classes.description}>
          {description}
        </p>
      </div>
      <Link href={`/articles/${category}`}>
        <Button variant="white" color="dark">
          {button_text}
        </Button>
      </Link>
    </Paper>
  );
}
