import React, {useState} from 'react';
import {CountryDropdown} from "../CountryDropdown/CountryDropdown";
import {Link} from "react-router-dom";

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [send, setSend] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = (event: any) => {
        event.preventDefault();
        setError(false);

        if (!privacyPolicy) {
            setError(true);
            return;
        }

        const type = "contact_us";
        fetch('https://wp-admin.ysds.com/wp-json/qte/v1/contact', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                email,
                company,
                type,
                country,
                privacy_policy: privacyPolicy,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res: any) => {
            setSend(true);
        });
    };

    const setNameFunc = (e: any) => {
        setName(e.target.value);
    };
    const setCompanyFunc = (e: any) => {
        setCompany(e.target.value);
    };
    const setPhoneFunc = (e: any) => {
        setPhone(e.target.value);
    };
    const setEmailFunc = (e: any) => {
        setEmail(e.target.value);
    };
    const setPrivacyPolicyFunc = (e: any) =>{
        setPrivacyPolicy(e.target.checked);
    }


    return (
        <div>
            {
                send ? (
                    <h3>Thanks! We will get back to you as soon as possible.</h3>
                ) : (
                    <form onSubmit={onSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={name} onChange={setNameFunc}/>

                        <label>Company</label>
                        <input type="text" name="company" value={company} onChange={setCompanyFunc}/>

                        <label>Phone nr</label>
                        <input type="tel" name="phone" value={phone} onChange={setPhoneFunc}/>

                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={setEmailFunc}/>

                        <label>Country</label>
                        <CountryDropdown value={country} onChange={country => setCountry(country)}/>

                        <label className="checkbox-label">
                            <input type="checkbox" name="privacy_policy" checked={privacyPolicy} onChange={setPrivacyPolicyFunc} />
                            <span className="checkmark"></span>
                            I agree to the following <Link to="/privacy-policy" target="_blank">Privacy policy</Link> *
                        </label>
                        { error ? <p className="error">You need to agree to the privacy policy.</p> : null}

                        <input type="submit" value="SEND" className="ysds-button"/>
                    </form>
                )
            }
        </div>

    );
};

export default ContactForm;
