import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/cart");
  }, []);

  return;
};

export default IndexPage;
