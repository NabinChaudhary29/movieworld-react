export const storeInLocalSession = (mvArg )=> {
    localStorage.setItem("movieList", JSON.stringify(mvArg));
};

export const storeFromLocalSession = ()=> {
   const str =  localStorage.getItem("movieList");
    return str ? JSON.parse(localStorage.getItem("movieList")) : null;
};