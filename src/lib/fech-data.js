export const fechData = async () => {

    const url = 'https://nfl-api-data.p.rapidapi.com/nfl-ondays';

    // const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;
    // const rapidApiHost = process.env.REACT_APP_RAPID_API_HOST;

    const options = {
        method: 'GET',
        headers: {
            // 'x-rapidapi-key': 'f11c4fbdd2msh13f1cf9a27687c9p116395jsn6b9f241691f2',
            // 'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
            // #TODO: Arrumar variaveis de ambiente
            // 'x-rapidapi-key': `'${rapidApiKey}'`,
            // 'x-rapidapi-host': `'${rapidApiHost}'`
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}
