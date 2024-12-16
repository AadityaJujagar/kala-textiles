import KalatexLogo from "/assets/kalatex-logo.png";
import "./footer.css";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PlaceIcon from "@mui/icons-material/Place";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-content">
        <div className="foot-col">
          <NavLink to="/">
            <img src={KalatexLogo} className="foot-logo" alt="" />
          </NavLink>
          <span>
            Wrap yourself in the finest quality towels, <br />
            where every detail is designed for <br />
            your ultimate comfort.
          </span>
        </div>
        <div className="foot-col">
          <p>Quick Navigate</p>
          <div className="foot-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="foot-col">
          <p>Get In Touch</p>
          <div className="contact-links">
            <div className="link">
              <PlaceIcon />
              <a
                href="https://www.google.co.in/maps/place/Kala+Tex/@17.6543606,75.9424334,257m/data=!3m1!1e3!4m6!3m5!1s0x3bc5da34367355ef:0x1f83382995c40eaf!8m2!3d17.6546531!4d75.942752!16s%2Fg%2F11cjhr6_g7?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                Office: E-101/2, Akkalkot Road MIDC, Solapur, Maharashtra,
                413006, India.
              </a>
            </div>
            <div className="link">
              <PhoneInTalkIcon />
              <a href="tel:+912172734962">(+91) 217-2734962</a>
            </div>
            <div className="link">
              <MailOutlineIcon />
              <a href="mailto:info@kalatex.in" target="_blank">
                info@kalatex.in
              </a>
            </div>
            <div className="link">
              <MailOutlineIcon />
              <a href="mailto:sales@kalatex.in" target="_blank">
                sales@kalatex.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.x.com" target="_blank">
            <XIcon />
          </a>
          <a href="https://www.google.com" target="_blank">
            <GoogleIcon />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <WhatsAppIcon />
          </a>
        </div>
        <p>© {currentYear} Kala Textiles. All rights reserved.</p>
      </div>
    </footer>
  );
};
