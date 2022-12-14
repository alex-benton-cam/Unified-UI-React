
import { useEffect, useState } from 'react'
const axios = require('axios').default;

export default function AxiosWrapper(props) {

    const [data, setData] = useState(null);
    useEffect(() => { doRequest(props.method, props.url) }, []);

    function doRequest(method, URL) {

        if (method.toUpperCase() === "GET") {

            axios.get(URL)
                .then(function (response) {
                    const dataReceived = response.data.results;
                    setData(dataReceived);
                    console.log("Response:");
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };

    return data
};


async function axiosWrapper2(method, url, data=null) {

    if (method.toUpperCase() === "GET") {

        const res = await axios.get(url)
            .catch(function (error) {
                console.log(error);
            });
        if(res) {
        console.log("Async Result:");
        console.log(res.data.results);
        return res.data.results;}


    } else if (method.toUpperCase() === "POST") {

        console.log("Posting:");
        console.log(data);
        const res = await axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
          
    };

}

export { axiosWrapper2 };