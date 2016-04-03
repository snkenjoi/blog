~function() {

    let burger = [
        [   // burger
            {x1:"0",x2:"20",y1:"1",y2:"1"},
            {x1:"0",x2:"20",y1:"7",y2:"7"},
            {x1:"0",x2:"20",y1:"13",y2:"13"},
        ],
        [   // arrow
            {x1:"11",x2:"18",y1:"1",y2:"7.5"},
            {x1:"1",x2:"17",y1:"7",y2:"7"},
            {x1:"11",x2:"18",y1:"13",y2:"6.5"},
        ],
        [   // cross
            {x1:"4",x2:"16",y1:"13",y2:"1"},
            {x1:"10",x2:"10",y1:"7",y2:"7"},
            {x1:"4",x2:"16",y1:"1",y2:"13"},
        ],
        [   // line
            {x1:"0",x2:"20",y1:"7",y2:"7"},
            {x1:"0",x2:"20",y1:"7",y2:"7"},
            {x1:"0",x2:"20",y1:"7",y2:"7"},
        ],
    ];

    var c10 = d3.scale.category10();

    function init(i) {
        var svg = d3.select("body")
            .append("svg")
            .attr('viewBox', "-15 -15 51 45")
            .attr({"width":"100px", "height":"100px"})


        svg.append('g')
            .selectAll('line')
            .data(burger[0])
            .enter()
            .append('line')
            .attr("x1", d => d.x1)
            .attr("x2", d => d.x2)
            .attr("y1", d => d.y1)
            .attr("y2", d => d.y2)
            .attr('fill', 'none')
            .attr('stroke',c10(i))
            .attr('stroke-width', '3')

        return svg;
    }

    function setPos(selection) {
        selection
            .attr("x1", d => d.x1)
            .attr("x2", d => d.x2)
            .attr("y1", d => d.y1)
            .attr("y2", d => d.y2)
    }

    // first (line-elastic)

    init(0).on("click", morphFirst)

    var firstState = 2;

    function morphFirst(d) {

        d3.select(this)
            .selectAll('line')
            .data(burger[3])
            .transition()
            .ease("cubicInOut")
            .duration(200)
            .call(setPos)
            .each("end", function(d) {
                d3.select(this.parentNode)
                    .selectAll('line')
                    .data(burger[firstState])
                    .transition()
                    .ease("elastic")
                    .duration(400)
                    .call(setPos)

                firstState = firstState ? 0 : 2;
            })

    }

    // second (arrow-hover)

    init(1).on("mouseenter", morphSecond)
        .on("mouseleave", morphSecond)
        .on("click", morphSecond);

    function morphSecond(d) {

        let type =  d3.event.type == "mouseenter" ? 1 :
                    d3.event.type == "click" ? 2 :
                    d3.event.type == "touchend" ? 2 : 0;

        d3.select(this)
            .selectAll('line')
            .data(burger.map(d => shuffle(d))[type])
            .transition()
            .duration(400)
            .call(setPos)

        function shuffle(o) {
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o
        }

    }



    // third (line-rotate)

    init(2).on("mouseenter", morphThird)
        .on("mouseleave", morphThird)

    function morphThird(d) {

        let type =  d3.event.type == "mouseenter" ? 1 : 0;

        type &&
        d3.select(this)
            .selectAll('line')
            .data(burger[3])
            .transition()
            .ease("cubicInOut")
            .duration(200)
            .call(setPos)
            .each("end", function() {
                d3.select(this)
                    .transition()
                    .ease("cubicInOut")
                    .duration(200)
                    .attr('transform', 'rotate(90,10,7)')
                    .each("end", function() {
                        d3.select(this.parentNode.parentNode)
                            .on("click", function() {
                                d3.select(this)
                                    .selectAll('line')
                                    .data(burger[2])
                                    .transition()
                                    .ease("cubicInOut")
                                    .duration(200)
                                    .call(setPos)
                            })
                    })

            })

        type == 0 &&
        d3.select(this)
            .on("click", null)
            .selectAll('line')
            .data(burger[3])
            .transition()
            .ease("cubicInOut")
            .duration(200)
            .call(setPos)
            .attr('transform', 'rotate(0,10,7)')
            .each("end", function() {
                d3.select(this.parentNode)
                    .selectAll('line')
                    .data(burger[0])
                    .transition()
                    .ease("cubicInOut")
                    .duration(200)
                    .call(setPos)

            })
    }

    // forth (colour-hover)

    init(3).on("mouseenter", morphFourth)
        .on("mouseleave", morphFourth)
        .on("click", morphFourth)
        .selectAll('.colour')
        .data(burger[0])
        .enter()
        .append('line')
        .classed('colour', true)
        .call(setPos)
        .attr("x2", d => d.x1)
        .attr('fill', 'none')
        .attr('stroke',c10(4))
        .attr('stroke-width', '3')

    var stateFour = 0;

    function morphFourth(d) {

        let type =  d3.event.type;

        !stateFour &&
        (type == "mouseenter" || 
        type == "mouseleave") &&
        d3.select(this)
            .selectAll('.colour')
            .transition()
            .ease("easeCubicInOut")
            .duration(200)
            .delay((d,i) => type == "mouseenter"?i*50:2-i*50)
            .call(setPos)
            .attr("x2", d => type == "mouseenter"?d.x2:d.x1)

        type == "click" &&
        d3.select(this)
            .selectAll('.colour, line')
            .data(burger[2].concat(burger[2]))
            .transition()
            .ease("easeCubicInOut")
            .duration(200)
            .call(setPos)
            .attr('stroke', '#4099FF')
            .each("end", d => {stateFour = 1})

            console.log(burger[0].map(d => {d.colour = 1; return d}).concat(burger[0]))

        stateFour &&
        type == "mouseleave" &&
        d3.select(this)
            .selectAll('.colour, line')
            .data(burger[0].map(d => {d.colour = 1; return d}).concat(burger[0]))
            .transition()
            .ease("easeCubicInOut")
            .duration(200)
            .call(setPos)
            .attr('stroke', c10(4))
            .each("end", function () {

                stateFour = 0;

                d3.select(this.parentNode)
                    .selectAll('line')
                    .attr('stroke',c10(3))

                d3.select(this.parentNode)
                    .selectAll('.colour')
                    .attr('stroke', c10(4))
                    .transition()
                    .ease("easeCubicInOut")
                    .duration(400)
                    .delay((d,i) => 2-i*100)
                    .call(setPos)
                    .attr("x2", d => d.x1)
            })
            
    }


    //http://www.fixedgroup.com/
    //http://landing.mobee.tm.mc/
    //http://www.minuteofsilence.com.au/
    //http://hlkagency.com/

    // rotate?

    // post on r/frontend

    // init(2).on("click", morphThird)

    // var thirdState = 2;

    // function morphThird(d) {

    //     d3.select(this)
    //         .selectAll('line')
    //         .data(burger[thirdState])
    //         .transition()
    //         .ease("cubicInOut")
    //         .duration(400)
    //         .attr("x1", d => d.x1)
    //         .attr("x2", d => d.x2)
    //         .attr("y1", d => d.y1)
    //         .attr("y2", d => d.y2)

    //     thirdState = thirdState ? 0 : 2;

    // }

} ()



