import {Tools} from './DOM/Tools';

/**
 * View of a circuit
 * @constructor
 */
export const View = function(main, canvas, circuit) {
    this.main = main;

    this.element = canvas;

    /// The tab number for this view
    this.tabnum = -1;

    canvas.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    canvas.addEventListener('drop', (event) => {
        event.preventDefault();
	    var data = event.dataTransfer.getData("text/plain");
	    console.log(data);
        console.log(event);
    });

    this.initialize = () => {

        this.setSize();



        //
        // Mouse management
        //
        let lastMouse = {x: 0, y: 0};
        let mouse = {x: 0, y: 0};
        let lastPage = {x: 0, y: 0};

        let mouseDownListener = (event) => {
            event.preventDefault();

            downListener(event.pageX, event.pageY, false);
        }

        let touchStartListener = (event) => {
            event.preventDefault();

            let touch = event.changedTouches[0];
            downListener(touch.pageX, touch.pageY, true);
        }

        let downListener = (pageX, pageY, touch) => {

            let offset = Tools.offset(canvas);
            lastPage = {x: pageX, y: pageY};
            mouse.x = pageX - offset.left;
            mouse.y = pageY - offset.top;
            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;

            // If we are in inline mode, we don't allow selecting
            // or dragging at all.
            if(main.options.display === 'inline') {
                this.circuit.touch(mouse.x, mouse.y);
                return;
            }

            this.draw();

            // Only install mouse or touch movement
            // handler while we are moving
            if(touch) {
                canvas.addEventListener('touchmove', touchMoveListener);
                //canvasJ.on('touchmove', touchMoveListener);
            } else {
	            canvas.addEventListener('mousemove', mouseMoveListener);
                //canvasJ.mousemove(mouseMoveListener);
            }

            canvas.parentNode.addEventListener('scroll', scrollListener);
            // canvasJ.parent().scroll(function(event) {
            //
            // });
        };

        let scrollListener = (event) => {

        }

        let mouseMoveListener = (event) => {
            event.preventDefault();
            moveListener(event.pageX, event.pageY, false);
        }

        let touchMoveListener = (event) => {
            event.preventDefault();

            let touch = event.changedTouches[0];
            moveListener(touch.pageX, touch.pageY, true);
        }

        let moveListener = (pageX, pageY, touch) => {

        }

        let touchEndListener = (event) => {
            event.preventDefault();
            let touch = event.changedTouches[0];
            upListener(touch.pageX, touch.pageY, true);
        }

        let touchCancelListener = (event) => {
            let touch = event.changedTouches[0];
            upListener(touch.pageX, touch.pageY, true);
        }

        let mouseUpListener = (event) => {
            event.preventDefault();
            canvas.removeEventListener('mousemove', mouseMoveListener);
            //canvasJ.off("mousemove");
            upListener(event.pageX, event.pageY, false);
        }

        let upListener = (pageX, pageY, touch) => {

        }

        // Install mouse handlers
        canvas.addEventListener('mousedown', mouseDownListener);
        canvas.addEventListener('dblclick', mouseDblClickListener);

        let body = document.querySelector('body');
        body.addEventListener('mouseup', mouseUpListener);


        // Install touch handlers
        canvas.addEventListener('touchstart', touchStartListener);
        canvas.addEventListener('touchend', touchEndListener);
        canvas.addEventListener('touchcancel', touchCancelListener);
    }

    this.draw = function() {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);


    };

    this.delete = function() {
        this.backup();
        this.draw();
    };


    this.setSize = function() {
        if(canvas.offsetWidth !== this.circuit.width ||
            canvas.offsetHeight !== this.circuit.height) {

            // Size setting
            canvas.style.width = this.circuit.width + 'px';
            canvas.style.height = this.circuit.height + 'px';
            canvas.width = this.circuit.width;
            canvas.height = this.circuit.height;
        }
    };

    this.initialize();
    this.draw();
};
