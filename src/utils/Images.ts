export const cdnImage = (name: string, folder = "/static/images") => {
    const srcPicture: string = `${process.env.PUBLIC_URL}${folder}/${name}`;
    return srcPicture;
};
