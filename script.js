 // Create XMLHttpRequest Object!
        const xhr = new XMLHttpRequest();
        
        // onload is an EVENT... like a click event
        xhr.onload = function () {
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                const players = data.players;
                const container = document.getElementById("cards");
                
                players.forEach(player => {
                    const card = document.createElement("div");
                    
                    let statsHTML = "";
                    let teamsHTML = "";
                    let awardsHTML = "";
                
                    for(team = 0; team < player.teams.length; team++){
                    
                }});
            {}
            
        };
    }

                

                

        xhr.open = ("GET", "player.json");
        xhr.send();

        