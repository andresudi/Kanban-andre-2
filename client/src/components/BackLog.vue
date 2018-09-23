<template>
    <div class="col-md-3">
        <div class="card text-white bg-danger col-md-12 items" style="max-width: 18rem;">
            <div class="card-header"><strong>Back-log</strong></div>
            <div class="card-body">
                <div class="card standard-card text-white bg-dark mb-3" style="max-width: 18rem;" v-for="(kanban,i) in backlog" v-bind:key="i" v-if="kanban.status == 'backlog'">
                    <p class="card-title"><strong>Title: </strong>{{kanban.title}}</p>
                    <p class="card-title"><strong>Point: </strong>{{kanban.point}}</p>
                    <p class="card-text"><strong> To: </strong>{{kanban.assignedTo}}</p>
                    <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                        <button type="button" class="btn btn-outline-light" data-toggle="modal" @click="getTask(i)" data-target="#modalBackLog">Show Detail</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modalBackLog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Detail Task</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <h5><strong>Title:</strong> {{ task.title }}</h5>
                        <h5><strong>Description::</strong> {{ task.description }}</h5>
                        <h5><strong>Point::</strong> {{ task.point }}</h5>
                        <h5><strong>To::</strong> {{ task.assignedTo }}</h5>
                    </div>
                    <div class="modal-footer" style="justify-content: center;">
                        <button type="button" class="btn btn-danger" @click="deleteTask" data-dismiss="modal">Delete</button>
                        <button type="button" class="btn btn-warning" @click="next(task)" data-dismiss="modal">Todo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    export default {
        props: ['backlog'],
        data() {
            return {
    
            }
        },
    
        methods: {
            ...mapActions(['getAllTask', 'getOneTask', 'updateToDo','removeTask']),
            getTask(id) {
                console.log('tag', this.task)
                this.getOneTask(id)
            },

            next (data) {
                let obj = {
                    title: data.title,
                    description: data.description,
                    point: data.point,
                    assignedTo: data.assignedTo,
                    id: this.id
                }
                this.updateToDo(obj)
            },

            deleteTask () {
                this.removeTask(this.id)
            }
        },
    
        computed: {
            ...mapState(['tasks', 'task', 'id'])
        },
    
        mounted() {
            this.getAllTask()
        }
    }
</script>

<style>
    .card {
        min-height: 280px;
    }
    
    .card .standard-card {
        min-height: 200px;
    }
</style>
