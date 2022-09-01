import { createStyles, Container, Group, Anchor, Text } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },

  title: {
    fontSize: 'clamp(2vw, 1.5em, 2em)',
    fontWeight: 700,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    textTransform: 'uppercase',
    lineHeight: 2,
    fontFamily: 'Montserrat',
  }

}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Anchor className={classes.links} color="dimmed">{link.label}</Anchor>
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text className={classes.title}>Tech Preneur</Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
