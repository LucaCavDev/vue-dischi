// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


// X BONUS VEDI QUA https://vuejs.org/v2/guide/forms.html

var app = new Vue ({
  el: '#app',
  data: {
    albumList: [],
    //per il bonus faccio un array di generi e uso selected per il genere attivo
    arrayGeneri: [], //voglio riempirlo con i generi degli album in albumList
    genereSelezionato: ''// genere selezionato di default è vuoto, così riesco a prendere tutti gli album nella prima option che h lasciato con value normale e fuori dal v-for
  },

  //importo i 10 album
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => {
      let album = risposta.data.response
      this.albumList = album;

      //ero partito dividendo la selezione del genere dalla funzione qua sopra, ma mi ritrovavo a copiare la prima parte quindi conviene incorporarla

      // per ogni elemento (lo chiamo album) presente nell'array albumList faccio girare la seguente arrowfunction
      this.albumList.forEach((album) => {
        //devo popolare l'array composto dai generi musicali di cui fanno parte gli album in albumList

        //condizione if l'ho messa perchè senza funziona lo stesso, ma non mettendola il select v-model mi dava una opzione di genere per ogni album presente, dandomi dunque doppioni di opzioni
        if (this.arrayGeneri.includes(album.genre)) {
          //se il genere dell'album che sto guardando in questo ciclo è già nell'array dei generi NON FACCIO NIENTE
        } else {
          //else, quindi se non è già presente, lo aggiungo nell'arraydei generi
          this.arrayGeneri.push(album.genre);
        }
      });
    })
  }

})
