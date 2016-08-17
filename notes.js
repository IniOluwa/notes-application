class Notes {
        constructor(author, notes){
        this.author = author;
        this.notes = notes;
    }
}

class NotesApplication {
    constructor(author){
        this.author = author;
        this.noteContents = [];
    }
    
    create(theAuthor, note){
        var newNote = new Notes(theAuthor, note);
        this.noteContents.push(newNote);
        return newNote;
    }
    
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

    getNote(noteID){
        for (var i = 0; i < this.noteContents.length; i++){
            if(noteID === i) console.log(this.noteContents[noteID]);
        }
        return 'Input a valid ID.';
    }
    
    searchNotes(searchText){
        for(var i = 0; i < this.noteContents.length; i++){
            if(this.noteContents[i].indexOf(searchText)){
                var SearchResults = console.log(
                    {'NOTE_ID': i},
                    {'CONTENTS': this.noteContents[i]},
                    {'By Author': this.noteContents[i].author}
                );
            }
        }
        var results = "Showing results for search" + " " + searchText + "\n" + SearchResults;
        console.log(results);
    }

    editNote(noteID, newNoteContent){
        for (var i = 0; i < this.noteContents.length; i++){
            if(noteID === i){
                this.noteContents[noteID] = newNoteContent; 
                console.log(this.noteContents[noteID]);
            }
        }
    }
    
    deleteNote(noteID){
        for (var i = 0; i < this.noteContents.length; i++){
            if(noteID === i){
                this.noteContents[noteID] = null;   
                console.log(this.noteContents[noteID]);
            }
        }
        return 'Input a valid note id.';
    }
}