import pokemon from "../../pokemon.json";
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

export async function getStaticPaths() {
  return {
    paths: pokemon.map(({ name: { english } }) => ({
      params: {
        name: english,
      },
    })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      detail: pokemon.filter(
        ({ name: { english } }) => english === context.params.name
      )[0],
    }, // will be passed to the page component as props
  };
}

export default Detail;
