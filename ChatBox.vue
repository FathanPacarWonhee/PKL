<template>
 <div class="hello">
   <h1>Ask to chatGpt</h1>
   <input v-model="currentMessage" type="text"> <span><button @click="sendMessage(currentMessage)">Ask</button></span>
   <div class="messageBox">
    <template v-for="message in messages" :key="message">
     <div :class="message.from=='user' ? 'messageFromUser' :'messageFromChatGpt'" v-html="message.data"></div>
   </template>
   </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 name: "ChatBos",
 data() {
   return {
     messages: [],
     currentMessage: null
   }
 },

 methods: {
   async sendMessage(message) {
     this.messages.push({
       from: 'user',
       data: message
     })
     await axios.post('http://localhost:3000/ask-to-chat-gpt', {
       message: message
     })
     .then((response) => {
       this.messages.push(response.data)
     })
   }
 }
};
</script>

<style scoped>
input {
 width: 300px;
 padding: 10px;
}

button {
 height: 40px;
 background-color: powderblue;
 padding: 10px;
}
.messageBox {
 height: 500px;
 background-color: gainsboro;
 margin: 0 20% 0 20%;
 margin-top: 20px;
 padding: 5%;
}

.messageFromUser {
 text-align: right;
 background-color: aliceblue;
 border-radius: 10px;
 padding: 10px;
 margin-top: 15px;
 margin-bottom: 15px;
 width: 30%;
 margin-left: 70%;
}

.messageFromChatGpt {
 text-align: left;
 background-color: antiquewhite;
 border-radius: 10px;
 padding: 10px;
 margin-top: 15px;
 margin-bottom: 15px;
 width: 30%;
 margin-right: 70%;
}
</style>
