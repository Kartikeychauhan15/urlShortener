import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";
import QRCode from "qrcode";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    // Construct full short URL for QR code
    const fullShortUrl = `${process.env.APP_URL}${shortUrl}`;

    // Generate QR code
    const qrCodeDataURL = await QRCode.toDataURL(fullShortUrl);

    // Create entry
    const newUrl = new urlSchema({
      full_url: longUrl,
      short_url: shortUrl,
      qrCode: qrCodeDataURL,
      user: userId || null,
    });

    await newUrl.save();

    // Return saved data to service → controller → frontend
    return {
      shortUrl: fullShortUrl,
      qrCode: qrCodeDataURL,
      slug: shortUrl,
    };
  } catch (err) {
    if (err.code === 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw err;
  }
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } },
    { new: true } // optional: returns the updated document
  );
};

export const getCustomShortUrl = async (slug) => {
  return await urlSchema.findOne({ short_url: slug });
};
