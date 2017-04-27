
// Create Board Component
var Board = React.createClass({displayName: "Board",
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number") {
                return new Error('The count property must be a number');
            }
            if (typeof props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is rideculus");
            }
        }
    },
    getInitialState: function() {
        return {
            notes: [
                "Welcome to Sticky Note"
            ]
        };
    },
    nextId: function() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    add: function(text) {
        var arr = this.state.notes;
        arr.push({
            id:this.nextId(),
            note:text
        });
        this.setState({notes: arr});
    },
    update: function(newText, i) {
        var arr = this.state.notes;
        arr[i].note = newText;
        this.setState({notes:arr});
    },
    remove: function(i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes:arr});
    },
    eachNote: function(note, i) {
        return (
            React.createElement(Note, {key: note.id, index: i, 
                onChange: this.update, 
                onRemove: this.remove}, note.note)
        );
    },
    render:function() {
        return (
            React.createElement("div", {className: "board"}, 
                this.state.notes.map(this.eachNote), 
                React.createElement("button", {className: "btn btn-sm btn-success glyphicon glyphicon-plus", 
                onClick: this.add.bind(null, "New Note")})
            )
        );
    }
});