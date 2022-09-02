import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, Text, Button } from '@mantine/core';
import { clamp, useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds'
import { callbackify } from 'util';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
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

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
  height?: string;
  id: string;
}

export function HeaderMiddle({ links, height, id }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      // key={link.label}
      href={link.link}
      // className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        // event.preventDefault();
        // setActive(link.link);
      }}
    >
      {/* {link.label} */}
      <Button variant="subtle" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{link.label}</Button>
    </Link>
  ));

  return (
    <Header id={id} height={height ? height : '30vh'}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="md" className={classes.burger} />
        <Group className={classes.links} spacing={15}>
          {items}
        </Group>

        <Group spacing={5} position='center'>
          {/* <MantineLogo size={28} type={'full'} /> */}
          <Text className={classes.title}>Tech Preneur</Text>
        </Group>

        <Group spacing={15} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={30} stroke={1} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={30} stroke={1} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={30} stroke={1} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}