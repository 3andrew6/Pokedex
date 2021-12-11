//load array
export function loadArray(fileName){
    if (JSON.parse(localStorage.getItem(fileName)) != null) {
        return JSON.parse(localStorage.getItem(fileName));
    }   
    else{
        return null;
    }
}

//save array
export function saveArray(pokemonArray, fileName){
    localStorage.setItem(fileName, JSON.stringify(pokemonArray));
}