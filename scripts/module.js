document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar')
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        navLinks: true,
        eventColor: '#2c3e50',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek addEventButton'
        },
        events: [
            {
                title: "doliprane",
                start: '2022-05-15T16:30:00' 
            },
            {
                title: "xanax",
                start: '2022-05-15T18:30:00'
            },
            {
                title: "efferalgan",
                start: "2022-05-17T14:35:00"
            },
            {
                title: "helicidine",
                start: "2022-05-20T15:50:00"
            }
        ],
        customButtons: {
            addEventButton: {
                text: '+',
                click:
                    function () {
                        var dateStr = prompt('entre une date au format YYYY-MM-DD format');
                        var medi = prompt("tom medicaments");
                        var heure = prompt('heure au format 00:00:00');
                        var date = new Date(dateStr + 'T' + heure);
                        if (!isNaN(date.valueOf())) {
                            calendar.addEvent({
                                title: medi,
                                start: date,
                            });

                            alert('Nouvelle Ajout dans votre calendrier');

                        } else {
                            alert('Ajout invalide');
                        }

                    }
            }
        }

    });
    calendar.render();
});
introJs().start();
introJs(".logo").start();



