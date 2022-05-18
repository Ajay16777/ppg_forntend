import React, { useEffect, useState } from "react";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";

const ContactUS = (props) => {
  const [, setProduct] = useState([]);
  const [mounted, setMounted] = useState(true);
  const token = sessionStorage.getItem("Authtoken");
  useEffect(() => {
    const getData = async (e) => {
      try {
        if (token) {
          const productRes = await Dataservices.GetCartAll();
          if (mounted) {
            setProduct(productRes.data.data);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    return () => {
      getData();
      setMounted(false);
    };
  }, [mounted, token]);
  return (
    <div className="Contact">
      <WrapContainer>
        <HeaderBreadcrumb title="Contact Us" />
        <div class="container">
          <h1 class="brand">Contact</h1>
          <div class="wrapper">
          <div class="company-info">
        <ul>
          <li><p class="fa fa-road"></p> Head office Jaipur , 2nd Branch Bhadra , India</li>
          <li><p class="fa fa-phone"></p> 8385842313</li>
          <li><p class="fa fa-envelope"></p> info@pujaypanditg.com </li>
        </ul>
      </div>
            <div class="contact">
              <form id="contactForm">
                <p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="NAME"
                    required
                  />
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </p>
                <p class="full">
                  <textarea
                    name="message"
                    placeholder="write your Massage"
                    rows="5"
                    id="message"
                  ></textarea>
                </p>
                <p class="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </WrapContainer>
    </div>
  );
};
export default ContactUS;
