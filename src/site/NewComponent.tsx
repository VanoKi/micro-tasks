type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <table>
            <tr>
                <th>Manufactured</th>
                <th>Model</th>
            </tr>
            {topCars.map( car => {
                return(
                    <tr>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}

        </table>
    )
}