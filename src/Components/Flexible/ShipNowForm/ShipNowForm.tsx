import React, {FormEvent, useState} from "react";
import {ConfigurableForm, SectionList, validate} from "./ConfigurableForm";
import {FieldType, get, ModelErrors} from "./ConfigurableField";
import {BASE_URL} from "../../../Services/config";
import {Link} from "react-router-dom";
import currencies from './currencies.json';

export const ShipNowFormLayout = 'ship_now_form';

export type ShipNowFormProps = {
    acf_fc_layout: typeof ShipNowFormLayout
}
type ShipNowData = {
    type_of_request: string,
    sender_name: string,
    sender_contact: string,
    sender_line_1: string,
    sender_line_2: string,
    sender_line_3: string,
    sender_zip: string,
    sender_city: string,
    sender_state: string,
    sender_country: string,
    email: string,
    sender_phone: string,
    invoice_reference: string,
    recipient_name: string,
    recipient_contact: string,
    recipient_line_1: string,
    recipient_line_2: string,
    recipient_line_3: string,
    recipient_zip: string,
    recipient_city: string,
    recipient_state: string,
    recipient_country: string,
    recipient_email: string,
    recipient_phone: string,
    shipment_contents: string,
    shipment_parcels: string,
    shipment_weight: string,
    shipment_dimensions: string,
    shipment_service_level: string,
    shipment_insurance_value: string,
    shipment_insurance_currency: string,
    shipment_other_information: string,
    dangerous_goods: boolean,
    biological_substances: boolean,
    lithium_batteries: boolean,
    contact_me_for_guidance: boolean,
    dry_ice: boolean,
    dry_ice_weight: string,
    paying_taxes: string,
    customs_value: string,
    customs_declaration: string,
    privacy_policy: boolean,
    files: ReadonlyArray<File>,
}

export const ShipNowForm: React.FC<ShipNowFormProps> = props => {
    const [formData, setFormData] = useState<ShipNowData>({
        type_of_request: '',
        sender_name: '',
        sender_contact: '',
        sender_line_1: '',
        sender_line_2: '',
        sender_line_3: '',
        sender_zip: '',
        sender_city: '',
        sender_state: '',
        sender_country: '',
        email: '',
        sender_phone: '',
        invoice_reference: '',
        recipient_name: '',
        recipient_contact: '',
        recipient_line_1: '',
        recipient_line_2: '',
        recipient_line_3: '',
        recipient_city: '',
        recipient_state: '',
        recipient_country: '',
        recipient_zip: '',
        recipient_email: '',
        recipient_phone: '',
        shipment_contents: '',
        shipment_parcels: '',
        shipment_weight: '',
        shipment_dimensions: '',
        shipment_service_level: '',
        shipment_insurance_value: '',
        shipment_insurance_currency: '',
        shipment_other_information: '',
        dangerous_goods: false,
        biological_substances: false,
        lithium_batteries: false,
        contact_me_for_guidance: false,
        dry_ice: false,
        dry_ice_weight: '',
        paying_taxes: '',
        customs_value: '',
        customs_declaration: '',
        privacy_policy: false,
        files: [],
    })

    const [errors, setErrors] = useState<ModelErrors<ShipNowData>>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const formSections: SectionList<ShipNowData> = [
        {
            fields: [
                {
                    property: "type_of_request",
                    label: "Type of request",
                    placeholder: "Choose...",
                    type: FieldType.Select,
                    required: model => true,
                    props: {
                        options: model => {
                            return [
                                {
                                    value: 'order',
                                    label: "Order",
                                },
                                {
                                    value: 'quote',
                                    label: "Quote",
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            title: "Pickup from",
            fields: [
                {
                    property: "sender_name",
                    label: "Sender name",
                    placeholder: "Your Special Delivery Service",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "sender_contact",
                    label: "Sender contact",
                    placeholder: "John Doe",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "sender_line_1",
                    label: "Sender address 1",
                    placeholder: "Street Address",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "sender_line_2",
                    label: "Sender address 2",
                    placeholder: "Suite, Building, Floor, etc.",
                    type: FieldType.String,
                },
                {
                    property: "sender_line_3",
                    label: "Sender address 3",
                    placeholder: "Attention, Department, etc.",
                    type: FieldType.String,
                },
                {
                    property: "sender_zip",
                    label: "Sender zip",
                    placeholder: "10001",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "sender_state",
                    label: "Sender state",
                    placeholder: "NY",
                    type: FieldType.String,
                },
                {
                    property: "sender_city",
                    label: "Sender city",
                    placeholder: "New York",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "sender_country",
                    label: "Sender Country",
                    type: FieldType.Country,
                    placeholder: "Choose...",
                    required: model => true,
                },
                {
                    property: "email",
                    label: "Sender e-mail",
                    placeholder: "firstname.surname@company.com",
                    type: FieldType.String,
                    required: model => true,
                    props: {
                        type: 'email',
                    }
                },
                {
                    property: "sender_phone",
                    label: "Sender phone number",
                    placeholder: "+1 1-111 222 333",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "invoice_reference",
                    label: "Invoice reference",
                    placeholder: "ZZ12345 or PO12345",
                    type: FieldType.String,
                    required: model => true,
                },
            ],
        },
        {
            title: "Deliver to",
            fields: [
                {
                    property: "recipient_name",
                    label: "Recipient name",
                    placeholder: "Recipient Company Inc",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "recipient_contact",
                    label: "Recipient contact",
                    placeholder: "John Smith",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "recipient_line_1",
                    label: "Recipient address 1",
                    placeholder: "Street Address",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "recipient_line_2",
                    label: "Recipient address 2",
                    placeholder: "Suite, Building, Floor, etc.",
                    type: FieldType.String,
                },
                {
                    property: "recipient_line_3",
                    label: "Recipient address 3",
                    placeholder: "Attention, Department, etc.",
                    type: FieldType.String,
                },
                {
                    property: "recipient_zip",
                    label: "Recipient zip",
                    placeholder: "10001",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "recipient_state",
                    label: "Recipient state",
                    placeholder: "NY",
                    type: FieldType.String,
                },
                {
                    property: "recipient_city",
                    label: "Recipient city",
                    placeholder: "New York",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "recipient_country",
                    label: "Recipient Country",
                    type: FieldType.Country,
                    placeholder: "Choose...",
                    required: model => true,
                },
                {
                    property: "recipient_email",
                    label: "Recipient e-mail",
                    placeholder: "john.smith@receivercompany.com",
                    type: FieldType.String,
                    required: model => true,
                    props: {
                        type: 'email',
                    }
                },
                {
                    property: "recipient_phone",
                    label: "Recipient phone number",
                    placeholder: "+1 1-111 222 333",
                    type: FieldType.String,
                    required: model => true,
                },
            ],
        },
        {
            title: "Shipment information",
            fields: [
                {
                    property: "shipment_contents",
                    label: "Contents",
                    placeholder: "Biological samples on dry ice/ IT Equipment / Documents / Spare parts / Marketing material",
                    type: FieldType.Textarea,
                    required: model => true,
                },
                {
                    property: "shipment_parcels",
                    label: "Number of parcels",
                    placeholder: "2",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "shipment_weight",
                    label: "Total weight",
                    placeholder: "5 kg",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "shipment_dimensions",
                    label: "Dimensions (WxLxH in CM)",
                    placeholder: "30 x 30 x 30",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "shipment_service_level",
                    label: "Desired service level (delivered before)",
                    type: FieldType.Radio,
                    required: model => true,
                    props: {
                        options: model => {
                            return [
                                {
                                    value: '12:00',
                                    label: "12:00",
                                },
                                {
                                    value: '17:00',
                                    label: "17:00",
                                },
                                {
                                    value: 'special',
                                    label: "Special",
                                },
                                {
                                    value: 'pallet_transport',
                                    label: "Pallet transport",
                                }
                            ]
                        }
                    }
                },
                {
                    property: "shipment_insurance_value",
                    label: "Insurance value",
                    placeholder: "500",
                    type: FieldType.String,
                    required: model => true,
                    props: {
                        addonField: {
                            property: "shipment_insurance_currency",
                            label: "Currency",
                            placeholder: "Currency",
                            type: FieldType.Select,
                            required: model => true,
                            props: {
                                options: model => {
                                    return Object.keys(currencies as Record<string, string>).map(key => {
                                        return {
                                            value: key,
                                            label: key,
                                        }
                                    })
                                }
                            }
                        }
                    }
                },
                {
                    property: "shipment_other_information",
                    label: "Other information",
                    placeholder: "Biological samples on dry ice/ IT Equipment / Documents / Spare parts / Marketing material",
                    type: FieldType.Textarea,
                },
            ]
        },
        {
            title: "Dangerous goods information",
            fields: [
                {
                    property: "dangerous_goods",
                    label: "Dangerous goods",
                    type: FieldType.Checkbox,
                },
                {
                    property: "biological_substances",
                    label: "Biological substances (UN3373)",
                    type: FieldType.Checkbox,
                },
                {
                    property: "lithium_batteries",
                    label: "Lithium batteries",
                    type: FieldType.Checkbox,
                },
                {
                    property: "contact_me_for_guidance",
                    label: "Contact me for guidance",
                    type: FieldType.Checkbox,
                },
                {
                    property: "dry_ice",
                    label: "Dry ice",
                    type: FieldType.Checkbox,
                },
                {
                    property: "dry_ice_weight",
                    label: "Dry ice weight",
                    placeholder: "5 kg",
                    type: FieldType.String,
                    required: model => model.dry_ice,
                    hide: model => !model.dry_ice,
                }
            ]
        },
        {
            title: "For recipients outside the EU",
            fields: [
                {
                    property: "paying_taxes",
                    label: "Who is paying for taxes/duties?",
                    type: FieldType.Radio,
                    props: {
                        options: model => {
                            return [
                                {
                                    value: 'contact_me_for_guidance',
                                    label: "Contact me for guidance",
                                },
                                {
                                    value: 'sender',
                                    label: "Sender (DDP)",
                                },
                                {
                                    value: 'receiver',
                                    label: "Receiver (DAP)"
                                },
                            ]
                        },
                    }
                },
                {
                    property: "customs_value",
                    label: "Customs value (USD)",
                    placeholder: "500 USD",
                    type: FieldType.String,
                },
                {
                    property: "customs_declaration",
                    label: "Customs declaration (description)",
                    placeholder: "IT material, servers / Documents / Samples for research purposes only",
                    type: FieldType.Textarea,
                },
                {
                    property: "files",
                    label: "Please attach invoice, proforma and other documents here",
                    type: FieldType.File,
                    props: {
                        multiple: true,
                    }
                }
            ]
        },
        {
            title: "Privacy policy",
            fields: [
                {
                    property: "privacy_policy",
                    label: <>I agree to the following <Link to="/privacy-policy" target="_blank">Privacy policy</Link> </>,
                    type: FieldType.Checkbox,
                    required: model => true,
                }
            ]
        }
    ]

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const modelErrors = validate(formSections, formData);

        setErrors(modelErrors);

        if (!!Object.keys(modelErrors).length) {
            return;
        }

        const body = new FormData();

        Object.keys(formData).forEach(key => {
            if (key === 'files') {
                const files = formData[key];
                files.forEach((file, i) => {
                    body.append(`file_${i}`, file);
                })
            } else {
                body.append(key, (get(formData, key) || ''));
            }
        })

        body.append('type', 'shipping');

        setLoading(true);

        fetch(BASE_URL + '/qte/v1/contact', {
            method: 'POST',
            body: body,
        }).then((res: any) => {
            setLoading(false);
            setSubmitted(true);
        });
    };

    return <div className="shipping-form">
        <div className="main-inner">
        {loading ? <div className="loading-overlay">
                <div className="spinner"></div>
            </div> : null }
        { !submitted ?
            <>
                <h2>Order form</h2>
                <p>All missions are carried out in accordance to our terms and conditions.</p>
                <form onSubmit={onSubmit}>
                    <ConfigurableForm<ShipNowData>
                        sections={formSections}
                        onChange={((model, propertyDidChange) => {
                            const newFormData = {
                                ...formData,
                                [propertyDidChange]: model[propertyDidChange]
                            };
                            setFormData(newFormData);
                        })}
                        model={formData}
                        errors={errors}
                    />
                    <input type="submit" value="Send" className="ysds-button big red"/>
                </form>
            </>
        : <h3>Thank you! We will get in touch ASAP!</h3> }
        </div>
    </div>
}
