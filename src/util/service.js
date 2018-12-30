import {DELETE_METHOD, POST_METHOD, PUT_METHOD} from '../constants'
import {BASE_SPARROW} from "./urls";
import includes from "lodash/includes";

const headers = {
    'mode': 'no-cors',
    'cache': 'no-cache',
    'credentials': 'same-origin',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BASE_SPARROW,
    'redirect': 'follow',
    'referrer': 'no-referrer'
}

export const fetchData = async ( {urlBean, data} ) => {
    try {
        const hasBody = isBodied(urlBean.method)
        let response = {}
        if (hasBody) {
            const config = getPostConfig(urlBean, data)
            response = await fetch(config.url, config.config)
        } else {
            const config = getGETConfig(urlBean, data)
            response = await fetch(config.url)
        }
        const respData = await response.json()
        return respData
    } catch (e) {
        console.error('Error occurred while trying to fetch data from : ' + urlBean.url, e)
    }
}

const getPostConfig = ( urlBean, data ) => {
    return {
        config: {
            headers,
            method: urlBean.method,
            body: data ? JSON.stringify(data) : undefined
        },
        url: urlBean.url
    }
}

const constructQueryStr = (url, data) => {
    if (!data) {
        return url
    }
    const ret = []
    for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
    const appendix = ret.join('&')
    console.log('Parts constructed >> ', appendix)
    const wholeURl = url.contains('?') ? `${url}&${appendix}` : `${url}?${appendix}`

    console.log('wholeURl >> ', wholeURl)
    return wholeURl
}

const getGETConfig = ( urlBean, data ) => {
    const fullURL = constructQueryStr(urlBean.url, data)
    return {
        config: {
            headers,
            method: urlBean.method
        },
        url: fullURL
    }
}

const isBodied = (method) => {
    const methods = [
        PUT_METHOD,
        POST_METHOD,
        DELETE_METHOD
    ]
    return includes(methods, method)
}
