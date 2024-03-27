// pages/index.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /cart when component mounts
    router.push("/cart");
  }, []);

  // Render nothing or a loading indicator since the user will be redirected
  return ;
};

export default IndexPage;
