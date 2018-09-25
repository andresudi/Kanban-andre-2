<template>
  <div>
    <Carousel></Carousel>
    <br>
    <div class="container">
      <div class="row body">
        <KanbanBoard :tasks="backlogTasks" :status= "'Back-Log'"></KanbanBoard>
        <KanbanBoard :tasks="todoTasks" :status= "'To Do'"></KanbanBoard>
        <KanbanBoard :tasks="doingTasks" :status= "'Doing'"></KanbanBoard>
        <KanbanBoard :tasks="approvedTasks" :status= "'Approved'"></KanbanBoard>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from "@/components/Carousel";
  import KanbanBoard from "@/components/KanbanBoard.vue";
  import {
    mapActions,
    mapState
  } from "vuex";
  export default {
    name: "home",
    components: {
      Carousel,
      KanbanBoard,
    },
    methods: {
      ...mapActions(["getAllTasks"])
    },
    computed: {
      ...mapState({
        allTasks: 'allTasks',
        backlogTasks: 'backlogTasks',
        todoTasks: 'todoTasks',
        doingTasks: 'doingTasks',
        approvedTasks: 'approvedTasks'
      })
    },
    mounted() {
      this.getAllTasks();
    }
  };
</script>
