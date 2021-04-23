export const cdnImage = (name: string, folder = "/static/images") => {
    let srcPicture: string;
    if (process.env.NODE_ENV === "production") {
        srcPicture = `${folder}/${name}`;
    } else {
        srcPicture = `${folder}/${name}`;
    }

    return srcPicture;
};
