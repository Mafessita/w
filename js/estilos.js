
document.addEventListener("DOMContentLoaded", function () {

    function tabla() {
        var tablaJS = document.getElementById("tablaJS");

        for (var i = 0; i < 4; i++) {
            var row = tablaJS.insertRow(i);
            
            for (var j = 0; j < 4; j++) {
                var celda = row.insertCell(j);

                    if (i == 0 && j == 0) {
                        var img = document.createElement("img");
                        img.src = "https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-01/preolimpico-voleibol-femenino.jpg";
                        img.alt = "Imagen";
                        celda.appendChild(img);
                        celda.rowSpan = 3;
                        celda.style.border = "1px solid black";
                    }

                    if (i == 0 && j == 1) {
                        var img = document.createElement("img");
                        img.src = "https://www.shutterstock.com/image-vector/volleyball-ball-fast-motion-moving-260nw-1344937625.jpg";
                        img.style.width = "200px"; 
                        img.style.height = "60px";
                        celda.appendChild(img);
                        celda.style.border = "1px solid black";
                    }

                    if (i == 0 && j == 2) {
                        var h5 = document.createElement("h5");
                        h5.textContent = 'Thursday, October 11, 2001';
                        celda.appendChild(h5);
                        celda.style.border = "1px solid black";
                    }
                    
                    if (i == 0 && j == 3) {
                        var enlace = document.createElement("a");
                        enlace.href = "#";
                        enlace.textContent = "Text only";
                        celda.appendChild(enlace);
                        celda.style.border = "1px solid black";
                    }

                    if (i == 1 && j == 0) {
                        var h1 = document.createElement("h1");
                        h1.textContent = 'Sample Web Page Table Layout';
                        celda.appendChild(h1);
                        celda.colSpan = 2;
                        celda.style.border = "1px solid black";
                    }

                    if (i == 1 && j == 1) {
                        celda.style.border = "1px solid black";
                    }

                    if (i == 2 && j == 0) {
                        var nav = document.createElement("nav");

                        var home = document.createElement("a");
                        home.href = "#";
                        home.textContent = " HOME |";

                        var download = document.createElement("a");
                        download.href = "#";
                        download.textContent = " DOWNLOAD |";

                        var site = document.createElement("a");
                        site.href = "#";
                        site.textContent = " SITE INDEX |";

                        var search = document.createElement("a");
                        search.href = "#";
                        search.textContent = " SEARCH |";

                        var contact = document.createElement("a");
                        contact.href = "#";
                        contact.textContent = " CONTACT US |";

                        nav.appendChild(home);
                        nav.appendChild(download);
                        nav.appendChild(site);
                        nav.appendChild(search);
                        nav.appendChild(contact);

                        celda.appendChild(nav);
                        celda.colSpan = 3;
                        celda.style.backgroundColor = "aquamarine";
                        celda.style.border = "1px solid black";
                    }

                    if (i == 3 && j == 0) {
                        var img = document.createElement("img");
                        img.src = "https://www.dicaseducacaofisica.info/wp-content/uploads/2021/04/fundamentos-basicos-voleibol-1.webp";
                        img.alt = "Imagen";
                        celda.appendChild(img);
                        celda.style.border = "1px solid black";
                    }

                    if (i == 3 && j == 1) {
                        celda.innerHTML = 'This is just a corny way of showing you how a table can organize the layout of a web page. Designing a prototype by sketching on a piece of paper is a good place to start. You need to, however, have the skills to transfer that concept to HTML Tables help you organize it';
                        celda.colSpan = 2;
                        celda.style.border = "1px solid black";
                    }

                    if (i == 3 && j == 2) {
                        var img = document.createElement("img");
                        img.src = "https://conceptodefinicion.de/wp-content/uploads/2021/11/voleibol_1.jpg";
                        img.alt = "Imagen";
                        celda.appendChild(img);
                        celda.style.border = "1px solid black";
                    }            
                }
            } 
        
    }

    tabla();
});