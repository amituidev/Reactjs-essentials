var Note = React.createClass({displayName: "Note",
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        var val = this.refs.newText.getDOMNode().value;

        this.setState({editing: false});
    },
    remove: function() {
    },
    renderDisplay: function() {
        return (
            React.createElement("div", {className: "note"}, 
                React.createElement("p", null, this.props.children), 
                React.createElement("span", null, 
                    React.createElement("button", {onClick: this.edit, 
                            className: "btn btn-primary glyphicon glyphicon-pencil"}), 
                    React.createElement("button", {onClick: this.remove, 
                            className: "btn btn-danger glyphicon glyphicon-trash"})
                )
            )
            );
    },
    renderForm: function() {
        return (
            React.createElement("div", {className: "note"}, 
                React.createElement("textarea", {ref: "newText", defaultValue: this.props.children, 
                className: "form-control"}), 
                React.createElement("button", {onClick: this.save, className: "btn btn-success btn-sm glyphicon glyphicon-floppy-disk"})
            )
        )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

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
                'hello Tim',
                'Hi Deo',
                'Whare are you John'
            ]
        };
    },
    render:function() {
        return (
            React.createElement("div", {className: "board"}, 
                this.state.notes.map(function(note, i){
                    return (
                        React.createElement(Note, {key: i}, note)
                    );
                })
            )
        );
    }
});


React.render(React.createElement(Board, {count: 10}), document.getElementById('react-container'));


