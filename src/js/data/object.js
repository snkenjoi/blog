import * as vars from '../config';
import { shuffle, x, y, rnd } from '../util';
import { respond } from '../index';
import parseHTML from './parseHTML';

export function d3on(src, removeflag=null, datamod=null) {
    if (vars.interrupt==true) return;

    if (removeflag==null) {
        vars.svg.selectAll(".d3on")
            .transition()
            .duration(vars.sp/2)
            .attr({transform:d=>
                "scale("+(d.scale?d.scale:1)+"),translate("+
                [x(rnd(1280)),y(rnd(800))]
                +"),rotate("+(d.rotate?d.rotate:0)+")"
            })
            .style("opacity",0.5)
            .remove();

        vars.foreignObjects.selectAll(".d3on, script").remove();
    }

    function load(data) {
        vars.interrupt = true;
        data = datamod ? datamod(shuffle(data)) : shuffle(data);
        var cont = vars.svg.append("g");
        var nodes = []; 
        ~function stagger() {
            nodes.push(data.shift());
            render(nodes,cont);
            if(data.length) setTimeout(stagger,30);
            else vars.interrupt = false;
        }()
    }

    if(typeof src == "object") {
        load(src);
    }
    else {
        d3.json("json/" + src, (e,data) => {
            load(data);
        })
    }

    function render(data,parent) {

        // check if UID already exists

        data = data.filter(d => !document.getElementById('uid-'+d.uid))

        var selector = removeflag ? '.d3on-dyn' : '.d3on';

        // SVG stuff

        var obj = parent.selectAll(selector)
            .data(data.filter(d => d.shape != "foreignObject"))

        var objGroup = obj.enter();

        objGroup.append(d => document.createElementNS(d3.ns.prefix.svg, d.shape))
            .classed("d3on", true)
            .call(setAttr, 'SVG')
            //.call(force.drag)

        // non-SVG stuff

        var fObj = vars.foreignObjects.selectAll(selector)
            .data(data.filter(d => d.shape == "foreignObject"))

        var fObjGroup = fObj.enter();

        fObjGroup.append('div')
            .classed("d3on", true)
            .call(setAttr, 'foreignObject')

        vars.force
            .nodes(data)
            .charge(-4600)
            .start();

        vars.force.on("tick", e => {
            var k = .5 * e.alpha;
            data.forEach(o=>{
                if(o.foci)o.y+=(o.foci.y-o.y)*k,o.x+=(o.foci.x-o.x)*k});

            vars.svg.selectAll('.d3on')
                .attr('transform', d=>
                    "scale("+(d.scale?d.scale:1)+"),"+
                    "rotate("+(d.rotate?d.rotate:0)+"),"+
                    "translate("+[x(d.x),y(d.y)]+")")
                
            vars.svg.select('#post-date')
                .attr('transform', d => "translate("+[x(d.x),0]+")")
                .attr("y", x(310)/2);

            vars.foreignObjects.selectAll('.d3on')
                .style("transform", d => `translate(${x(d.x)}px, ${y(d.y)}px)`)

        });
        respond();
    }

    function setAttr(selection, type) {
        if(type == "SVG") {
            selection
                .attr({
                    width: d => x(d.size?d.size[0]:0),
                    height: d => y(d.size?d.size[1]:0),
                    r: d => d.size?d.size:0
                })
        }
        else if (type == 'foreignObject') {
            selection
                .style({
                    width: d => x(d.size[0])+'px',
                    height: d => (d.size[1]=="auto"?'auto': y(d.size[1])+'px'),
                })
        }

        selection
            .each(function(d, i) {
                var self = d3.select(this);

                if(d.style) 
                    for(var p in d.style)
                        d.style.hasOwnProperty(p)
                            && self.style(p,d.style[p]);

                if(d.attr) 
                    for(var p in d.attr)
                        d.attr.hasOwnProperty(p)
                            && self.attr(p,d.attr[p]);

                if(d.uid)
                    self.attr("id", 'uid-'+d.uid);

                if(d.text) self
                    .attr('font-size',d.size+"rem")
                    .text(d.text);
                if(d.children)
                    render(d.children,self)
                if(d.html) {
                    var html = typeof d.html=="object"?d.html.join(""):d.html;
                    self.html(html);
                    parseHTML(self);
                }
                if(d.ajax) {
                    d3.text(d.ajax, (e,d) => {
                        self.html(d);
                        parseHTML(self);
                    })
                    
                }
                if(d.path) self
                    .attr("d",d=>d.path)

                //self.attr("transform","scale(0)");
            });
    }
}

export function getForce() {
    return d3.layout.force()
        .friction(0.4) // 0.7
        .linkDistance(200)
        .gravity(0.5)
        .size([1200,800]);
}