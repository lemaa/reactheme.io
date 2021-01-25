export const cdnImage = (name: string, folder='/static/images') => {
      let srcPicture: string;
    if (process.env.NODE_ENV === "production") {
  
        srcPicture =  "https://lemaa.github.io/reactheme.io/"+folder+"/"+name;
 
    } else {
        srcPicture =  folder+"/" + name;
    }
 
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