var svgMesh3d = require('svg-mesh-3d')

var path = "m 271.97208,-11.203337 c -7.84326,0 -14.25896,1.7495497 -19.24712,5.2486497 -5.51325,3.86743 -8.26987,9.31558 -8.26986,16.3444903 -10e-6,7.765534 2.18232,14.334014 6.54697,19.705479 4.85689,5.954564 11.40386,8.931869 19.64093,8.931916 5.71011,-4.7e-5 10.45215,-0.859473 14.22614,-2.578286 4.9553,-2.271392 7.43298,-5.801183 7.43303,-10.589391 -5e-5,-3.376354 -2.01829,-6.369007 -6.05472,-8.977961 -1.83779,-1.19708 -5.52969,-2.946636 -11.07572,-5.24865 L 258.58278,4.7728327 c 1.5752,-1.5961 3.47857,-2.79316 5.71015,-3.59119 2.23152,-0.79804996 4.79124,-1.19706996 7.67915,-1.19705996 4.39744,-10e-6 8.12216,0.84407 11.17417,2.53223996 2.72376,1.50399 4.90608,2.25599 6.54697,2.25601 3.41291,-2e-5 5.11939,-1.55006 5.11944,-4.65012996 -5e-5,-3.49911004 -2.74026,-6.35363004 -8.22064,-8.56359004 -4.59441,-1.8416297 -9.46771,-2.7624497 -14.61994,-2.7624497 M 270.643,27.885321 c -3.052,-3.7e-5 -5.66094,-0.951543 -7.82684,-2.854537 -2.16593,-1.903049 -3.90523,-4.757577 -5.21789,-8.563592 3.7083,1.503973 7.4002,2.992626 11.07571,4.465967 4.43026,1.872287 7.95807,3.606495 10.58346,5.202605 -2.19877,1.166337 -5.07024,1.749519 -8.61444,1.749557 m -30.66741,-3.775345 c -0.2954,-4.696193 -2.57617,-7.044271 -6.84233,-7.044252 -4.13497,-1.9e-5 -6.20243,1.995074 -6.2024,5.985307 l -0.24613,4.650129 C 219.3009,26.596143 214.01738,23.051004 210.83416,17.065725 l 0.0492,-23.1585323 c -2e-5,-1.74955 -0.63995,-3.19216 -1.91979,-4.3278397 -1.27988,-1.16636 -2.90431,-1.74954 -4.87332,-1.74954 -2.03465,0 -3.60986,0.61388 -4.72563,1.84162 -1.05015,1.1049897 -1.57522,2.5169097 -1.57521,4.2357697 l 0,30.1567293 c -1e-5,0.951478 0.0328,2.363398 0.0984,4.23576 0.0656,1.902975 0.0984,3.330243 0.0985,4.281796 -1e-5,1.718813 0.54147,3.146072 1.62443,4.281796 1.11577,1.166318 2.69098,1.7495 4.72564,1.749547 3.64267,-4.7e-5 5.80858,-1.749594 6.49775,-5.248651 5.80857,4.051542 12.25709,6.077341 19.34558,6.077388 6.56334,-4.7e-5 9.84503,-4.082333 9.84507,-12.246858 -4e-5,-1.565422 -0.0164,-2.59367 -0.0492,-3.084734 m -73.93651,-35.911843 c -6.07115,0 -11.28904,1.9490597 -15.65367,5.8471797 -4.79128,4.26645 -7.30177,9.96016 -7.53149,17.0811503 -0.22972,6.783322 1.7557,12.830013 5.95627,18.140085 4.98816,6.261503 11.92894,9.392282 20.82234,9.392329 6.56335,-4.7e-5 11.78124,-2.455554 15.65367,-7.366531 3.47855,-4.41996 5.21784,-9.898808 5.21789,-16.436572 -5e-5,-7.1210013 -2.03469,-13.1983813 -6.10394,-18.2321713 -4.5616,-5.61698 -10.68195,-8.4254697 -18.36107,-8.4254697 m 2.95352,38.305968 c -4.0365,0.03068 -7.21974,-1.6882 -9.54972,-5.156579 -1.96904,-2.91594 -2.95354,-6.322962 -2.95353,-10.221059 -1e-5,-3.6832803 1.11576,-6.5071103 3.34733,-8.4715103 1.77209,-1.56539 3.83956,-2.34809996 6.2024,-2.34808996 2.85504,-1e-5 5.33272,0.90545996 7.43303,2.71640996 2.3956,2.11786 3.67546,4.98774 3.83958,8.6096403 0.42658,9.883394 -2.34644,14.840453 -8.31909,14.871188 m -88.851808,5.156572 c 4.955331,5.371381 9.648142,8.057095 14.078462,8.057141 5.05377,-4.6e-5 8.762066,-1.795639 11.124926,-5.386776 2.00179,1.657428 4.21693,2.900525 6.64543,3.72931 2.4284,0.828681 5.05375,1.24305 7.87606,1.243097 6.43205,-4.7e-5 10.7967,-2.992701 13.09395,-8.977961 0.45937,-1.227787 1.16493,-5.386805 2.1167,-12.477055 0.9188,-4.972436 2.1002,-13.2597763 3.54422,-24.8620463 0.13119,-1.74956 -0.50874,-3.1921697 -1.91979,-4.3278397 -1.4112,-1.13567 -3.06845,-1.7035 -4.97176,-1.70351 -3.77401,10e-6 -5.98915,1.74955 -6.64543,5.2486597 -0.59076,3.16146 -1.19788,7.62741004 -1.82134,13.39787 -0.6564,6.3229243 -1.19787,10.8042213 -1.62443,13.4439283 -0.88612,5.494168 -2.0183,8.241266 -3.39656,8.241304 -0.75484,-3.8e-5 -2.47773,-0.705998 -5.16866,-2.11788 -2.69104,-1.411948 -4.66005,-2.624358 -5.90705,-3.63722 -4e-5,-3.499132 0.44299,-8.532923 1.32909,-15.1013923 0.91883,-6.72196996 1.37826,-11.75576 1.37831,-15.1014 -5e-5,-1.7495397 -0.63998,-3.2074997 -1.91979,-4.3738697 -1.27991,-1.16636 -2.90434,-1.74954 -4.87331,-1.74955 -1.96906,1e-5 -3.593486,0.58319 -4.873316,1.74955 -1.27989,1.16637 -1.91982,2.62433 -1.91979,4.3738697 -3e-5,3.49911 -0.41024,8.64033004 -1.23063,15.42369 -0.78764,6.8140133 -1.18144,11.9705823 -1.18141,15.4697143 -3e-5,1.964368 -0.18053,3.529763 -0.54148,4.696165 C 89.526394,24.861948 85.703226,21.439577 81.86367,16.651369 81.699566,16.436482 81.420622,16.114194 81.026838,15.684505 80.895552,9.4843227 80.829918,4.6193527 80.829937,1.0895727 c -1.9e-5,-0.85944996 -0.03283,-2.02580996 -0.09845,-3.49911 -0.06565,-1.44261 -0.09847,-2.51691 -0.09845,-3.22286 -1.8e-5,-1.65747 -0.721989,-2.96195 -2.165916,-3.91347 -1.312692,-0.8901197 -2.937128,-1.3351797 -4.873313,-1.3351797 -2.789447,0 -4.676418,1.1356697 -5.660919,3.4070197 -0.689161,1.53469 -1.033738,3.97485 -1.033733,7.32049004 l 0,17.12718526 c -5e-6,1.53467 -0.06564,3.775318 -0.196902,6.721964 -0.131272,2.977268 -0.196906,5.233265 -0.196901,6.768 -6e-6,2.731712 0.525065,5.202568 1.575211,7.412575 1.279853,2.7624 3.084782,4.143623 5.414792,4.14367 1.837735,-4.7e-5 3.478579,-0.675319 4.922538,-2.025799 1.443927,-1.319877 2.165899,-2.777842 2.165917,-4.373877 -1.8e-5,0.644529 -0.147694,-0.67531 -0.443027,-3.959508"

var mesh = svgMesh3d(path, {
    delaunay: true,
    clean: true,
    scale: 1,
    simplify: 0

})

var t = [];

function draw(positions, cells) {
    var v = positions;

    for (start = 0;start < cells.length; start++) {
        var f = cells[start]
        var v0 = v[f[0]],
            v1 = v[f[1]],
            v2 = v[f[2]];

        t.push(
            "M"+[v0[0]*100,v0[1]*100]+
            " L"+[v1[0]*100,v1[1]*100]+
            " L"+[v2[0]*100,v2[1]*100]+
            " L"+[v0[0]*100,v0[1]*100]
        )
    }
}

draw(mesh.positions, mesh.cells)

require('fs').writeFileSync("src/json/more.json",JSON.stringify(t))