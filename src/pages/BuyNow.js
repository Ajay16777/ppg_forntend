import React, { useEffect, useState } from "react";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";

const BuyNow = (props) => {
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
    <WrapContainer>
      <HeaderBreadcrumb title="BuyNow" />
      {/* <div style={{padding:"70px"}}>
    <div className="buynowdiv" style={{
          padding:"20px"
        }}>

<div class="Buyer">
              <form id="BuyerForm">
                <p className="d-flex">
                  <input style={{marginRight:"10px"}}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="FIRST NAME"
                    required
                  />
                      <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="LAST NAME"
                    required
                  />
                  
                </p>
                <p>
                  <input
                    type="Email"
                    id="Email"
                    placeholder="EMAIL"
                    required
                  />
                </p>
                <p>
                  <textarea
                    type="Address"
                    name="Address"
                    id="Address"
                    placeholder=" SAPPLING ADDRESS"
                    required
                  />
                </p>
                <p className="d-flex">
                  <input style={{marginRight:"10px"}}
                    type="text"
                    id="STATE"
                    placeholder="STATE"
                  />
                   <input
                    type="text"
                    name="PIN"
                    id="PIN"
                    placeholder="PINCODE"
                  />
                </p>
                <p className="d-flex">
                  <input style={{marginRight:"10px"}}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="PHONE NUMBER"
                  />
                </p>
                <p class="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
    </div>
    </div> */}
    <div>
      <div className="form" style={{marginLeft:"160px",marginRight:"160px"}}>
        <div className="a-row p-2 m-2">
          <div className="a-span6 a-column">
            <div
              className="a-spacing-double-large a-row on-imb-scroll-here"
              id="newShippingAddressFormFromIdentity"
            >
              <div
                className="a-span10 a-column celwidget"
                id="addres-new"
                data-csa-c-id="sib6he-n5pqmi-mku69i-dy431e"
                data-cel-widget="addres-new"
              >
                <input
                  type="hidden"
                  name="purchaseId"
                  defaultValue="404-3239921-3657961"
                />
                <form id="address-ui-checkout-form" method="post" action="">
                  <div
                    id="address-ui-widgets-enterAddressFormContainer"
                    className="a-section"
                  >
                    <h2 className="a-spacing-none">SAPPLING ADDRESS</h2>
                    <div className="a-row">
                      <div className="a-input-text-group a-spacing-medium a-spacing-top-medium">
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block">
                            <label
                              htmlFor="address-ui-widgets-countryCode-dropdown-nativeId"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                {" "}
                                <strong>Country</strong>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container">
                          <span className="a-dropdown-container">
                            <select
                              name="address-ui-widgets-countryCode"
                              autoComplete="off"
                              id="address-ui-widgets-countryCode-dropdown-nativeId"
                              tabIndex={0}
                              className="a-native-dropdown a-spacing-none"
                              style={{ height: "30px" }}
                            >
                              <option className="a-prompt" value="">
                                Choose your Country
                              </option>
                              <option value="AF">Afghanistan</option>
                              <option value="AX">Aland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas, The</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">Bonaire, Saint Eustatius and Saba</option>                              
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO"> British Indian Ocean Territory</option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="IC">Canary Islands</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">Central African Republic</option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">  Cocos (Keeling) Islands</option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo</option>
                              <option value="CD">
                                Congo, Democratic Republic of
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CW">Curaçao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">
                                Dominica, Commonwealth of
                              </option>
                              <option value="DO">Dominican Republic</option>
                              <option value="TL">East Timor</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia, The</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and the McDonald Islands
                              </option>
                              <option value="VA">Holy See</option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN" selected="">
                                India
                              </option>
                              <option value="ID">Indonesia</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland, Republic of</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="CI">
                                Ivory Coast (Côte D'ivoire)
                              </option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KR">Korea, Republic of</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">
                                Lao, People's Democratic Republic
                              </option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MK">
                                Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">
                                Micronesia, Federated States of
                              </option>
                              <option value="MD">Moldova, Republic of</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">
                                Palestinian Territories
                              </option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">Saint Barthelemy</option>
                              <option value="SH">
                                Saint Helena, Ascension and Tristan da Cunha
                              </option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">Saint Martin</option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">
                                Tanzania, United Republic of
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UM">
                                United States Minor Outlying Islands
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="VG">
                                Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, US</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                            <span
                              tabIndex={-1}
                              id="address-ui-widgets-countryCode"
                              data-a-class="address-ui-widgets-desktop-form-field-full-width"
                              className="a-button a-button-dropdown a-spacing-none  address-ui-widgets-desktop-form-field-full-width"
                              aria-label="Country/Region"
                            >
                              <span className="a-button-inner">
                                <span
                                  className="a-button-text a-declarative"
                                  data-action="a-dropdown-button"
                                  role="button"
                                  tabIndex={0}
                                  aria-hidden="true"
                                ></span>
                                <i className="a-icon a-icon-dropdown" />
                              </span>
                            </span>
                          </span>
                          <div className="a-section a-spacing-none a-spacing-top-micro address-ui-widgets-inline-error-alert">
                            <div
                              id="address-ui-widgets-addr-form-switch-alert-box"
                              className="a-box a-alert-inline a-alert-inline-error aok-hidden"
                              aria-live="assertive"
                              role="alert"
                            >
                              <div className="a-box-inner a-alert-container">
                                <i className="a-icon a-icon-alert" />
                                <div className="a-alert-content">
                                  <div className="a-section"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block pt-4">
                            <label
                              htmlFor="address-ui-widgets-enterAddressFullName"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                <strong>Full name</strong>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container">
                          <input
                            type="text"
                            maxLength={50}
                            id="address-ui-widgets-enterAddressFullName"
                            name="address-ui-widgets-enterAddressFullName"
                            className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                          />
                        </div>
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block">
                            <label
                              htmlFor="address-ui-widgets-enterAddressPhoneNumber"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                <strong>Mobile number</strong>
                              </span>
                            </label>
                          </div>
                          <div className="a-section aok-inline-block address-ui-widgets-desktop-form-right-aligned-popover-trigger">
                            <span
                              className="a-declarative"
                              data-action="a-popover"
                              data-a-popover='{"inlineContent":"May be used to assist delivery","closeButton":false,"content":"May be used to assist delivery","header":"More information","position":"triggerTop"}'
                            ></span>
                          </div>
                        </div>
                        <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container">
                          <input
                            type="text"
                            maxLength={10}
                            id="address-ui-widgets-enterAddressPhoneNumber"
                            name="address-ui-widgets-enterAddressPhoneNumber"
                            className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                          />
                        </div>
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block">
                            <label
                              htmlFor="address-ui-widgets-enterAddressPostalCode"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                <strong>Pincode</strong>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container">
                          <input
                            type="text"
                            maxLength={6}
                            id="address-ui-widgets-enterAddressPostalCode"
                            placeholder="6 digits [0-9] PIN code"
                            name="address-ui-widgets-enterAddressPostalCode"
                            className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                          />
                          <div className="a-section a-spacing-none a-spacing-top-micro address-ui-widgets-inline-error-alert">
                            <div
                              id="address-ui-widgets-postalcode-error"
                              className="a-box a-alert-inline a-alert-inline-error aok-hidden"
                              aria-live="assertive"
                              role="alert"
                            >
                              <div className="a-box-inner a-alert-container">
                                <i className="a-icon a-icon-alert" />
                                <div className="a-alert-content">
                                  <div className="a-section"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block">
                            <label
                              htmlFor="address-ui-widgets-enterAddressLine1"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                <strong>
                                  {" "}
                                  Flat, House no., Building, Company, Apartment
                                </strong>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div
                          className="a-section a-spacing-base adddress-ui-widgets-form-field-container address-ui-widgets-field-container-fixed-height"
                          style={{ zIndex: 1 }}
                        >
                          <input
                            type="text"
                            maxLength={60}
                            id="address-ui-widgets-enterAddressLine1"
                            name="address-ui-widgets-enterAddressLine1"
                            className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                            autoComplete="address-ui-widgets-enterAddressLine1"
                          />
                        </div>
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block">
                            <label
                              htmlFor="address-ui-widgets-enterAddressLine2"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                <strong>Area, Street, Sector, Village</strong>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container address-ui-widgets-field-container-fixed-height">
                          <input
                            type="text"
                            maxLength={60}
                            id="address-ui-widgets-enterAddressLine2"
                            name="address-ui-widgets-enterAddressLine2"
                            className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                            autoComplete="address-ui-widgets-enterAddressLine2"
                          />
                        </div>
                        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                          <div className="a-section a-spacing-none aok-inline-block">
                            <label
                              htmlFor="address-ui-widgets-landmark"
                              className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                            >
                              <span className="a-size-base">
                                <strong>Landmark</strong>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container">
                          <input
                            type="text"
                            maxLength={60}
                            id="address-ui-widgets-landmark"
                            placeholder="E.g. near apollo hospital"
                            name="address-ui-widgets-landmark"
                            className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                          />
                        </div>
                        <div className="a-row address-ui-widgets-mobile-two-column-form-field-view-grid-row">
                          <div className="a-column a-span6">
                            <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                              <div className="a-section a-spacing-none aok-inline-block">
                                <label
                                  htmlFor="address-ui-widgets-enterAddressCity"
                                  className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                                >
                                  <span className="a-size-base">
                                    <strong>Town/City</strong>
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="a-section a-spacing-none adddress-ui-widgets-form-field-container">
                              <input
                                type="text"
                                maxLength={50}
                                id="address-ui-widgets-enterAddressCity"
                                name="address-ui-widgets-enterAddressCity"
                                className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input"
                                autoComplete="address-ui-widgets-enterAddressCity"
                              />
                              <div className="a-section a-spacing-none a-spacing-top-micro address-ui-widgets-inline-error-alert">
                                <div
                                  id="address-ui-widgets-inline-city-error"
                                  className="a-box a-alert-inline a-alert-inline-error aok-hidden"
                                  aria-live="assertive"
                                  role="alert"
                                >
                                  <div className="a-box-inner a-alert-container">
                                    <i className="a-icon a-icon-alert" />
                                    <div className="a-alert-content">
                                      <div className="a-section">
                                        <strong>
                                          Please enter the State name
                                        </strong>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="a-column a-span6 a-span-last">
                            <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
                              <div className="a-section a-spacing-none aok-inline-block">
                                <label
                                  htmlFor="address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId"
                                  className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap"
                                ></label>
                              </div>
                            </div>
                            <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container">
                              <span className="a-dropdown-container">
                                <select
                                  name="address-ui-widgets-enterAddressStateOrRegion"
                                  autoComplete="off"
                                  id="address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId"
                                  tabIndex={0}
                                  className="a-native-dropdown a-spacing-none"
                                  placeholder="Choose a state"
                                  style={{ height: "30px" }}
                                >
                                  <option className="a-prompt" value="">
                                    Choose a state
                                  </option>
                                  <option value="ANDAMAN & NICOBAR ISLANDS">
                                    ANDAMAN &amp; NICOBAR ISLANDS
                                  </option>
                                  <option value="ANDHRA PRADESH">
                                    ANDHRA PRADESH
                                  </option>
                                  <option value="ARUNACHAL PRADESH">
                                    ARUNACHAL PRADESH
                                  </option>
                                  <option value="ASSAM">ASSAM</option>
                                  <option value="BIHAR">BIHAR</option>
                                  <option value="CHANDIGARH">CHANDIGARH</option>
                                  <option value="CHHATTISGARH">
                                    CHHATTISGARH
                                  </option>
                                  <option value="DADRA AND NAGAR HAVELI AND DAMAN AND DIU">
                                    DADRA AND NAGAR HAVELI AND DAMAN AND DIU
                                  </option>
                                  <option value="DELHI">DELHI</option>
                                  <option value="GOA">GOA</option>
                                  <option value="GUJARAT">GUJARAT</option>
                                  <option value="HARYANA">HARYANA</option>
                                  <option value="HIMACHAL PRADESH">
                                    {" "}
                                    HIMACHAL PRADESH
                                  </option>
                                  <option value="JAMMU & KASHMIR">
                                    JAMMU &amp; KASHMIR
                                  </option>
                                  <option value="JHARKHAND">JHARKHAND</option>
                                  <option value="KARNATAKA">KARNATAKA</option>
                                  <option value="KERALA">KERALA</option>
                                  <option value="LADAKH">LADAKH</option>
                                  <option value="LAKSHADWEEP">
                                    LAKSHADWEEP
                                  </option>
                                  <option value="MADHYA PRADESH">
                                    MADHYA PRADESH
                                  </option>
                                  <option value="MAHARASHTRA">
                                    MAHARASHTRA
                                  </option>
                                  <option value="MANIPUR">MANIPUR</option>
                                  <option value="MEGHALAYA">MEGHALAYA</option>
                                  <option value="MIZORAM">MIZORAM</option>
                                  <option value="NAGALAND">NAGALAND</option>
                                  <option value="ODISHA">ODISHA</option>
                                  <option value="PUDUCHERRY">PUDUCHERRY</option>
                                  <option value="PUNJAB">PUNJAB</option>
                                  <option value="RAJASTHAN">RAJASTHAN</option>
                                  <option value="SIKKIM">SIKKIM</option>
                                  <option value="TAMIL NADU">TAMIL NADU</option>
                                  <option value="TELANGANA">TELANGANA</option>
                                  <option value="TRIPURA">TRIPURA</option>
                                  <option value="UTTAR PRADESH">
                                    UTTAR PRADESH
                                  </option>
                                  <option value="UTTARAKHAND">
                                    UTTARAKHAND
                                  </option>
                                  <option value="WEST BENGAL">
                                    WEST BENGAL
                                  </option>
                                </select>
                                <span
                                  tabIndex={-1}
                                  id="address-ui-widgets-enterAddressStateOrRegion"
                                  data-a-class="address-ui-widgets-desktop-form-field-full-width"
                                  className="a-button a-button-dropdown a-spacing-none  address-ui-widgets-desktop-form-field-full-width"
                                  aria-label="State"
                                  style={{ minWidth: "0.243243%" }}
                                >
                                  <span className="a-button-inner">
                                    <span
                                      className="a-button-text a-declarative"
                                      data-action="a-dropdown-button"
                                      role="button"
                                      tabIndex={0}
                                      aria-hidden="true"
                                    >
                                      <span className="a-dropdown-prompt"></span>
                                    </span>
                                    <i className="a-icon a-icon-dropdown" />
                                  </span>
                                </span>
                              </span>
                              <div className="a-section a-spacing-none a-spacing-top-micro address-ui-widgets-inline-error-alert">
                                <div
                                  id="address-ui-widgets-inline-state-or-region-error"
                                  className="a-box a-alert-inline a-alert-inline-error aok-hidden"
                                  aria-live="assertive"
                                  role="alert"
                                >
                                  <div className="a-box-inner a-alert-container">
                                    <i className="a-icon a-icon-alert" />
                                    <div className="a-alert-content">
                                      <div className="a-section">
                                        Please enter a state, region or
                                        province.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="address-ui-widgets-previous-address-form-state-token"
                      defaultValue="eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.E4Dpgu5_eEYDEWDrb_mJUJ_Dj9jkJP9epevaVUp4yEiBoG2LMrc5bQ.uawF4t4F-PJ-MUqe.bqgAxsA1IrpRjicuHgs1YELyEGmnda2LGV74WXPHPbUNHHn9zYHAT1hNeTLMzxcMJwlZh8OytTkPYRTkJkAWhGIEO1qFWzUBHwRTprLaFiIlSCXN_vWCtSeA9jIuPnxJppXzUv9SoI3C_yKmeWBIpmp9qCfw5hO5LiSLxfcV9zz2mLpyOdNxBBdC5BHjUrO9B6FKWtE-UbmdKz2Arx2K-C3UBAQLwXd8uu2mMVj0ft3nBctKi-zd37uqoyzwf2pFsSwT0H0oOMRcZENBjzRPG5uARbjeTMAWPtZ9WKsyZdvDzzmqxaNmulah5ePLInAHTKsTz1JC47dnuyyJqIWhPqx_krxOiWpYF0PXN6TKnTx3Zmz6sf5lcoOxkugsqurQwxPKp2OysjtId4CDGoB4yKd8iyH605sjPO4.-ZCQAi9TsTKhT1Xfkpflng"
                    />
                    <div
                      data-a-input-name="address-ui-widgets-use-as-my-default"
                      className="a-checkbox address-ui-widgets-checkbox-view  a-spacing-medium"
                    >
                      <label htmlFor="address-ui-widgets-use-as-my-default">
                        <input
                          id="address-ui-widgets-use-as-my-default"
                          type="checkbox"
                          name="address-ui-widgets-use-as-my-default"
                          defaultValue="true"
                          style={{ maxWidth: 15 }}
                        />
                        <i className="a-icon a-icon-checkbox" />
                        <span className="a-label a-checkbox-label">
                          <span className="a-size-base">
                            Make this my default address
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="hasWorkingJavascript"
                    defaultValue={1}
                  />
                </form>
              </div>
              <div className="a-span2 a-column a-span-last"></div>
            </div>
          </div>
          <div
            id="addres-pickup-search"
            className="celwidget a-span6 a-column a-span-last"
            data-csa-c-id="59onq6-piz5yx-vtlsp2-g9abl6"
            data-cel-widget="addres-pickup-search"
          ></div>
          <div className="a-section">
            <div
              className="a-section a-spacing-base address-ui-widgets-aad-heading-container"
              style={{ height: 19 }}
            >
              <div
                id="address-ui-widgets-addr-details-main-heading"
                className="a-size-medium aok-float-left"
              >
                <h4>
                  <strong>Add delivery instructions</strong>
                </h4>
              </div>
              <span className="a-letter-space" />
            </div>
            <div
              id="address-ui-widgets-addr-details-text"
              className="a-section a-spacing-base pt-2"
            >
              Preferences are used to plan your delivery. However, shipments can
              sometimes arrive early or later than planned.
              <span className="a-letter-space" />
            </div>
            <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container address-ui-widgets-desktop-form-label">
              <div className="a-section a-spacing-none aok-inline-block">
                <label
                  htmlFor="address-ui-widgets-addr-details-address-type-and-business-hours"
                  className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap pt-3 m-1"
                >
                  <span className="a-size-base">
                    <strong>Address Type</strong>
                  </span>
                </label>
              </div>
            </div>
            <div className="a-section a-spacing-base adddress-ui-widgets-form-field-container address-ui-widgets-desktop-form-field">
              <span className="a-dropdown-container">
                <select
                  name="address-ui-widgets-addr-details-address-type-and-business-hours"
                  autoComplete="off"
                  tabIndex={-1}
                  className="a-native-dropdown"
                  style={{ height: "30px" }}
                >
                  <option value="OTH" selected="">
                    {" "}
                    Select an Address Type{" "}
                  </option>
                  <option value="RES"> Home (7 am – 9 pm delivery) </option>
                  <option value="COM">
                    {" "}
                    Office/Commercial (10 AM - 6 PM delivery){" "}
                  </option>
                </select>
                <span
                  tabIndex={-1}
                  id="address-ui-widgets-addr-details-address-type-and-business-hours"
                  data-a-class="address-ui-widgets-desktop-form-field-full-width"
                  className="a-button a-button-dropdown address-ui-widgets-desktop-form-field-full-width"
                  aria-label=""
                >
                  <span className="a-button-inner">
                    <span
                      className="a-button-text a-declarative"
                      data-action="a-dropdown-button"
                      role="button"
                      tabIndex={0}
                      aria-hidden="true"
                    >
                      <span className="a-dropdown-prompt pl-2">
                        Select an Address Type{" "}
                      </span>
                    </span>
                    <i className="a-icon a-icon-dropdown" />
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="buton">
            <span className="a-button-inner p-2">
              <button
                className="a-button-input btn btn-success mt-2 m-1"
                type="submit"
                aria-labelledby="address-ui-widgets-form-submit-button-announce"
                placeholder="Use this address"
              >
                {" "}
                Use this address
              </button>
              <span
                id="address-ui-widgets-form-submit-button-announce"
                className="a-button-text"
                aria-hidden="true"
              >
                <button className="btn btn-info mt-2 m-1">
                  Procced to Pay
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
      </div> 
 </WrapContainer>
  );
};
export default BuyNow;
