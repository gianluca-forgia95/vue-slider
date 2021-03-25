var root = new Vue({
el: '#root',
data: {
    images: [
    "img/verdone.jpg",
    "img/proietti.jpg",
    "img/sordi.jpg",
    "img/desica.jpg",
    ],
    imgIndex: 0
    },
   methods: {
    nexImg: function() {
      this.imgIndex++;
    }
   }

});
