var output2 = document.getElementById("output2")
var button = document.getElementById("button")
var output = document.getElementById("output")
var bildet = document.getElementById("bildet")
var navn = document.getElementById("navn")
var jobb = document.getElementById("jobb")
var red = document.getElementById("red")
var personer = [
    {
        Navn: "Laila Johanne Handelsby",
        Jobb: "Rektor",
        Bildet: "img/rektor-laila-handelsby.JPG",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Torben Andersen",
        Jobb: "Assisterende rektor",
        Bildet: "img/torben-gjerstad.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Martin Sandø-Frank",
        Jobb: "Studieleder",
        Bildet: "img/martin-frank.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Cathrine Mannsaker",
        Jobb: "Undervisningsleder",
        Bildet: "img/cathrine-mannsaaker.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Anette Øwre Bollvåg",
        Jobb: "Undervisningsleder",
        Bildet: "img/anette-owre-bollvag.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Anne Raastad-Hoel",
        Jobb: "Undervisningsleder",
        Bildet: "img/anne-torbjorg-raastad-hoel.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Erik Bergerud",
        Jobb: "Undervisningsleder",
        Bildet: "img/erik-bergerud.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Camilla Engberg",
        Jobb: "Undervisningsleder",
        Bildet: "img/camilla-engberg.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        Navn: "Sissel Moen",
        Jobb: "Administrasjonsleder",
        Bildet: "img/sissel-moen.jpg",
        Output: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },



]
button.onclick = function person() {
    red.setAttribute("class", "hidden")
    var person2 = document.getElementById("personer")
    var person = document.getElementById("personer").value
    for (var i = 0; i < personer.length; i++) {
        if (personer[i].Navn.toLocaleLowerCase() == person.toLocaleLowerCase()) {
            var img = '<img src="' + personer[i].Bildet + '"class="bildet"></img >'
            navn.innerHTML = personer[i].Navn
            jobb.innerHTML = personer[i].Jobb
            bildet.innerHTML = img
            output2.innerHTML = personer[i].Output
            var found = true
        }

    }
    if (found != true) {
        red.setAttribute("class", "red")
    }
    person2.value = ""
}
