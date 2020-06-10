
var documents = [{
    "id": 0,
    "url": "https://evolverine.github.io/undistance/404",
    "title": "Page not found",
    "body": "Oopsie, that page doesn’t seem to exist. Want to go back home? "
    }, {
    "id": 1,
    "url": "https://evolverine.github.io/undistance/",
    "title": "",
    "body": "Benvinguda!La pàgina que estàs llegint és la resposta temptativa i en constant evolució a la pregunta com podem retrobar-nos en connexió i intimitat en un món de COVID-19 sense deixar a ningú enrere? No hi ha una sola ‘solució’, és clar, i aquesta pàgina només aspira contribuir amb una eina parcial, entre les moltes necessàries. Si sents que alguna cosa està incompleta o que a la web li falta alguna cosa evident, posa’t en contacte i fem que aquest viatge sigui menys difícil per a todes. Promesa a-distanciamentLa vaig anomenar promesa, però potser “declaració d’intencions” o, fins i tot, “iniciador de conversa” poden servir millor. Està destinada a ajudar-nos sintonitzar les nostres valors i supòsits. Llegeix la promesa a-distanciament Altres recursosUna col·lecció d’articles amb recursos que poden ser útils: per a la comunicació, millorar les relacions, controlar les emocions, etc. Accedeix aquí "
    }, {
    "id": 2,
    "url": "https://evolverine.github.io/undistance/about",
    "title": "About the toolbox",
    "body": "About the undistancing pledgeMy hope in writing it: I was imagining this dialogue  “How do you want intimacy to work between us now?”  “I… I’m not exactly sure; it feels so complicated! I don’t really know where to start…” and hoping it could sometimes continue this way  …“but I read this thing last night called the Undistancing Pledge, and it’s giving me some ideas. ”  “The Undistancing Pledge?”  “Yeah, it’s… I’d say it’s a bunch of values and assumptions around intimacy in times of COVID; it won’t give us the magic formula, but I think it can start a good conversation. Shall we go through what we like and don’t like about it, and see where that takes us?”  “Sounds good. Shall I read it now?”  “Yeah, it’s not super long. ” About the resourcesI realised that the pledge by itself could have been, in some situations, even more frustrating than nothing at all. It presupposes and requires certain abilities and perspectives around a host of topics like communication, care, a political approach to relationships, etc. So I wanted to include some of these resources to make it that much more likely that the world we want can be built right now, one interaction at a time. "
    }, {
    "id": 3,
    "url": "https://evolverine.github.io/undistance/contact",
    "title": "Contact",
    "body": "Who: I, @evolverine, have put together this toolbox to support myself and others in navigating our transition to intimacy in the COVID-19 era. Reach out: If you want to contact me about this toolbox, the preferred way is through github issues. Or, for more privacy, you can reach me at 2a5464d3 at opayq. com. Support my work: buy me a coffee 🙏 "
    }, {
    "id": 4,
    "url": "https://evolverine.github.io/undistance/difficult-conversations",
    "title": "Having difficult conversations",
    "body": "Resources for having difficult conversations "
    }, {
    "id": 5,
    "url": "https://evolverine.github.io/undistance/get-involved",
    "title": "Get involved!",
    "body": "How you can help   By suggesting what you think can be improved, regarding both content and structure.     By suggesting links (to articles, Wikipedia pages, news items, etc. ) that illustrate and go deeper into the points made in the pledge and elsewhere.     By offering your help with translating the site in a language you are fluent in.     Through other ways that we can’t anticipate 🙂️  Many thanks for your feedback! "
    }, {
    "id": 6,
    "url": "https://evolverine.github.io/undistance/pledge",
    "title": "Promesa a-distanciament v0.5",
    "body": "Sobre aquesta promesa pots llegir més aquí Reconeixent que … Estic profundament connectat amb gent que no conec. Per tant, els meus comportaments afecten a les amb qui no tinc cap mena de connexió. A més a més,Aquest document está en proces de traducción, desde la seva versió en anglés (que pots llegir fent clic en l’enllaç „en” del menu de l’esquerra). Contribueix a la seva traducció para que pugui ajudar a la gent el més aviat! "
    }, {
    "id": 7,
    "url": "https://evolverine.github.io/undistance/resources",
    "title": "Resources",
    "body": "Other writings about relationships in times of COVID-19:  Evelin Dacker MD, COVID Care Gideon Lichfield, A guide to negotiating a covid “bubble” with other people Libby Sinback, Thinking About Expanding Your Polyamorous Quaranteam? Angela Lashbrook, Is it Safe to “Quaranteam”Having difficult conversations:  The Gottman Institute, Dr. Gottman’s 3 Skills (and 1 Rule!) for Intimate Conversation The Gottman Institute, The Four Horsemen: Criticism, Contempt, Defensiveness, and Stonewalling Adar Cohen, 3 steps to having difficult — but necessary — conversations Daniel H. Cohen, For argument’s sake TED TalkBoundaries and consent:  Miri Mogilevsky, 5 Ways to Navigate Consent with a Partner Who Has Trouble Setting BoundariesMental health:  Sam Dylan Finch, 10 Ways to ‘Reach Out’ When You’re Struggling With Your Mental Health kylarosesims, When Your Partner Has Anxiety. A Meltdown GuideCalling in, calling out, saying sorry:  Cliff Pervocracy, Just one ally.  Ngọc Loan Trần, Calling IN: A Less Disposable Way of Holding Each Other Accountable Franchesca Ramsey, How to Apologize When You Get Called Out Nora Samaran, Own, Apologize, Repair: Coming Back to IntegrityPrivilege:  Parul Sehgal, How ‘Privilege’ Became a ProvocationCare and loneliness:  Caleb Luna, Romantic Love is Killing Us: Who Takes Care of Us When We Are Single? Kitty Stryker, “Radical Self-Reliance” Is Killing People Mia Mingus, Pods and Pod Mapping WorksheetEmotions:  Scott Barry Kaufman, One Skeptical Scientist’s Mindfulness Journey Rick Hanson, How to Hardwire Resilience into Your Brain Kelly McGonigal, How to make stress your friend TED talk Stacey Kennelly, 10 Steps to Savoring the Good Things in Life Meg-John Barker , Other People’s FeelingsPractical information about COVID-19:  WHO, Coronavirus U. Minnesota Center for Infectious Disease Reseach and Policy, COVID-19 Resource Center NHS, COVID-19 Financial Times, Coronavirus tracked: the latest figures as countries fight to contain the pandemic I’ve been compiling some of the basic information about SARS-CoV-2 and COVID-19 in the form of an Anki flash card deck. "
    }, ];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});