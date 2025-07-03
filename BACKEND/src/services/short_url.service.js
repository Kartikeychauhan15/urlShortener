import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js";
import { getCustomUrl, saveShortUrl } from "../dao/short_url.js";

// export const createShortUrlServiceWihoutuser = async (url)=>{
//      const shortUrl =  await generateNanoId(7);
//      if(!shortUrl) throw new Error("ShortURL not generrated");
//     await saveShortUrl(url,shortUrl);
//         return shortUrl;
//         // res.send(nanoid(7));
// }

// export const createShortUrlServiceWihoutuser = async (url) => {
//     let shortUrl, success = false;

//     while (!success) {
//         shortUrl = await generateNanoId(7);
//         try {
//             await saveShortUrl(url, shortUrl);
//             success = true; // If save succeeds, break the loop
//         } catch (err) {
//             if (err.name === "ConflictError") {
//                 // Short URL already exists — generate a new one
//                 continue;
//             }
//             throw err; // Rethrow other errors
//         }
//     }

//     return shortUrl;
// }

export const createShortUrlWihoutuser = async (url) => {
  let shortUrl;
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    shortUrl = await generateNanoId(7);
    try {
      await saveShortUrl(shortUrl, url); 
      return shortUrl; 
    } catch (err) {
      if (err.name === "ConflictError") {
        attempts++;
        continue; // 🔁 Try again with new shortUrl
      }
      throw err;
    }
  }

  throw new Error(
    "Could not generate a unique short URL after several attempts"
  );
};

export const createShortUrlWithuser = async (url, userId, slug=null) => {
  let shortUrl,
    success = false;

  while (!success) {
    shortUrl = slug ||  generateNanoId(7);
    const exists = await getCustomUrl(slug);
    if(exists) throw new Error("Custom slug already exists");
    try {
      await saveShortUrl(url, shortUrl, userId); 
      success = true;
    } catch (err) {
      if (err.name === "ConflictError") {
        continue;
      }
      throw err;
    }
  }

  return shortUrl;
};

// export const createShortUrlWithuser = async (url,userId)=>{
//      const shortUrl =  await generateNanoId(7); // Generate a unique short URL
//     await saveShortUrl(url,shortUrl,userId);
//         return shortUrl;
//         // res.send(nanoid(7));
// }
