import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { IoReload } from "react-icons/io5";

const OrderFailed = () => {
  const router = useRouter();

  const handleFailure = () => {
    router.push("/payment");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/orderFail.png"
        alt="orderFail"
        className="rounded-full"
        width={500}
        height={500}
      />
      <h2 className="mt-4 font-bold text-lg text-center text-red-500">
        Transaction Failed
      </h2>
      <p className="mt-4 text-center">
        Your payment was not successfully processed. Please try again or contact
        our Customer Care.
      </p>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center"
        onClick={handleFailure}
      >
        Try again
        <IoReload className="ml-2" />
      </button>
    </div>
  );
};

export default OrderFailed;
