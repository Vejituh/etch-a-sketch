const createGrids = () => {
    for (let i =0; i < 256; i++){
        let div = document.createElement("div");
        div.style.background = "black";
        div.style.height = "10px";
        div.style.width = "10px";
        div.style.padding = "5px";
        div.style.border = "solid white 1px";
        
        document.querySelector(".grids").appendChild(div);
    }
}
