import { generateNanoId } from "../utils/helper.js";
import urlSchema from '../models/short_url.model.js';
import { saveShortUrl } from "../dao/short_url.js";
       
export const createShortUrlServiceWihoutuser = async (url)=>{
     const shortUrl =  await generateNanoId(7);
     if(!shortUrl) throw new Error("ShortURL not generrated");
    await saveShortUrl(url,shortUrl);  
        return shortUrl;
        // res.send(nanoid(7));
}


export const createShortUrlWithuser = async (url,userId)=>{
     const shortUrl =  await generateNanoId(7); // Generate a unique short URL
    await saveShortUrl(url,shortUrl,userId);  
        return shortUrl;
        // res.send(nanoid(7));
}