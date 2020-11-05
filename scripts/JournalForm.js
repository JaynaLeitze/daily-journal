import { getEntries, saveEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journalContainer")
const eventHub = document.querySelector(".contentContainer")

const render = () => {
    contentTarget.innerHTML = `
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
                <label for="concepts">Concepts covered</label>
                <input type="text" id="journalConcept">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="entry" id="entry" cols="30" rows="10"></textarea>

                <label for="vibe">Vibe</label>
                <select id="vibes">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="energized">Energized</option>
                    <option value="exhausted">Exhausted</option>
                    <option value="frustrated">Frustrated</option>
                    <option value="overwhelmed">Overwhelmed</option>
                    
                </select>
                <button id="saveEntry">Record Entry</button>
         
            `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        //grab input values
        const journalDate = document.querySelector("#journalDate").value
        const journalConcept = document.querySelector("#journalConcept").value
        const journalEntry = document.querySelector("#entry").value
        const moodID = document.querySelector("#vibes").value

        // make a note object

        const newEntry = {
            date:journalDate,
            concept:journalConcept,
            entry: journalEntry,
            moodID: parseInt(moodID)


        }

        // Post object to database/API/json
        saveEntry(newEntry)
        render()
    }
    
})



export const JournalForm = () => {
    render()
}