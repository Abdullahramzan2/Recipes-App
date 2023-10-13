import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
            from: '0',
            size: size || '20',
            tags
        },
        headers: {
            'X-RapidAPI-Key': '708615fa55msh43ac30cf09cfc30p118e3cjsn666ce124c4a8',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    return await axios.request(options)
}