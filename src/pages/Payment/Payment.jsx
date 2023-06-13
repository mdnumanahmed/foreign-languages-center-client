import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [] } = useQuery(["selectClass"], async () => {
    const res = await axiosSecure.get(`/savedClass?id=${id}`);
    return res.data;
  });
  const price = selectedClasses.price;

  return (
    <div>
      <h2 className="text-3xl">Enroll With: {selectedClasses.name}</h2>

      <Elements stripe={stripePromise}>
        <PaymentForm
          price={price}
          selectedClasses={selectedClasses}
          id={id}
        ></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
