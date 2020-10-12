import {useJournalEntries} from "./JournalDataProvider.js"
import {EntryListComponent} from "./JournalEntryList.js"

const allTheEntries = useJournalEntries()

EntryListComponent();