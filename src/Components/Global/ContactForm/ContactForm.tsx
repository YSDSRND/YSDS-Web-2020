import React, {useState} from 'react';
import {CountryDropdown} from "../CountryDropdown/CountryDropdown";
import {Link} from "react-router-dom";

const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [send, setSend] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({
        country: false,
        privacyPolicy: false,
        email: false,
    });

    const onSubmit = (event: any) => {
        event.preventDefault();

        const newErrors: Record<string, boolean> = {
            country: !country,
            privacyPolicy: !privacyPolicy,
            email: !validateEmail(email),
        };

        setErrors(newErrors);

        const error = Object.keys(newErrors).filter(key => {
            return newErrors[key];
        })

        if ( Object.keys(error).length > 0 ) {
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
                        { errors.email ? <p className="error">You need to enter a valid email.</p> : null}

                        <label>Country</label>
                        <CountryDropdown value={country} onChange={country => setCountry(country)} placeholder="Choose..." />
                        { errors.country ? <p className="error">You need to select a country.</p> : null}

                        <label className="checkbox-label">
                            <input type="checkbox" name="privacy_policy" checked={privacyPolicy} onChange={setPrivacyPolicyFunc} />
                            <span className="checkmark"></span>
                            I agree to the following <Link to="/privacy-policy" target="_blank">Privacy policy</Link> *
                        </label>
                        { errors.privacyPolicy ? <p className="error">You need to agree to the privacy policy.</p> : null}

                        <input type="submit" value="SEND" className="ysds-button"/>
                    </form>
                )
            }
        </div>

    );
};

export default ContactForm;
