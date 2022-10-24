import Response from "../defultComponent/response.tsx";
import axios from "axios";

var http = "http://127.0.0.1:4001"

export default class BaseService {
    private static baseURL: string = `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_SERVER_PORT}`;


    public static async getAll<T>(url: string): Promise<Response> {
        let res = await axios.get<Array<T>>(http + url)
            .then((response: any) => {
                const result = response.data;
                // console.log(result);
                // console.log(response);
                if (result && response.status === 200) {
                    return new Response(true, result as Array<T>, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }

            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        // console.log(res);
        return res;
    }

    public static fetch<T>(url: string): Promise<Response> {
        console.log("aaaa", http, "dddd", url)
        let res = axios.get<T>(http + url)
            .then((response: any) => {
                console.log('response: ', response)
                return response;
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }



    public static get<T>(url: string, param: any): Promise<Response> {
        let res = axios.get<T>(http + url + param)
            .then((response: any) => {
                // console.log('response: ', response)
                const result = response.data;
                //console.log('data: ', result);
                if (result) {//&& response.status === 200){
                    return new Response(true, result, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static delete(url: string, param: any): Promise<Response> {
        
        let res = axios.delete(http + url + param.id)
        .then(response => {
                const result = response.data
                //const result = response;
                // console.log(result)
                if (response) {//&& result.success){
                    return new Response(true, result, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }
    public static create<T>(url: string, obj: T): Promise<Response> {
        // console.log(obj)
        let res = axios.post(http + url, obj)
            .then(response => {
                // console.log(url)
                // console.log(obj)
                const result = response.data;
                if (result) {//&& result.success){
                    return new Response(true, result, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }
    public static update<T>(url: string, param: any, obj: T): Promise<Response> {
        let res = axios.put(http + url + param, obj)
            .then(response => {
                const result = response.data;
                // console.log(response)
                if (result) {//&& result.success){
                    return new Response(true, result, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);;
            });
        return res;
    }
    public static put(url: string): Promise<Response> {
        let res = axios.put(http + url)
            .then(response => {
                // console.log("url", url)
                const result = response.data;
                // console.log("result", result)
                if (result) {//&& result.success){
                    return new Response(true, result, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }
}
