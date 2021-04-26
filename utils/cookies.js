import { serialize } from "cookie";

export const setCookie = (res, name, value, options = {}) => {
    const stringValue = String(value);

    if ('maxAge' in options){
        options.maxAge;
    }

    res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}