import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import '../../css/Calendar.css';
import { createHashHistory } from 'history';
import './main.scss'
import NavbarMainPage from "../Navbar/NavbarMainPage";
import {eventService} from "../../service/EventService";
import {confirmAlert} from "react-confirm-alert";
import Footer from "../Footer/Footer";
import {auth, authenticate} from "../../service/UserService";
import Navbar from "../Navbar/Navbar";

const history = createHashHistory();

export default class Calendar extends React.Component {
    check;
    size;
    ok;
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {id: 1, title: "one", date: "2020-01-21"},{id: 2, title: "to", date: "2020-01-22"},{id: 3, title: "Tre", date: "2020-01-23"}
            ]
        }

    }


    componentDidMount() {
        authenticate();
        if (auth.authenticated) {
            console.log("Er logget inn");
            this.check = true;
        }else{

            this.check = false;
            console.log("Er ikke logget inn");
        }
        let list = [];
        eventService.getAllActive().then(events => {
            events.map(item => list.push({id: item.event_id, title: item.name, date: this.formatDate(item.date)}))
            console.log(list);
            this.setState({
                    events: list
                }
            )}).catch(error => console.error(error.message));
    }





    formatDate(backendDate) {
        let tempDate = backendDate;
        let year = tempDate.slice(0, 4);
        let month = tempDate.slice(5, 7);
        let date = tempDate.slice(8, 10);


        return year + "-" + month + "-" + date;
    }

    render() {
        this.size = window.innerWidth;
        if(this.size > 800){
            this.ok = true;
        }else{
            this.ok = false;
        }
        let myEvents = this.state.events;
        console.log(this.size);
        console.log(myEvents);
        console.log(this.ok);
        if(this.ok) {
            if (this.check === true) {
                return (
                    <div>
                        <Navbar/>
                        <div id="CalendarShowDiv">
                            <FullCalendar
                                id="fullCalendar"
                                defaultView="dayGridMonth"
                                plugins={[dayGridPlugin, interactionPlugin]}
                                events={myEvents}
                                eventClick={function (calEvent) {
                                    confirmAlert({
                                        title: calEvent.event._def.title,
                                        buttons: [
                                            {
                                                label: 'Se arrangement',
                                                onClick: () => history.push("/event/public/" + calEvent.event._def.publicId)
                                            },
                                            {
                                                label: 'Se redigerbart arrangement',
                                                onClick: () => history.push("/event/" + calEvent.event._def.publicId)
                                            },
                                            {
                                                label: 'Avslutt'
                                            }
                                        ]
                                    });
                                }}
                            />
                        </div>
                        <Footer/>
                    </div>
                )
            } else {
                return (
                    <div>
                        <NavbarMainPage/>
                        <div id="CalendarShowDiv">
                            <FullCalendar
                                id="fullCalendar"
                                defaultView="dayGridMonth"
                                plugins={[dayGridPlugin, interactionPlugin]}
                                events={myEvents}
                                eventClick={function (calEvent) {
                                    confirmAlert({
                                        title: calEvent.event._def.title,
                                        buttons: [
                                            {
                                                label: 'Se arrangement',
                                                onClick: () => history.push("/event/public/" + calEvent.event._def.publicId)
                                            },
                                            {
                                                label: 'Avslutt'
                                            }
                                        ]
                                    });
                                    console.log("Er ikke logget inn");
                                }}
                            />
                        </div>
                        <Footer/>
                    </div>
                )
            }
        }else{
            if (this.check === true) {
                return (
                    <div>
                        <Navbar/>
                        <div id="CalendarShowDiv">
                            <FullCalendar
                                id="fullCalendar"
                                defaultView="listWeek"
                                plugins={[listPlugin , interactionPlugin]}
                                events={myEvents}
                                eventClick={function (calEvent) {
                                    confirmAlert({
                                        title: calEvent.event._def.title,
                                        buttons: [
                                            {
                                                label: 'Se arrangement',
                                                onClick: () => history.push("/event/public/" + calEvent.event._def.publicId)
                                            },
                                            {
                                                label: 'Se redigerbart arrangement',
                                                onClick: () => history.push("/event/" + calEvent.event._def.publicId)
                                            },
                                            {
                                                label: 'Avslutt'
                                            }
                                        ]
                                    });
                                }}
                            />
                        </div>
                        <Footer/>
                    </div>
                )
            } else {
                return (
                    <div>
                        <NavbarMainPage/>
                        <div id="CalendarShowDiv">
                            <FullCalendar
                                id="fullCalendar"
                                defaultView="listWeek"
                                plugins={[listPlugin , interactionPlugin]}
                                events={myEvents}
                                eventClick={function (calEvent) {
                                    confirmAlert({
                                        title: calEvent.event._def.title,
                                        buttons: [
                                            {
                                                label: 'Se arrangement',
                                                onClick: () => history.push("/event/public/" + calEvent.event._def.publicId)
                                            },
                                            {
                                                label: 'Avslutt'
                                            }
                                        ]
                                    });
                                    console.log("Er ikke logget inn");
                                }}
                            />
                        </div>
                        <Footer/>
                    </div>
                )
            }
        }


    }

    move(id){
        history.push("/event/public/" + id)
    }

}

/*
confirmAlert({
                                    title: calEvent.event._def.title,
                                    buttons: [
                                        {
                                            label: 'Se arrangement',
                                            onClick : () => history.push("/event/public/" + calEvent.event._def.publicId)
                                        },
                                        {
                                            label: 'Se redigerbart arrangement',
                                            onClick : () => history.push("/event/" + calEvent.event._def.publicId)
                                        },
                                        {
                                            label: 'Avslutt'
                                        }
                                    ]
                                });
 */

