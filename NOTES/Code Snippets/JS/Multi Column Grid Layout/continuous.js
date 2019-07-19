'use strict'

function setGridsWidths(grids, colCount, pad, outerPad) {
    var container = grids[0].parentElement;
    var containerWidth = container.offsetWidth;
    var totalGapWidth = (pad * (colCount - 1)) + (outerPad * 2);
    var usefulSpace = containerWidth - totalGapWidth;
    var gridsWidth = usefulSpace / colCount;
    for(let i = 0; i < grids.length; i++) {
        grids[i].style.width = gridsWidth + 'px';
        
    }
}
function resetGridsPositions(grids, pad) {
    for(let i = 0; i < grids.length; i++) {
        grids[i].style.top = pad + 'px';
        grids[i].style.left = pad + 'px';
    }
}
function placeGrids(grids, colCount, pad) {
    let newleft;
    let newtop;
    for(let i = 1; i < grids.length; i++){
      if (i % colCount == 0) {
        newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight) + pad;
        grids[i].style.top = newtop + "px";
      } else {
        if(grids[i-colCount]){
          newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight) + pad;
          grids[i].style.top = newtop + "px";
        }
        newleft = (grids[i-1].offsetLeft + grids[i-1].offsetWidth) + pad;
        grids[i].style.left = newleft + "px";	
      }
    }
}
function setGridContainerHeight(grids, colCount, outerPad) {
    var container = grids[0].parentElement;
    var containerHeight = 0;
    for(var i = ((grids.length - colCount)); i < grids.length; i++) {
        let topPosition = grids[i].offsetTop;
        let height = parseInt(getComputedStyle(grids[i]).height);
        let newContainerHeight = topPosition + height;
        if(containerHeight > newContainerHeight) {
        continue;
        } else {
        containerHeight = newContainerHeight;
        }
    }
    containerHeight = containerHeight + outerPad;
    container.style.height = (containerHeight) + 'px';
    }


function renderGrid(grid, columnCount, padWidth, outerWidth) {
    let colCount = columnCount || 1;
    let pad = padWidth || 0;
    let outerPad;
    if(outerWidth === 0) {
        outerPad = 0;
    } else {
        outerPad = outerWidth || padWidth;
    }
    var grids = grid.children;

    setGridsWidths(grids, colCount, pad, outerPad);
    resetGridsPositions(grids, outerPad);
    placeGrids(grids, colCount, pad);
    setGridContainerHeight(grids, colCount, outerPad);
}

