import "./about.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { InfraCarousel } from "../../components/infraCarousel/InfraCarousel";
import { EnvCarousel } from "../../components/infraCarousel/EnvCarousel";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LanguageIcon from "@mui/icons-material/Language";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CategoryIcon from "@mui/icons-material/Category";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";

export const About = ({ data }) => {
  return (
    <div className="about">
      <div className="aboutUs">
        <h1>About Us</h1>
        <span>Decade Of Uncompromising Attention To Quality!</span>
        <p>
          Kalatex is a company which is specialized in manufacturing and export
          of terry towels. It is located in Solapur, India. Solapur is also
          known as manchester of india in terms of towels manufacturing. Kalatex
          is very well known domestically and Internationally, We are expanding
          into more overseas market and would like to serve more customers
          globally. We are dedicated to serve our customers with better products
          since 2010. Our outstanding approach to business activities and
          uncompromising attitude have built our reputation in the market.
        </p>
      </div>
      <div className="whyUs">
        <h1>Why Choose Us</h1>
        <div className="whyUsGrid">
          <div className="whyUsGridItem">
            <TravelExploreIcon
              className="icon"
              style={{ fontSize: "large", background: "#0c5ca3" }}
            />
            <>
              <h2>Network</h2>
              <p className="gridSubHeader">
                We have a wide distribution network all over India & other
                countries.
              </p>
            </>
            <span>1</span>
          </div>
          <div className="whyUsGridItem">
            <LocalShippingIcon
              className="icon"
              style={{ fontSize: "large", background: "#E53935" }}
            />
            <>
              <h2>Timely Delivery</h2>
              <p className="gridSubHeader">
                On Time delivery with high quality is an USP of Kalatex even
                with a large customer base.
              </p>
            </>
            <span>2</span>
          </div>
          <div className="whyUsGridItem">
            <FactoryIcon
              className="icon"
              style={{ fontSize: "large", background: "#FB8C00" }}
            />
            <>
              <h2>Integrated Plant</h2>
              <p className="gridSubHeader">
                We are fully integrated unit with an ultramodern composite plant
                incorporating Dyeing, Weaving & Finishing.
              </p>
            </>
            <span>3</span>
          </div>
          <div className="whyUsGridItem">
            <LocalOfferIcon
              className="icon"
              style={{ fontSize: "large", background: "#43A047" }}
            />
            <>
              <h2>Prices</h2>
              <p className="gridSubHeader">
                We prefer and offer competitive prices to our customers in this
                market, So we lead the market.
              </p>
            </>
            <span>4</span>
          </div>
          <div className="whyUsGridItem">
            <AutoAwesomeIcon
              className="icon"
              style={{ fontSize: "large", background: "#5E35B1" }}
            />
            <>
              <h2>Designs</h2>
              <p className="gridSubHeader">
                World class and highly acclaimed beautiful designs developed by
                kalatex.
              </p>
            </>
            <span>5</span>
          </div>
          <div className="whyUsGridItem">
            <SportsScoreIcon
              className="icon"
              style={{ fontSize: "large", background: "#039BE5" }}
            />
            <>
              <h2>Our Vision</h2>
              <p className="gridSubHeader">
                Our Vision is to become first choice of buyers in terms of
                quality, on time delivery & pricing.
              </p>
            </>
            <span>6</span>
          </div>
        </div>
      </div>
      <h1>Infrastructure</h1>
      <div className="infrastructure">
        <InfraCarousel data={data} />
        <div className="infraInfo">
          <h2>Techology</h2>
          <p>
            At Kalatex we ensure to have new world class technologies.
            Technology is the backbone here at kalatex. We have latest
            automation machines, as we consider to save time and produce more
            output so that we can always be ready to fulfill the requirement of
            every customer.
          </p>
          <ul>
            <li>» Total 32 airjet looms</li>
            <li>» 11 jacquard looms</li>
            <li>» Weaving capacity 250 tons/ month</li>
            <li>» Dyieng capacity 250 tons/ months</li>
            <li>» Shearing machine</li>
            <li>» Schmaledurate stitching machine</li>
          </ul>
        </div>
      </div>
      <div className="environment">
        <div className="infraInfo">
          <h2>Environment</h2>
          <p>
            Kala Tex comply with all the necessary basic infrastructure. We
            provide basic facilities to our staff and workers.
          </p>
          <ul>
            <li>» Green Environment</li>
            <li>» Pleasant Surroundings</li>
            <li>» Clean & Hyginiec Environment</li>
          </ul>
        </div>
        <EnvCarousel data={data} />
      </div>
      <div className="features">
        <h1>Features</h1>
        <div className="featuresGrid">
          <div className="featuresGridItem">
            <AutoFixHighIcon
              className="icon"
              style={{ fontSize: "large", background: "#29bbb4" }}
            />
            <>
              <h2>Beautiful Design</h2>
              <p className="gridSubHeader">
                We create awesome and beautiful designs as per clients
                requirements.
              </p>
            </>
            <span>1</span>
          </div>
          <div className="featuresGridItem">
            <LanguageIcon
              className="icon"
              style={{ fontSize: "large", background: "#A133FF" }}
            />
            <>
              <h2>Global Relationship</h2>
              <p className="gridSubHeader">
                We have clients all over Europe, USA, Australia & Gulf.
              </p>
            </>
            <span>2</span>
          </div>
          <div className="featuresGridItem">
            <SupportAgentIcon
              className="icon"
              style={{ fontSize: "large", background: "#FF33A1" }}
            />
            <>
              <h2>24 x 7</h2>
              <p className="gridSubHeader">
                We are available 24 x 7 for our clients to maintain a strong
                relationship.
              </p>
            </>
            <span>3</span>
          </div>
          <div className="featuresGridItem">
            <CategoryIcon
              className="icon"
              style={{ fontSize: "large", background: "#3357FF" }}
            />
            <>
              <h2>Quality</h2>
              <p className="gridSubHeader">
                Our products have achieved the highest level quality which
                customer appreciates.
              </p>
            </>
            <span>4</span>
          </div>
          <div className="featuresGridItem">
            <TipsAndUpdatesIcon
              className="icon"
              style={{ fontSize: "large", background: "#2ada4a" }}
            />
            <>
              <h2>Ideas</h2>
              <p className="gridSubHeader">
                We innovate & always upgrade technology with our own ideas.
              </p>
            </>
            <span>5</span>
          </div>
          <div className="featuresGridItem">
            <DeliveryDiningIcon
              className="icon"
              style={{ fontSize: "large", background: "#FF5733" }}
            />
            <>
              <h2>In time delivery</h2>
              <p className="gridSubHeader">
                All our customers are happy with our in time delivery process.
              </p>
            </>
            <span>6</span>
          </div>
        </div>
      </div>
      <div className="featuresExtro">
        <div className="featureDiv">
          <WarehouseIcon
            className="icon"
            style={{ fontSize: "large", background: "#a63939" }}
          />
          <h1>Capacity</h1>
          <p>250 Tons / Month</p>
        </div>
        <div className="featureDiv">
          <AirplaneTicketIcon
            className="icon"
            style={{ fontSize: "large", background: "#863ea2" }}
          />
          <h1>Presence</h1>
          <p>World Wide Network</p>
        </div>
        <div className="featureDiv">
          <BroadcastOnHomeIcon
            className="icon"
            style={{ fontSize: "large", background: "#3b526d" }}
          />
          <h1>Technology</h1>
          <p>Automated Machineries</p>
        </div>
        <div className="featureDiv">
          <RoomPreferencesIcon
            className="icon"
            style={{ fontSize: "large", background: "#bf961b" }}
          />
          <h1>Infrastructure</h1>
          <p>Clean & Green Premises</p>
        </div>
      </div>
    </div>
  );
};
