import { useEffect, useState } from "react";

function UseCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/9661351d5880514548775c81/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.conversion_rates))
    },[currency])
    console.log(data)
    return data
}

export default UseCurrencyInfo;