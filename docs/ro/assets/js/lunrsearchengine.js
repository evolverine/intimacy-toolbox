
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/undistance/",
    "title": "The COCO Toolbox | Connection and communication tools in times of COVID-19",
    "body": "Hi!Welcome. The page you’re looking at is the tentative, and ever-evolving response to the question how can we reencounter ourselves in connection and intimacy in a world of COVID-19 without leaving anyone behind? There’s no one ‘solution’, of course, but there can hopefully be space for learning, for getting clear about our values and some of our facts, and taking it from there with care and openness. If something evident is missing or incomplete, do get in touch and let’s make this trip less rocky together. The COCO PledgeI call it a pledge, but maybe “statement of intention” or even “conversation starter” can define it better. It’s meant to help us get on the same page, which is tricky these days. Read the COCO pledge Other resourcesA collection of articles with resources that may come in handy - for communication, doing relationships better, managing emotions, etc. Read them here "
    }, {
    "id": 1,
    "url": "http://localhost:4000/undistance/about",
    "title": "Despre instrumentar",
    "body": "Despre instrumentarul a-distanțăriiCe speram când am scris promisiunea a-distanțării: Îmi imaginam dialogul următor:  “Așadar, cum ți-ai dori să reluăm intimitatea între noi de-acum?”  “Nu… nu sunt sigur; pare așa de complicat totul, nu știu de unde să încep…” și speram că ar putea continua așa:  …“dar azi-noapte am citit o chestie, îi zicea instrumetarul a-distanțării, și măcar mi-a dat niște idei. ”  “Instrumentarul a-distanțării?”  “Da, e… Bine, piesa principală e o promisiune, care aș zice că e, pur și simplu, o colecție de valori și supoziții despre intimitate în vremuri de COVID; nu-i ca și cum ne va da formula magică, dar cred că ne poate ajuta să începem un dialog. Ce-ai zice să vedem ce ne place și ce nu ne place din promisiunea asta?”  “Bun, sună bine. Să-l citesc acum?”  “Da, pentru că nu e prea lung. ” Despre resurseMi-am dat seama că promisiunea, doar de capul ei, putea să fie chiar mai frustrantă decât utilă în anumite contexte. Presupune unele abilități și perspective în legătură cu teme precum comunicarea, grija pentru sine și alții, perspective politice asupra relațiilor, etc. Așa că am vrut să includ alte resurse care să poată adresa temele respective și care să ne apropie, în felul ăsta, de lumea pe care vrem s-o construim, o interacțiune după alta. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/undistance/contact",
    "title": "Contact",
    "body": "Who: I, @evolverine, have put together this toolbox to support myself and others in navigating our transition to intimacy in the (post-?) COVID-19 era. Reach out: If you want to contact me about this toolbox, the preferred way is through github issues. Or, for more privacy, you can reach me at 2a5464d3 at opayq. com. Support my work: buy me a coffee 🙏 "
    }, {
    "id": 3,
    "url": "http://localhost:4000/undistance/difficult-conversations",
    "title": "Having difficult conversations",
    "body": "Resources for having difficult conversations "
    }, {
    "id": 4,
    "url": "http://localhost:4000/undistance/get-involved",
    "title": "Get involved!",
    "body": "How you can help   By suggesting what you think can be improved, regarding both content and structure.     By suggesting links (to articles, Wikipedia pages, news items, etc. ) that illustrate and go deeper into the points made in the pledge and elsewhere.     By offering your help with translating the site in a language you are fluent in.     Through other ways that we can’t anticipate 🙂️  Many thanks for your feedback! "
    }, {
    "id": 5,
    "url": "http://localhost:4000/undistance/pledge",
    "title": "Promisiunea adistanțare v0.5",
    "body": "Care-i povestea cu promisiunea asta? Citește aici. Și cu partea de text care e greu de citit de mai jos, dați click pe el și vi se va arăta! 😉️ Pentru că observ și accept că Sunt profundament conectat cu necunoscuți. În consecință, comportamentul meu afectează oameni aparent separați de mine. Acest document este în proces de traducere, din versiunea sa în engleză. Ajută-ne să-l traducem cât mai curând! "
    }, {
    "id": 6,
    "url": "http://localhost:4000/undistance/resources",
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