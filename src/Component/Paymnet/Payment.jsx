import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Page/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"PAYMENT"} ></SectionTitle>
            <div>
                <Elements stripe={stripePromise} >
                         <CheckoutForm></CheckoutForm>   
                </Elements>
            </div>
        </div>
    );
};

export default Payment;