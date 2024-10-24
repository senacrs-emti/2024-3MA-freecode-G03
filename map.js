    // Inicializa o mapa quando a API for carregada
    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -30.025296, lng: -51.211922 }, // Coordenadas de São Paulo
            zoom: 10,
        });

        // Adiciona um marcador vermelho na localização especificada
        const marker = new google.maps.Marker({
            position: { lat: -30.025296, lng: -51.211922 },
            map: map,
            title: "Senac Distrito Criativo",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // Ícone de marcador vermelho
        });
    }

    // Script para carregar a API do Google Maps
    (function(g) {
        var h, a, k, p = "The Google Maps JavaScript API", c = "google", 
            l = "importLibrary", q = "__ib__", m = document, b = window;
        b = b[c] || (b[c] = {});
        var d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams();
        var u = () => h || (h = new Promise(async(f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load.")); 
            a.nonce = m.querySelector("script[nonce]")?.nonce || "";
            m.head.append(a);
        }));
        d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
    })({
        key: "AIzaSyDIlS4qgZzbTPEYiLruk8EK225_7try7mU", // Substitua pela sua chave de API
        v: "weekly",
    });