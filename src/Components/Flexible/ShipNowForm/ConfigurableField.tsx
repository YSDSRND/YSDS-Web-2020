import React, {ReactElement} from 'react';
import { optionsReducer } from '../../../Store/Options/OptionsReducer';
import {CountryDropdown} from "../../Global/CountryDropdown/CountryDropdown";

export enum FieldType {
    String,
    Textarea,
    Select,
    Checkbox,
    CheckboxGroup,
    Radio,
    File,
    Country,
}

type Field<T, U extends FieldType, K extends keyof T> = {
    property: K
    label: JSX.Element | string
    placeholder?: string
    type: U
    hide?: (model: T) => boolean
    className?: string
    containerClassName?: string
    required?: (model: T) => boolean
}

interface StringField<T, K extends keyof T> extends Field<T, FieldType.String, K> {
    props?: {
        type?: string
        addonField?: FieldLike<T>
    }
}

interface TextareaField<T, K extends keyof T> extends Field<T, FieldType.Textarea, K> {
    props?: {
        rows?: number
    }
}

type CheckboxField<T, K extends keyof T> = Field<T, FieldType.Checkbox, K>;

interface FileField<T, K extends keyof T> extends Field<T, FieldType.File, K>  {
    props?: {
        multiple?: boolean
    }
}

interface SelectField<T, K extends keyof T> extends Field<T, FieldType.Select, K> {
    props: {
        options: (model: T) => ReadonlyArray<Option>
    }
}

interface RadioField<T, K extends keyof T> extends Field<T, FieldType.Radio, K> {
    props: {
        options: (model: T) => ReadonlyArray<Option>
    }
}

interface CheckboxGroupField<T, K extends keyof T> extends Field<T, FieldType.CheckboxGroup, K> {
    props: {
        options: (model: T) => ReadonlyArray<Option>
    }
}

type Option = {
    value: string,
    label: string
}

type CountryField<T, K extends keyof T> = Field<T, FieldType.Country, K>;

export type FieldLike<T> = {
    [K in keyof T]:
        | StringField<T, K>
        | TextareaField<T, K>
        | CheckboxField<T, K>
        | SelectField<T, K>
        | RadioField<T, K>
        | FileField<T, K>
        | CountryField<T, K>
        | CheckboxGroupField<T, K>
}[keyof T]

type Props<T> = {
    field: FieldLike<T>
    model: T
    onChange: (model: T, propertyDidChange: keyof T) => void
    errors?: ModelErrors<T>
}

type FieldTypeMap<T, K extends keyof T> = {
    [FieldType.String]: StringField<T, K>
    [FieldType.Textarea]: TextareaField<T, K>
    [FieldType.Checkbox]: CheckboxField<T, K>
    [FieldType.Select]: SelectField<T, K>
    [FieldType.Radio]: RadioField<T, K>
    [FieldType.File]: FileField<T, K>
    [FieldType.Country]: CountryField<T, K>
    [FieldType.CheckboxGroup]: CheckboxGroupField<T, K>
}

export type ModelErrors<T> = {
    [K in keyof T]?: T[K] extends object
        ? ModelErrors<T[K]>
        : ReadonlyArray<string>
}

function stringifyValue<T>(value: T): string {
    if (typeof value === 'undefined' || value === null) {
        return ''
    }
    return String(value)
}

export function isFieldOfType<T, K extends keyof T, U extends FieldType>(field: Field<T, FieldType, K>, type: U): field is FieldTypeMap<T, K>[U] {
    return field.type === type
}

export function getPartsOfPath(path: string): ReadonlyArray<string> {
    return path
        .replace(/^\[/, '') // remove leading bracket
        .replace(/\]$/, '') // remove trailing bracket
        .replace(/\]?\[/g, '.') // replace brackets with dots
        .split('.')
}

export function get<T>(item: unknown, path: string): T | undefined {
    const parts = getPartsOfPath(path)
    let slice = item as T

    for (let i = 0; i < parts.length; ++i) {
        const part = parts[i]

        if (!Object.prototype.hasOwnProperty.call(slice, part)) {
            return undefined
        }
        slice = (slice as any)[part]
    }

    return slice
}

export function set(item: unknown, path: string, value: unknown): void {
    const parts = getPartsOfPath(path)
    let slice = item

    // we want to use the last part of the path
    // to put the value into place, so let's keep
    // one item in the parts array.
    const endIndex = parts.length - 1

    for (let i = 0; i < endIndex; ++i) {
        const part = parts[i]

        if (!Object.prototype.hasOwnProperty.call(slice, part)) {
            (slice as any)[part] = {}
        }

        slice = (slice as any)[part]
    }

    (slice as any)[parts[endIndex]] = value
}

export function classNames(classMap: Record<string, boolean>): string {
    return Object.keys(classMap)
        .filter(key => classMap[key])
        .join(' ')
}


export function ConfigurableField<T, K extends keyof T = keyof T>(props: Props<T>): ReactElement {

    let view: React.ReactNode = null;

    const {field, model} = props;
    const value = get<T[K]>(model, field.property.toString())
    const stringified = stringifyValue(value)
    const errors: string[] = get((props.errors || {}), field.property.toString()) || [];

    if ( isFieldOfType(field, FieldType.String) ) {
        view = (
            <input
                className={field.className || "form-control"}
                name={field.property.toString()}
                value={stringified}
                type={(field.props || {}).type || 'text'}
                placeholder={field.placeholder}
                onChange={event => {
                    const newModel = {
                        ...model,
                        [field.property]: event.target.value.toString(),
                    }
                    props.onChange(newModel, field.property)
                }}
            />
        )
    }
    else if ( isFieldOfType(field, FieldType.Textarea)) {
        const rows = field.props ? field.props.rows : 8

        view = (
            <textarea
                className={field.className || "form-control"}
                name={field.property.toString()}
                value={stringified}
                placeholder={field.placeholder}
                rows={rows}
                onChange={event => {
                    const newModel = {
                        ...model,
                        [field.property]: event.target.value.toString(),
                    }
                    props.onChange(newModel, field.property)
                }}
            />
        )
    }
    else if ( isFieldOfType(field, FieldType.Select) ) {
        view = (
            <select
                className={field.className || "form-control"}
                name={field.property.toString()}
                value={stringified}
                onChange={event => {
                    const newModel = {
                        ...model,
                        [field.property]: event.target.value.toString(),
                    }
                    props.onChange(newModel, field.property)
                }} >
                <option>{field.placeholder}</option>
                {field.props.options(model).map((option, j) => {
                    return <option key={j} value={option.value}>{option.label}</option>
                })}
            </select>
        )
    } else if ( isFieldOfType(field, FieldType.Radio) ) {
        view = field.props.options(model).map((option, j) => {
            return <label className="radio-label" key={j}>
                <input
                    className={field.className || "form-control"}
                    name={field.property.toString()}
                    checked={option.value === stringified}
                    type="radio"
                    value={option.value}
                    onChange={event => {
                        const newModel = {
                            ...model,
                            [field.property]: event.target.value.toString(),
                        }
                        props.onChange(newModel, field.property)
                    }}
                />
                <span>{option.label}</span>
            </label>
        })
    } else if ( isFieldOfType(field, FieldType.Checkbox) ) {
        view = (
            <input
                className={field.className || "form-control"}
                name={field.property.toString()}
                checked={!!value}
                type="checkbox"
                onChange={event => {
                    const newModel = {
                        ...model,
                        [field.property]: event.target.checked,
                    }
                    props.onChange(newModel, field.property)
                }}
            />
        )
    } else if ( isFieldOfType(field, FieldType.File) ) {
        const multiple = field.props ? field.props.multiple : false;
        view = (
            <input
                className={field.className || "form-control"}
                name={field.property.toString()}
                type="file"
                multiple={multiple}
                onChange={event => {
                    const newModel = {
                        ...model,
                        [field.property]: Array.from(event.target.files || []),
                    }
                    props.onChange(newModel, field.property)
                }}
            />
        )
    } else if ( isFieldOfType(field, FieldType.Country) ) {
        view = (
            <CountryDropdown
                className={field.className || "form-control"}
                name={field.property.toString()}
                placeholder={field.placeholder}
                onChange={iso => {
                    const newModel = {
                        ...model,
                        [field.property]: iso,
                    }
                    props.onChange(newModel, field.property)
                }}
            />
        )
    } else if ( isFieldOfType( field, FieldType.CheckboxGroup ) ) {
        const values = get<ReadonlyArray<string>>(model, field.property.toString())
        view = field.props.options(model).map((option, j) => {
            return <label className="radio-label" key={j}>
                <input
                    className={field.className || "form-control"}
                    name={field.property.toString()}
                    checked={values?.findIndex(v => v === option.value) !== -1}
                    type="checkbox"
                    value={option.value}
                    onChange={event => {
                        const newValues = (values || []).slice()
                        const newModel = {
                            ...model,
                            [field.property]: event.target.checked ?  newValues.concat(option.value) : newValues.filter(v => v !== option.value),
                        }
                        props.onChange(newModel, field.property)
                    }}
                />
                <span>{option.label}</span>
            </label>
        })
    }

    const asterisk = field.required ? <span className="required-asterisk">*</span> : null
    const hidden = !(field.hide === undefined || field.hide(model) === false);

    const subView = isFieldOfType(field, FieldType.String) && field.props && field.props.addonField
        ? <ConfigurableField
            field={field.props.addonField}
            model={props.model}
            onChange={props.onChange}
            errors={props.errors}
        />
        : null;

    const clazz = classNames({
        "form-row": true,
        "addon": !!subView,
        "hide": hidden,
        [props.field.containerClassName || '']: true
    });

    return <>
        <div className={clazz}>
            {isFieldOfType(field, FieldType.Checkbox) ?
                <label className={field.className || "form-control"}>
                    {view}
                    <span>{field.label}{asterisk}</span>
                </label>
            :
                <>
                    <label>{field.label}{asterisk}</label>
                    {view}

                </>
            }
            {errors ?
                <ul className="errors">
                    {errors.map((error, i) => {
                        return <li key={`${field.property.toString()}-error-${i}`}>{error}</li>;
                    })}
                </ul>
            : null}
        </div>
        {subView}
    </>
}
