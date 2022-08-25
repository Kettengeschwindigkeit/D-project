import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Category({ category }) {
    const [subCategories, setSubCategories] = useState(false)

    return (
        <>
            <button className="w-[190px] border px-1 py-1 text-gray-600 bg-gray-100" key={category.id} onClick={() => setSubCategories(prev => !prev)}>{category.name}</button>
            <ul>
                {subCategories ? category.subCategories.map(sub => <li className="w-[190px] text-center bg-white border" key={sub.id}><Link to={sub.path}>{sub.title}</Link></li>) : null}
            </ul>
        </>
    )
}
