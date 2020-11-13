var app = new Vue ({
    el: "#root",
    data: {
        profile: {
            name: "Ivan",
            avatar: "https://lh3.googleusercontent.com/proxy/xOrcSfUrXOVUAE6saI_mWxNTLZiV6_XU5z4RqmckPGfP5xapKbckX2bfyF9KZ1HcaF8-6gvnXllDPgXM1d2Zz4tI90R_p91nEYZugOTTeEELYBihq17os_-kClG6CwQqmNBPTrumv-zbTnwlIsRgK79hgRcJrw"
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
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
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

        // end array concats
        ],

        chatActive: 0,
        newMex:'',
        search:'',
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
                    message: 'ok',
                    status: 'received'
                 }
                 this.contacts[this.chatActive].messages.push(reply);
            }, 1000)
        },






    //---end methods---
    },
    // funzione per ricercare il nome

    // computed:{
    //     filteredContacts:function() {
    //         return this.contacts.filter((cust) => {
    //             return cust.name.match(this.search)
    //         });
    //     },
    // },





//end Vue
});
