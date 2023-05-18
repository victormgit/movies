const data =
[ ["Passage de Venus",1874,"P.J.C. Janssen","x","x"
],["Dzing. Boom. Boom!",1877,"Émile Reynaud","x","x"
],["La Rosace Magique",1877,"Émile Reynaud","x","x"
],["Skipping Rope",1877,"Émile Reynaud","x","x"
],["The Tight-rope Dance",1877,"Émile Reynaud","x","x"
],["Le singe musicien",1878,"Émile Reynaud","x","x"
],["Les Chiens Savants",1878,"Émile Reynaud","x","x"
],["Sallie Gardner at a Gallop",1878,"Eadweard Muybridge","x","x"
],["Athlete Swinging a Pick",1881,"Eadweard Muybridge","x","x"
],["Skeleton of Horse",1881,"Eadweard Muybridge","x","x"
],["The 1882 Transit of Venus",1882,"David Peck Todd","x","x"
],["The Kiss",1882,"Eadweard Muybridge","x","x"
],["Buffalo Running",1883,"Eadweard Muybridge","x","x"
],["L'homme machine",1885,"Étienne-Jules Marey","x","x"
],["Adjutant Walking",1887,"Eadweard Muybridge","x","x"
],["Antelope Trotting",1887,"Eadweard Muybridge","x","x"
],["Baboon Climbing a Pole",1887,"Eadweard Muybridge","x","x"
],["Baboon Walking on All Fours",1887,"Eadweard Muybridge","x","x"
],["Capybara Walking",1887,"Eadweard Muybridge","x","x"
],["Child Carrying Flowers to Woman",1887,"Eadweard Muybridge","x","x"
],["Cockatoo Flying",1887,"Eadweard Muybridge","x","x"
],["Dog Running",1887,"Eadweard Muybridge","x","x"
],["Eland Trotting",1887,"Eadweard Muybridge","x","x"
],["Elephant Walking",1887,"Eadweard Muybridge","x","x"
],["Guanaco Galloping",1887,"Eadweard Muybridge","x","x"
],["Horse Bouquet Galloping, Saddled with Rider",1887,"Eadweard Muybridge","x","x"
],["Jumping Over a Man's Back-Leapfrog",1887,"Eadweard Muybridge","x","x"
],["Kangaroo Walking on All Fours, Changing to Jumping",1887,"Eadweard Muybridge","x","x"
],["Lion Walking",1887,"Eadweard Muybridge","x","x"
],["Lioness Walking",1887,"Eadweard Muybridge","x","x"
],["Man Riding Jumping Horse",1887,"Eadweard Muybridge","x","x"
],["Man Walking Around the Corner",1887,"Louis Aimé Augustin Le Prince","x","x"
],["Mule Kicking",1887,"Eadweard Muybridge","x","x"
],["Oryx Galloping",1887,"Eadweard Muybridge","x","x"
],["Ox Walking",1887,"Eadweard Muybridge","x","x"
],["Raccoon Walking",1887,"Eadweard Muybridge","x","x"
],["Sloth Climbing",1887,"Eadweard Muybridge","x","x"
],["Storks, Swans, etc.",1887,"Eadweard Muybridge","x","x"
],["Tigress Walking",1887,"Eadweard Muybridge","x","x"
],["Virginia Deer, Buck, Galloping",1887,"Eadweard Muybridge","x","x"
],["Woman Crossing Brook on Stepping-Stones with a Fishing Pole and a Can",1887,"Eadweard Muybridge","x","x"
],["Woman Getting Into Bed",1887,"Eadweard Muybridge","x","x"
],["Woman Hopping on One Foot",1887,"Eadweard Muybridge","x","x"
],["Woman Jumping from Rock to Rock",1887,"Eadweard Muybridge","x","x"
],["Woman Opening Umbrella",1887,"Eadweard Muybridge","x","x"
],["Woman Picking Up Child",1887,"Eadweard Muybridge","x","x"
],["Woman Pouring from Jug",1887,"Eadweard Muybridge","x","x"
],["Woman Setting Down Jug",1887,"Eadweard Muybridge","x","x"
],["Woman Sitting Down",1887,"Eadweard Muybridge","x","x"
],["Woman Walking Downstairs",1887,"Eadweard Muybridge","x","x"
],["Accordion Player",1888,"Louis Aimé Augustin Le Prince","x","x"
],["Brighton Street Scene",1888,"William Friese-Greene","x","x"
],["Pferd und Reiter Springen über ein Hindernis",1888,"Ottomar Anschütz","x","x"
],["Roundhay Garden Scene",1888,"Louis Aimé Augustin Le Prince","x","x"
],["Traffic Crossing Leeds Bridge",1888,"Louis Aimé Augustin Le Prince","x","x"
],["Hyde Park Corner",1889,"William Friese-Greene","x","x"
],["Leisurely Pedestrians, Open Topped Buses and Hansom Cabs with Trotting Horses",1889,"William Friese-Greene","x","x"
] ];
let content = "";
for (let i = 0; i < data.length; i++) {content +=
'<div>' +
  '<img src="' + data[i][4] + '">' +
  '<section>' +
    '<p>' + data[i][0] + '</p>' +
    '<p>' + data[i][1] + '</p>' +
    '<p>' + data[i][2] + '</p>' +
    '<a href="https://www.google.com/search?q=' + data[i][0] + ' (' + data[i][1] + ') Wikipedia" target="_blank">Google</a><br>' +
    '<a href="' + data[i][3] + '" target="_blank">Wikipedia</a>' +
  '</section>' +
'</div>';
};
document.getElementById("body").innerHTML = content;
