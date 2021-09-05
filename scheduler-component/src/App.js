import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule'
import React from 'react'

function App() {
  return (
    <div className="App">
     <ScheduleComponent currentView="Month" selectedDate={new Date(2021, 9, 10)}>
       <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
     </ScheduleComponent>
    </div>
  );
}

export default App;
