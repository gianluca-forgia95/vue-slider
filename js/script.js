var root = new Vue({
el: '#root',
data: {
    images: [
    "img/verdone.jpg",
    "img/proietti.jpg",
    "img/sordi.jpg",
    "img/desica.jpg"
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
