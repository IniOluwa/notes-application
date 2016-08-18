// Notes class
class Notes {
    // Initialize Notes constructor
        constructor(author, notes){
        this.author = author;
        this.notes = notes;
    }
}

// Notes application class
class NotesApplication {
    // Initialize NotesApplication constructor
    constructor(author){
        this.author = author;
        this.noteContents = [];
    }
    
    // Note creation method
    create(theAuthor, note){
        // Create a note
        var newNote = new Notes(theAuthor, note);
        this.noteContents.push(newNote);
        return newNote;
    }
    
    // Notes listing method
    listNotes(){
        // list all notes
        for(var i = 0; i < this.noteContents.length; i++){
            console.log(
                {'Note ID': i,
                'Contents': this.noteContents[i].notes,
                'By Author': this.noteContents[i].author
                    }
                );
            }
        }

        // Notes getting method
    getNote(noteID){
       // Validate id and return note
            if(noteID in this.noteContents) return this.noteContents[noteID];
        return 'Input a valid ID.';
    }
    
    // Notes searching method
    searchNotes(searchText){
        // Search for text and returns notes that contain text
        console.log("Showing results for search" + " " + "-" + searchText + "-" + "\n" + SearchResults);
        for(var i = 0; i < this.noteContents.length; i++){
            if(this.noteContents[i].notes.indexOf(searchText) >= 0){
                var SearchResults = console.log({'Note ID': i,
                'Contents': this.noteContents[i].notes,
                'By Author': this.noteContents[i].author
                    }
                );
            }
        }
    }

    // Notes editing method
    editNote(noteID, newNoteContent){
       // Validate id and edit note
        if(noteID in this.noteContents){
            this.noteContents[noteID] = newNoteContent; 
            return this.noteContents[noteID];
        }else{
            return 'Input a valid ID.';
        }
    }
    
    // Note delete method
    deleteNote(noteID){
        // Validate id and delete note
        if(noteID in this.noteContents){
            this.noteContents[noteID] = null;   
        }else{
            return 'Input a valid ID.';
        }
    }
}