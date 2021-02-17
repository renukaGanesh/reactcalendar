import * as React from 'react';
import { ScheduleComponent, Day, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default class ReactCalendar extends React.Component {
    constructor() {
        super(...arguments);
        this.scheduleData = [{}];
    }
    onClickAdd() {
        let Data = [{}];
        this.scheduleObj.addEvent(Data);
        console.log('ss=>', Data)
        debugger;
    }
    onClickSave() {
        let Data = {};
        this.scheduleObj.saveEvent(Data);
    }
    onClickDelete() {
        this.scheduleObj.deleteEvent(4);
    }
    render() {
        return (<div>
            <ButtonComponent id='add' title='Add' onClick={this.onClickAdd.bind(this)}>Add</ButtonComponent>
            <ButtonComponent id='edit' title='Edit' onClick={this.onClickSave.bind(this)}>Edit</ButtonComponent>
            <ButtonComponent id='delete' title='Delete' onClick={this.onClickDelete.bind(this)}>Delete</ButtonComponent> <ScheduleComponent ref={t => this.scheduleObj = t} width='100%' height='550px' selectedDate={new Date(Date.now())} eventSettings={{ dataSource: this.scheduleData }}>
                <ViewsDirective>
                    <ViewDirective option='Day'/>
                    <ViewDirective option='Month'/>
                </ViewsDirective>
                <Inject services={[Day,Month]}/>
            </ScheduleComponent>
        </div>);
    }
}
;