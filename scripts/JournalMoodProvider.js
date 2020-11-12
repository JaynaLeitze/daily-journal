let moods = []

export const getMood = () => {
    return fetch("http://localhost:8088/moods")
        
        .then(response => response.json())
        .then(parsedMoods => {
            console.log(parsedMoods)
            moods = parsedMoods
        })
        
    }


export const useMood = () => {
   return moods.slice()
}