<template>
  <div class="overlap">
    <div class="center-wrapper">
      <div class="white-panel box-shadow">
        <div class="row">
          <div class="close-button" @click.prevent="closePanel">close</div>
        </div>

        <!-- TODO: ADD assigned members -->
        <div id="create-team-form" class="row form-wrapper">
          <form action="submit">
            <div class="form-group">
              <label for="team-name">Team name</label>
              <input
                  type="text"
                  class="form-control"
                  name="team-name"
                  v-model="teamName">         
            </div>

            <button
              type="submit"
              id="create-team-submit-button"
              @click.prevent="submitCreateTeam"
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
        teamName: '',
      };
    },
    computed: {
      isSubmittable() {
        return teamValidator.textValidator(this.teamName);
      },
    },
    methods: {
      submitCreateTeam() {
        const team = {
          name: this.teamName,
        };
        this.$store.dispatch('teamBoardWithTaskNav/addTeam', team);
        this.closePanel();
      },
    },
  };
</script>


<style lang="scss" scoped>

</style>
