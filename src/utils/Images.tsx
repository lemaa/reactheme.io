export const cdnImage = (name: string, folder = "/static/images") => {
    let srcPicture: string;
    if (process.env.NODE_ENV === "production") {
        srcPicture = `https://lemaa.github.io/reactheme.io/${folder}/${name}`;
    } else {
        srcPicture = `${folder}/${name}`;
    }

    return srcPicture;
};
