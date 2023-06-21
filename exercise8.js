let map = new Map ([
    [3, 'qwe'],
    [true, 34],
    ["rt", 'dfs']
    ]);
    
    console.log(map.keys());
    
    for (let elem of map) {
      console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
    }