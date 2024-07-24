"use client"
import NextImage from "next/image"
import { useEffect } from "react"
import React from "react"
const Image = ({...props}:any) =>{

    console.log(props.src)
    useEffect(() =>{

    },[])
    return <img {...props} src={"/"+props.src} priority="true" alt={props.alt || "image"} />
}
export default Image