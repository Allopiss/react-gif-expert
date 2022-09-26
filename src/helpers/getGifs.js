export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=SRZ8vnng7SBQ1vKx7V5DrBSYqFOu0Z9D&q=${category}&limit=10`
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs= data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}