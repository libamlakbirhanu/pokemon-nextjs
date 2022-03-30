import React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

import styles from "./Navbar.module.scss";

function Navbar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className={styles.nav}>
      <h2>POKEMON</h2>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </div>
  );
}

export default Navbar;
