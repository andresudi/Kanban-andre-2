<template>
    <div class="caro">
        <div class="container">
            <div id="demo" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
    
                <!-- The slideshow -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i1.wp.com/www.cleverism.com/wp-content/uploads/2015/04/561-How-to-Use-Kanban-to-Improve-Business-Productivity.png?fit=740%2C482&ssl=1" alt="" width="500" height="250">
                    </div>
                    <div class="carousel-item">
                        <img src="https://wac-cdn.atlassian.com/dam/jcr:1f2f6b07-02ae-41fe-b8aa-f9e680d1d7d0/KanbanBoard.png?cdnVersion=ji" alt="" width="500" height="250">
                    </div>
                    <div class="carousel-item">
                        <img src="https://agilescrumgroup.nl/wp-content/uploads/wat-is-de-kanban-methode.jpg" alt="" width="500" height="250">
                    </div>
                </div>
    
                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            <br>
            <div>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalAdd">Add Task</button>
            </div>
        </div>
        <ModalAdd></ModalAdd>
    </div>
</template>

<script>
    import ModalAdd from '@/components/ModalAdd.vue'
    export default {
        components: {
            ModalAdd
        }
    }
</script>

<style scoped>
    .caro {
        margin-top: 10px;
    }
</style>
