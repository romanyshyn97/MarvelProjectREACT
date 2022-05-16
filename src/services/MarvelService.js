

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=4d7441512581e320280d2133c7d7b187';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok){
            throw new Error('Could not fetch ${url}, status: ${res.status}');
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;