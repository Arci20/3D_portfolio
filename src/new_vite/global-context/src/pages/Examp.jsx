import React, { useEffect, useState } from "react";
import axios from "axios";

const Examp = () => {

const [post, setPost] = useState(null)

useEffect(() => {
    const Fetch = () => {
        axios.get('"https://api.github.com/users/QuincyLarson"').then(response => {
            console.log(response.data)
            setPost(response.data)}).catch(error => {
                console.log(error.data)
            })
    }

    Fetch();
})

    return [post];
}