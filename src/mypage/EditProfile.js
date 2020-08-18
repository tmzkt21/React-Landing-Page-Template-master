import {PageTemplate} from "../components";
import React from "react";
import {Pagination} from "semantic-ui-react";

const EdeitPrpfileTypes = {REQUEST: 'EditProfile/REQUEST', SUCCESS: ''}

const EditProfile = () => {

    return <>
        <center>
            <article className="form">
                <form className="form"><input placeholder="Name" required="" type="text" className="fbFaMk"
                                              value="게스트"/><input
                    placeholder="Email" required="" type="email" className="fbFaMk" value="guest@guest.com"/><input
                    placeholder="Password" type="password" className="fbFaMk" value=""/><input
                    placeholder="Confirm Password" type="password" className="sc-fMiknA fbFaMk" value=""/>
                    <div className="sc-dVhcbM jBgDQs"><input placeholder="Zip Code" required="" type="text"
                                                             id="zipCodeInput" className="sc-fMiknA fbFaMk"
                                                             value="06001"/>
                        <button type="button" id="zipCodeBtn" className="qrXFy">Find</button>
                    </div>
                    <input placeholder="Address" required="" type="text" className="sc-fMiknA fbFaMk"
                           value=""/><input placeholder="Address Detail" required="" type="text"
                                            className="sc-fMiknA fbFaMk" value="주소"/>

                    <div className="sc-fAjcbJ hGXRsB"><select id="phone1" className="sc-eqIVtm jMFUXs">
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="017">017</option>
                        <option value="019">019</option>
                    </select><input required="" type="text" id="phone2" className="sc-fMiknA fbFaMk"
                                    value="1234"/><input
                        required="" type="text" id="phone3" className="sc-fMiknA fbFaMk" value="1234"/></div>
                    <button type="submit" id="createAccountBtn" className="sc-dnqmqq qrXFy">Edit Profile</button>
                </form>
            </article>
        </center>

    </>
}

export default EditProfile