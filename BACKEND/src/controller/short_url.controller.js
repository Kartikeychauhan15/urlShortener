import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlServiceWihoutuser } from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
// import { generateNanoId } from "../utils/helper";

export const createShortUrl = wrapAsync(async (req, res, next) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlServiceWihoutuser(url);
  res.send(process.env.APP_URL + shortUrl);
});

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (!url) {
    return res.status(404).send("Short URL not found");
  }
  res.redirect(url.full_url);
});
