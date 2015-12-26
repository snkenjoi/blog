function social() {

    var items = [
        {
            name:"youtube",
            colour:'#b31217'
        },
        {
            name:"blocks",
            colour:'#FA0'
        },
        {
            name:"twitter",
            colour:'#00aced'
        },
        {
            name:"github",
            colour:'purple'
        },
    ];

    var s = svg.append("g")
        .attr({transform:"scale(0.5)"})

    var goo = s.append("g");

    var social = s.append("g")
        .selectAll(".social")
        .data(items)

    var sGroup = social.enter()
        .append("g")
        .attr("class", "social")
        .attr({
            transform: (d,i) =>
            'translate('+[x(1180*2)-((i+1)*157),y(800*2)-157]+')'
        })
        .each(function(d) {
            // d.name!="blocks"&&
            // d3.xml("svg/"+d.name+".svg", (err,xml) => {
            //     d3.select(this).append(d => xml.querySelector("path"))
            // })
        })


    // three visible circles gooey ?! social
    // movement delay

    setInterval(() => {
        //line.transition().duration(sp)
    },sp)

    goo.attr({
        transform: (d,i) =>
        'translate('+[x(1180*2)-((i+1)*157),y(800*2)-157]+')'
    })
    var filter = gooey(goo);

    goo.on("mousemove", function(){circleFollow(this,items)})

    goo.append("circle")
            .attr("class", "gooCircle")
            .attr("r", 45)
            .attr("cx", 157)
            .attr("cy", -50)
            .style("fill", "#EEE")

    goo.selectAll(".socialCircle")
            .data(items)
            .enter()
            .append("circle")
            .attr("class", "socialCircle")
            .attr("cx", (d,i) => -(i-0.3)*157)
            .attr("cy", 50)
            .attr("r", 50)
            .style("fill", d => d.colour)
};


function circleFollow(self,items) {
        var circle = d3.selectAll(".gooCircle");

        var x = d3.mouse(self)[0];
        var y = d3.mouse(self)[1];

        circle
            .attr("cx", x)
            .attr("cy", y)

        if(y<-70||x<-560) {
            circle.transition().duration(0)
            .style("opacity", 0)
        }
        else {
            circle.transition().duration(100)
                .style("fill", items[(x>-30?0:x>-190?1:x>-344?2:3)].colour)
                .style("opacity", 1)
        }
}

function gooey(container) {
    var defs = container.style("filter", "url(#gooey)").append('defs')
	var filter =  defs.append('filter').attr('id','gooey');
	filter.append('feGaussianBlur')
		.attr('in','SourceGraphic')
		.attr('stdDeviation','25')
		.attr('result','blur');
	filter.append('feColorMatrix')
		.attr('in','blur')
		.attr('mode','matrix')
		.attr('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
		.attr('result','gooey');
	filter.append('feBlend')
		.attr('in','SourceGraphic')
		.attr('in2','gooey');
        return filter;
}
