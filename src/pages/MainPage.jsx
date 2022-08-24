import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category } from "../components/Category";
import { Items } from "../components/Items";

export function MainPage({ categories, data }) {

    return (
        <>
            <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
                {categories.map(category => <Category key={category.id} category={category} />)}
            </ul>
            <Routes>
                {data.map(item => <Route key={item.id + 1} path={`/${item.title}`} element={<Items data={item.content} />} />)}
            </Routes>
        </>
    )
}
