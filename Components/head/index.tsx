import NextHead from "next/head";
import React from "react";

interface Title {
    title: string
}


export default function Head ({title}: Title){
    return (
        <NextHead>
            <title>{title}</title>
        </NextHead>
    )
}