import { useRouter } from "next/router";
import { useState } from "react";
import Toast from "../Toast/Toast";
import { UpiInfo } from "../interfaces/interfaces";

const UpiPayment: React.FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<UpiInfo>>({});
  const [formData, setFormData] = useState<UpiInfo>({
    upiId: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleUpiPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorsList: string[] = [];

    let isEmptyField = false;

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        isEmptyField = true;
        break;
      }
    }

    if (isEmptyField) {
      setToastMessage("Please fill in all fields");
      setShowToast(true);
      return;
    }
    for (const [Key, value] of Object.entries(errors)) {
      if (value != undefined) {
        errorsList.push(value);
      }
    }
    if (errorsList.length > 0 || !formData.upiId) {
      console.log(errorsList);
    } else {
      router.push("/order-status");
    }
  };

  const validateUpiId = (
    fieldName: string,
    value: string
  ): string | undefined => {
    if (fieldName === "upiId") {
      if (value.length === 0) {
        return "UPI ID is required";
      } else if (!/^[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$/.test(value)) {
        console.log(value, "value");
        return "Invalid UPI ID format";
      }
    }
    return undefined;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateUpiId(name, value),
    }));
  };

  return (
    <>
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <div className="mx-auto bg-white shadow-lg rounded-lg w-[32rem]">
        <form className="py-4 px-6" onSubmit={handleUpiPayment}>
          <h2 className="text-center text-lg font-semibold mb-3">
            Pay using Upi
          </h2>
          <div className="mb-8">
            <label htmlFor="upiId" className="block text-sm font-semibold mb-1">
              UPI ID
            </label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleInputChange}
              placeholder="example@upi"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
            />
            {errors.upiId && (
              <p className="text-red-500 text-xs mt-1">{errors.upiId}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md w-full"
          >
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
};

export default UpiPayment;
