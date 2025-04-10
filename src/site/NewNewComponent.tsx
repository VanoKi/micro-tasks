import {useState} from "react";

type Money = {
    banknots: string
    value: number
    number: string
}

type FilterType = 'All' | 'Dollars' | 'RUBLS'

type NewComponentType = {
    callBack: (nameBtn: FilterType) => void
    money: Money[]
}

export const NewNewComponent = (props: NewComponentType) => {

    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
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
                <button onClick={() => props.callBack('All')}>All</button>
                <button onClick={() => props.callBack('RUBLS')}>Roubles</button>
                <button onClick={() => props.callBack('Dollars')}>Dollars</button>
            </div>
        </>
    );
}