import { STICKERS } from "../data/STICKERS";

export const selectAllStickers = () => {
    return STICKERS;
};

export const selectStickerById = (id) => {
    return STICKERS.find((sticker) => sticker.id === parseInt(id));
};

export const selectFeaturedSticker = () => {
    return STICKERS.find((sticker) => sticker.featured);
}