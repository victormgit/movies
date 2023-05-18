const data =
[ ["Passage de Venus",1874,"P.J.C. Janssen","",""
],["Dzing. Boom. Boom!",1877,"Émile Reynaud","",""
],["La Rosace Magique",1877,"Émile Reynaud","",""
],["Skipping Rope",1877,"Émile Reynaud","",""
],["The Tight-rope Dance",1877,"Émile Reynaud","",""
],["Le singe musicien",1878,"Émile Reynaud","",""
],["Les Chiens Savants",1878,"Émile Reynaud","",""
],["Sallie Gardner at a Gallop",1878,"Eadweard Muybridge | Stars: Gilbert Domm, Sallie Gardner","",""
] ];
let content = "";
for (let i = 0; i < data.length; i++) {content +=
'<div>' +
  '<img src="' + data[i][4] + '">' +
  '<section>' +
    '<p>' + data[i][0] + '</p>' +
    '<p>' + data[i][1] + '</p>' +
    '<p>' + data[i][2] + '</p>' +
    '<a href="https://www.google.com/search?q=' + data[i][0] + ' (' + data[i][1] + ') Wikipedia" target="_blank">Wikipedia</a><br>' +
    '<a href="' + data[i][3] + '" target="_blank">Link</a>' +
  '</section>' +
'</div>';
};
document.getElementById("body").innerHTML = content;
