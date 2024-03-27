import { useRouter } from "next/router";
import { useState } from "react";

interface UpiInfo {
    upiId: string;
    }


const UpiPayment: React.FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<UpiInfo>>({});
  const [formData, setFormData] = useState<UpiInfo>({
    upiId: "",
  });

  const handleUpiPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorsList: string[] = [];
    for (const [Key, value] of Object.entries(errors)) {
      if (value != undefined) {
        errorsList.push(value);
      }
    }
    if (errorsList.length > 0 || !formData.upiId) {
      console.log(errorsList);
    } else {
      // Redirect to confirmation page with random status
      router.push(`/confirmation?status=${getRandomValue()}`);
    }
  };

  const validateUpiId = (upiId: string): boolean => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(upiId);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to generate random status (success/fail)
  const getRandomValue = (): string => {
    return Math.random() < 0.5 ? "success" : "fail";
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="py-4 px-6">
        <h2 className="text-center text-2xl font-semibold mb-3">
          Secure UPI payment info
        </h2>
        <form onSubmit={handleUpiPayment}>
          <label htmlFor="upiId" className="block text-sm font-semibold mb-1">
            UPI ID
          </label>
          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleInputChange}
            placeholder="example@upi"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
          />
          {errors.upiId && (
            <p className="text-red-500 text-xs mt-1">{errors.upiId}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg"
          >
            Payment
          </button>
        </form>
      </div>
    </div>
  );

}

export default UpiPayment;
