import './App.css'
import { useState } from 'react';
import { DateTimePretty } from './Components/DateTimePretty';
import { nanoid } from 'nanoid';

function DateTime(props) {
    return (
        <DateTimePretty data={props.date}/> 
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video key={nanoid()} url={item.url} date={item.date} />);
}

export default function App() {
    const [list] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-04-25 18:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-04-25 18:40:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-04-25 19:40:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
