export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
      <p class="journalDate">${entry.date}<br>
       ${entry.concept}<br>
       ${entry.entry}<br>
       ${entry.vibe}<br>
       <hr class="entryDivider">
     </section>
    `
}