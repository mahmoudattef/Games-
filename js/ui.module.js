export  class Ui{

    displayData(games) {
       let cartona = '';
   
       games.forEach(game => {
   
        
        cartona += `
               <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3"  >
                   <div  class="p-3 bg-transparent rounded-2 box-game shadow-lg"  id="show" data-id="${game.id}" >
      
           <img src="${game.thumbnail}" class="w-100 main-img" alt="">
   
                       <div class="content d-flex justify-content-between align-items-center mt-3">
                           <h6 class="text-uppercase text-light">${game.title}</h6>
                           <div class="free rounded-2 text-center">
                               <h6 class="text-white">free</h6>
                           </div>
                       </div>
                       <div class="cont-text text-center mt-2">
                           <p class="lead fw-light">${game.short_description.slice(0, 40)}</p>
                       </div>
                       <hr class="text-black">
                       <div class="cont-footer text-center text-white p-1 d-flex justify-content-between align-items-center">
                           <div class="footer-box fw-light rounded-2 ">
                               <p class="text-center py-1">${game.genre}</p>
                           </div>
                           <div class="footer-box text-center py-1 fw-light rounded-2">${game.platform}</div>
                       </div>
                   </div>
               </div>
           `;
   
   
       });
   
       document.getElementById("gameRow").innerHTML = cartona;
   }
   
   displayDetails(game) {
       let cartona = `
           <div class="col-sm-12 col-lg-4 mt-3">
               <img src="${game.thumbnail}" class="w-100" alt="">
           </div>
           <div class="col-sm-12 col-lg-8 text-white">
               <h2>Title: ${game.title}</h2>
               <h3 class="mt-3">Category: <span class="bg-span rounded-2 fw-light text-black">${game.genre}</span></h3>
               <h3 class="mt-3">Platform: <span class="bg-span rounded-2 fw-light text-black">${game.platform}</span></h3>
               <h3 class="mt-3">Status: <span class="bg-span rounded-2 fw-light text-black">${game.status}</span></h3>
               <p class="lead mt-3">Description: ${game.description}</p>
               <button class="btn btn-outline-warning text-white mt-4"   id="gameUrl" ><a class="text-decoration-none text-white" href="${game.game_url}" target="_blank">Show Game</a></button>
           </div>
       `;
   
       document.getElementById("detailsData").innerHTML = cartona;
   }
   
   
   
       }