import React from "react"

function progress(percentage, master_parent, title="No Title", colour="#000000") {
    const bar_height = 10
    const spacing = 20
    const zIndex = 4

    if (percentage > 100 || percentage < 0) {
        throw new Error(`Percentage must be no greater than 100 and no smaller than 0: Percentage was ${percentage}`)
    }

    // Create a new progress bar that attaches to the master_parent
    let progressBar = document.createElement('div');
    progressBar.className = 'circular';
    progressBar.id = 'progressBar';

    // Create the elements of the progress bar
    let inner = document.createElement('div');
    inner.className = 'inner';

    let outer = document.createElement('div');
    outer.className = 'outer';

    let numb = document.createElement('h1');
    numb.className = 'numb';
    numb.textContent = `${title}:`;

    let circle = document.createElement('div');
    circle.className = 'circle';

    let startDot = document.createElement('div');
    startDot.className = 'start-dot';
    let startDotSpan = document.createElement('span');
    startDotSpan.style.background = colour;
    startDot.appendChild(startDotSpan);

    let dot = document.createElement('div');
    dot.className = 'dot';
    let dotSpan = document.createElement('span');
    dotSpan.style.background = colour;
    dot.appendChild(dotSpan);

    let rightBar = document.createElement('div');
    rightBar.className = 'bar right';
    let rightProgress = document.createElement('div');
    rightProgress.className = 'progress right-progress';
    rightProgress.style.background = colour;
    rightBar.appendChild(rightProgress);

    let leftBar = document.createElement('div');
    leftBar.className = 'bar left';
    let leftProgress = document.createElement('div');
    leftProgress.className = 'progress left-progress';
    leftProgress.style.background = colour;
    leftBar.appendChild(leftProgress);

    // Append the created elements to the progressBar element
    progressBar.appendChild(inner);
    progressBar.appendChild(outer);
    progressBar.appendChild(numb);
    progressBar.appendChild(circle);
    circle.appendChild(rightBar);
    circle.appendChild(leftBar);
    circle.appendChild(startDot);
    circle.appendChild(dot);

    // Append the progressBar to the master_parent element
    master_parent.appendChild(progressBar);

    // Get the bars and the progress bars from the progressBar element
    let bars = progressBar.getElementsByClassName('bar');
    let progress = progressBar.getElementsByClassName('progress');

    // Define variables needed for heights and positions
    const masterhHeight = master_parent.style.height.match(/([\d.]+)(\D+)/)
    const unit = masterhHeight[2]
    let move_position = (360 * (percentage / 100))
    let height = null
    let innerHeight = null
    let margin = null

    // Set the numb title and position
    let numb_height = numb.clientHeight
    numb.innerText += ` ${percentage}%`
    numb.style.width = `calc(50% - ${spacing}${unit})`
    numb.style.marginTop = `${(bar_height / 2) - (numb_height / 2)}${unit}`

    // Set dot size and position
    dot.style.transform = `rotate(${-90 + move_position}deg)`;
    dot.style.height = `${bar_height}${unit}`
    dot.style.marginTop = `${-(bar_height / 2)}${unit}`
    dotSpan.style.height = `${bar_height}${unit}`
    dotSpan.style.width = `${bar_height}${unit}`

    // Set the size and position of the startDot
    startDot.style.height = `${bar_height}${unit}`
    startDot.style.width = `calc(50% + ${bar_height / 2}${unit})`
    startDotSpan.style.height = `${bar_height}${unit}`
    startDotSpan.style.width = `${bar_height}${unit}`

    // Fucnction is used to set the clipping styling for each progress bar
    function setBarsProgress(height) {
        let halfHeight = height / 2;
        Array.from(bars).forEach(bar => {
            bar.style.clip = `rect(0${unit}, ${height}${unit}, ${height}${unit}, ${halfHeight}${unit})`;
        });
    
        Array.from(progress).forEach(progressItem => {
            progressItem.style.clip = `rect(0${unit}, ${halfHeight}${unit}, ${height}${unit}, 0${unit})`;
        });
    }

    /* This section is used to set the height and width of each progress bar based on
    the current number of progress bars.*/
    if (masterhHeight) {
        let progressBarCount = master_parent.getElementsByClassName('circular').length;
        
        height = progressBarCount == 1 ? masterhHeight[1] : masterhHeight[1] - ((bar_height * ((progressBarCount - 1) * 2)) + (spacing * ((progressBarCount - 1) * 2)))
        let halfHeight = height / 2
        innerHeight = height - (bar_height * 2)
        margin = innerHeight / 2
        
        progressBar.style.zIndex = zIndex + progressBarCount
        progressBar.style.height = `${height}${unit}`
        progressBar.style.width = `${height}${unit}`
        inner.style.height = `${innerHeight}${unit}`
        inner.style.width = `${innerHeight}${unit}`
        inner.style.margin = `-${margin}${unit} 0 0 -${margin}${unit}`
        setBarsProgress(height)
    } else {
        throw new Error('No height set for master height');
    }

    // Angle the half circles based on the position
    rightProgress.style.transform = `rotate(${move_position > 180 ? move_position - (move_position - 180) : move_position}deg)`;

    if (move_position > 180) {
        leftProgress.style.transform = `rotate(${move_position - 180}deg)`;
    }
}

export default progress;