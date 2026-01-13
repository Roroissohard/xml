 // Create XMLHttpRequest Object!
        const xhr = new XMLHttpRequest();

        // onload is an EVENT... like a click event
        xhr.onload = function () {
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
            }
        };

        xhr.open = ("GET", "player.json");
        xhr.send();