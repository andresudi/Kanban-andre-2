<template>
    <div class="col-md-3">
        <div :class="setColor()" style="max-width: 18rem;">
            <div class="card-header"><strong>{{ status }}</strong></div>
            <div class="card-body">
                <div class="card standard-card text-white bg-dark mb-3" style="max-width: 18rem;" v-for="(kanban,i) in tasks" v-bind:key="i">
                    <p class="card-title"><strong>Title: </strong>{{kanban.title}}</p>
                    <p class="card-title"><strong>Description: </strong>{{kanban.description}}</p>
                    <p class="card-title"><strong>Point: </strong>{{kanban.point}}</p>
                    <p class="card-text"><strong> To: </strong>{{kanban.assignedTo}}</p>
                    <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px; margin-bottom: 10px;">
                        <button type="button" class="btn btn-warning" @click="left(kanban)" v-if="kanban.status > 0">&lt;</button>
                        <button type="button" class="btn btn-danger" @click="deleteTask(kanban.id)">x</button>
                        <button type="button" class="btn btn-warning" @click="right(kanban)" v-if="kanban.status < 3">></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    export default {
        props: ["status", "tasks"],
        data() {
            return {
    
            }
        },
    
        methods: {
            ...mapActions(['getAllTasks','removeTask', 'updateStatus']),

            setColor() {
                if (this.status == 'Back-Log') {
                    return "card text-white bg-danger col-md-12 items"
                } else if (this.status == 'To Do') {
                    return "card text-white bg-warning col-md-12 items"
                } else if (this.status == 'Doing') {
                    return "card text-white bg-primary col-md-12 items"
                } else if (this.status == 'Approved') {
                    return "card text-white bg-success col-md-12 items"
                }
            },
    
            left(data) {
                this.updateStatus({
                    task: data,
                    next: true
                })
            },
    
            right(data) {
                   this.updateStatus({
                    task: data,
                    next: false
                })
            },
    
            deleteTask(index) {
                this.removeTask(index)
            }
        },

        mounted() {
            this.getAllTasks()
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
