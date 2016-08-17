// Notes class
class Notes {
        constructor(author, notes){
        this.author = author;
        this.notes = notes;
    }
}

// Notes application class
class NotesApplication {
    constructor(author){
        this.author = author;
        this.noteContents = [];
    }
    
    // Note creation method
    create(theAuthor, note){
        var newNote = new Notes(theAuthor, note);
        this.noteContents.push(newNote);
        return newNote;
    }
    
    // Notes listing method
    listNotes(){
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
        for (var i = 0; i < this.noteContents.length; i++){
            if(noteID === i) console.log(this.noteContents[noteID]);
        }
        return 'Input a valid ID.';
    }
    
    // Notes searching method
    searchNotes(searchText){
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
        if(noteID in this.noteContents){
            this.noteContents[noteID] = newNoteContent; 
            console.log(this.noteContents[noteID]);
        }else{
            return 'Input a valid ID.';
        }
    }
    
    // Note delete method
    deleteNote(noteID){
        if(noteID in this.noteContents){
            this.noteContents[noteID] = null;   
        }else{
            return 'Input a valid ID.';
        }
    }
}