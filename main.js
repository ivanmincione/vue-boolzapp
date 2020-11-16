var app = new Vue ({
    el: "#root",
    data: {
        profile: {
            name: "Ivan",
            avatar: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg",
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://www.otticalamattina.net/images/ico-testimonial-man-270x270.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdIodeA09HyJj5HEweVAJH200AyozmyMwfBQ&usqp=CAU',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png',
                visible: true,
                messages: [
                    {
                        date: '25/03/2020 10:10:30',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '10/03/2020 10:20:30',
                        message: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: 'https://www.otticaarteeluci.it/images/ico-testimonial-girl-270x270.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Boolean',
                avatar: 'https://www.bheroes.it/wp-content/uploads/2020/07/Logo-boolean.png',
                visible: true,
                messages: [
                    {
                        date: '17/06/2020 15:30:55',
                        message: 'Ti piace il nostro corso?',
                        status: 'received'
                    },
                    {
                        date: '17/06/2020 15:31:10',
                        message: 'Si, è bellissimo',
                        status: 'sent'
                    },
                ],
            },

        // end array concats
        ],

        chatActive: 0,
        newMex:'',
        search:'',
        time: '',

    // ---end DATA---
    },

    methods: {

        selectChat(index){
            this.chatActive = index;
        },

        // aggiungo un nuovo messaggio all'interno di un nuovo oggetto creato dentro la funzione
        addNewMex(newMessage){
             var newMessage = {
                 date: '10/01/2020 15:30:55',
                 message: '',
                 status: 'sent'
             }

             newMessage.message = this.newMex;

             this.contacts[this.chatActive].messages.push(newMessage);
             //azzero l'input
             this.newMex = '';
             //imposto un settimeout per la risposta "ok"
             // senza arrow function non funziona
            setTimeout(() => {
                 let reply = {
                    date: '10/01/2020 15:31:00',
                    message: 'okok',
                    status: 'received'
                 }
                 this.contacts[this.chatActive].messages.push(reply);
            }, 1000)
        },


        // Funzione per cancellare un messaggio
        remove(index){
            this.contacts[this.chatActive].messages.splice(this.index, 1);
        },

        // provare con funzione delete di vue
        // remove() {
        //     this.delete(this.contacts{messages.this.message})
        // },

        //funzione calcolo dell' ora
        time(mex) {
            return moment().format("LT");
        },

         timeLastMex(user) {
             // seleziono l'ultimo messaggio dell'array
             var time = user.messages[user.messages.length - 1].date;
             return moment(time,"LT").format("LT");
         },

    //---end methods---
    },


    // funzione per ricercare il nome
        computed: {
            filteredList() {
                return this.contacts.filter((user, index) => {
                    return user.name.toLowerCase().includes(this.search.toLowerCase())
                })
                // a questo punto una volta filtrata la lista dei contatti cliccando NON segue più il giusto indice --- ???? ---
            },

        //end computed
        },



//end Vue
});
