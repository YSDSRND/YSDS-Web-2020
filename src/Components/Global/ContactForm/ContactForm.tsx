import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [send, setSend] = useState(false);

    const onSubmit = (event: any) => {
        event.preventDefault();
        fetch("https://wp-admin.ysds.com/wp-json/qte/v1/contact", {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res: any) => {
            setSend(true)
        });
    }

    const setNameFunc = (e:any) => { setName(e.target.value) }
    const setPhoneFunc = (e:any) => { setPhone(e.target.value) }
    const setEmailFunc = (e:any) => { setEmail(e.target.value) }


    return (
        <div>
            {
                send ? (
                    <h3>Thanks! We will get back to you as soon as possible.</h3>
                ) : (
                        <form onSubmit={onSubmit} >
                            <label>Name</label>
                            <input type="text" name="name" value={name} onChange={setNameFunc} />

                            <label>Phone nr</label>
                            <input type="tel" name="phone" value={phone} onChange={setPhoneFunc} />

                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={setEmailFunc} />

                            <input type="submit" value="SEND" className="ysds-button" />
                        </form>
                    )
            }
        </div>

    )
}

export default ContactForm;