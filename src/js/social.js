function social() {

    var items = [
        {
            name:"youtube",
            colour:'#b31217',
            path: "M400 224c144 0 201 2 224 25 17 17 26 52.125 26 151s-9 134-26 151c-23 23-80 25-224 25s-201-2-224-25c-17-17-26-52.125-26-151s9-134 26-151c23-23 80-25 224-25zm-52 100v141l135-70z"
        },
        {
            name:"blocks",
            colour:'#FA0',
            path:"M140 482V320c0-9 5-15 10-18l238-158c8-5 16-5 24 0l238 158c6.24 3.743 10 12 10 19v158c0 9-5 15-10 19L412 656c-8 5-17 5-24 0L150 497c-9-6-10-11-10-15zm282-278v104l97 65 78-52zm-44 104V204L203 321l78 52zm-193 54v75l56-37zm193 234V492l-97-65-78 52zm22-143l79-53-79-53-79 53zm22 143l175-117-78-52-97 64v105zm193-159v-75l-56 38z"
        },
        {
            name:"twitter",
            colour:'#00aced',
            path:"M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"
        },
        {
            name:"github",
            colour:'purple',
            path:"M400 139c144 0 260 116 260 260 0 115-75 213-178 247-9 3-17-2-17-13v-71c0-35-18-48-18-48 57-6 119-28 119-128 0-44-27-70-27-70s14-29-2-69c0 0-22-7-72 27-42-12-88-12-130 0-50-34-72-27-72-27-16 40-2 69-2 69s-27 26-27 70c0 100 62 122 119 128 0 0-14 10-17 35-15 7-53 18-76-22 0 0-13-25-39-27 0 0-26 0-2 16 0 0 17 8 29 38 0 0 16 51 88 35v44c0 11-9 16-18 13-103-34-178-132-178-247 0-144 116-260 260-260z"
        },
    ];

    var s = svg.append("g")
        .attr({transform:"scale(0.5)"})

    var goo = s.append("g");



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
            .append("text")
            .attr({fontSize:"14px",x:20,y:20})
            .style("fill","red")

    goo.selectAll(".socialCircle")
            .data(items)
            .enter()
            .append("circle")
            .attr("class", "socialCircle")
            .attr("cx", (d,i) => -(i-0.3)*157)
            .attr("cy", 50)
            .attr("r", 50)
            .style("fill", d => d.colour)

    var social = goo.append("g")
        .attr("transform","scale(0.12)")
        .selectAll(".social")
        .data(items)

    var sGroup = social.enter()
        .append("path")
        .attr("d", d=>d.path)
        .attr("class", "socialIcon")
        .style("fill", "#FFF")
        .attr("transform",(d,i) => "translate("+[-(i)*1310,20]+")")
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