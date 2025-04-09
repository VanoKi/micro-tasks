type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = ({students}: NewComponentType) => {
    // debugger
    return (
        <ul>
            {students.map(
                (objectFromStudentArray, index) => {
                    return (
                        <li>{objectFromStudentArray.name}</li>
                    )
                }
            )}
        </ul>
    )
}