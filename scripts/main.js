import {getEntries, useJournalEntries} from "./JournalDataProvider.js"
import {EntryListComponent} from "./JournalEntryList.js"
import { JournalForm } from "./JournalForm.js";

const allTheEntries = useJournalEntries()

EntryListComponent();
JournalForm()