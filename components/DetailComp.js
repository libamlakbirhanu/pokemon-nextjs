import React from "react";
import { createStyles, Card, Avatar, Text, Group, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

const UserCardImage = ({ image, avatar, name, job, stats }) => {
  const { classes, theme } = useStyles();

  const items = Object.keys(stats).map((stat) => (
    <div key={Math.random()}>
      <Text align="center" size="lg" weight={500}>
        {stats[stat]}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section
        sx={{
          backgroundImage: `url(${image})`,
          height: 300,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%"
        }}
      />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
    </Card>
  );
};

export default UserCardImage;
