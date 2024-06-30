import {Details} from "./details.js";
import {Ui} from "./ui.module.js";

 export class Game{
        constructor(){
this.getGames("mmorpg")


document.querySelectorAll(".nav-item a").forEach((link) => {
    link.addEventListener("click", (e) => {
       document.querySelector(".nav-item  .active").classList.remove("active");
       e.target.classList.add("active");
       this.getGames(e.target.dataset.category);
    });
 });


this.ui=new Ui()
        }

        async  getGames(categoryName) {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'e81b1f7e4cmshc3e71106096634ep15668djsn6ee0e30e4571',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
        
            try {
               
                document.getElementById("spinner").classList.remove("d-none")
                const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
                const result = await response.json();
        
              
        
              this.ui.displayData(result);
              this.startEvent()
        
            } catch (error) {
                console.error(error);
            }
            finally {
                document.getElementById("spinner").classList.add("d-none")
            }
        }

      
        startEvent() {
            document.querySelectorAll(".box-game").forEach((item) => {
               item.addEventListener("click", () => {
                  const id = item.dataset.id;
                  this.showDetails(id);
               });
            });
        }


    showDetails(idGame) {
        const details = new Details(idGame);
        document.getElementById("home").classList.add("d-none");
        document.getElementById("details").classList.remove("d-none");
     }
  }