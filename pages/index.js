import React, { useState } from "react";
import Link from "next/link";
import { Autocomplete, Loader } from "@mantine/core";
import { Grid, Container } from "@mantine/core";
import axios from "axios";
import Layout from "../components/layout/Layout";
import Card from "../components/Card";

function Index() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = async (val) => {
    setLoading(true);
    const res = await axios.get(`/api/search?q=${val}`);

    setValue(val);
    setData([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(false);
      res.data.length > 0 &&
        setData(
          res.data.map((poke) => {
            return { name: poke.name.english, stats: poke.base };
          })
        );
    }
  };

  return (
    <Layout>
      <div style={{ margin: "2rem" }}>
        <Autocomplete
          value={value}
          data={data.map((dat) => dat.name)}
          onChange={handleChange}
          rightSection={loading ? <Loader size={16} /> : null}
          placeholder="Search for a pokemon"
        />
        <div style={{ margin: "2rem" }}></div>
        <Container my="md">
          <Grid>
            {data &&
              data.map((poke, index) => {
                return (
                  <Grid.Col xs={4} key={index}>
                    <Link href={`/pokemon/${poke.name}`}>
                      <a>
                        <Card
                          image={`/pokemon/${poke.name.toLowerCase()}.jpg`}
                          title={poke.name}
                          description="strong pokemon"
                          stats={poke.stats}
                        />
                      </a>
                    </Link>
                  </Grid.Col>
                );
              })}
          </Grid>
        </Container>
      </div>
    </Layout>
  );
}

export default Index;
