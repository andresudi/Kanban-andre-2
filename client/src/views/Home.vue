<template>
  <div>
    <Carousel></Carousel>
    <br>
    <div class="container">
      <div class="row body">
        <BackLog :backlog="this.tasks"></BackLog>
        <Todo :todo="this.tasks"></Todo>
        <Doing :doing="this.tasks"></Doing>
        <Approved :approved="this.tasks"></Approved>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel";
import BackLog from "@/components/BackLog.vue";
import Todo from "@/components/Todo";
import Doing from "@/components/Doing";
import Approved from "@/components/Approved";
import { mapActions, mapState } from "vuex";
export default {
  name: "home",
  components: {
    Carousel,
    BackLog,
    Todo,
    Doing,
    Approved
  },
  methods: {
    ...mapActions(["getAllTask"])
  },
  computed: {
    ...mapState(["tasks"])
  },
  mounted() {
    this.getAllTask();
  }
};
</script>
