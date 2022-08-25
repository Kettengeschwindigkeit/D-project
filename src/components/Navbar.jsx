import React from "react"
import { Category } from "./Category"

export function Navbar({ categories }) {
    return (
        <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
            {categories.map(category => <Category key={category.id} category={category} />)}
        </ul>
    )
}
