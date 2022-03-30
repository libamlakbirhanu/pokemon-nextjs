import React from 'react';
import { createStyles, Card, Image, Text, Group, RingProgress } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const CardWithStats = ({ image, title, description, stats }) => {
  const { classes } = useStyles();

  const items = (
      <>
    <div key={Math.random()}>
      <Text weight={500} size="sm">
        Attack: {stats.Attack}
      </Text>
    </div>
    <div key={Math.random()}>
      <Text weight={500} size="sm">
        Defense: {stats.Defense}
      </Text>
    </div>
    </>
  );

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={300} style={{maxHeight: '300px'}} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {title}
        </Text>
        <Group spacing={5}>
          <Text size="xs" color="dimmed">
            80% completed
          </Text>
          <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
        </Group>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {description}
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}

export default CardWithStats;