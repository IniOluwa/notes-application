class NotesApplication {
    constructor(author){
        this.author = author;
        this.notes = [];
    }
    
    create(note_contents){
        this.notes.push(note_contents);
    }
    
    list_notes(){
        for(var i = 0; i < this.notes.length; i++){
            console.log({'NOTE_ID': i});
            console.log({'CONTENTS': this.notes[i]});
            console.log({'By Author': this.notes[i].author});
            }
        }

    get_note(note_id){
        return this.notes[note_id];
    }
    
    search_note(searchText){
        for(var i = 0; i < this.notes.length; i++){
            if(this.notes[i].indexOf(searchText)){
                var SearchResults = console.log(
                    {'NOTE_ID': this.note_id[i]},
                    {'CONTENTS': this.notes[note_id][i]},
                    {'By Author': this.notes[note_id].this.author[i]}
                );
            }
        }
        var results = "Showing results for search" + " " + searchText + "\n" + SearchResults;
        console.log(results);
    }

    edit_note(note_id, new_note_content){
            if(parseInt(note_id)){
                this.notes[note_id] = new_note_content; 
                console.log(this.notes[note_id])
            }else{
            return 'Input a valid note id and content.';
        }
    }
    
    delete_note(note_id){
        if (parseInt(note_id)){
            this.notes[note_id] = null;
        }else{
            return 'Input a valid note id.';
        }
    }
}
