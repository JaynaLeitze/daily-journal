import { getEntries, saveEntry,} from "./JournalDataProvider.js"
import { getMood, useMood } from "./JournalMoodProvider.js"

const contentTarget = document.querySelector(".journalContainer")
const eventHub = document.querySelector(".contentContainer")

const render = (moods) => {
    contentTarget.innerHTML = `
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
                <label for="concepts">Concepts covered</label>
                <input type="text" id="journalConcept">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="entry" id="entry" cols="30" rows="10"></textarea>

                <label for="vibe">Vibe</label>
                <select id="vibes">
                    <option value="">Select a Mood</value>
                    ${moods.map(
                        moodObj => {
                            return `<option value="${moodObj.id}"> ${moodObj.mood}</option>`
                        }
                    ).join("")
                }

                    
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
        const moodId = document.querySelector("#vibes").value

        // make a note object

        const newEntry = {
            date:journalDate,
            concept:journalConcept,
            entry: journalEntry,
            moodId: parseInt(moodId)


        }

        // Post object to database/API/json
        saveEntry(newEntry)
        JournalForm()
    }
    
})



export const JournalForm = () => {
    getMood()
    .then(() => {
        const moodArray = useMood()
        console.log(moodArray)
        render(moodArray)
    })
    
}