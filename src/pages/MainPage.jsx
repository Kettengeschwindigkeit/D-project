import React from "react"
import { Routes, Route } from "react-router-dom"
import { Items } from "../components/Items"
import { Navbar } from "../components/Navbar"

export function MainPage({ categories, data }) {

    return (
        <>
            <Navbar categories={categories} />
            <Routes>
                {data.map(item => <Route key={item.id + 1} path={`/${item.title}`} element={<Items data={item.content} />} />)}
            </Routes>
        </>
    )
}
