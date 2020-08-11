import React, {ChangeEvent, useEffect, useState} from 'react';
import {BASE_URL} from "../../../Services/config";
import {useSelector} from "react-redux";
import {AppState} from "../../../Store";

type Props = {
    value?: string,
    onChange?: (iso: string) => void
    disabled?: boolean
    placeholder?: string
    className?: string
    name?: string
}

export const CountryDropdown: React.FC<Props> = props => {

    const countries = useSelector((state: AppState) => state.countries);

    const options = Object.keys(countries).map((iso) => {
        return <option key={iso} value={iso} >{countries[iso]}</option>;
    })

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if ( props.onChange ) {
            props.onChange(event.target.value)
        }
    }

    return <select className={props.className || "country-dropdown"} value={props.value} onChange={onChange} disabled={props.disabled} name={props.name}>
        { props.placeholder ? <option>{props.placeholder}</option> : null }
        {options}
    </select>
}