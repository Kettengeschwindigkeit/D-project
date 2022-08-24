import React from "react";

export function Items({ data }) {

    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.term} : {item.translate}</li>)}
        </ul>
    )
}
