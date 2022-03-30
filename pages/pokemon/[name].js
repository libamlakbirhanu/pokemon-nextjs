import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import DetailComp from "../../components/DetailComp";
import Layout from "../../components/layout/Layout";

function Detail({ detail }) {
  return (
    <Layout>
      <div>
        {detail && (
          <DetailComp
            image={`${detail.name.english.toLowerCase()}.jpg`}
            avatar={`${detail.name.english.toLowerCase()}.jpg`}
            name={detail.name.english}
            job={detail.type.join(", ")}
            stats={detail.base}
          />
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(`http://localhost:3000/api/pokemon?name=${context.params.name}`);

  return {
    props: {
      detail: res.data,
    }, // will be passed to the page component as props
  };
}

export default Detail;
