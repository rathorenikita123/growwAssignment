import { useRouter } from "next/router";
// import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from next/image

const OrderConfirmed = () => {
    const router = useRouter();

    const finishOrder = () => {
        localStorage.removeItem("cart");
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-start h-80 border rounded-lg w-full p-4 md:p-6 lg:p-8">
            <Image
                src="https://cdn.dribbble.com/users/1896815/screenshots/6807790/scooter_ride_v1_2.gif"
                alt="gif"
                className="rounded-full"
                // width={{ base: "180px", sm: "130px", md: "120px", lg: "200px" }}
            />
            <p className="mt-4 font-bold text-lg text-center">
                Your Order has Been Successfully Placed!
            </p>
            <p className="mt-4 text-center">
                Within moments you will receive a notification with the receipt of your
                purchase order.
            </p>
            <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                onClick={finishOrder}
            >
                Finish Order
                {/* <FaArrowRight className="ml-2" /> */}
            </button>
            <button
                className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
            >
                Download PDF Invoice
                {/* <FaArrowRight className="ml-2" /> */}
            </button>
        </div>
    );
};

export default OrderConfirmed;
