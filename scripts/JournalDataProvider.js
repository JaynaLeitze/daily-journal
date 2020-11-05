const eventHub = document.querySelector(".contentContainer")

const dispatchJournalChangeEvent = () => {
    const journalChangedEvent = new CustomEvent("journalStateChanged")

    eventHub.dispatchEvent(journalChangedEvent)
}

// This is the original data.
export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            journal = parsedEntries 
            // What should happen when we finally have the array?
        })
}

let journal = []

export const useEntries = () => {
    journal.slice()
}
let moods = []

export const getMood = () => {
    return fetch("http://localhost:8088/mood")
        .then(response => response.json())
        .then(parsedMoods => {
            moods = parsedMoods
        })
        
    }


export const useMood = () => {

}


export const saveEntry = (entry) => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchJournalChangeEvent)
}


/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}