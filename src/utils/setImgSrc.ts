export const setImgSrc = (img: HTMLImageElement, file: File) => {
    const previewUrl = URL.createObjectURL(file);
    img.src = previewUrl;
};
