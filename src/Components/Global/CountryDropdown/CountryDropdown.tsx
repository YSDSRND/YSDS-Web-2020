import React, {ChangeEvent} from 'react';
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

    const options = countries.map((country) => {
        return <option key={country.iso} value={country.iso} >{country.name}</option>;
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
