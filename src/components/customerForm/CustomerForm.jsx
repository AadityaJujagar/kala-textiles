import { useDispatch } from "react-redux";
import { clearCart } from "../../app/Slices/CartSlice";
import "./customerform.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const CustomerForm = ({ setOrderPlaced }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const cart = useSelector((state) => state.cart);
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");

  const generateOtp = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const sendOtpEmail = () => {
    if (!email) {
      alert("Please enter your email before sending OTP.");
      return;
    }

    const otpCode = generateOtp();
    setOtp(otpCode);

    const templateParams = {
      customer_email: email,
      otp_code: otpCode,
    };

    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_OTP_TEMPLATE_ID}`,
        templateParams,
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then(
        () => {
          toast("✅ OTP has been sent to your email!", {
            style: {
              padding: "8px 16px",
              fontSize: "14px",
              overflow: "hidden",
              background: "black",
              fontWeight: "600",
              color: "white",
            },
          });
          setIsOtpSent(true);
        },
        (error) => {
          console.error("Failed to send OTP:", error.text);
          toast("❌ Failed to send OTP. Please try again.", {
            style: {
              padding: "8px 16px",
              fontSize: "14px",
              overflow: "hidden",
              background: "black",
              fontWeight: "600",
              color: "white",
            },
          });
        }
      );
  };

  const verifyOtp = () => {
    if (userOtp === otp) {
      alert("OTP Verified Successfully!");
      setIsVerified(true);
      setIsOtpSent(false);
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const sendOrderEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      customer_email: email,
      customer_name: e.target.name.value,
      customer_phone: e.target.phone.value,
      customer_address: e.target.address.value,
      cart_items: cart
        .map(
          (item) =>
            `${item.header}: ${100 * item.quantity100x + item.quantity1x}`
        )
        .join(", "),
    };

    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID}`,
        templateParams,
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then(
        () => {
          toast("✅ Order placed successfully!", {
            style: {
              padding: "8px 16px",
              fontSize: "14px",
              overflow: "hidden",
              background: "black",
              fontWeight: "600",
              color: "white",
            },
          });
          dispatch(clearCart());
          setOrderPlaced(true);
        },
        (error) => {
          console.error("Failed to place order:", error.text);
          toast("❌ Failed to place the order. Please try again.", {
            style: {
              padding: "8px 16px",
              fontSize: "14px",
              overflow: "hidden",
              background: "black",
              fontWeight: "600",
              color: "white",
            },
          });
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendOrderEmail}>
      {isVerified ? (
        <span>Place Your Order</span>
      ) : (
        <span>Verify your email address to place an order</span>
      )}
      {isVerified && (
        <label>
          <p>
            Full Name<sup>*</sup>
          </p>
          <input type="text" name="name" required />
        </label>
      )}
      <label>
        <p>
          Email<sup>*</sup>
        </p>
        <input
          type="email"
          name="email"
          required
          disabled={isOtpSent || isVerified}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isVerified && !isOtpSent && (
          <button type="button" onClick={sendOtpEmail}>
            Send OTP
          </button>
        )}
      </label>
      {isOtpSent && !isVerified && (
        <label>
          <p>Enter OTP</p>
          <div className="otpSection">
            <input
              type="text"
              value={userOtp}
              onChange={(e) => setUserOtp(e.target.value)}
            />
            <button
              type="button"
              onClick={verifyOtp}
              disabled={userOtp.length !== 6}
            >
              Verify
            </button>
          </div>
        </label>
      )}
      {isVerified && (
        <>
          <label>
            <p>
              Phone Number<sup>*</sup>
            </p>
            <input type="tel" name="phone" required />
          </label>
          <label>
            <p>Address</p>
            <textarea name="address"></textarea>
          </label>
          <div className="cartSummary">
            <h3>Cart Summary:</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.header}:</strong>
                  {100 * item.quantity100x + item.quantity1x} units
                </li>
              ))}
            </ul>
          </div>
          <button type="submit">Place Order</button>
        </>
      )}
    </form>
  );
};
