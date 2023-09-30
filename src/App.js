import React, { Component } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import STYLES from './App.scss';
import BpkCalendar, {
    CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
    INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';

const getClassName = cssModules(STYLES);
const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
    {
        name: 'Sunday',
        nameAbbr: 'Sun',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Monday',
        nameAbbr: 'Mon',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Tuesday',
        nameAbbr: 'Tues',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Wednesday',
        nameAbbr: 'Wed',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Thursday',
        nameAbbr: 'Thurs',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Friday',
        nameAbbr: 'Fri',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Saturday',
        nameAbbr: 'Sat',
        index: 0,
        isWeekend: true,
    },
    // ...
];

class App extends Component {
    constructor() {
        super();

        this.state = {
            selectionConfiguration: {
                type: CALENDAR_SELECTION_TYPE.single,
                date: null,
            },
        };
    }

    handleDateSelect = (date) => {
        this.setState({
            selectionConfiguration: {
                type: CALENDAR_SELECTION_TYPE.single,
                date: date,
            },
        });
    };


    render() {
        return (
            <div className={getClassName('App')}>
            <header className={getClassName('App__header')}>
              <div className={getClassName('App__header-inner')}>
                <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
              </div>
            </header>
            <main className={getClassName('App__main')}>
              <BpkText tagName="p" className={getClassName('App__text')}>
              </BpkText>
            </main>

            <div>
                <BpkInput
                    id="dateInput"
                    type={INPUT_TYPES.text}
                    name="date"
                    value={(this.state.selectionConfiguration.date || '').toString()}
                    placeholder="Departure date"
                />
                <BpkCalendar
                    id="calendar"
                    onDateSelect={this.handleDateSelect}
                    formatMonth={formatMonth}
                    formatDateFull={formatDateFull}
                    daysOfWeek={daysOfWeek}
                    weekStartsOn={1}
                    changeMonthLabel="Change month"
                    nextMonthLabel="Next month"
                    previousMonthLabel="Previous month"
                    selectionConfiguration={this.state.selectionConfiguration}
                />
            </div>
            <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>

        </div>
        );
    }
    
}

export default App;