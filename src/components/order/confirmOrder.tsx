import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from next/image

const OrderConfirmed = () => {
  const router = useRouter();

  const finishOrder = () => {
    localStorage.removeItem("cartItems");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <Image
        src="/orderConfirm.png"
        alt="orderConfirm"
        className="rounded-full"
        width={500}
        height={500}
      />
      <h2 className="mt-4 font-bold text-lg text-center">
        Your Order has Been Successfully Placed!
      </h2>
      <p className="mt-4 text-center">
        Within moments you will receive a notification with the receipt of your
        purchase order.
      </p>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
        onClick={finishOrder}
      >
        Finish Order
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default OrderConfirmed;
