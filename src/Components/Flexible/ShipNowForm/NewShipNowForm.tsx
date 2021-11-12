import React, {FormEvent, useState} from "react";
import {ConfigurableForm, SectionList, validate} from "./ConfigurableForm";
import {FieldType, get, ModelErrors} from "./ConfigurableField";
import {BASE_URL} from "../../../Services/config";
import {Link} from "react-router-dom";
import currencies from './currencies.json';
import Swal from 'sweetalert2';

export const ShipNowFormLayout = 'ship_now_form';

export type ShipNowFormProps = {
    acf_fc_layout: typeof ShipNowFormLayout
}
type ShipNowData = {
    type_of_request: string,
    sender: string
    sender_country: string,
    email: string,
    sender_phone: string,
    invoice_reference: string,
    recipient: string
    recipient_name: string,
    recipient_country: string,
    recipient_email: string,
    recipient_phone: string,
    shipment_contents: string,
    shipment_parcels: string,
    shipment_weight: string,
    shipment_dimensions: string,
    shipment_insurance_value: string,
    shipment_other_information: string,
    shipment_temperature_required: string,
    shipment_temperature: string,
    shipment_date: string,
    dangerous_goods: ReadonlyArray<string>,
    customs_value: string,
    customs_reason: string
    privacy_policy: boolean,
    files: ReadonlyArray<File>,
}

export const NewShipNowForm: React.FC<ShipNowFormProps> = props => {
    const [formData, setFormData] = useState<ShipNowData>({
        type_of_request: '',
        sender: '',
        sender_country: '',
        email: '',
        sender_phone: '',
        invoice_reference: '',
        recipient: '',
        recipient_name: '',
        recipient_country: '',
        recipient_email: '',
        recipient_phone: '',
        shipment_contents: '',
        shipment_parcels: '',
        shipment_weight: '',
        shipment_dimensions: '',
        shipment_insurance_value: '',
        shipment_other_information: '',
        shipment_temperature_required: '',
        shipment_temperature: '',
        shipment_date: '',
        dangerous_goods: [],
        customs_value: '',
        customs_reason: '',
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
            title: "Ship from",
            fieldsetClassName: 'grid grid-cols-2 gap-4 py-4',
            fields: [
                {
                    property: "sender",
                    label: "Sender (Company & Address)",
                    placeholder: "YSDS",
                    type: FieldType.Textarea,
                    required: model => true,
                    containerClassName: "row-span-4",
                },
                {
                    property: "invoice_reference",
                    label: "Invoice reference",
                    placeholder: "ZZ12345 or PO12345",
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
            ],
        },
        {
            title: "Ship to",
            fieldsetClassName: 'grid grid-cols-2 gap-4 py-4',
            fields: [
                {
                    property: "recipient",
                    label: "Recipient (Company & Address)",
                    type: FieldType.Textarea,
                    required: model => true,
                    containerClassName: "row-span-4",
                },
                {
                    property: "recipient_name",
                    label: "Attention (person)",
                    type: FieldType.String,
                    required: model => true,
                },
                {
                    property: "recipient_country",
                    label: "Reciver Country",
                    type: FieldType.Country,
                    placeholder: "Choose...",
                    required: model => true,
                },
                {
                    property: "recipient_email",
                    label: "Reciver e-mail",
                    placeholder: "john.smith@receivercompany.com",
                    type: FieldType.String,
                    required: model => true,
                    props: {
                        type: 'email',
                    }
                },
                {
                    property: "recipient_phone",
                    label: "Reciver phone",
                    placeholder: "+1 1-111 222 333",
                    type: FieldType.String,
                    required: model => true,
                },
            ],
        },
        {
            title: "Shipment information",
            fieldsetClassName: 'grid grid-cols-6 gap-4 py-4',
            fields: [
                {
                    property: "shipment_contents",
                    label: "Contents",
                    placeholder: "Biological samples on dry ice/ IT Equipment / Documents / Spare parts / Marketing material",
                    type: FieldType.Textarea,
                    required: model => true,
                    containerClassName: "col-span-6"
                },
                {
                    property: "shipment_parcels",
                    label: "Number of boxes",
                    placeholder: "2",
                    type: FieldType.String,
                    required: model => true,
                    containerClassName: "col-span-2",
                },
                {
                    property: "shipment_weight",
                    label: "Weight of boxes",
                    placeholder: "5 kg",
                    type: FieldType.String,
                    required: model => true,
                    containerClassName: "col-span-2",
                },
                {
                    property: "shipment_dimensions",
                    label: "Dimensions (LxWxH cm)",
                    placeholder: "30 x 30 x 30",
                    type: FieldType.String,
                    required: model => true,
                    containerClassName: "col-span-2",
                },
                {
                    property: "shipment_date",
                    label: "Desired pick-up (date)",
                    type: FieldType.String,
                    required: model => true,
                    containerClassName: "col-span-3",
                },
                {
                    property: "shipment_insurance_value",
                    label: "Value of the item (SEK/EUR/USD)",
                    type: FieldType.String,
                    containerClassName: "col-span-3",
                },
                {
                    property: "shipment_temperature_required",
                    label: "Shall item be delivered in a specific temperature?",
                    type: FieldType.Radio,
                    props: {
                        options: model => ([
                            {
                                label: "Yes",
                                value: "yes",
                            },
                            {
                                label: "No",
                                value: "no",
                            }
                        ])
                    },
                    containerClassName: "col-span-3",
                },
                {
                    property: "shipment_temperature",
                    label: "Choose temperature",
                    type: FieldType.Radio,
                    props: {
                        options: model => ([
                            {
                                label: "+15°C to +25°C",
                                value: "+15°C to +25°C",
                            },
                            {
                                label: "+2°C to +8°C",
                                value: "+2°C to +8°C",
                            },
                            {
                                label: "-25°C to -15°C",
                                value: "-25°C to -15°C",
                            }, 
                            {
                                label: "Dry Ice",
                                value: "Dry Ice",
                            },
                            {
                                label: "Dry shipper/ Liquid nitrogen",
                                value: "Dry shipper/ Liquid nitrogen",
                            },
                        ])
                    },
                    containerClassName: "col-span-3",
                    hide: model => model.shipment_temperature_required !== 'yes',
                },
                {
                    property: "dangerous_goods",
                    label: "Dangerous goods",
                    type: FieldType.CheckboxGroup,
                    props: {
                        options: model => ([
                            {
                                label: "Lithium batteries",
                                value: "Lithium batteries",
                            },
                            {
                                label: "Biological substances (UN3373)",
                                value: "Biological substances (UN3373)",
                            }
                        ])
                    },
                    containerClassName: "col-span-6"
                },
                {
                    property: "shipment_other_information",
                    label: "Other information regarding item",
                    type: FieldType.Textarea,
                    containerClassName: 'col-span-6'
                },
                {
                    property: "files",
                    label: "Please attach invoice, proforma and other documents here",
                    type: FieldType.File,
                    containerClassName: "col-span-6",
                    props: {
                        multiple: true,
                    }
                }
            ]
        },
        {
            title: "For recipients outside the EU",
            fields: [
                {
                    property: "customs_value",
                    label: "Value for Customs",
                    placeholder: "500 USD",
                    type: FieldType.String,
                },
                {
                    property: "customs_reason",
                    label: "Reason for transport (For example sample/commercially/repair etc):",
                    type: FieldType.Textarea,
                },
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
            Swal.fire({
                title: 'Missing fields!',
                text: 'Oh no! You have a couple of missing fields in the form. We\'ve highlighted them in the form.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
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
