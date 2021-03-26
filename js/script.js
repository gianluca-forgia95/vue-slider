var root = new Vue({
el: '#root',
data: {
    images: [
      {
        img: "img/verdone.jpg",
        descr:'Carlo Verdone nel film Borotalco'
      },
     {
       img: "img/proietti.jpg",
       descr:'Gigi Proietti, Mandrake in "Febbre da Cavallo"'
     },
     {
       img: "img/desica.jpg",
       descr:'Christian De Sica in "Fratelli d Italia"'
     },
     {
       img: "img/sordi.jpg",
       descr:'Alberto Sordi nella sua villa a Roma'
     },


    ],
    imgIndex: 0,

   },
   methods: {
    nextImg: function() {
      this.imgIndex++;
      if (this.imgIndex == this.images.length ) {
         this.imgIndex = 0;
      }
    },
    prevImg: function() {
      this.imgIndex--;
      if (this.imgIndex < 0 ) {
         this.imgIndex = this.images.length - 1 ;
      }
    },

   }

});
