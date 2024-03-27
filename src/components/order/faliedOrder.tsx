import { useRouter } from "next/router";
// import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const OrderFailed = () => {
    const router = useRouter();

    const handleFailure = () => {
        router.push("/payment");
    };

    return (
        <div className="flex flex-col items-center justify-center h-80 border rounded-lg w-full p-4 md:p-6 lg:p-8">
            <Image
                src="https://jumeirahroyal.com/wp-content/uploads/d7e50cb89c.png"
                alt="gif"
                className="rounded-full"
                width={200}
                height={200}
            />
            <p className="mt-4 font-bold text-lg text-center text-red-500">
                Transaction Failed
            </p>
            <p className="mt-4 text-center">
                Your payment was not successfully processed. Please try again or contact
                our Customer Care.
            </p>
            <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                onClick={handleFailure}
            >
                Back to Payments
                {/* <FaArrowRight className="ml-2" /> */}
            </button>
        </div>
    );
};

export default OrderFailed;
