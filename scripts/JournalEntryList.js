/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import {
  deleteEntry,
  getEntries,
  useJournalEntries,
} from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
//  import { useMood } from "./JournalMoodProvider.js"

const eventHub = document.querySelector(".contentContainer");

eventHub.addEventListener("journalStateChanged", () => EntryListComponent());

export const EntryListComponent = () => {
  const entryLog = document.querySelector(".contentContainer__right");
  getEntries().then(() => {
    const entries = useJournalEntries();

    let EntryHTMLRepresetnations = entries.map((entry) => {
      //  const mood = moods.find(moodObj => moodObj.id === entry.MoodId)

      const html = JournalEntryComponent(entry);
      return html;
    });
    const stringOfAll = EntryHTMLRepresetnations.join("");

    entryLog.innerHTML = `
      <section class="entryLog">
      <h3> Older Entries: </h3>
      <div class="entryContainer">
      ${stringOfAll}
      </div>
      </section>
      `;
  });
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    console.log("button was clicked");

    /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    deleteEntry(id).then(() => {
      EntryListComponent();
    });
  }
});
