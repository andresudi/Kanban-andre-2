<template>
    <div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Title:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model='title'>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Description:</label>
                            <textarea class="form-control" id="message-text" v-model='description'></textarea>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Point:</label>
                            <input type="number" class="form-control" id="recipient-name" v-model='point'>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Assigned To:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model='assignedTo'>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
      point: "",
      assignedTo: ""
    };
  },
  methods: {
    ...mapActions(["createTask", "getAllTask"]),
    addTask() {
      this.createTask({
        title: this.title,
        description: this.description,
        point: this.point,
        assignedTo: this.assignedTo,
        status: "backlog"
      });
      this.title = "";
      this.description = "";
      this.point = "";
      this.assignedTo = "";
    }
  }
};
</script>

<style>
</style>
