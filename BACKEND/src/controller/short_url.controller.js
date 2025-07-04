import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithuser, createShortUrlWihoutuser } from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body

    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithuser(data.url,req.user._id,data.slug)
    }else{  
        shortUrl = await createShortUrlWihoutuser(data.url,data.slug)
    }
      console.log("Generated shortUrl:", shortUrl);

  if (!shortUrl) {
    return res.status(400).json({ success: false, message: "shortUrl is not defined" });
  }
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (!url) {
    return res.status(404).send("Short URL not found");
  }
  res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
  const {url, slug} = req.body;
  const shortUrl = await createShortUrlWihoutuser(url, slug);
  res.status(200).json({shortUrl : process.env.APP_URL + shortUrl});
})
