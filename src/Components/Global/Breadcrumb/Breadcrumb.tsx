import React from 'react';
import {Link} from "react-router-dom";

type Props = {
    items: BreadcrumbItem[]
}

export type BreadcrumbItem = {
    title: string
    uri: string
}

export const Breadcrumb: React.FC<Props> = props => {

    return <section className="breadcrumb">
        {props.items.map((item, i) => {
            const last = (props.items.length - 1) === i;
            return <div className="breadcrumb-item">
                { last ? <p>{item.title}</p> : <Link to={item.uri}>{item.title}</Link> }
            </div>
        })}
    </section>
}