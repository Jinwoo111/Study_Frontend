import React from 'react';

class AttendanceBook extends React.Component{
    constructor(props){
        super(props);

        this. state = {
            student: [
                { id: 1, name : 'Mike'},
                { id: 2, name: 'Jane'},
                { id: 3, name: 'Susan'},
                { id: 4, name: 'Steve'},
                { id: 5, name: 'Brad'},
                { id: 6, name: 'Leo' },
                { id: 7, name: 'John' },
                { id: 8, name: 'Sam' },
                { id: 9, name: 'Kate' },
            ]
        }
    }
    render(){
        var {student} = this.state;

        return (
            <ul>
                {student.map((student) =>
                <li key={student.id}>{student.name}</li>
                )}
            </ul>
        )
    }
}

export default AttendanceBook;