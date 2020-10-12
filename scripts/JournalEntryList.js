/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

 import { useJournalEntries } from "./JournalDataProvider.js"
 import { JournalEntryComponent } from "./JournalEntry.js"


 

 export const EntryListComponent = () => {
    const entryLog = document.querySelector(".contentContainer__right")

     const entries = useJournalEntries()

     let EntryHTMLRepresetnations = ""
     for (const entry of entries) {
         EntryHTMLRepresetnations += JournalEntryComponent(entry)
     }
          
       entryLog.innerHTML += `
       <section class="entryLog">
       <h3> Older Entries: </h3>
       <div class="entryContainer">
       ${EntryHTMLRepresetnations}
       </div>
       </section>
       `

       
     }
 