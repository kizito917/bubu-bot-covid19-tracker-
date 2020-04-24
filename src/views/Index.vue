<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Speechfunc />
  </div>
</template>

<script>
// @ is an alias to /src
import Speechfunc from '@/components/Speechfunc.vue'
import { Howl } from 'howler'   //importing howler library used for audio autoplay on background
export default {
  name: 'Home',
  components: {
    Speechfunc
  },
  data() {
    return {

    }
  },
  created() {
    // Setup the new Howl for auto audio background player
        const sound = new Howl({
        src: ['bubu_voice.mp3'],
            autoplay: true,
            html5: true,
            format: 'mp3'
        });
        // Function to trigger sound.
        sound.play();
  }
}
</script>
