import React, {useState} from 'react';
import {CountryDropdown} from "../CountryDropdown/CountryDropdown";
import {Link} from "react-router-dom";
import { AppState } from '../../../Store';
import { useSelector } from 'react-redux';

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
        phone: false,
    });

    const countries = useSelector((state: AppState) => state.countries);

    const [detailsForm, openDetailsForm] = useState(false);

    const countryContactInfo = (iso: string): {phone: string, email: string} => {
        const fallbackPhone = '+46 10 106 00 50'
        const fallbackEmail = 'request@ysds.com'

        let contactInfo = {
            phone: fallbackPhone,
            email: fallbackEmail
        }
        const country = countries.find((c) => c.iso === iso)

        if (country?.email) {
            contactInfo.email = country.email
        }
        if (country?.phone) {
            contactInfo.phone = country.phone
        }

        return contactInfo;
    }

    const onSubmit = (event: any) => {
        event.preventDefault();

        const emailOrPhone = (email && validateEmail(email)) || phone

        const newErrors: Record<string, boolean> = {
            country: !country,
            privacyPolicy: !privacyPolicy,
            email: !emailOrPhone,
            phone: !emailOrPhone,
        };

        setErrors(newErrors);

        const error = Object.keys(newErrors).filter(key => {
            return newErrors[key];
        })

        if ( Object.keys(error).length > 0 ) {
            return;
        }

        const type = "contact_us";
        fetch(process.env.REACT_APP_API_URL + '/qte/v1/contact', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                email : (email && validateEmail(email)) ? email : 'no-email-provided@email.com',
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
            window.gtag?.('event', 'page_view', { 'page_location': '/_get_in_touch_completion/', 'page_title': 'Get in touch completion' })
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

    const countryPlaceHolder = 'Choose...';
    return (
        <div>
            {
                send ? (
                    <h3 className="heading3">Thanks! We will get back to you as soon as possible.</h3>
                ) : (
                    <form onSubmit={onSubmit}>

                        <label>Where are you based?</label>
                        <CountryDropdown value={country} onChange={country => {setCountry(country === countryPlaceHolder ? '' : country)}} placeholder={countryPlaceHolder} />
                        { errors.country ? <p className="error">You need to select a country.</p> : null}

                        {country && ( 
                            <>
                            <div className='two-columns'>
                                <h5> Call us </h5>
                                <h5> Email us </h5>
                                <a href={`tel:${countryContactInfo(country).phone}`}>{countryContactInfo(country).phone}</a>
                                <a href={`mailto:${countryContactInfo(country).email}`}>{countryContactInfo(country).email}</a>
                            </div>
                                <p className='details'>
                                    Or {' '}
                                    <b className='underline' onClick={() => openDetailsForm(!detailsForm)}>
                                        leave your details 
                                    </b>
                                    {' '} and a YSDS representative will contact you shortly.
                                </p>
                            </>
                            )
                        }

                        {country && detailsForm && (
                        <>
                            <label>Name</label>
                            <input type="text" name="name" value={name} onChange={setNameFunc}/>

                            <label>Company</label>
                            <input type="text" name="company" value={company} onChange={setCompanyFunc}/>

                            <label>Phone #</label>
                            <input type="tel" name="phone" value={phone} onChange={setPhoneFunc}/>

                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={setEmailFunc}/>
                            { (errors.email && errors.phone) ? <p className="error">You need to enter a valid email or a phone number.</p> : null} 

                            <label className="checkbox-label">
                                <input type="checkbox" name="privacy_policy" checked={privacyPolicy} onChange={setPrivacyPolicyFunc} />
                                <span className="checkmark"></span>
                                I agree to the following <Link to="/privacy-policy" target="_blank">Privacy policy</Link> *
                            </label>
                            { errors.privacyPolicy ? <p className="error">You need to agree to the privacy policy.</p> : null}

                            <input type="submit" value="SEND" className="ysds-button"/>
                        </>
                        )}
                    </form>
                )
            }
        </div>

    );
};

export default ContactForm;
