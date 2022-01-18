import axios from 'axios';
import { useEffect } from 'react'


const ManCloth = (state = [], action) => {
    switch (action.type) {
        case "MEN_CLOTH": return (
            useEffect(() => {
                const getData = async () => {
                    const res = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`).catch((error) => {
                        alert("error msg");
                    });;
                    const actualData = res.data;
                    console.log(actualData);
                    state(actualData);
                }
                getData();
            }, [])
        )
    }
}

export default ManCloth;