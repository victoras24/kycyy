import React from 'react'
import Layout from "./components/Layout"
import Search from "./pages/Search"
import '../src/index.css'
import { Routes, Route, HashRouter } from "react-router-dom"

export default function App() {
    return (
        <HashRouter >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Search />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}