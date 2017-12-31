<template>
  <div class="overlap">
    <div class="center-wrapper">
      <div class="white-panel box-shadow">
      <div class="row">
        <div class="close-button" @click.prevent="closePanel">close</div>
      </div>


      <div id="create-task-form" class="row form-wrapper">
        <form action="submit">
          <div class="form-group">
            <label for="task-title">Task title</label>
            <input type="text" class="form-control" name="title" v-model="title">         
          </div>

          <div class="form-group row team-check">
            <label for="assgined-teams">Assigned teams</label>
            <div
                v-for="(team, idx) in teams"
                :key="team.id">
              <input type="checkbox" class="form-control" v-model="assignTeams[team.id]" true-value="true" :name="'assigned-teams-' + idx">
              {{ team.name }}   
            </div>
          </div> 

          <div class="form-group">
            <label for="task-detail">Task detail</label>
            <textarea name="detail" id="task-detail" cols="40" rows="10" v-model="detail"></textarea>        
          </div>     

          <div class="form-group">
            <label for="start">Task start at</label>
            <input
                type="datetime-local"
                class="form-control"
                name="start"
                v-model="start">         
          </div>

          <div class="form-group">
            <label for="end">Task end at</label>
            <input
                type="datetime-local"
                class="form-control"
                name="end"
                v-model="end">         
          </div>
          <button
            type="submit"
            id="create-task-submit-button"
            @click.prevent="submitCreateTask"
            :disabled="!isSubmittable">Submit</button>
        </form>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { teamValidator } from '@/lib/validators/validator';

  export default {
    props: ['closePanel', 'teams'],
    data() {
      return {
        assignTeams: {},  // kew will be team Id during creating, value will be selected value
        title: '',
        detail: '',
        start: null,
        end: null,
      };
    },
    computed: {
      isSubmittable() {
        const textProps = ['title', 'detail'];
        const dateProps = ['start', 'end'];
        let notSubmittableFlg = 0;
        textProps.forEach((prop) => {
          console.log('this[prop]: ', this[prop] === '');
          if (teamValidator.textValidator(this[prop])) return;
          console.log('working');
          notSubmittableFlg += 1;
        });
        dateProps.forEach((prop) => {
          if (teamValidator.dateValidator(this[prop])) return;
          notSubmittableFlg += 1;
        });
        console.log('working point1', notSubmittableFlg);
        if (!teamValidator.assignTeamValidator(this.assignTeams)) return false;
        if (notSubmittableFlg) return false;
        return true;
      },
    },
    methods: {
      getAssignedTeamIds() {
        return Object.keys(this.assignTeams).filter(teamId => this.assignTeams[teamId] === 'true');
      },
      submitCreateTask() {
        const task = {
          title: this.title,
          detail: this.detail,
          assignedTeamIds: this.getAssignedTeamIds(),
          start: new Date(this.start),
          end: new Date(this.end),
        };
        this.$store.dispatch('teamBoardWithTaskNav/addTask', task);
        this.closePanel();
      },
    },
    created() {
      this.teams.forEach((team) => { this.assignTeams[team.id] = ''; });
    },
  };
</script>


<style lang="scss" scoped>

</style>
