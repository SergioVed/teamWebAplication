import { useState } from "react"
import userImg from "../img/randomWorkers/user.png"
interface Worker {
    name: string,
    work: string,
    img: string,
    rating: number,
    date: Date
}

const workers: Worker[] = [
    {
        name: "test 1",
        work: "Frontend developer",
        img: userImg,
        rating: 1,
        date: new Date("2018-03-16")
    },
    {
        name: "test 2",
        work: "Frontend developer",
        img: userImg,
        rating: 2,
        date: new Date("2020-03-16")
    },
    {
        name: "test 3",
        work: "Frontend developer",
        img: userImg,
        rating: 3,
        date: new Date("2021-03-16")
    },
    {
        name: "test 4",
        work: "Frontend developer",
        img: userImg,
        rating: 4,
        date: new Date("2023-03-16")
    },
    {
        name: " test5",
        work: "Frontend developer",
        img: userImg,
        rating: 5,
        date: new Date("2016-03-16")
    },
    {
        name: "test 6",
        work: "Frontend developer",
        img: userImg,
        rating: 6,
        date: new Date("2016-03-16")
    },
    {
        name: "test 7",
        work: "Frontend developer",
        img: userImg,
        rating: 7,
        date: new Date("2015-03-16")
    },
    {
        name: "test 7",
        work: "Frontend developer",
        img: userImg,
        rating: 7,
        date: new Date("2019-03-16")
    },
    {
        name: "test 8",
        work: "Frontend developer",
        img: userImg,
        rating: 8,
        date: new Date("2012-03-16")
    },
    {
        name: "test 9",
        work: "Frontend developer",
        img: userImg,
        rating: 9,
        date: new Date("2010-03-16")
    },
]


function getNew(workers: Worker[]) {
    return workers.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    }).slice(0, 5)
}

function best(workers: Worker[]) {
    return workers.sort((a, b) => {
        return b.rating - a.rating
    }).slice(0, 5)
}


export { workers, best, getNew }
export type { Worker }
