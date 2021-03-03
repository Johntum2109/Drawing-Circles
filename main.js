// canvas
    var canvas = document.getElementById("_Canvas");

    var ctx = canvas.getContext("2d");

// Circle Properties
    var radius = document.getElementById("radiusInput").value;
    var color = document.getElementById("colorInput").value;
    var width = document.getElementById("widthInput").value;

// mouseDown
    canvas.addEventListener("mousedown", _mousedown);

    function _mousedown(e) 
    { 
        radius = document.getElementById("radiusInput").value;
        color = document.getElementById("colorInput").value;
        width = document.getElementById("widthInput").value;
        MouseEvent = "mouseDown"
    }

// mouseUp
    canvas.addEventListener("mouseup", _mouseup);

    function _mouseup(e) 
    { 
        radius = document.getElementById("radiusInput").value;
        color = document.getElementById("colorInput").value;
        width = document.getElementById("widthInput").value;
        MouseEvent = "mouseUp"
    }

// mouseLeave
    canvas.addEventListener("mouseleave", _mouseleave);

    function _mouseleave(e) 
    { 
        radius = document.getElementById("radiusInput").value;
        color = document.getElementById("colorInput").value;
        width = document.getElementById("widthInput").value;
        MouseEvent = "mouseLeave"
    }

// mouseMove

    canvas.addEventListener("mousemove", _mousemove);

    function _mousemove(e) 
    { 
        // Current pos mouse
        cX = e.clientX - canvas.offsetLeft;
        cY = e.clientY - canvas.offsetTop;

        if ( MouseEvent == "mouseDown" ) 
        { 
            // Assigning Circle Properties
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width
            ctx.arc(cX, cY, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }