var app = new Vue ({
    el: "#root",
    data: {
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
    // ---end DATA---
    },

    methods: {

        selectChat(index){
            this.chatActive = index;
        },



    //---end methods---
    }





//end Vue
});
