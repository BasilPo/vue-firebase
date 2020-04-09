<template>
  <dav class="home">
    <h2>Home</h2>
    <p v-if="lat">{{lat}}</p>
    <p v-if="lng">{{lng}}</p>
    <button @click="showProfile">View Profile</button>
  </dav>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";

export default {
  name: "Home",
  data() {
    return {
      lat: null,
      lng: null
    };
  },
  // methods: {
  //   render() {
  //     db.collection("users")
  //       .get()
  //       .then(user => {
  //         user.docs.forEach(doc => {
  //           let data = doc.data();
  //           if (data.geolocation) {
  //             this.lat = data.geolocation.lat;
  //             this.lng = data.geolocation.lng;
  //           }
  //         });
  //       });
  //   }
  // },
  methods: {
    showProfile() {
      db.collection("users")
        .get()
        .then(user => {
          user.docs.forEach(doc => {
            let data = doc.data();
            if (data.geolocation) {
              this.lat = data.geolocation.lat;
              this.lng = data.geolocation.lng;
            }
          });
        });
      this.$router.push({ name: "ViewProfile", params: { id: doc.id } });
    }
  },
  mounted() {
    //get current user
    let user = firebase.auth().currentUser;
    //console.log(firebase.auth().currentUser);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.lat = pos.coords.latitude;
          this.lng = pos.coords.longitude;

          db.collection("users")
            .where("user_id", "==", user.uid)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                db.collection("users")
                  .doc(doc.id)
                  .update({
                    geolocation: {
                      lat: pos.coords.latitude,
                      lng: pos.coords.longitude
                    }
                  });
              });
            })
            .then(() => {});
        },
        err => {
          console.log(err);
        },
        { maximumAge: 60000, timeout: 3000 }
      );
    } else {
      this.lat = 0;
      this.lng = 0;
    }
  }
};
</script>

<style>
</style>
