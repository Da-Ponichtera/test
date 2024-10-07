let nr = 1
function zamiana(src, numer) {
    let glowne = document.getElementById('glowne')
    glowne.src = src
    nr = numer

}

function prev() {
    let aktualne = document.getElementById('glowne')
    nr--
    if (nr == 0) nr = 5
    if (nr == 1) aktualne.src = '1.gif'
    if (nr == 2) aktualne.src = 'fidgetspinner.gif'
    if (nr == 3) aktualne.src = 'bmw-e30.gif'
    if (nr == 4) aktualne.src = 'rs666.gif'
    if (nr == 5) aktualne.src = '200w.gif'
}

function next() {
    let aktualne = document.getElementById('glowne')
    nr++
    if (nr == 6) nr = 1
    if (nr == 1) aktualne.src = '1.gif'
    if (nr == 2) aktualne.src = 'fidgetspinner.gif'
    if (nr == 3) aktualne.src = 'bmw-e30.gif'
    if (nr == 4) aktualne.src = 'rs666.gif'
    if (nr == 5) aktualne.src = '200w.gif'
}