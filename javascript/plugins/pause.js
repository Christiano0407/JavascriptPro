class pause {
    run(player){ 
        constructor() {
            this.threshold = 0.25
        }

        this.player = player;
       const observer = new IntersectionObserver(this.handlerIntersection, {
     threshold: this.threshold
       }) 

       observer.observe(player.media)
    }
    handlerIntersection(entries) {
       const entry = entries[0];

      const isVisible =  entry.intersectionRatio > this.threshold

      if (isVisible){
          this.player.play();

      }else {
          this.player.pause();

      }
    }
}

export default pause;