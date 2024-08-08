import moment from 'moment/min/moment-with-locales';

export const DateTimePretty = (props) => {
    moment.locale('ru');
    const transformDate = moment(props.data).fromNow()
    return (
        <p className="date">{transformDate}</p>
    )
}
