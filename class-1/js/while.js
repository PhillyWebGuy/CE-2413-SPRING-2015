var cost = 3,
    limit = 100,
    brushes = 0;
    
    while(brushes <= 100) {
        console.log(brushes + " paint brushes cost $" + brushes * 3);
        brushes = brushes + 10;
        //or
        //brushes += 10;
    }