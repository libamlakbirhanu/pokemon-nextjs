import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import DetailComp from "../../components/DetailComp";
import Layout from "../../components/layout/Layout";

function Detail() {
  const [detail, setDetail] = useState();
  const router = useRouter();
  const {
    query: { name },
  } = router;

  useEffect(() => {
    if (name) {
      const fetchData = async (val) => {
        const res = await axios.get(`/api/pokemon?name=${name}`);
        console.log(res.data);

        setDetail(res.data);
      };

      fetchData();
    }
  }, [name]);
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

export default Detail;
