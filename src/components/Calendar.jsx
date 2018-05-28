import React, { Component } from 'react';

class Calendario extends Component {
    componentDidMount() {
	let date = new Date();
	let d = date.getDate();
	let m = date.getMonth();
	let y = date.getFullYear();

	this.$el = $(this.el);

	this.$el.fullCalendar({
	    header: {
		center: 'title',
		right: 'today prev,next',
		left: ''
	    },
	    titleFormat: {
		day: 'dddd, d MMM, yyyy'
	    },
	    defaultView: 'agendaDay',
	    allDaySlot: false,
	    minTime: 9,
	    maxTime: '20:30',
	    weekends: false,
	    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
	    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
	    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
	    events: [],
	    eventBackgroundColor: '#278ccf'
	});
    }
    render(){
	return (
	    <div ref={el => this.el = el} />
	);
    }
}

export default Calendario;
