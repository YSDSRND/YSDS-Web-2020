import React from 'react';
import {ConfigurableField, FieldLike, FieldType, get, isFieldOfType, ModelErrors, set} from "./ConfigurableField";

export type FieldList<T> = ReadonlyArray<FieldLike<T>>

type FormSection<T> = {
    title?: string
    description?: string
    className?: string
    fields: FieldList<T>
}

export type SectionList<T> = ReadonlyArray<FormSection<T>>;

type Props<T> = {
    sections: SectionList<T>
    onChange: (model: T, propertyDidChange: keyof T) => void
    model: T
    errors?: ModelErrors<T>
}

function sectionsToFields<T>(sections: SectionList<T>): FieldList<T> {
    let fields: FieldLike<T>[] = [];

    sections.forEach(section => {
        section.fields.forEach(field => {
            if (isFieldOfType(field, FieldType.String) && field.props && field.props.addonField) {
                fields.push(field.props.addonField);
            }

            fields.push(field);
        });
    });

    return fields as FieldList<T>;
}

export function validate<T, K extends keyof T>(sections: SectionList<T>, model: T): ModelErrors<T> {
    const errors: ModelErrors<T> = {};

    const fields = sectionsToFields(sections);

    fields.forEach(field => {
        if ( field.required === undefined || field.required(model) === false ) {
            return;
        }

        const value = get<T[K]>(model, field.property.toString())

        if (!value) {
            set(errors, field.property.toString(), ["This field is required!"]);
        }
    })

    return errors;
}

export const ConfigurableForm: <T>(props: Props<T>) => React.ReactElement<Props<T>> = props => {

    const sections = props.sections.map((section, i) => {
        const fields = section.fields.map((field, j) => {
            return <ConfigurableField
                key={j}
                field={field}
                model={props.model}
                onChange={props.onChange}
                errors={props.errors}
            />
        })

        return <div key={i} className={section.className || "form-section"}>
            <h4>{section.title}</h4>
            <p>{section.description}</p>
            <fieldset>
                {fields}
            </fieldset>
        </div>
    })

    return <div>
        {sections}
    </div>
}
