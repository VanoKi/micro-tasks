import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header.tsx";
import {Body} from "./site/Body.tsx";
import {Footer} from "./site/Footer.tsx";
import {NewComponent} from "./site/NewComponent.tsx";
import {MouseEvent} from "react";
import {Button} from "./site/components/Button.tsx";

// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

function App() {
    // const data1 = {
    //     title: "What to do",
    //     tasks: [
    //         {taskId: 1, title: "HTML&CSS2", isDone: true},
    //         {taskId: 2, title: "JS2", isDone: true}
    //     ],
    //     students: [
    //         'Jago Wormald1',
    //         'Saul Milne2',
    //         'Aariz Hester3',
    //         'Dion Reeve4',
    //         'Anisa Ortega5',
    //         'Blade Cisneros6',
    //         'Malaikah Phelps7',
    //         'Zeeshan Gallagher8',
    //         'Isobella Vo9',
    //         'Rizwan Mathis10',
    //         'Menaal Leach11',
    //         'Kian Walton12',
    //         'Orion Lamb13',
    //         'Faizah Huynh14',
    //         'Crystal Vaughan15',
    //         'Vivien Hickman16',
    //         'Stuart Lu17',
    //         'Karol Davison18',
    //         'Dario Burns19',
    //         'Chloe Rich20',
    //         'Martyna Felix',
    //         'Nida Glass',
    //         'Maeve Miles',
    //         'Hasnain Puckett',
    //         'Ayman Cano',
    //         'Safwan Perry',
    //         'Fox Kelly',
    //         'Louise Barlow',
    //         'Malaki Mcgill',
    //         'Leanna Cline',
    //         'Willard Hodge',
    //         'Amelia Dorsey',
    //         'Kiah Porter',
    //         'Jeanne Daly',
    //         'Mohsin Armstrong',
    //         'Laurie Rangel',
    //         'Princess Tierney',
    //         'Kasim Kendall',
    //         'Darryl Cope',
    //         'Elysha Ray',
    //         'Liyana Harris',
    //         'Kashif Blackburn',
    //         'Atif Zimmerman',
    //         'Sila Hartley',
    //         'Ralphie Hebert',
    //     ]
    // }
    // const data2 =   {
    //     title: "What to learn",
    //     tasks: [
    //         {taskId: 1, title: "HTML&CSS", isDone: true},
    //         {taskId: 2, title: "JS", isDone: true}
    //     ],
    //     students: [
    //         'Rick Kane',
    //         'Finnlay Bentley',
    //         'Samia North',
    //         'Isaac Morton',
    //         'Lily-Ann Clifford',
    //         'Thalia Park',
    //         'Sapphire Cruz',
    //         'Cieran Vazquez',
    //         'Anya Estes',
    //         'Dominika Field',
    //         'Rosanna Chung',
    //         'Safiyah Davey',
    //         'Ryley Beasley',
    //         'Kalvin Trejo',
    //         'Evie-Mae Farrell',
    //         'Juliet Valencia',
    //         'Astrid Austin',
    //         'Lyle Montgomery',
    //         'Nisha Mora',
    //         'Kylie Callaghan',
    //         'Star Wilks',
    //         'Marissa Colley',
    //         'Asa Fuller',
    //         'Leigh Kemp',
    //         'Avleen Dawson',
    //         'Sammy Bonilla',
    //         'Acacia Becker',
    //         'Coral Shepherd',
    //         'Melina Molina',
    //         'Kiran Bailey',
    //         'Clara Escobar',
    //         'Alexandru Horn',
    //         'Brandon-Lee Mercado',
    //         'Elouise Weston',
    //         'King Long',
    //         'Kerri Searle',
    //         'Kanye Hamer',
    //         'Elwood Benitez',
    //         'Mikail Whitaker',
    //         'Bobby Hardy',
    //         'Talha Ferry',
    //         'Priscilla Landry',
    //         'Olivia-Grace Cain',
    //         'Kiaan Wallace',
    //         'Wesley Padilla90',
    //         'Ella-Grace Wooten91',
    //         'Kaif Molloy92',
    //         'Kamal Broadhurst93',
    //         'Bianca Ferrell94',
    //         'Micheal Talbot95',
    //     ]
    // }
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let currentMoney = money
    const onClickFilterHandler = (nameBtn: string) => {
        // console.log(nameBtn)
        if (nameBtn == 'RUBLS') {
            currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
        }
        if (nameBtn = 'Dollars') {
            currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
        }
    }
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}--</span>
                            <span>{objFromMoneyArr.value}--</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>Roubles</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
}

export default App;


//--------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Tasks} from "./Tasks";
//
// export type DataType = {
//     title: string
//     tasks: Array<TasksType>
//     students: Array<string>
// }
// export type TasksType = {
//     taskId: number
//     title: string
//     isDone: boolean
// }
//
//
// function App() {
//     const data1= {
//         title: "What to do",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS2", isDone: true},
//             {taskId: 2, title: "JS2", isDone: true}
//         ],
//         students: [
//             'Jago Wormald1',
//             'Saul Milne2',
//             'Aariz Hester3',
//             'Dion Reeve4',
//             'Anisa Ortega5',
//             'Blade Cisneros6',
//             'Malaikah Phelps7',
//             'Zeeshan Gallagher8',
//             'Isobella Vo9',
//             'Rizwan Mathis10',
//             'Menaal Leach11',
//             'Kian Walton12',
//             'Orion Lamb13',
//             'Faizah Huynh14',
//             'Crystal Vaughan15',
//             'Vivien Hickman16',
//             'Stuart Lu17',
//             'Karol Davison18',
//             'Dario Burns19',
//             'Chloe Rich20',
//             'Martyna Felix',
//             'Nida Glass',
//             'Maeve Miles',
//             'Hasnain Puckett',
//             'Ayman Cano',
//             'Safwan Perry',
//             'Fox Kelly',
//             'Louise Barlow',
//             'Malaki Mcgill',
//             'Leanna Cline',
//             'Willard Hodge',
//             'Amelia Dorsey',
//             'Kiah Porter',
//             'Jeanne Daly',
//             'Mohsin Armstrong',
//             'Laurie Rangel',
//             'Princess Tierney',
//             'Kasim Kendall',
//             'Darryl Cope',
//             'Elysha Ray',
//             'Liyana Harris',
//             'Kashif Blackburn',
//             'Atif Zimmerman',
//             'Sila Hartley',
//             'Ralphie Hebert',
//         ]
//     }
//     const data2 = {
//         title: "What to learn",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS", isDone: true},
//             {taskId: 2, title: "JS", isDone: true}
//         ],
//         students: [
//             'Rick Kane',
//             'Finnlay Bentley',
//             'Samia North',
//             'Isaac Morton',
//             'Lily-Ann Clifford',
//             'Thalia Park',
//             'Sapphire Cruz',
//             'Cieran Vazquez',
//             'Anya Estes',
//             'Dominika Field',
//             'Rosanna Chung',
//             'Safiyah Davey',
//             'Ryley Beasley',
//             'Kalvin Trejo',
//             'Evie-Mae Farrell',
//             'Juliet Valencia',
//             'Astrid Austin',
//             'Lyle Montgomery',
//             'Nisha Mora',
//             'Kylie Callaghan',
//             'Star Wilks',
//             'Marissa Colley',
//             'Asa Fuller',
//             'Leigh Kemp',
//             'Avleen Dawson',
//             'Sammy Bonilla',
//             'Acacia Becker',
//             'Coral Shepherd',
//             'Melina Molina',
//             'Kiran Bailey',
//             'Clara Escobar',
//             'Alexandru Horn',
//             'Brandon-Lee Mercado',
//             'Elouise Weston',
//             'King Long',
//             'Kerri Searle',
//             'Kanye Hamer',
//             'Elwood Benitez',
//             'Mikail Whitaker',
//             'Bobby Hardy',
//             'Talha Ferry',
//             'Priscilla Landry',
//             'Olivia-Grace Cain',
//             'Kiaan Wallace',
//             'Wesley Padilla90',
//             'Ella-Grace Wooten91',
//             'Kaif Molloy92',
//             'Kamal Broadhurst93',
//             'Bianca Ferrell94',
//             'Micheal Talbot95',
//         ]
//     }
//
//     return (
//         <div className="App">
//             <Tasks data={data1}/>
//             <Tasks data={data2}/>
//         </div>
//     );
// }
//
// export default App;

// import React from 'react';
// import {DataType} from "./App";
//
// type  TasksPropsType = {
//     data: DataType
// }
//
// export const Tasks = (props: TasksPropsType) => {
//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

//--------------------------------------------------------------