export const cdnImage = (name: string, placeholder= false,folder='/static/images',count=10) => {
      let srcPicture: string;
    if (process.env.NODE_ENV === "production") {
        console.log("zsz", process.env.NODE_ENV);
        console.log("placeholder", placeholder);

      if (placeholder) {
        srcPicture =  "https://cdn.statically.io/img/reactheme.io/h="+count+"/"+folder+"/"+name;
      } else {
        srcPicture =  "https://cdn.statically.io/img/reactheme.io/f=auto/"+folder+"/"+name;
      }
    } else {
        srcPicture =  folder+"/" + name;
    }
    console.log("srcPicture", srcPicture);

    return srcPicture;
  };
  
  export const shuffle = (array: string[] | any[]) => {
    array = [...array];
    var currentIndex = array.length,
      temporaryValue: any,
      randomIndex: number;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };