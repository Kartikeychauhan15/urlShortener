import { generateNanoId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

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



export const createShortUrlWithuser = async (url,userId,slug=null) => {
    const shortUrl = slug || generateNanoId(7)
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom url already exists")

    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}

