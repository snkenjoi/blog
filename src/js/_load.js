var c = {w:getW(),h:getH()};
var svg, g;
var sp = 500;

var x = d3.scale.linear()
    .domain([0, 1200])
    .range([0,c.w])

var y = d3.scale.linear()
    .domain([0, 800])
    .range([0,c.h])

var viewer;

var posts;

var postNum = 0;

var force = getForce();

var interrupt = false;

function respond(sp=0) {
    // set root font size for rems
    d3.select("html")
        .transition()
        .duration(sp)
        .style('font-size',x(12.4)+"px")
}

window.addEventListener("load", e => {

    loadPosts((e,d) => {

        posts = d;

        // setup svg and set viewbox based on w/h/margins
        svg = d3.select("body").append("svg")
            .attr("width",c.w).attr("height",c.h)
            .attr("viewBox",[0,0,c.w,c.h].join(" "));

        g = svg.append("g")

        // main content container
        viewer = svg.append("svg")

        // order defines order of containers
        thom();
        menu();
        social();
        getPost(0,true);

    })

})

window.addEventListener("resize", e => {
    c = {w:getW(),h:getH()};
    y.range([0,c.h])
    x.range([0,c.w])

    // used to fix the date text, may break stuff
    force.stop();

    // logo
    d3.select("#thom")
    .transition()
    .duration(sp)
    .attr({
        width:x(350)});

    // menu
    d3.selectAll("tspan")
        .transition()
        .duration(sp)
        .attr("x", (d,i) => x(650) + i*x(200))
        .attr("y", y(160))
        .style("font-size", x(24.8)+"px")

    viewer.selectAll(".d3on")
        .transition()
        .duration(sp)
        .attr({transform:d=>
                "scale("+(d.scale?d.scale:1)+"),translate("+
                [x(d.x),y(d.type=="date"?0:d.y)]
                +"),rotate("+(d.rotate?d.rotate:0)+")",
                "y":d=>d.type=="date"?x(350)/2:0
            })
        .attr({
                width: d => x(d.size?d.size[0]:0),
                height: d => y(d.size?d.size[1]:0),
                r: d => d.size?d.size:0
            })

    respond(sp);

    svg
        .attr("width",c.w).attr("height",c.h)
        .attr("viewBox", [0,0,c.w,c.h].join(" "));

    rGoo(sp);
})

var rnd = qty => qty*Math.random()|0;

var clone = data => JSON.parse(JSON.stringify(data));

function getW(d=document,e='documentElement') {
    if (self.innerHeight) return self.innerWidth;
    if (d[e] && d[e].clientHeight) return d[e].clientWidth;
    if (d.body) return d.body.clientWidth;
}

function getH(a=document,b="documentElement") {
    if (self.innerHeight) return self.innerHeight;
    if (a[b] && a[b].clientHeight) return a[b].clientHeight;
    if (a.body) return a.body.clientHeight;
}

// ES5 pythag polyfill

Math.hypot = Math.hypot || ((x,y) => Math.sqrt(x*x + y*y));
Math.calcHype = ((x1,x2,y1,y2) => Math.hypot(x1-x2,y1-y2));

// random string

function noCache() {
    return "?" + Math.random().toString(36).substring(5);
}

function titleObject(txt,x,y) {
    return {
        "shape": "text",
        "text": txt,
        "size": "4",
        "attr" : {
            "stroke":"#000",
            "stroke-width":"4px"
        },
        "foci": {
            "x": x,
            "y": y
        }
    }
}