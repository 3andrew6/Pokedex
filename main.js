import {Pokemon} from './pokemon.js';
import { saveArray, loadArray} from './ls.js';

var allPokemon = [];
var hyphenNames = ["ho-oh", "porygon-z", "jangmo-o", "hakamo-o", "kommo-o", "mr-mime", "mr-rime"];
const TOTAL_NUMBER_OF_POKEMON = 898;
const FORESTGREEN = '#228B22';
const FIRERED = '#ff1a00';
const GREYTAN = '#cec4bd';
const CORNFLOWERLUE = '#4d85ea';
const ELECTRICYELLOW = '#ffcb05';
const BLUEICE = '#8cb3d9';
const BROWNRED = '#61200f';
const DEEPPURPLE = '#750288';
const TAN = '#bc9055';
const WHEAT = '#FFC594';
const PSYCHEDELICPINK = '#CE389C';
const OLIVEGREEN = '#98BF64';
const DARKTAN = '#564022';
const EERIEPURPLE = '#55345d';
const DARK = '#000000';
const PURPLESKY = '#5929d2';
const STEELGREY = '#7b7e81';
const FAIRYPINK = '#FA86CA';

const FOREST = `https://cutewallpaper.org/21/pokemon-forest-background/Nauris-on-Twitter-Making-some-battle-backgrounds-for-.jpg`;
const VOLCANO = 'https://cdnb.artstation.com/p/assets/images/images/021/866/745/large/antoine-anet-cave-magma.jpg?1573230252';
const SKY = 'https://media-s3-us-east-1.ceros.com/hype-beast/images/2018/07/13/a9a51bc0b8d626db493ab5f9a971b043/background-hero.png?imageOpt=1&fit=bounds&width=2163';
const BEACH = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d87700j-41e3e246-6716-46bf-820e-fb7b9e17d66d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg3NzAwai00MWUzZTI0Ni02NzE2LTQ2YmYtODIwZS1mYjdiOWUxN2Q2NmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6mPWtn2VxjsjV-sneZovEWhViFj7DTXL6MrMm4I4o3U';
const GRASS = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/denyxek-e3205bd3-ce6c-4134-bf04-445592a06071.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZmY1MjNmLWZmODQtNDU3ZC1hNTQ3LTQ2NDU4OGQzYTNkM1wvZGVueXhlay1lMzIwNWJkMy1jZTZjLTQxMzQtYmYwNC00NDU1OTJhMDYwNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XcdkrCNQAHJSc-_k556-MhGAZX_Qos3_ir9hRAVTnNg';
const ICECAVE = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d85jk85-38ec6987-8e11-49f8-a6af-8cf85bf53e17.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg1ams4NS0zOGVjNjk4Ny04ZTExLTQ5ZjgtYTZhZi04Y2Y4NWJmNTNlMTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JP2JHaX-FHhmKtD9-xux7zOUxhWAEVJqAbrGsmPTOJA';
const DOJO = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d88efs2-42c3bad7-0b8d-4854-b900-f2445d81b56e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4ZWZzMi00MmMzYmFkNy0wYjhkLTQ4NTQtYjkwMC1mMjQ0NWQ4MWI1NmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BkdVPV2TPpC7BCEz_O6yGtE9mY6QOfX9CzdG5B7lnQw';
const DRYPLAINS = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83pwna-4c6af056-47c2-41e0-9d1c-acccc38e06c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzcHduYS00YzZhZjA1Ni00N2MyLTQxZTAtOWQxYy1hY2NjYzM4ZTA2YzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pV7ILn5oqMI_SoNdzq74VuV73_ECfUo1qB4z3O_EIuc';
const DESERTCLIFF = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59239705-5ebf-4a7a-9dee-5dd305685980/d6x057g-7537ff2a-e864-496f-bc32-6d11c44a68a9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MjM5NzA1LTVlYmYtNGE3YS05ZGVlLTVkZDMwNTY4NTk4MFwvZDZ4MDU3Zy03NTM3ZmYyYS1lODY0LTQ5NmYtYmMzMi02ZDExYzQ0YTY4YTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6AOtTMGrSUiS-QuQOAKP_dqPTiYFnwLgS3ayHB_cUrk';
const PLAINS = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83htw0-ec490c3b-f7dd-4570-a698-8404a8a12f99.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzaHR3MC1lYzQ5MGMzYi1mN2RkLTQ1NzAtYTY5OC04NDA0YThhMTJmOTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zFeU6uxxutMPR_qMMoP5MOM8N4EqbYuZWc_naTh8Rpw';
const FIELD = 'https://i.pinimg.com/originals/47/b9/14/47b91495e80426f8b2d419a23c80da59.png';
const WOODS = 'https://cutewallpaper.org/21/pokemon-scenery-background/Pokemon-forest-by-BlazingIfrit-Fur-Affinity-dot-net.jpg';
const CAVE = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d844jms-2a971546-7cd0-4333-bc67-58a812213bbd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0NGptcy0yYTk3MTU0Ni03Y2QwLTQzMzMtYmM2Ny01OGE4MTIyMTNiYmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.st2SHs8HPePJ3IzLtvksKYw5bC-0SMtGysp6w6g92ZU';
const BURNEDTOWER = 'https://cdn2.bulbagarden.net/upload/5/54/HGSS_Brass_Tower-Day.png';
const DARKCAVE = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83vmn4-183b6b84-c533-4179-a19d-6db284f8f971.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzdm1uNC0xODNiNmI4NC1jNTMzLTQxNzktYTE5ZC02ZGIyODRmOGY5NzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pajHo6EGwQWrWqoSu-4Q4KxKThuqR3FPsnX1OWKfsr4';
const DRAGONCAVE = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d88q0oq-116ad0a3-00ae-442c-ae87-850715098286.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4cTBvcS0xMTZhZDBhMy0wMGFlLTQ0MmMtYWU4Ny04NTA3MTUwOTgyODYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X97ycmkYidcj48jArAZ_4Yw3S2YUy_k1g-HI6L8GxgI';
const DESERT = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83n4mo-95a1f2fe-1a26-44a5-86b7-12fa8b761264.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzbjRtby05NWExZjJmZS0xYTI2LTQ0YTUtODZiNy0xMmZhOGI3NjEyNjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BELsVVmaVJBI91H3731oJ20ILmCfVIXDKtSKmIGJxpg';
const MUSHROOMFOREST = 'https://cdn1.dotesports.com/wp-content/uploads/2019/10/04090337/EGCfymnXkAE92lx.jpg';


/*
const LAST_GEN1_POKEMON = 151;
const LAST_GEN2_POKEMON = 251;
const LAST_GEN3_POKEMON = 386;
const LAST_GEN4_POKEMON = 493;
const LAST_GEN5_POKEMON = 649;
const LAST_GEN6_POKEMON = 721;
const LAST_GEN7_POKEMON = 809;
*/


document.getElementById("generation").addEventListener('change', showPokemonList);
document.getElementById("type").addEventListener('change', showPokemonList);
document.getElementById("caught").addEventListener('change', showPokemonList);


/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
window.addEventListener("load", () => {

    var meme = true;
    if(meme){
        document.getElementById("meme").addEventListener('click', (event) => {
            if(document.getElementById("meme").classList.contains("selected")){
                document.getElementById("mainBody").style.backgroundImage = "";
                document.getElementById("meme").classList.remove("selected");
            }
            else{
                document.getElementById("mainBody").style.backgroundImage = "url('https://media2.giphy.com/media/0Ei5SMtHRmTkMkjVei/200.gif')";
                document.getElementById("meme").classList.add("selected");
            }
        });
    }

    document.getElementById("search").addEventListener('click', (event) => {
        var name = document.getElementById("searchBar").value;
        window.find(name, false, false, true, false, false, false);
    })

    document.getElementById("searchBar").addEventListener('keypress', (event) => {
        if(event.key === 'Enter'){
            var name = document.getElementById("searchBar").value;
            window.find(name, false, false, true, false, false, false);
        }
        
    })
    //force reload - for testing purposes
    var reload = false;

    allPokemon = loadArray("allPokemon");
    if(allPokemon && !reload){
        showPokemonList();
    }
    else{
        allPokemon = [];
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=' + TOTAL_NUMBER_OF_POKEMON)
            .then(response => response.json())
            .then(data => firstLoad(data));
    }
});

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function firstLoad(data) {
    data.results.forEach(pokemon => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => fillPokemonList(data));
    });
    

    const loading = document.getElementById("loading");
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    
    setTimeout(() => {
        x.className = x.className.replace("show", "");
        allPokemon.sort(function (a, b) {
            return a.id - b.id;
        });
        showPokemonList(); 
        saveArray(allPokemon, "allPokemon");
    } , 25000);
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
async function fillPokemonList(pokemon){
    var dexEntry = [];
    await fetch(pokemon.species.url)
            .then(response => response.json())
            .then(data => {

                var index = 0;
                var entryIndex = 0;
                while(index < data.flavor_text_entries.length){
                    if(data.flavor_text_entries[index].language.name == "en"){
                        var ogEntry =  data.flavor_text_entries[index].flavor_text;

                        while(ogEntry.includes("\n")){
                            var temp = ogEntry.substring(0, ogEntry.indexOf("\n"));
                            ogEntry = ogEntry.substring(ogEntry.indexOf("\n") + 1, ogEntry.length);
                            ogEntry = temp + ' ' + ogEntry;
                        }
                    
                        while(ogEntry.includes("")){
                            var temp = ogEntry.substring(0, ogEntry.indexOf(""));
                            ogEntry = ogEntry.substring(ogEntry.indexOf("") + 1, ogEntry.length);
                            ogEntry = temp + ' ' + ogEntry;
                        }

                        var found = false;
                        for(var i = 0; i < dexEntry.length; i++){
                            if(dexEntry[i].toLowerCase() == ogEntry.toLowerCase()){found = true}
                        }

                        if(!found){
                            var version = data.flavor_text_entries[index].version.name;
                            version = version.charAt(0).toUpperCase() + version.slice(1);
                            dexEntry[entryIndex] =  version + ": " + ogEntry;
                            entryIndex++;
                        }
                    }
                    index++;
                }
            
            });

    //uppercase first letter of all names
    var pokemonName = pokemon.name;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    //get rid of hyphenated extras from api, do not get rid of hyphenated names
    if(pokemonName.includes('-') && !hyphenNames.includes(pokemon.name)) {
        pokemonName = pokemonName.substring(0, pokemonName.indexOf('-'));
    }
    if(pokemonName == "Mr-mime") {
        pokemonName = "Mr. Mime";
    }
    if(pokemonName == "Mr-rime") {
        pokemonName = "Mr. Rime";
    }

    //uppercase first letter of all types
    var type1 = pokemon.types[0].type.name;
    var type1 = type1.charAt(0).toUpperCase() + type1.slice(1);

    var type2 = "";
    if(pokemon.types[1]){
        type2 = pokemon.types[1].type.name
        type2 = type2.charAt(0).toUpperCase() + type2.slice(1);
    }

    var ability2 = null;
    var hiddenAbility = null;
    if(pokemon.abilities[1])
    {
        if(pokemon.abilities[1].is_hidden){
            hiddenAbility = pokemon.abilities[1];
        }
        else {
            ability2 = pokemon.abilities[1];
        }
    }

    if(pokemon.abilities[2])
    {
        hiddenAbility = pokemon.abilities[2];
    }

    var object = new Pokemon(pokemonName, pokemon.id, pokemon.sprites.front_default, type1, type2, false, dexEntry, pokemon.stats, pokemon.weight/10, pokemon.height, pokemon.abilities[0], ability2, hiddenAbility)
    allPokemon.push(object);
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function showPokemonList() {
    back.classList.add("hide");
    document.getElementById("pageRef").classList.remove("hide");
    document.getElementById("searchDiv").classList.remove("hide");

    const pokemonListElement = document.getElementById("pokemon");
    pokemonListElement.innerHTML = "";
    renderPokemonList(pokemonListElement);

    //add event listener to all catch buttons
    var catchButtons = document.querySelectorAll(".Catch");
    catchButtons.forEach(btn => {
        btn.addEventListener('click', (event) => catchPokemon(event.target));
    })

    var images = document.querySelectorAll(".clickable");
    images.forEach(btn => {
        btn.addEventListener('click', (event) => {showPokemonDetails(event.target.id)});
    })
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function setBackImage(type) {
    switch(type){
        
        case 'Normal':
            return PLAINS;
        case 'Fire':
            return VOLCANO;
        case 'Water':
            return BEACH;
        case 'Grass':
            return FOREST;
        case 'Electric':
            return GRASS;
        case 'Ice':
            return ICECAVE;
        case 'Fighting':
            return DOJO;
        case 'Poison':
            return DRYPLAINS;
        case 'Flying':
            return SKY;
        case 'Ground':
            return DESERTCLIFF;
        case 'Psychic':
            return FIELD;
        case 'Bug':
            return WOODS;
        case 'Rock':
            return CAVE;
        case 'Ghost':
            return BURNEDTOWER;
        case 'Dark':
            return DARKCAVE;
        case 'Dragon':
            return DRAGONCAVE;
        case 'Steel':
            return DESERT;
        case 'Fairy':
            return MUSHROOMFOREST;
        default:
            break;
    }
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function getColor(type) {
    switch(type){
        case 'Normal':
            return GREYTAN;
        case 'Fire':
            return FIRERED;
        case 'Water':
            return CORNFLOWERLUE;
        case 'Grass':
            return FORESTGREEN;
        case 'Electric':
            return ELECTRICYELLOW;
        case 'Ice':
            return BLUEICE;
        case 'Fighting':
            return BROWNRED;
        case 'Poison':
            return DEEPPURPLE;
        case 'Flying':
            return WHEAT;
        case 'Ground':
            return TAN;
        case 'Psychic':
            return PSYCHEDELICPINK;
        case 'Bug':
            return OLIVEGREEN;
        case 'Rock':
            return DARKTAN;
        case 'Ghost':
            return EERIEPURPLE;
        case 'Dark':
            return DARK;
        case 'Dragon':
            return PURPLESKY;
        case 'Steel':
            return STEELGREY;
        case 'Fairy':
            return FAIRYPINK;
        default:
            break;
    }
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function renderOnePokemon(pokemon) {
    const item = document.createElement("li");

    var backImage = setBackImage(pokemon.type1);

    var button = `<button title="Catch Pokemon" class="Catch" id=${pokemon.id - 1}></button>`;
    if(pokemon.caught) {
        button = `<button title="Release Pokemon" class="Catch caught" id=${pokemon.id - 1}></button>`;
    }

    var color1 = getColor(pokemon.type1);
    var color2 = getColor(pokemon.type2);

    var type2 = `<h2 title="Type 2" class="type type2 noType"></h2>`;
    if(pokemon.type2 != ""){
        type2 = `<h2 title="Type 2" class="type type2" style="background-color:${color2}"">${pokemon.type2}</h2>`
    }

    //individual all pokemon
    item.innerHTML =
    `<li class="pokemon" id=${pokemon.name}>
        <image title="View ${pokemon.name}'s Pokdex Entry" class="image clickable" id=${pokemon.id} style="background-image: url('${backImage}'); background-size: cover; background-repeat: no-repeat;" src=${pokemon.sprite} alt="${pokemon.name} background-image: url(${backImage}) image"></image>
        <h1 title="Pokemon ID And Name" class="name">#${pokemon.id} ${pokemon.name}</h1>
        <div class="types">
            <h2 class="type type1" title="Type 1"
            style="background-color:${color1};">${pokemon.type1}</h2>` + type2 +
        `</div>`
        + button +
    `</li><br>`;
    
    return item;
}

/*****************************************************************************
 * renderPokemonList
 * 
 * 
 * 
 ****************************************************************************/
function renderPokemonList(parent) {
    allPokemon.forEach(pokemon => getPokemon(pokemon, parent));
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function catchPokemon(button){
    allPokemon[button.id].caught = !allPokemon[button.id].caught;
    //save array after changing catch status for cache
    saveArray(allPokemon, "allPokemon");
    if(allPokemon[button.id].caught) {
        button.classList.add("caught");
    }
    else{
        button.classList.remove("caught");
    }

    if(document.getElementById("back").classList.contains("hide")){
        showPokemonList();
    }
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function getPokemon(pokemon, parent){
    var filter1 = document.getElementById("generation");
    var filter2 = document.getElementById("type");
    var filter3 = document.getElementById("caught");


    //filters
    if (
            (//generation
            
            //first pokemon of generation selected
        pokemon.id > parseInt(filter1.options[filter1.selectedIndex].getAttribute("data-beginning")) 
            //last pokemon of generation selected
        && pokemon.id <= parseInt(filter1.options[filter1.selectedIndex].getAttribute("data-end"))
        )

                
        && (//type 

            //selected type compare type1
            pokemon.type1 == filter2.options[filter2.selectedIndex].getAttribute("data-type") 
                //selected type compare type2
            || pokemon.type2 == filter2.options[filter2.selectedIndex].getAttribute("data-type")
                //All type
            ||    filter2.options[filter2.selectedIndex].getAttribute("data-type") == "All"
        )

        && (//PokdexStatus
            //selected Pokedex Status
            pokemon.caught.toString() == filter3.options[filter3.selectedIndex].getAttribute("data-caught")
            //if selected all Pokedex Status
            || filter3.options[filter3.selectedIndex].getAttribute("data-caught") == "All"
        )
    )
    {
        parent.appendChild(renderOnePokemon(pokemon));
    };
}

/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function showPokemonDetails(pokemonID) {
    var pokemon = allPokemon[pokemonID - 1];

    document.getElementById("pageRef").classList.add("hide");
    document.getElementById("searchDiv").classList.add("hide");


    const pokemonListElement = document.getElementById("pokemon");
    pokemonListElement.innerHTML = "";

    const PokemonDetails = document.createElement("li");

    var backImage = setBackImage(pokemon.type1);

    var button = `<button title="Catch Pokemon" class="Catch" id=${pokemon.id - 1}></button>`;
    if(pokemon.caught) {
        button = `<button title="Release Pokemon" class="Catch caught" id=${pokemon.id - 1}></button>`;
    }

    var color1 = getColor(pokemon.type1);
    var color2 = getColor(pokemon.type2);

    var type2 = `<h2 title="Type 2" class="dexType noType"></h2>`;
    if(pokemon.type2 != ""){
        type2 = `<h2 title="Type 2" class="dexType" style="background-color:${color2}"">${pokemon.type2}</h2>`
    }

    var dexEntries = ``;
    for(var i = 1; i < pokemon.info.length; i++){
        dexEntries += `<h2 class="dexEntry hide">${pokemon.info[i]}</h2>`;
    }

    var totalInches = pokemon.height * 3.9370
    var inches = Math.round(totalInches%12);
    var feet = ~~(totalInches/12);
    if(inches == 12){
        feet += 1;
        inches = 0;
    }
    var height = `${feet}' ${Math.round(inches%12)}"`


    //individual pokemon
    PokemonDetails.innerHTML =
    `<li class="dexPokemon">
        <image class="bigImage" style="background-image: url('${backImage}'); background-size: cover; background-repeat: no-repeat;" src=${pokemon.sprite} alt="${pokemon.name} background-image: url(${backImage}) image"></image>
        <div class="dexHeader">
            <h1 title="Pokemon ID And Name" class="name">#${pokemon.id} ${pokemon.name}</h1>
            <div class="break"></div>
            <h2 title="Type 1" class="dexType" style="background-color:${color1};">${pokemon.type1}</h2>` + type2 +
            `<div class="break"></div>
            <h2>Height: ${height}</h2>
            <div class="break"></div>
            <h2>Weight: ${Math.round((pokemon.weight)*2.20462)} lbs</h2>
        </div>
        <div id="statsChart" style=""></div>`
        + button +
    `</li>
    <div class="entries">
        <button title="All Pokedex Entries" id="allEntries"></button>
        <button title="One Pokedex Entry" class="hide tooltip tooltiptext" id="firstEntry"></button>
        <h2 class="dexEntry1">${pokemon.info[0]}</h2>`
    + dexEntries + 
    `</div><br>`;


    pokemonListElement.appendChild(PokemonDetails);

    var dexes = document.querySelectorAll(".dexEntry");
    var dexesShow = document.getElementById("allEntries");
    var dexesHide = document.getElementById("firstEntry");
    dexesShow.addEventListener('click', function() {dexes.forEach(dex => {dex.classList.remove("hide"); dexesShow.classList.add("hide"); dexesHide.classList.remove("hide");})});
    dexesHide.addEventListener('click', function() {dexes.forEach(dex => {dex.classList.add("hide"); dexesHide.classList.add("hide"); dexesShow.classList.remove("hide");})});

    var catchButton = document.querySelectorAll(".Catch");
    catchButton.forEach(btn => {
        btn.addEventListener('click', (event) => catchPokemon(event.target));
    })

    var back = document.getElementById("back");
    back.classList.remove("hide");
    back.addEventListener('click', function() {showPokemonList();});


    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}


/*****************************************************************************
 * 
 * 
 * 
 * 
 ****************************************************************************/
function drawChart() {
    var pokemon = allPokemon[document.getElementsByClassName("Catch")[0].id];
    var data = google.visualization.arrayToDataTable([
      ['Stat Type', 'Base Stat',{ role: 'style' }],
      [`HP`, parseInt(`${pokemon.stats[0].base_stat}`), 'color:black; fill-color: #e60026; stroke-width: 2;'],
      [`Attack`, parseInt(`${pokemon.stats[1].base_stat}`), 'color:black; fill-color: #ff781f; stroke-width: 2;'],
      [`Defense`, parseInt(`${pokemon.stats[2].base_stat}`), 'color:black; fill-color: #FFE800; stroke-width: 2;'],
      [`Sp. Atk`, parseInt(`${pokemon.stats[3].base_stat}`), 'color:black; fill-color: #8cd3ff; stroke-width: 2;'],
      [`Sp. Def`, parseInt(`${pokemon.stats[4].base_stat}`), 'color:black; fill-color: #48BF91; stroke-width: 2;'],
      [`Speed`, parseInt(`${pokemon.stats[5].base_stat}`), 'color:black; fill-color: #D85678; stroke-width: 2;']
    ]);
    
    var total = pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat;

    var options = {
      title: `${pokemon.name}'s Stats    Total: ${total}`,
      textStyle: {color: 'whitesmoke'},
      colors: ['transparent'],
      chartArea:{left:'10%',top:'10%',width:"40%",height:"70%"},
      backgroundColor: {
          fill: 'transparent'
      },
      vAxis : {
        gridlines: {
            color: '#ffffff'
        },
        textStyle: {
            color: 'whitesmoke'
        }
      },
      hAxis: {
        slantedText: true,
        textStyle: {
            color: 'whitesmoke'
        }
      },
      titleTextStyle: {
        color: 'whitesmoke',
        bold: true
      },
      legend: {
        textStyle: {
            color: '#333333'
        }
      }
    };
    
    var chart = new google.visualization.ColumnChart(document.getElementById('statsChart'));
    chart.draw(data, options);
    
}
