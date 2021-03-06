const eventHub = document.querySelector(".contentContainer");

const dispatchJournalChangeEvent = () => {
  const journalChangedEvent = new CustomEvent("journalStateChanged");

  eventHub.dispatchEvent(journalChangedEvent);
};

// This is the original data.
export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
    .then((response) => response.json()) // Parse as JSON
    .then((parsedEntries) => {
      journal = parsedEntries;
      // What should happen when we finally have the array?
    });
};

let journal = [];

// export const useEntries = () => {
//    return  journal.slice()
// }

export const saveEntry = (entry) => {
  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  })
    .then(getEntries)
    .then(dispatchJournalChangeEvent);
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};

export const deleteEntry = (entryId) => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE",
  }).then(getEntries);
};
