<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="col">
          <p v-if="speechStart"> 
            Bubu currently listening to you
          </p>
          <v-btn
            success
            @click="startSpeechRecognition"
          >
            <v-icon>mdi-microphone</v-icon>
            <span>click to talk to bubu</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        speechStart: false,
        errMsg: ''
      }
    },
    methods: {
      startSpeechRecognition () {
        this.speechStart = true; //showing alert for microphone listening
        setTimeout(() => {
          this.speechStart = false; //setting alert back to false
        }, 2000);

        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition) ();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 5;
        recognition.start();

        recognition.onspeechend = function() {
          recognition.stop(); //speech function stops when the onspeechend function is fired
        }

        recognition.onresult = function(event) {  //function displaying the bot's response
          axios.get('https://corona.lmao.ninja/v2/countries/'+ event.results[0][0].transcript)
          .then((res) => {
            var msg = new SpeechSynthesisUtterance('Country Selected'+ res.data.country + 'Total Cases' + res.data.cases + 'Active cases' + res.data.active + 'Critical cases' + res.data.critical + 'Death' + res.data.deaths + 'Recovered' + res.data.recovered + 'Today case' + res.data.todayCases + 'Todays death' + res.data.todayDeaths);
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[1];
            msg.voiceURI = "Microsoft Zira Desktop - English (United States)";
            msg.volume = 1;
            msg.rate = 1;
            msg.pitch = 0.8;
            msg.lang = 'en-US';
            window.speechSynthesis.speak(msg);
          })
          .catch((err) => {
            this.errMsg = err
            var msg = new SpeechSynthesisUtterance('Hi User, What you have provided me is not a country. Kindly provide me with the name of a country and i will get the update.');
            window.speechSynthesis.speak(msg);
          })
        }

        recognition.onerror = function() { //error function fired
          var msg = new SpeechSynthesisUtterance('I did not hear you clearly, You could increase your voice a little for me to hear you');
          window.speechSynthesis.speak(msg);
        }
      }
    }
  }
</script>


<style scoped>
  .col {
    width: 80%;
    margin-left: 20%;
    margin-top: 100px;
  }

  @media screen and (max-width: 600px) {
    .col {
      width: 80%;
      margin-left: 10%;
      margin-top: 150px;
    }
  }
</style>
