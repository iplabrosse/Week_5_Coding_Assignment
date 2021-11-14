class Player {
    constructor(name, position, age, salary){
        this.name = name;
        this.position = position;
        this.age = age;
        this.salary = salary;
    }

    describe() {
        return `${this.name} plays ${this.position} is ${this.age} makes ${this.salary}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
          throw new error(`You can only add an instance of Player. Argument is not a player: ${player}`); 
        }

    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
  
}

class Menu {
    constructor(){
     this.team =[];
     this.selectedTeam = null;   
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break; 
                case '4':
                    this.displayTeams(); 
                    break;
                default:
                    selection = 0;      
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }  
    
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) create player
        2) delete player
        ----------------------
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.team.length; i++) {
            teamString += i + ') ' + this.team[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter name for new team:');
        this.team.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.team.length) {
          this.selectedTeam = this.team[index];
          let description = 'Team Name: ' + this.selectedTeam.name + '\n';

          for (let i = 0; i < this.selectedTeam.players.length; i++) {
              description += i + ') ' + this.selectedTeam.players[i].name 
              + ' - ' + this.selectedTeam.players[i].position + ' - ' + this.selectedTeam.players[i].age + 
              ' - ' + this.selectedTeam.players[i].salary  + '\n';
          }

          let selection = this.showTeamMenuOptions(description);0
          switch (selection) {
              case '1':
                  this.createPlayer();
                  break;
              case '2':
                  this.deletePlayer();   
          }
        }
    }  
    
    deleteTeam() {
        let index = prompt('Enter the index for the team you wish to delete:');
        if (index > -1 && index < this.team.length) {
            this.teams.splice(index, 1);
        }
    }
    createPlayer() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:');
        let age = prompt('Enter age for new player:')
        let salary = prompt('Enter salary for new player')
        this.selectedTeam.players.push(new Player(name, position, age, salary));
    }
    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();
