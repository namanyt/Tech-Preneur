// import { createStyles, Container, Group, Anchor, Text } from '@mantine/core';
// import { MantineLogo } from '@mantine/ds';
// import Link from 'next/link';

// const useStyles = createStyles((theme) => ({
//   footer: {
//     marginTop: 120,
//     borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
//       }`,
//   },

//   inner: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: theme.spacing.xl,
//     paddingBottom: theme.spacing.xl,

//     [theme.fn.smallerThan('xs')]: {
//       flexDirection: 'column',
//     },
//   },

//   links: {
//     [theme.fn.smallerThan('xs')]: {
//       marginTop: theme.spacing.md,
//     },
//   },

//   title: {
//     fontSize: 'clamp(2vw, 1.5em, 2em)',
//     fontWeight: 700,
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
//     textTransform: 'uppercase',
//     lineHeight: 2,
//     fontFamily: 'Montserrat',
//   }

// }));

// interface FooterSimpleProps {
//   links: { link: string; label: string }[];
// }

// export function FooterSimple({ links }: FooterSimpleProps) {
//   const { classes } = useStyles();
//   const items = links.map((link) => (
//     <Link
//       key={link.label}
//       href={link.link}
//       onClick={() => {
//         window.scrollTo(0, 0);
//       }}
//     >
//       <Anchor className={classes.links} color="dimmed">{link.label}</Anchor>
//     </Link>
//   ));

//   return (
//     <div className={classes.footer}>
//       <Container className={classes.inner}>
//         <Text className={classes.title}>Tech Preneur</Text>
//         <Group className={classes.links}>{items}</Group>
//       </Container>
//     </div>
//   );
// }

import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  text: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links?: { label: string; link: string }[];
    descirption?: string[];
  }[];
  style?: any;
}

export function FooterSimple({ data, style }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links?.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    )) || group.descirption?.map((text, index) => [
      <Text
        key={index}
        className={classes.text}
        component="p"
      >
        {text}
      </Text>
    ])

    return (
      <div className={classes.wrapper} style={style} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text className={classes.title}>Tech Preneur</Text>
          <Text size="xs" color="dimmed" className={classes.description}>
            abcd
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 All rights reserved with DPS Jaipur
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

