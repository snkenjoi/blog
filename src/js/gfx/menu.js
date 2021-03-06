import * as vars from '../config';
import { x, y } from '../util';
import { d3on } from '../data/object';
import archive from './archive';

export default function() {

    var interrupt = false;

    var items = [
        {
            name:"about",
            colour:"#B44642",
            click:() => {
                document.title = "about";
                d3on("about.json");
            }
        },
        {
            name:"archive",
            colour:"#46B482",
            click:() => {
                document.title = "archive";
                archive();
            }
        },
        {
            name:"controls",
            colour:"#4682B4",
            click:() => {
                document.title = "controls";
                d3on("controls.json");
            }
        },
    ];

    var m = vars.svg.append('g')

    // items

    var itemAttr = $ => ({
        x: (d,i) => x(650) + i*x(200),
        y: y(160),
        "font-size":"2rem",
        class: "menu"
    });

    var nav = m.append("text")
        .selectAll(".menu")
        .data(items)

    var navGroup = nav.enter()
        .append("tspan")
        .attr(itemAttr())
        .text(d => d.name)
        .on('click' , d => {typeof d.click=="function"&&d.click()})
        .on("mouseenter", mmouseenter)
        .on("mouseleave", mmouseleave)

    function mmouseenter(d) {
        interrupt = true;
        d3.select(this)
            .transition()
            .duration(200)
            .style("font-size", x(36)+"px")
            .style("fill", d.colour)
            .ease("elastic")
    }

    function mmouseleave(d) {
        interrupt = false;
        d3.select(this)
            .transition()
            .duration(200)
            .style("font-size", x(24)+"px")
            .style("fill", '#7A7A7A')
            .ease("elastic")
    }
};
