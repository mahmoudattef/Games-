
import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        this.ui = new Ui()
        document.getElementById("close").addEventListener("click", () => {
            document.getElementById("home").classList.remove("d-none");
            document.getElementById("details").classList.add("d-none");
         });
        this.getDetails(id)
    }

   async getDetails(idGame){
        const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'e81b1f7e4cmshc3e71106096634ep15668djsn6ee0e30e4571',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
            
                try {
                    document.getElementById("spinner").classList.remove("d-none")
                    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options);
                  
                    const result = await response.json();
            
                 
                    this.ui.displayDetails(result)
                  
            
                } catch (error) {
                    console.error(error);
                }
                finally{
                    document.getElementById("spinner").classList.add("d-none")
                }

    }
}
