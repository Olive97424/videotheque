const films = [
    {
        "titre": "300",
        "video": "https://www.youtube.com/watch?v=YNTY7tnmsxY&t=36s",
        "image": "images/300.jpg",
        "acteurs": "Gerard Butler, Lena Headey",
        "genres": [
            "action",
            "guerre"
        ],
        "annee": "2007",
        "duree": "2h20",
        "resume": "test de commentaire",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "2012",
        "video": "https://www.youtube.com/watch?v=m33rzUxflto&t=25s",
        "image": "images/2012.jpg",
        "acteurs": "John Cusack, Chiwetel Ejiofor, Amanda Peet",
        "genres": [
            "science-fiction",
            "catastrophe"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "1789_les_amants_de_la_bastille",
        "video": "https://www.youtube.com/watch?v=VDDrh8UmjoU",
        "image": "images/1789_les_amants_de_la_bastille.jpg",
        "acteurs": "",
        "genres": [
            "musical"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "24_heure_limit",
        "video": "https://www.youtube.com/watch?v=zrCb5klZZCc",
        "image": "images/24_heure_limit.jpg",
        "acteurs": "Ethan Hawke",
        "genres": [
            "thriller",
            "action"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "50_nuances_de_grey",
        "video": "https://www.youtube.com/watch?v=9G7oSGWHSVc&t=49s",
        "image": "images/50_nuances_de_grey.jpg",
        "acteurs": "Dakota Johnson, Jamie Dornan",
        "genres": [
            "romance",
            "drame"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "50_nuances_plus_claire",
        "video": "https://www.youtube.com/watch?v=p-2dGdfZzL4",
        "image": "images/50_nuances_plus_claire.jpg",
        "acteurs": "Dakota Johnson, Jamie Dornan",
        "genres": [
            "romance",
            "drame"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "50_nuances_plus_sombre",
        "video": "https://www.youtube.com/watch?v=0Ah1o0ZZjNY",
        "image": "images/50_nuances_plus_sombre.jpg",
        "acteurs": "Dakota Johnson, Jamie Dornan",
        "genres": [
            "romance",
            "drame"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "60_secondes_chrono",
        "video": "https://www.youtube.com/watch?v=uhg-Y93I9-A",
        "image": "images/60_secondes_chrono.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "2000",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "a_star_is_born",
        "video": "https://www.youtube.com/watch?v=jsg9NxCBzFs&t=31s",
        "image": "images/a_star_is_born.jpg",
        "acteurs": "Bradley Cooper, Lady Gaga",
        "genres": [
            "musical",
            "drame"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ad_astra",
        "video": "https://www.youtube.com/watch?v=Gf97Szc_UfI",
        "image": "images/ad_astra.jpg",
        "acteurs": "",
        "genres": [
            "science-fiction"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "african_bambi",
        "video": "https://www.youtube.com/watch?v=EDzq285OJ2g",
        "image": "images/african_bambi.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aladdin",
        "video": "https://www.youtube.com/watch?v=IrzzGm3AmLg&t=31s",
        "image": "images/aladdin.jpg",
        "acteurs": "Mena Massoud, Naomi Scott",
        "genres": [
            "aventure"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aladdin_animé",
        "video": "https://www.youtube.com/watch?v=NZqFRTbi7IE",
        "image": "images/aladdin_animé.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "alerte_rouge",
        "video": "https://www.youtube.com/watch?v=41pXKTSrC_g",
        "image": "images/alerte_rouge.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "alibi_com",
        "video": "https://www.youtube.com/watch?v=hXUggM713X4&t=68s",
        "image": "images/alibi_com.jpg",
        "acteurs": "Philippe Lacheau, Élodie Fontan",
        "genres": [
            "comédie"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "alice_au_pays_des_merveilles",
        "video": "https://www.youtube.com/watch?v=ePElCshaYpQ",
        "image": "images/alice_au_pays_des_merveilles.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aliens_1",
        "video": "https://www.youtube.com/watch?v=j3CFj1R9HbQ&t=35s",
        "image": "images/aliens_1.jpg",
        "acteurs": "Sigourney Weaver",
        "genres": [
            "horreur",
            "science-fiction"
        ],
        "annee": "1979",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aliens_2",
        "video": "https://www.youtube.com/watch?v=gaJFi3LiFOQ&t=25s",
        "image": "images/aliens_2.jpg",
        "acteurs": "Sigourney Weaver, Michael Biehn",
        "genres": [
            "horreur",
            "science-fiction"
        ],
        "annee": "1986",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aliens_3",
        "video": "https://www.youtube.com/watch?v=qL-NR79zS7A",
        "image": "images/aliens_3.jpg",
        "acteurs": "Sigourney Weaver, Charles S. Dutton",
        "genres": [
            "horreur",
            "science-fiction"
        ],
        "annee": "1992",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aliens_4",
        "video": "https://www.youtube.com/watch?v=JMpSSEWoqWA&t=25s",
        "image": "images/aliens_4.jpg",
        "acteurs": "",
        "genres": [
            "horreur",
            "science-fiction"
        ],
        "annee": "1997",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aliens_5",
        "video": "https://www.youtube.com/watch?v=o_rfh8wBnGE",
        "image": "images/aliens_5.jpg",
        "acteurs": "Sigourney Weaver, Winona Ryder",
        "genres": [
            "horreur",
            "science-fiction"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aliens_6_prometeus",
        "video": "https://www.youtube.com/watch?v=Oxv5SP3sags&t=53s",
        "image": "images/aliens_6_prometeus.jpg",
        "acteurs": "Noomi Rapace, Michael Fassbender",
        "genres": [
            "horreur",
            "science-fiction"
        ],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aline",
        "video": "https://www.youtube.com/watch?v=4dWI7GDkaPg",
        "image": "images/aline.jpg",
        "acteurs": "Valérie Lemercier",
        "genres": [
            "biopic",
            "drame"
        ],
        "annee": "2020",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "alita",
        "video": "https://www.youtube.com/watch?v=c4nJBG8xB7s",
        "image": "images/alita.jpg",
        "acteurs": "Rosa Salazar, Christoph Waltz",
        "genres": [
            "science-fiction"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "amercican_nigthmare_1",
        "video": "https://www.youtube.com/watch?v=AVRk-UhPkHU",
        "image": "images/amercican_nigthmare_1.jpg",
        "acteurs": "Ethan Hawke, Lena Headey",
        "genres": [
            "horreur",
            "action"
        ],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "amercican_nigthmare_2",
        "video": "https://www.youtube.com/watch?v=tpNKIBt-pXA",
        "image": "images/amercican_nigthmare_2.jpg",
        "acteurs": "Frank Grillo, Carmen Ejogo",
        "genres": [
            "horreur",
            "action"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "amercican_nigthmare_3",
        "video": "https://www.youtube.com/watch?v=FW8CqyN7esE",
        "image": "images/amercican_nigthmare_3.jpg",
        "acteurs": "Frank Grillo, Elizabeth Mitchell",
        "genres": [
            "horreur",
            "action"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "amercican_nigthmare_4",
        "video": "https://www.youtube.com/watch?v=O6_CqoAT2bM",
        "image": "images/amercican_nigthmare_4.jpg",
        "acteurs": "Y'lan Noel, Lex Scott Davis",
        "genres": [
            "horreur",
            "action"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "american_sniper",
        "video": "https://www.youtube.com/watch?v=biaNCv--D4s&t=32s",
        "image": "images/american_sniper.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "guerre",
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "anges_et_demons",
        "video": "https://www.youtube.com/watch?v=6fvLICEn4RI&t=1s",
        "image": "images/anges_et_demons.jpg",
        "acteurs": "Tom Hanks, Ewan McGregor",
        "genres": [
            "thriller",
            "mystère"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "annabelle",
        "video": "https://www.youtube.com/watch?v=LUCOp6efZmg&t=35s",
        "image": "images/annabelle.jpg",
        "acteurs": "Annabelle Wallis, Ward Horton",
        "genres": [
            "horreur"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "annabelle_2",
        "video": "https://www.youtube.com/watch?v=WOWrsTwxU48",
        "image": "images/annabelle_2.jpg",
        "acteurs": "Stephanie Sigman, Miranda Otto",
        "genres": [
            "horreur"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ant_man_1",
        "video": "https://www.youtube.com/watch?v=_mWjqYXA59E",
        "image": "images/ant_man_1.jpg",
        "acteurs": "Paul Rudd, Michael Douglas, Evangeline Lilly",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ant_man_et_la_guepe",
        "video": "https://www.youtube.com/watch?v=Ar38xc7JWxc",
        "image": "images/ant_man_et_la_guepe.jpg",
        "acteurs": "Paul Rudd, Evangeline Lilly, Michael Douglas",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ant_man_quantumania",
        "video": "https://www.youtube.com/watch?v=Q0uaHT1wsTQ",
        "image": "images/ant_man_quantumania.jpg",
        "acteurs": "Paul Rudd, Evangeline Lilly, Jonathan Majors",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aquaman",
        "video": "https://www.youtube.com/watch?v=ivvOKs7B-Vw",
        "image": "images/aquaman.jpg",
        "acteurs": "Jason Momoa, Amber Heard",
        "genres": [
            "action"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "aquaman_2",
        "video": "https://www.youtube.com/watch?v=rf_d8jA89_o",
        "image": "images/aquaman_2.jpg",
        "acteurs": "Jason Momoa, Patrick Wilson",
        "genres": [],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "armageddon",
        "video": "https://www.youtube.com/watch?v=cYznwIfEFFg&t=25s",
        "image": "images/armageddon.jpg",
        "acteurs": "Bruce Willis, Ben Affleck, Liv Tyler",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "1998",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "arthur_et_les_minimoys",
        "video": "https://www.youtube.com/watch?v=qJeKKd0gPiU&t=22s",
        "image": "images/arthur_et_les_minimoys.jpg",
        "acteurs": "Freddie Highmore, Mia Farrow (voix)",
        "genres": [
            "aventure",
            "comédie"
        ],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "arthur_et_les_minimoys_2",
        "video": "https://www.youtube.com/watch?v=jgCFy7kl9T8&t=43s",
        "image": "images/arthur_et_les_minimoys_2.jpg",
        "acteurs": "Freddie Highmore, Selena Gomez (voix)",
        "genres": [
            "aventure",
            "comédie"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "arthur_et_les_minimoys_3",
        "video": "https://www.youtube.com/watch?v=mOdxATJwad0&t=37s",
        "image": "images/arthur_et_les_minimoys_3.jpg",
        "acteurs": "Freddie Highmore, Mia Farrow (voix)",
        "genres": [
            "aventure",
            "comédie"
        ],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "asterix_et_obelix",
        "video": "https://www.youtube.com/watch?v=RNKFKDs5SGk&t=46s",
        "image": "images/asterix_et_obelix.jpg",
        "acteurs": "",
        "genres": [
            "aventure",
            "comédie"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "au_dela",
        "video": "https://www.youtube.com/watch?v=EnYjJjeo488&t=27s",
        "image": "images/au_dela.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "thriller"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "avatar_1",
        "video": "https://www.youtube.com/watch?v=O1CzgULNRGs",
        "image": "images/avatar_1.jpg",
        "acteurs": "Sam Worthington, Zoe Saldana",
        "genres": [
            "science-fiction",
            "action"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "avatar_2",
        "video": "https://www.youtube.com/watch?v=598NnroP42s",
        "image": "images/avatar_2.jpg",
        "acteurs": "Sam Worthington, Zoe Saldana",
        "genres": [
            "science-fiction",
            "action"
        ],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "avengers_1",
        "video": "https://www.youtube.com/watch?v=b-kTeJhHOhc&t=40s",
        "image": "images/avengers_1.jpg",
        "acteurs": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        "genres": [
            "action"
        ],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "avengers_lere_dultron",
        "video": "https://www.youtube.com/watch?v=XmzJ5WMSr-g",
        "image": "images/avengers_lere_dultron.jpg",
        "acteurs": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        "genres": [
            "action"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "avengers_infinity_war",
        "video": "https://www.youtube.com/watch?v=UDW_LLdERFw",
        "image": "images/avengers_infinity_war.jpg",
        "acteurs": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        "genres": [
            "action"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "avengers_endgame",
        "video": "https://www.youtube.com/watch?v=wV-Q0o2OQjQ&t=55s",
        "image": "images/avengers_endgame.jpg",
        "acteurs": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        "genres": [
            "action"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "baby_boss",
        "video": "https://www.youtube.com/watch?v=u52L6ZZMU4o",
        "image": "images/baby_boss.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "babylon",
        "video": "https://www.youtube.com/watch?v=50P1-oPvZOg",
        "image": "images/babylon.jpg",
        "acteurs": "Brad Pitt, Margot Robbie",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bad_boys",
        "video": "https://www.youtube.com/watch?v=n4PA-z54c6M",
        "image": "images/bad_boys.jpg",
        "acteurs": "Will Smith, Martin Lawrence",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bad_boys_2",
        "video": "https://www.youtube.com/watch?v=vJe_UT7LKfY",
        "image": "images/bad_boys_2.jpg",
        "acteurs": "Will Smith, Martin Lawrence",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bad_boys_for_life",
        "video": "https://www.youtube.com/watch?v=9fA_ORiKbxI",
        "image": "images/bad_boys_for_life.jpg",
        "acteurs": "Will Smith, Martin Lawrence",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bad_boys_ride_or_die",
        "video": "https://www.youtube.com/watch?v=Y7GX3iPk0xE",
        "image": "images/bad_boys_ride_or_die.jpg",
        "acteurs": "Will Smith, Martin Lawrence",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "barbie",
        "video": "https://www.youtube.com/watch?v=76LYe958Va0&t=36s",
        "image": "images/barbie.jpg",
        "acteurs": "",
        "genres": [
            "comédie"
        ],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "batman_the_darknight",
        "video": "https://www.youtube.com/watch?v=UMgb3hQCb08",
        "image": "images/batman_the_darknight.jpg",
        "acteurs": "Christian Bale, Heath Ledger",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "batman_vs_superman",
        "video": "https://www.youtube.com/watch?v=rW4ZaR2Jndg&t=37s",
        "image": "images/batman_vs_superman.jpg",
        "acteurs": "Ben Affleck, Henry Cavill",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bee_movie",
        "video": "https://www.youtube.com/watch?v=8luPknhlzpM",
        "image": "images/bee_movie.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bird_of_prey",
        "video": "https://www.youtube.com/watch?v=6bh1OHkIuYA",
        "image": "images/bird_of_prey.jpg",
        "acteurs": "Margot Robbie, Mary Elizabeth Winstead",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2020",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "black_adam",
        "video": "https://www.youtube.com/watch?v=vUnRitCWjqc",
        "image": "images/black_adam.jpg",
        "acteurs": "Dwayne Johnson, Sarah Shahi",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "black_k_klasman",
        "video": "https://www.youtube.com/watch?v=zvTxYdsWbKk&t=29s",
        "image": "images/black_k_klasman.jpg",
        "acteurs": "John David Washington, Adam Driver",
        "genres": [
            "comédie"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "black_panther",
        "video": "https://www.youtube.com/watch?v=lyKngqfmqW4",
        "image": "images/black_panther.jpg",
        "acteurs": "Chadwick Boseman, Michael B. Jordan",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "black_panther_wakanda_forever",
        "video": "https://www.youtube.com/watch?v=Pa4BEJcrMAA",
        "image": "images/black_panther_wakanda_forever.jpg",
        "acteurs": "Letitia Wright, Lupita Nyong'o",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "black_storm",
        "video": "https://www.youtube.com/watch?v=hjqe0TjtsJs&t=33s",
        "image": "images/black_storm.jpg",
        "acteurs": "Richard Armitage, Sarah Wayne Callies",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "black_widow",
        "video": "https://www.youtube.com/watch?v=4l99M0zOEaA&t=35s",
        "image": "images/black_widow.jpg",
        "acteurs": "Scarlett Johansson, Florence Pugh",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "blade_runner_2049",
        "video": "https://www.youtube.com/watch?v=O4C5cwSbXZ8&t=29s",
        "image": "images/blade_runner_2049.jpg",
        "acteurs": "Ryan Gosling, Harrison Ford",
        "genres": [
            "science-fiction",
            "thriller"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "blanche_neige_et_les_septs_nains",
        "video": "https://www.youtube.com/watch?v=eyjc8txuG44",
        "image": "images/blanche_neige_et_les_septs_nains.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bodyguard",
        "video": "https://www.youtube.com/watch?v=AhIJMuPHWVQ&t=27s",
        "image": "images/bodyguard.jpg",
        "acteurs": "Kevin Costner, Whitney Houston",
        "genres": [
            "romance",
            "thriller"
        ],
        "annee": "1992",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bohemian_rhapsody",
        "video": "https://www.youtube.com/watch?v=xXuDGUviTgA",
        "image": "images/bohemian_rhapsody.jpg",
        "acteurs": "Rami Malek, Lucy Boynton",
        "genres": [
            "musical",
            "drame"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "bob_marley_one_love",
        "video": "https://www.youtube.com/watch?v=BEjRSLGysFY",
        "image": "images/bob_marley_one_love.jpg",
        "acteurs": "Kingsley Ben Adir",
        "genres": [
            "musical"
        ],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "breezy",
        "video": "https://www.youtube.com/watch?v=38zpqhU_GcM&t=21s",
        "image": "images/breezy.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "buzz_l_éclair",
        "video": "https://www.youtube.com/watch?v=q41VoF95fmI",
        "image": "images/buzz_l_éclair.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ca_1",
        "video": "https://www.youtube.com/watch?v=Tw3yT-qAbvc",
        "image": "images/ca_1.jpg",
        "acteurs": "Bill Skarsgård, Jaeden Martell",
        "genres": [
            "horreur"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ca_2",
        "video": "https://www.youtube.com/watch?v=yOZA2y_dQA4",
        "image": "images/ca_2.jpg",
        "acteurs": "Bill Skarsgård, James McAvoy",
        "genres": [
            "horreur"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ca_va_cogner",
        "video": "",
        "image": "images/ca_va_cogner.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "captain_america_1",
        "video": "https://www.youtube.com/watch?v=IsiV9IJieMk&t=17s",
        "image": "images/captain_america_1.jpg",
        "acteurs": "Chris Evans, Hayley Atwell",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "captain_america_civil_war",
        "video": "https://www.youtube.com/watch?v=fuIIGDjEj8Q&t=47s",
        "image": "images/captain_america_civil_war.jpg",
        "acteurs": "Chris Evans, Robert Downey Jr.",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "captain_america_le_soldat_d_hiver",
        "video": "https://www.youtube.com/watch?v=Zp1L2kc9p1I",
        "image": "images/captain_america_le_soldat_d_hiver.jpg",
        "acteurs": "Chris Evans, Sebastian Stan",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "captain_marvel",
        "video": "https://www.youtube.com/watch?v=rndLWLmwgeA",
        "image": "images/captain_marvel.jpg",
        "acteurs": "Brie Larson, Samuel L. Jackson",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "captivity",
        "video": "https://www.youtube.com/watch?v=Ncmo6Tig2Vk",
        "image": "images/captivity.jpg",
        "acteurs": "Elisha Cuthbert, Daniel Gillies",
        "genres": [
            "science-fiction"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "cars",
        "video": "https://www.youtube.com/watch?v=UIXZUfzrIUQ",
        "image": "images/cars.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "cars_2",
        "video": "https://www.youtube.com/watch?v=z1DD1pQmXP0",
        "image": "images/cars_2.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "cendrillon",
        "video": "https://www.youtube.com/watch?v=mB8RJ7xA7rw",
        "image": "images/cendrillon.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "chernobyl",
        "video": "https://www.youtube.com/watch?v=Fsw9Ds8Ujuo",
        "image": "images/chernobyl.jpg",
        "acteurs": "",
        "genres": [
            "catastrophe"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "cléopatre_la_dernière_reine_d_égypte",
        "video": "https://www.youtube.com/watch?v=EuSPbfuWGuA",
        "image": "images/cléopatre_la_dernière_reine_d_égypte.jpg",
        "acteurs": "",
        "genres": [
            "musical"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "cocktail",
        "video": "https://www.youtube.com/watch?v=N2_6tS80-Pw",
        "image": "images/cocktail.jpg",
        "acteurs": "Tom Cruise, Bryan Brown",
        "genres": [
            "romance",
            "comédie"
        ],
        "annee": "1988",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "contagion",
        "video": "https://www.youtube.com/watch?v=MSgq3CgV7_A",
        "image": "images/contagion.jpg",
        "acteurs": "Matt Damon, Kate Winslet",
        "genres": [
            "science-fiction",
            "thriller"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "creance_de_sang",
        "video": "https://www.youtube.com/watch?v=BR1p0Kgu9bo",
        "image": "images/creance_de_sang.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "thriller"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "da_vinci_code",
        "video": "https://www.youtube.com/watch?v=dOJBaIjXGnQ&t=39s",
        "image": "images/da_vinci_code.jpg",
        "acteurs": "Tom Hanks, Audrey Tautou",
        "genres": [
            "thriller",
            "mystère"
        ],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "de_lor_pour_les_braves",
        "video": "https://www.youtube.com/watch?v=5kc-9llhtHc",
        "image": "images/de_lor_pour_les_braves.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "guerre"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "deadpool_1",
        "video": "https://www.youtube.com/watch?v=XWtH7anz7io&t=72s",
        "image": "images/deadpool_1.jpg",
        "acteurs": "Ryan Reynolds, Morena Baccarin",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "deadpool_2",
        "video": "https://www.youtube.com/watch?v=QgzslSsSECM",
        "image": "images/deadpool_2.jpg",
        "acteurs": "Ryan Reynolds, Josh Brolin",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "deadpool_3",
        "video": "https://www.youtube.com/watch?v=AAWJ21wLN4A",
        "image": "images/deadpool_3.jpg",
        "acteurs": "Ryan Reynolds, Hugh Jackman",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "destination_finale_1",
        "video": "https://www.youtube.com/watch?v=Mog5aEuq-8A&t=2s",
        "image": "images/destination_finale_1.jpg",
        "acteurs": "Devon Sawa, Ali Larter",
        "genres": [
            "horreur"
        ],
        "annee": "2000",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "destination_finale_2",
        "video": "https://www.youtube.com/watch?v=NqK9Gbrnyec&t=8s",
        "image": "images/destination_finale_2.jpg",
        "acteurs": "A.J. Cook, Ali Larter",
        "genres": [
            "horreur"
        ],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "destination_finale_3",
        "video": "https://www.youtube.com/watch?v=iqVxVKL-yOM",
        "image": "images/destination_finale_3.jpg",
        "acteurs": "Mary Elizabeth Winstead, Ryan Merriman",
        "genres": [
            "horreur"
        ],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "destination_finale_4",
        "video": "https://www.youtube.com/watch?v=PBF4DTFUZKg&t=15s",
        "image": "images/destination_finale_4.jpg",
        "acteurs": "Bobby Campo, Shantel VanSanten",
        "genres": [
            "horreur"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "destination_finale_5",
        "video": "https://www.youtube.com/watch?v=VjqCOYHrd5s",
        "image": "images/destination_finale_5.jpg",
        "acteurs": "Nicholas D'Agosto, Emma Bell",
        "genres": [
            "horreur"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "die_hard_1",
        "video": "https://www.youtube.com/watch?v=rf79c9Da83I&t=3s",
        "image": "images/die_hard_1.jpg",
        "acteurs": "Bruce Willis, Alan Rickman",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "1988",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "die_hard_2_58_min",
        "video": "https://www.youtube.com/watch?v=dC9UCRMxoZg&t=45s",
        "image": "images/die_hard_2_58_min.jpg",
        "acteurs": "Bruce Willis, William Atherton",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "1990",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "die_hard_3_une_journee_en_enfer",
        "video": "https://www.youtube.com/watch?v=K2AruxS8-Rs",
        "image": "images/die_hard_3_une_journee_en_enfer.jpg",
        "acteurs": "Bruce Willis, Samuel L. Jackson",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "1995",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "die_har_4_retour_en_enfer",
        "video": "https://www.youtube.com/watch?v=IQuquL2xuzY&t=36s",
        "image": "images/die_har_4_retour_en_enfer.jpg",
        "acteurs": "Bruce Willis, Justin Long",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2007",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "die_hard_5_belle_journee_pour_mourir",
        "video": "https://www.youtube.com/watch?v=IBX_A-5iWYA&t=41s",
        "image": "images/die_hard_5_belle_journee_pour_mourir.jpg",
        "acteurs": "Bruce Willis, Jai Courtney",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "divergeante_1",
        "video": "https://www.youtube.com/watch?v=gxbwcBlj_dM&t=63s",
        "image": "images/divergeante_1.jpg",
        "acteurs": "Shailene Woodley, Theo James",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "divergeante_2",
        "video": "https://www.youtube.com/watch?v=l4YTrX3gmco&t=28s",
        "image": "images/divergeante_2.jpg",
        "acteurs": "Shailene Woodley, Theo James",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "divergeante_3",
        "video": "https://www.youtube.com/watch?v=IME-Af-uRSE&t=29s",
        "image": "images/divergeante_3.jpg",
        "acteurs": "Shailene Woodley, Theo James",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "doctor_strange",
        "video": "https://www.youtube.com/watch?v=bly7XM7QzSY&t=43s",
        "image": "images/doctor_strange.jpg",
        "acteurs": "Benedict Cumberbatch, Chiwetel Ejiofor",
        "genres": [
            "action"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "doctor_strange_in_the_multiverse_of_madness",
        "video": "https://www.youtube.com/watch?v=IB0keJtKDvw",
        "image": "images/doctor_strange_in_the_multiverse_of_madness.jpg",
        "acteurs": "Benedict Cumberbatch, Elizabeth Olsen",
        "genres": [
            "action"
        ],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "dunkerque",
        "video": "https://www.youtube.com/watch?v=chRUCIk3K94&t=66s",
        "image": "images/dunkerque.jpg",
        "acteurs": "Fionn Whitehead, Tom Hardy, Mark Rylance",
        "genres": [
            "guerre",
            "action"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "dune_part_1",
        "video": "https://www.youtube.com/watch?v=gHt8tCHbB2M",
        "image": "images/dune_part_1.jpg",
        "acteurs": "Timothée Chalamet, Zendaya",
        "genres": [
            "action",
            "aventure",
            "science-fiction"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "dune_part_2",
        "video": "https://www.youtube.com/watch?v=SUfv36bB5jA",
        "image": "images/dune_part_2.jpg",
        "acteurs": "Timothée Chalamet, Zendaya",
        "genres": [
            "action",
            "aventure",
            "science-fiction"
        ],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "equalizer_1",
        "video": "https://www.youtube.com/watch?v=Ydmk1_1_Gi4",
        "image": "images/equalizer_1.jpg",
        "acteurs": "",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "equalizer_2",
        "video": "https://www.youtube.com/watch?v=zEmqoNmdhsI",
        "image": "images/equalizer_2.jpg",
        "acteurs": "",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "equalizer_3",
        "video": "https://www.youtube.com/watch?v=2L0ibmBgFV8",
        "image": "images/equalizer_3.jpg",
        "acteurs": "",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_1",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_1.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_10",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_10.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_11",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_11.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_12",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_12.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_13",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_13.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_14",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_14.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_2",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_2.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_3",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_3.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_4",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_4.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_5",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_5.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_6",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_6.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_7",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_7.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_8",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_8.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "esprits_criminels_saison_9",
        "video": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
        "image": "images/esprits_criminels_saison_9.jpg",
        "acteurs": "",
        "genres": [
            "série tv"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "et_pour_quelques_dollards_de_plus",
        "video": "https://www.youtube.com/watch?v=_0fFfnzIyCg",
        "image": "images/et_pour_quelques_dollards_de_plus.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "western"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "expandable_1",
        "video": "https://www.youtube.com/watch?v=5RcnSc08lJQ&t=30s",
        "image": "images/expandable_1.jpg",
        "acteurs": "Sylvester Stallone, Jason Statham",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "expandable_2",
        "video": "https://www.youtube.com/watch?v=PTEBUh76o-Y",
        "image": "images/expandable_2.jpg",
        "acteurs": "Sylvester Stallone, Jason Statham, Jean-Claude Van Damme",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "expandable_3",
        "video": "https://www.youtube.com/watch?v=RwgHXmnUDBw&t=29s",
        "image": "images/expandable_3.jpg",
        "acteurs": "Sylvester Stallone, Jason Statham, Mel Gibson",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_1",
        "video": "https://www.youtube.com/watch?v=b0EJzs6U9t8&t=30s",
        "image": "images/fast_and_furious_1.jpg",
        "acteurs": "Vin Diesel, Paul Walker",
        "genres": [
            "action"
        ],
        "annee": "2001",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_10",
        "video": "https://www.youtube.com/watch?v=rPmA-4AhA94&t=91s",
        "image": "images/fast_and_furious_10.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_2",
        "video": "https://www.youtube.com/watch?v=KUX6KI3-AjA&t=1s",
        "image": "images/fast_and_furious_2.jpg",
        "acteurs": "Paul Walker, Tyrese Gibson",
        "genres": [
            "action"
        ],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_3",
        "video": "https://www.youtube.com/watch?v=KPiJgEc7Ux8&t=4s",
        "image": "images/fast_and_furious_3.jpg",
        "acteurs": "Lucas Black, Sung Kang",
        "genres": [
            "action"
        ],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_4",
        "video": "https://www.youtube.com/watch?v=99XOxDLMvBg&t=4s",
        "image": "images/fast_and_furious_4.jpg",
        "acteurs": "Vin Diesel, Paul Walker",
        "genres": [
            "action"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_5",
        "video": "https://www.youtube.com/watch?v=CYV-mTqlI_g&t=6s",
        "image": "images/fast_and_furious_5.jpg",
        "acteurs": "Vin Diesel, Paul Walker, Dwayne Johnson",
        "genres": [
            "action"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_6",
        "video": "https://www.youtube.com/watch?v=Ewu0WTPbOVY&t=1s",
        "image": "images/fast_and_furious_6.jpg",
        "acteurs": "Vin Diesel, Paul Walker, Dwayne Johnson",
        "genres": [
            "action"
        ],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_7",
        "video": "https://www.youtube.com/watch?v=3Wu2BhFuc4c",
        "image": "images/fast_and_furious_7.jpg",
        "acteurs": "Vin Diesel, Paul Walker, Jason Statham",
        "genres": [
            "action"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_8",
        "video": "https://www.youtube.com/watch?v=xFO-pKB13mw",
        "image": "images/fast_and_furious_8.jpg",
        "acteurs": "Vin Diesel, Dwayne Johnson, Charlize Theron",
        "genres": [
            "action"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_9",
        "video": "https://www.youtube.com/watch?v=Eumj0-UxrQM",
        "image": "images/fast_and_furious_9.jpg",
        "acteurs": "Vin Diesel, John Cena",
        "genres": [
            "action"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "fast_and_furious_hobbs",
        "video": "https://www.youtube.com/watch?v=VZFp6OIeX2Q",
        "image": "images/fast_and_furious_hobbs.jpg",
        "acteurs": "Dwayne Johnson, Jason Statham",
        "genres": [
            "action"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ferrari",
        "video": "https://www.youtube.com/watch?v=Mq79jsu8PcQ",
        "image": "images/ferrari.jpg",
        "acteurs": "Adam driver, Penélope Cruz",
        "genres": [
            "biopic"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "firefox",
        "video": "https://www.youtube.com/watch?v=Iv7-SOR7TQs&t=17s",
        "image": "images/firefox.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "forrest_gump",
        "video": "https://www.youtube.com/watch?v=7pDDuroFBGM",
        "image": "images/forrest_gump.jpg",
        "acteurs": "Tom Hanks, Robin Wright",
        "genres": [
            "comédie"
        ],
        "annee": "1994",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "franck_dubosq_romantique",
        "video": "https://www.youtube.com/watch?v=XPVsX92sVQM",
        "image": "images/franck_dubosq_romantique.jpg",
        "acteurs": "",
        "genres": [
            "spectacle"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "freddy_1",
        "video": "https://www.youtube.com/watch?v=OuqHdlQ7DBM&t=52s",
        "image": "images/freddy_1.jpg",
        "acteurs": "Robert Englund, Heather Langenkamp",
        "genres": [
            "horreur"
        ],
        "annee": "1984",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "freddy_2",
        "video": "https://www.youtube.com/watch?v=SUF13QSUUQA",
        "image": "images/freddy_2.jpg",
        "acteurs": "Robert Englund, Mark Patton",
        "genres": [
            "horreur"
        ],
        "annee": "1985",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "freddy_3",
        "video": "https://www.youtube.com/watch?v=c1Zgra_gHMU&t=21s",
        "image": "images/freddy_3.jpg",
        "acteurs": "Robert Englund, Heather Langenkamp",
        "genres": [
            "horreur"
        ],
        "annee": "1987",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "freddy_4",
        "video": "https://www.youtube.com/watch?v=wmDM090Z2SI",
        "image": "images/freddy_4.jpg",
        "acteurs": "Robert Englund, Rodney Eastman",
        "genres": [
            "horreur"
        ],
        "annee": "1988",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "game_of_thrones",
        "video": "https://www.youtube.com/watch?v=Ng1W_qu5aJM",
        "image": "images/game_of_thrones.jpg",
        "acteurs": "Kit Harington, Emilia Clarke",
        "genres": [
            "serie"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "gemini_man",
        "video": "https://www.youtube.com/watch?v=AK07MzdsrD4&t=60s",
        "image": "images/gemini_man.jpg",
        "acteurs": "Will Smith, Mary Elizabeth Winstead",
        "genres": [
            "action",
            "thriller"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "geostorm",
        "video": "https://www.youtube.com/watch?v=QWaOHVtjUoc",
        "image": "images/geostorm.jpg",
        "acteurs": "Gerard Butler, Jim Sturgess",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ghost",
        "video": "https://www.youtube.com/watch?v=zUY8bf4mUPg&t=28s",
        "image": "images/ghost.jpg",
        "acteurs": "Patrick Swayze, Demi Moore",
        "genres": [
            "romance",
            "thriller"
        ],
        "annee": "2000",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "gran_torino",
        "video": "https://www.youtube.com/watch?v=ih9_s8YcfLc",
        "image": "images/gran_torino.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "thriller"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "gran_turismo",
        "video": "https://www.youtube.com/watch?v=9tR6oOlnkw4",
        "image": "images/gran_turismo.jpg",
        "acteurs": "David Harbour, Orlando Bloom, Archie Madekwe",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "grease",
        "video": "https://www.youtube.com/watch?v=2j17nSmVghI",
        "image": "images/grease.jpg",
        "acteurs": "John Travolta, Olivia Newton-John",
        "genres": [
            "musical",
            "comédie"
        ],
        "annee": "1978",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hallowen",
        "video": "https://www.youtube.com/watch?v=wqts5qBX8ZA",
        "image": "images/hallowen.jpg",
        "acteurs": "Jamie Lee Curtis, John Carpenter, David Gordon Green",
        "genres": [
            "horreur"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "halloween_kills",
        "video": "https://www.youtube.com/watch?v=3UDSSahHzGA",
        "image": "images/halloween_kills.jpg",
        "acteurs": "Jamie Lee Curtis, John Carpenter, David Gordon Green",
        "genres": [
            "horreur"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "halloween_ends",
        "video": "https://www.youtube.com/watch?v=F95OM43zdHs",
        "image": "images/halloween_ends.jpg",
        "acteurs": "Jamie Lee Curtis, John Carpenter, David Gordon Green",
        "genres": [
            "horreur"
        ],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hancock",
        "video": "https://www.youtube.com/watch?v=FmpOgGrwXdQ&t=29s",
        "image": "images/hancock.jpg",
        "acteurs": "Will Smith, Charlize Theron",
        "genres": [
            "action"
        ],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "happy_feet",
        "video": "https://www.youtube.com/watch?v=iTZ5yEg65XQ",
        "image": "images/happy_feet.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_1",
        "video": "https://www.youtube.com/watch?v=P1BGgqhVGAI",
        "image": "images/harry_potter_1.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2001",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_2",
        "video": "https://www.youtube.com/watch?v=Z3T8PuWuoL0&t=47s",
        "image": "images/harry_potter_2.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2002",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_3",
        "video": "https://www.youtube.com/watch?v=CLncEeVf4ks&t=7s",
        "image": "images/harry_potter_3.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2004",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_4",
        "video": "https://www.youtube.com/watch?v=XO9rqIgzDL0&t=3s",
        "image": "images/harry_potter_4.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2005",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_5",
        "video": "https://www.youtube.com/watch?v=S8-SXEGMmi4&t=1s",
        "image": "images/harry_potter_5.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2007",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_6",
        "video": "https://www.youtube.com/watch?v=yb-VYG3x5E8",
        "image": "images/harry_potter_6.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_7",
        "video": "https://www.youtube.com/watch?v=HgZZsnleZJQ&t=1s",
        "image": "images/harry_potter_7.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "harry_potter_8",
        "video": "https://www.youtube.com/watch?v=aiaIfICU-Tk&t=3s",
        "image": "images/harry_potter_8.jpg",
        "acteurs": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "genres": [
            "aventure",
            "familial"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray, enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "haut_les_flingues",
        "video": "https://www.youtube.com/watch?v=xAvYuFtHuV4&t=23s",
        "image": "images/haut_les_flingues.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "western"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hunger_games_1",
        "video": "https://www.youtube.com/watch?v=wqUq0lsQ684&t=19s",
        "image": "images/hunger_games_1.jpg",
        "acteurs": "Jennifer Lawrence, Josh Hutcherson",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hunger_games_2",
        "video": "https://www.youtube.com/watch?v=-ZcW_6i2Rkg",
        "image": "images/hunger_games_2.jpg",
        "acteurs": "Jennifer Lawrence, Josh Hutcherson",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hunger_games_3",
        "video": "https://www.youtube.com/watch?v=zdMIft77FEY&t=41s",
        "image": "images/hunger_games_3.jpg",
        "acteurs": "Jennifer Lawrence, Josh Hutcherson",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hunger_games_4",
        "video": "https://www.youtube.com/watch?v=MGZ0kzmcWAU&t=22s",
        "image": "images/hunger_games_4.jpg",
        "acteurs": "Jennifer Lawrence, Josh Hutcherson",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hunger_games_5",
        "video": "https://www.youtube.com/watch?v=BLJSN_UNqbc",
        "image": "images/hunger_games_5.jpg",
        "acteurs": "",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "hypnotic",
        "video": "https://www.youtube.com/watch?v=0Rhej7ZllK8",
        "image": "images/hypnotic.jpg",
        "acteurs": "",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "il_était_une_fois_la_vie",
        "video": "https://www.youtube.com/watch?v=kNnpHAszq64",
        "image": "images/il_était_une_fois_la_vie.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "il_faut_sauver_le_soldat",
        "video": "https://www.youtube.com/watch?v=7VBsDfsXJfQ",
        "image": "images/il_faut_sauver_le_soldat.jpg",
        "acteurs": "Tom Hanks, Matt Damon",
        "genres": [
            "guerre"
        ],
        "annee": "1998",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "impitoyable",
        "video": "https://www.youtube.com/watch?v=H3g3IH8Mgx0&t=19s",
        "image": "images/impitoyable.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "western"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "inception",
        "video": "https://www.youtube.com/watch?v=HcoZbHBDHQA",
        "image": "images/inception.jpg",
        "acteurs": "Leonardo DiCaprio, Joseph Gordon-Levitt",
        "genres": [
            "thriller",
            "science-fiction"
        ],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "independance_day_1",
        "video": "https://www.youtube.com/watch?v=B1E7h3SeMDk&t=31s",
        "image": "images/independance_day_1.jpg",
        "acteurs": "Will Smith, Bill Pullman",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "1996",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "independance_day_2",
        "video": "https://www.youtube.com/watch?v=b577i7s2CiM",
        "image": "images/independance_day_2.jpg",
        "acteurs": "Liam Hemsworth, Jeff Goldblum",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "inferno",
        "video": "https://www.youtube.com/watch?v=GfXpBiLwhHk&t=16s",
        "image": "images/inferno.jpg",
        "acteurs": "Tom Hanks, Felicity Jones",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "insaisissables_1",
        "video": "https://www.youtube.com/watch?v=-FeFz-cXILA",
        "image": "images/insaisissables_1.jpg",
        "acteurs": "Jesse Eisenberg, Mark Ruffalo",
        "genres": [
            "thriller"
        ],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "insaisissables_2",
        "video": "https://www.youtube.com/watch?v=0iGn57DVJIc",
        "image": "images/insaisissables_2.jpg",
        "acteurs": "Jesse Eisenberg, Mark Ruffalo, Daniel Radcliffe",
        "genres": [
            "thriller"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "intouchable",
        "video": "https://www.youtube.com/watch?v=EsaX5kltRcA&t=33s",
        "image": "images/intouchable.jpg",
        "acteurs": "François Cluzet, Omar Sy",
        "genres": [
            "comédie"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "invictus",
        "video": "https://www.youtube.com/watch?v=PEO6-fe9qPA&t=19s",
        "image": "images/invictus.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "biopic",
            "drame"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "iron_man_1",
        "video": "https://www.youtube.com/watch?v=rDCTb9Gp2qk&t=34s",
        "image": "images/iron_man_1.jpg",
        "acteurs": "Robert Downey Jr., Gwyneth Paltrow",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "iron_man_2",
        "video": "https://www.youtube.com/watch?v=0Y7ullsUPEA",
        "image": "images/iron_man_2.jpg",
        "acteurs": "Robert Downey Jr., Gwyneth Paltrow",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "iron_man_3",
        "video": "https://www.youtube.com/watch?v=wnEr73Rq3Ac&t=51s",
        "image": "images/iron_man_3.jpg",
        "acteurs": "Robert Downey Jr., Gwyneth Paltrow",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "j_edgar",
        "video": "https://www.youtube.com/watch?v=3P-unVGBRAM&t=22s",
        "image": "images/j_edgar.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "biopic",
            "drame"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jason_bourne",
        "video": "https://www.youtube.com/watch?v=euya1zwQ6U0",
        "image": "images/jason_bourne.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jason_bourne_l_héritage",
        "video": "https://www.youtube.com/watch?v=lUALPKrNkII",
        "image": "images/jason_bourne_l_héritage.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jason_bourne_la_mémoire_dans_le_peau",
        "video": "https://www.youtube.com/watch?v=zTRMFgZK4oE",
        "image": "images/jason_bourne_la_mémoire_dans_le_peau.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jason_bourne_la_mort_dans_la_peau",
        "video": "https://www.youtube.com/watch?v=akQDIZ6PUzY",
        "image": "images/jason_bourne_la_mort_dans_la_peau.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jason_bourne_la_vangeance_dans_la_peau",
        "video": "https://www.youtube.com/watch?v=fgo033vwNUA",
        "image": "images/jason_bourne_la_vangeance_dans_la_peau.jpg",
        "acteurs": "",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jean_philippe",
        "video": "https://www.youtube.com/watch?v=RnN3tT1Utxs&t=34s",
        "image": "images/jean_philippe.jpg",
        "acteurs": "Fabrice Luchini, Johnny Hallyday",
        "genres": [
            "comédie"
        ],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jersey_boys",
        "video": "https://www.youtube.com/watch?v=jgBr2iNGXzQ&t=18s",
        "image": "images/jersey_boys.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "biopic",
            "drame",
            "musical"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "john_wick_1",
        "video": "https://www.youtube.com/watch?v=pWK5crMuhHY&t=37s",
        "image": "images/john_wick_1.jpg",
        "acteurs": "Keanu Reeves, Michael Nyqvist",
        "genres": [
            "action"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "john_wick_2",
        "video": "https://www.youtube.com/watch?v=d0u1o8vdxE8&t=27s",
        "image": "images/john_wick_2.jpg",
        "acteurs": "Keanu Reeves, Riccardo Scamarcio",
        "genres": [
            "action"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "john_wick_3",
        "video": "https://www.youtube.com/watch?v=Cs4wKxXjkc8&t=28s",
        "image": "images/john_wick_3.jpg",
        "acteurs": "Keanu Reeves, Halle Berry",
        "genres": [
            "action"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "john_wick_4",
        "video": "https://www.youtube.com/watch?v=6itn_8L6-Z8&t=27s",
        "image": "images/john_wick_4.jpg",
        "acteurs": "Keanu Reeves",
        "genres": [
            "action"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "joker",
        "video": "https://www.youtube.com/watch?v=OoTx1cYC5u8",
        "image": "images/joker.jpg",
        "acteurs": "Joaquin Phoenix, Robert De Niro",
        "genres": [
            "thriller"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "josey_wales",
        "video": "https://www.youtube.com/watch?v=qiSp6hiQrjc",
        "image": "images/josey_wales.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "western"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "joyeux_bordel",
        "video": "https://www.youtube.com/watch?v=ifk8lQ_5b6Y",
        "image": "images/joyeux_bordel.jpg",
        "acteurs": "Jason Bateman, Olivia Munn",
        "genres": [
            "comédie"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "juge_coupable",
        "video": "https://www.youtube.com/watch?v=L9v6kR1nGow&t=25s",
        "image": "images/juge_coupable.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "drame"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jumanji",
        "video": "https://www.youtube.com/watch?v=oZI2njF5rx0",
        "image": "images/jumanji.jpg",
        "acteurs": "Dwayne Johnson, Kevin Hart, Jack Black",
        "genres": [
            "aventure"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jumanji_2",
        "video": "https://www.youtube.com/watch?v=RhWRa0wBBHA",
        "image": "images/jumanji_2.jpg",
        "acteurs": "Dwayne Johnson, Kevin Hart, Jack Black",
        "genres": [
            "aventure"
        ],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jungle_cruise",
        "video": "https://www.youtube.com/watch?v=CWpcUeAZgD0&t=43s",
        "image": "images/jungle_cruise.jpg",
        "acteurs": "Dwayne Johnson, Emily Blunt",
        "genres": [
            "aventure"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jurassic_park_1",
        "video": "https://www.youtube.com/watch?v=ZEY7iMX_oZs&t=41s",
        "image": "images/jurassic_park_1.jpg",
        "acteurs": "Sam Neill, Laura Dern, Jeff Goldblum",
        "genres": [
            "aventure",
            "science-fiction"
        ],
        "annee": "1993",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jurassic_park_2",
        "video": "https://www.youtube.com/watch?v=z6hwDlf8vMk&t=41s",
        "image": "images/jurassic_park_2.jpg",
        "acteurs": "Jeff Goldblum, Julianne Moore",
        "genres": [
            "aventure",
            "science-fiction"
        ],
        "annee": "1997",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jurassic_park_3",
        "video": "https://www.youtube.com/watch?v=FxOfakcWAeE",
        "image": "images/jurassic_park_3.jpg",
        "acteurs": "Sam Neill, William H. Macy",
        "genres": [
            "aventure",
            "science-fiction"
        ],
        "annee": "2001",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jurassic_park_4",
        "video": "https://www.youtube.com/watch?v=wmzAfqhphq8",
        "image": "images/jurassic_park_4.jpg",
        "acteurs": "Chris Pratt, Bryce Dallas Howard",
        "genres": [
            "aventure",
            "science-fiction"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "jurassic_park_5",
        "video": "https://www.youtube.com/watch?v=6Eokj_7aIQ0",
        "image": "images/jurassic_park_5.jpg",
        "acteurs": "Chris Pratt, Bryce Dallas Howard",
        "genres": [
            "aventure",
            "science-fiction"
        ],
        "annee": "2025",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "justice_league",
        "video": "https://www.youtube.com/watch?v=cvUFoxU_Lq0&t=28s",
        "image": "images/justice_league.jpg",
        "acteurs": "Ben Affleck, Gal Gadot, Henry Cavill",
        "genres": [
            "action",
            "fantasy"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "justice_league_zack_snider",
        "video": "https://www.youtube.com/watch?v=nKmVTdkUI6A",
        "image": "images/justice_league_zack_snider.jpg",
        "acteurs": "Ben Affleck, Gal Gadot, Henry Cavill",
        "genres": [
            "action",
            "fantasy"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "kin",
        "video": "https://www.youtube.com/watch?v=KGsqiAF6MJk&t=49s",
        "image": "images/kin.jpg",
        "acteurs": "Myles Truitt, Jack Reynor",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "kings_man_1",
        "video": "https://www.youtube.com/watch?v=s-YfBT7Wu9o",
        "image": "images/kings_man_1.jpg",
        "acteurs": "Taron Egerton, Colin Firth",
        "genres": [
            "action"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "kings_man_2",
        "video": "https://www.youtube.com/watch?v=QImgyRave8c",
        "image": "images/kings_man_2.jpg",
        "acteurs": "Taron Egerton, Colin Firth, Julianne Moore",
        "genres": [
            "action"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "kings_man_3",
        "video": "https://www.youtube.com/watch?v=QMQ53iuCsp0",
        "image": "images/kings_man_3.jpg",
        "acteurs": "Ralph Fiennes, Harris Dickinson",
        "genres": [
            "action"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "kite",
        "video": "https://www.youtube.com/watch?v=B7_hddE3i4k&t=3s",
        "image": "images/kite.jpg",
        "acteurs": "India Eisley, Callan McAuliffe",
        "genres": [
            "action"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "knock_knock",
        "video": "https://www.youtube.com/watch?v=RxFWCjH_t6k&t=31s",
        "image": "images/knock_knock.jpg",
        "acteurs": "Keanu Reeves, Lorenza Izzo",
        "genres": [
            "thriller"
        ],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_soupe_aux_choux",
        "video": "https://www.youtube.com/watch?v=r_UZpfnK7ks",
        "image": "images/la_soupe_aux_choux.jpg",
        "acteurs": "Louis de Funès, Jacques Villeret",
        "genres": [],
        "annee": "1981",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_apprenti_père_Noel",
        "video": "https://www.youtube.com/watch?v=mHph8Eitu5U",
        "image": "images/l_apprenti_père_noel.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_apprenti_père_Noel_et_le_flocon_magique",
        "video": "https://www.youtube.com/watch?v=6AEvuThaklQ",
        "image": "images/l_apprenti_père_noel_et_le_flocon_magique.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "larme_fatale_1",
        "video": "https://www.youtube.com/watch?v=OeBVtCT6HW8",
        "image": "images/larme_fatale_1.jpg",
        "acteurs": "Mel Gibson, Danny Glover",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "1987",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "larme_fatale_2",
        "video": "https://www.youtube.com/watch?v=5AdW-ShY9T4",
        "image": "images/larme_fatale_2.jpg",
        "acteurs": "Mel Gibson, Danny Glover",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "1989",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "larme_fatale_3",
        "video": "https://www.youtube.com/watch?v=w0Y6L5Y9M3s&t=32s",
        "image": "images/larme_fatale_3.jpg",
        "acteurs": "Mel Gibson, Danny Glover",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "1992",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "larme_fatale_4",
        "video": "https://www.youtube.com/watch?v=Es4CYLavwuw&t=37s",
        "image": "images/larme_fatale_4.jpg",
        "acteurs": "Mel Gibson, Danny Glover",
        "genres": [
            "action",
            "comédie"
        ],
        "annee": "1998",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_echange",
        "video": "https://www.youtube.com/watch?v=l3nYub3gL6w&t=20s",
        "image": "images/l_echange.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "drame"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_evade_d_alcatraz",
        "video": "https://www.youtube.com/watch?v=VNSd9hDWWd4",
        "image": "images/l_evade_d_alcatraz.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "drame",
            "thriller"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_homme_des_hautes_plaines",
        "video": "https://www.youtube.com/watch?v=OjHFfhBFNWs",
        "image": "images/l_homme_des_hautes_plaines.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "western"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "lincroyable_hulk",
        "video": "https://www.youtube.com/watch?v=LCjTxK1B5Pg&t=38s",
        "image": "images/lincroyable_hulk.jpg",
        "acteurs": "Edward Norton, Liv Tyler",
        "genres": [
            "action",
            "science-fiction"
        ],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_inspecteur_harry",
        "video": "https://www.youtube.com/watch?v=Dl39nG83WDM&t=20s",
        "image": "images/l_inspecteur_harry.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l_inspecteur_ne_renonce_jamais",
        "video": "https://www.youtube.com/watch?v=NfK6T5yljkg&t=23s",
        "image": "images/l_inspecteur_ne_renonce_jamais.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_belle_au_bois_dormant",
        "video": "https://www.youtube.com/watch?v=gV-8k4b2eTY",
        "image": "images/la_belle_au_bois_dormant.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_belle_et_la_bête",
        "video": "https://www.youtube.com/watch?v=lXmvFs0LL58",
        "image": "images/la_belle_et_la_bête.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_boum_1",
        "video": "https://www.youtube.com/watch?v=uqKKiUSLZK8",
        "image": "images/la_boum_1.jpg",
        "acteurs": "Sophie Marceau, Claude Brasseur",
        "genres": [
            "comédie",
            "romance"
        ],
        "annee": "1980",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_boum_2",
        "video": "https://www.youtube.com/watch?v=NnHZuv7ITic&t=41s",
        "image": "images/la_boum_2.jpg",
        "acteurs": "Sophie Marceau, Claude Brasseur",
        "genres": [
            "comédie",
            "romance"
        ],
        "annee": "1982",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_derniere_cible",
        "video": "https://www.youtube.com/watch?v=9LYYp002Mbk&t=23s",
        "image": "images/la_derniere_cible.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_famille_belier",
        "video": "https://www.youtube.com/watch?v=tEgw97vpkDM&t=26s",
        "image": "images/la_famille_belier.jpg",
        "acteurs": "Louane Emera, Karin Viard",
        "genres": [
            "comédie",
            "musical"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "là_haut",
        "video": "https://www.youtube.com/watch?v=p-TdCD6DBfM",
        "image": "images/là_haut.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_ligne_verte",
        "video": "https://www.youtube.com/watch?v=mccs8Ql8m8o&t=32s",
        "image": "images/la_ligne_verte.jpg",
        "acteurs": "Tom Hanks, Michael Clarke Duncan",
        "genres": [
            "fantasy"
        ],
        "annee": "1999",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_mule",
        "video": "https://www.youtube.com/watch?v=bGgyUSO24BA",
        "image": "images/la_mule.jpg",
        "acteurs": "Clint Eastwood, Bradley Cooper",
        "genres": [
            "drame",
            "thriller"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_petite_sirene",
        "video": "https://www.youtube.com/watch?v=J5VvzJmiqJc",
        "image": "images/la_petite_sirene.jpg",
        "acteurs": "Jodi Benson, Christopher Daniel Barnes (voices)",
        "genres": [
            "famille",
            "fantastique"
        ],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_petite_sirene_animé",
        "video": "https://www.youtube.com/watch?v=363URFzzCgg",
        "image": "images/la_petite_sirene_animé.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_planete_des_singes_1",
        "video": "https://www.youtube.com/watch?v=Vn8GriIog1s&t=25s",
        "image": "images/la_planete_des_singes_1.jpg",
        "acteurs": "Mark Wahlberg, Tim Roth",
        "genres": [
            "science-fiction"
        ],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_planete_des_singes_2",
        "video": "https://www.youtube.com/watch?v=dPcwB7okdzU&t=30s",
        "image": "images/la_planete_des_singes_2.jpg",
        "acteurs": "Andy Serkis, Jason Clarke",
        "genres": [
            "science-fiction"
        ],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_planete_des_singes_3",
        "video": "https://www.youtube.com/watch?v=GyUI-Cr9lak&t=53s",
        "image": "images/la_planete_des_singes_3.jpg",
        "acteurs": "Andy Serkis, Woody Harrelson",
        "genres": [
            "science-fiction"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_planete_des_singes_4",
        "video": "https://www.youtube.com/watch?v=ttgameuObLM",
        "image": "images/la_planete_des_singes_4.jpg",
        "acteurs": "",
        "genres": [
            "science-fiction"
        ],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "la_reine_des_neiges",
        "video": "https://www.youtube.com/watch?v=uyP70r9PS6A",
        "image": "images/la_reine_des_neiges.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_reine_des_neiges_2",
        "video": "https://www.youtube.com/watch?v=XEWZw_5yIrs",
        "image": "images/la_reine_des_neiges_2.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_releve",
        "video": "https://www.youtube.com/watch?v=a_hDCwQORLQ",
        "image": "images/la_releve.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "la_sanction",
        "video": "https://www.youtube.com/watch?v=LWbM8aEbSR8",
        "image": "images/la_sanction.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "l'age_de_glace",
        "video": "https://www.youtube.com/watch?v=DWMgt-wM34Q",
        "image": "images/l'age_de_glace.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "largo_winch",
        "video": "https://www.youtube.com/watch?v=rnYZHu_YaQY&t=28s",
        "image": "images/largo_winch.jpg",
        "acteurs": "Tomer Sisley, Kristin Scott Thomas",
        "genres": [
            "action",
            "aventure"
        ],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_bon_la_brute_et_le_tuand",
        "video": "https://www.youtube.com/watch?v=WA1hCZFOPqs&t=28s",
        "image": "images/le_bon_la_brute_et_le_tuand.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [
            "western"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_comte_de_montecristo",
        "video": "https://www.youtube.com/watch?v=u0YnbsyvGS0",
        "image": "images/le_comte_de_montecristo.jpg",
        "acteurs": "Pierre Niney",
        "genres": [
            "aventure",
            "historique"
        ],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "le_crime",
        "video": "https://www.youtube.com/watch?v=FMlYxRCBSSM",
        "image": "images/le_crime.jpg",
        "acteurs": "Kenneth Branagh, Johnny Depp",
        "genres": [
            "drame"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_doudou",
        "video": "https://www.youtube.com/watch?v=P4_rE7qGXFE&t=30s",
        "image": "images/le_doudou.jpg",
        "acteurs": "Kad Merad, Malik Bentalha",
        "genres": [
            "comédie"
        ],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_drole_de_noel_de_scroodge",
        "video": "https://www.youtube.com/watch?v=PcNLFXSdO5A&t=47s",
        "image": "images/le_drole_de_noel_de_scroodge.jpg",
        "acteurs": "Jim Carrey, Gary Oldman (voices)",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_grand_bleu",
        "video": "https://www.youtube.com/watch?v=xGmVAPwWwSM",
        "image": "images/le_grand_bleu.jpg",
        "acteurs": "Jean-Marc Barr, Jean Reno",
        "genres": [],
        "annee": "1988",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_hobbit_1",
        "video": "https://www.youtube.com/watch?v=tiy7peMH3g8&t=35s",
        "image": "images/le_hobbit_1.jpg",
        "acteurs": "Martin Freeman, Ian McKellen",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_hobbit_2",
        "video": "https://www.youtube.com/watch?v=bvKLagxYhrc&t=28s",
        "image": "images/le_hobbit_2.jpg",
        "acteurs": "Martin Freeman, Benedict Cumberbatch",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_hobbit_3",
        "video": "https://www.youtube.com/watch?v=E5qN3zUF3Rw",
        "image": "images/le_hobbit_3.jpg",
        "acteurs": "Martin Freeman, Ian McKellen",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_jeu",
        "video": "https://www.youtube.com/watch?v=1fGdZehIGFE",
        "image": "images/le_jeu.jpg",
        "acteurs": "Bérénice Bejo, Suzanne Clément",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_labirynthe",
        "video": "https://www.youtube.com/watch?v=LyPiCH_4Al4",
        "image": "images/le_labirynthe.jpg",
        "acteurs": "Dylan O'Brien, Kaya Scodelario",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_labirynthe_2",
        "video": "https://www.youtube.com/watch?v=K7jyL2cS6dc",
        "image": "images/le_labirynthe_2.jpg",
        "acteurs": "Dylan O'Brien, Kaya Scodelario",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_labirynthe_3",
        "video": "https://www.youtube.com/watch?v=HuXEKU0PTzw",
        "image": "images/le_labirynthe_3.jpg",
        "acteurs": "Dylan O'Brien, Kaya Scodelario",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_maitre_de_guerre",
        "video": "https://www.youtube.com/watch?v=8GcZkgg2URs&t=37s",
        "image": "images/le_maitre_de_guerre.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_mans_66",
        "video": "https://www.youtube.com/watch?v=UG3Z-MIDdGs",
        "image": "images/le_mans_66.jpg",
        "acteurs": "Matt Damon, Christian Bale",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_monde_de_dory",
        "video": "https://www.youtube.com/watch?v=yE3VBMHFQQs",
        "image": "images/le_monde_de_dory.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_monde_de_nemo",
        "video": "https://www.youtube.com/watch?v=XtAnXfDIBqY",
        "image": "images/le_monde_de_nemo.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_monde_fantastique_doz",
        "video": "https://www.youtube.com/watch?v=2Hsq8qq0jdo&t=45s",
        "image": "images/le_monde_fantastique_doz.jpg",
        "acteurs": "James Franco, Mila Kunis",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_père_noel_est_une_ordure",
        "video": "https://www.youtube.com/watch?v=cm8Bk3TbSnQ",
        "image": "images/le_père_noel_est_une_ordure.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_prestige",
        "video": "https://www.youtube.com/watch?v=2zVbrV1ehnU",
        "image": "images/le_prestige.jpg",
        "acteurs": "Christian Bale, Hugh Jackman",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_retour_de_linspecteur_harry",
        "video": "https://www.youtube.com/watch?v=snIfTY9VeCI",
        "image": "images/le_retour_de_linspecteur_harry.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_roi_lion",
        "video": "https://www.youtube.com/watch?v=-KfIYw-D4Iw",
        "image": "images/le_roi_lion.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_roi_soleil",
        "video": "https://www.youtube.com/watch?v=17CFKRwNd-0",
        "image": "images/le_roi_soleil.jpg",
        "acteurs": "",
        "genres": [
            "musical"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_seigneur_des_anneaux_1",
        "video": "https://www.youtube.com/watch?v=nalLU8i4zgs",
        "image": "images/le_seigneur_des_anneaux_1.jpg",
        "acteurs": "Elijah Wood, Ian McKellen",
        "genres": [],
        "annee": "2001",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_seigneur_des_anneaux_2",
        "video": "https://www.youtube.com/watch?v=c9blKqmyeV4",
        "image": "images/le_seigneur_des_anneaux_2.jpg",
        "acteurs": "Elijah Wood, Ian McKellen",
        "genres": [],
        "annee": "2002",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_seigneur_des_anneaux_3",
        "video": "https://www.youtube.com/watch?v=RCuDRcK0BBM",
        "image": "images/le_seigneur_des_anneaux_3.jpg",
        "acteurs": "Elijah Wood, Ian McKellen",
        "genres": [],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_transporteur_heritage",
        "video": "https://www.youtube.com/watch?v=DRuyPTWsydY&t=30s",
        "image": "images/le_transporteur_heritage.jpg",
        "acteurs": "Ed Skrein, Ray Stevenson",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "le_voyage_d_arlo",
        "video": "https://www.youtube.com/watch?v=sa-_HfLs4X8",
        "image": "images/le_voyage_d_arlo.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "leon",
        "video": "https://www.youtube.com/watch?v=M242Bp0PcwE",
        "image": "images/leon.jpg",
        "acteurs": "Jean Reno, Natalie Portman",
        "genres": [],
        "annee": "1994",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_10_commandements",
        "video": "https://www.youtube.com/watch?v=f1bJUZALrDM",
        "image": "images/les_10_commandements.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_animaux_fantastiques",
        "video": "https://www.youtube.com/watch?v=jC8xuFcMq20",
        "image": "images/les_animaux_fantastiques.jpg",
        "acteurs": "Eddie Redmayne, Katherine Waterston",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_animaux_fantastiques_2",
        "video": "https://www.youtube.com/watch?v=Dnb6eAfSHtw&t=47s",
        "image": "images/les_animaux_fantastiques_2.jpg",
        "acteurs": "Eddie Redmayne, Johnny Depp",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_animaux_fantastiques_3",
        "video": "https://www.youtube.com/watch?v=k39acJCDSKY",
        "image": "images/les_animaux_fantastiques_3.jpg",
        "acteurs": "Eddie Redmayne, Jude Law",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_aventures_de_tintin_le_secret_de_la_licorne",
        "video": "https://www.youtube.com/watch?v=koobYArp7fc",
        "image": "images/les_aventures_de_tintin_le_secret_de_la_licorne.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_bronzés_font_du_ski",
        "video": "https://www.youtube.com/watch?v=xgQH75teJGk",
        "image": "images/les_bronzés_font_du_ski.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_chevaliers_du_zodiac",
        "video": "https://www.youtube.com/watch?v=nEWL1GQ5Pks",
        "image": "images/les_chevaliers_du_zodiac.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_eternelles",
        "video": "https://www.youtube.com/watch?v=nHcubNwuKFA&t=31s",
        "image": "images/les_eternelles.jpg",
        "acteurs": "Gemma Chan, Richard Madden",
        "genres": [],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_gardiens_de_la_galaxie_1",
        "video": "https://www.youtube.com/watch?v=HbB1LC_QyK0&t=24s",
        "image": "images/les_gardiens_de_la_galaxie_1.jpg",
        "acteurs": "Chris Pratt, Zoe Saldana",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_gardiens_de_la_galaxie_2",
        "video": "https://www.youtube.com/watch?v=e2LkglavLRs&t=37s",
        "image": "images/les_gardiens_de_la_galaxie_2.jpg",
        "acteurs": "Chris Pratt, Zoe Saldana",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_gardiens_de_la_galaxie_3",
        "video": "https://www.youtube.com/watch?v=0RsvBSFm938",
        "image": "images/les_gardiens_de_la_galaxie_3.jpg",
        "acteurs": "Chris Pratt, Zoe Saldana",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_nouveaux_héros",
        "video": "https://www.youtube.com/watch?v=bCqe_Pokr-k",
        "image": "images/les_nouveaux_héros.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_pleins_pouvoirs",
        "video": "https://www.youtube.com/watch?v=J6786udAomM",
        "image": "images/les_pleins_pouvoirs.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_schtroumphs",
        "video": "https://www.youtube.com/watch?v=3GclcezQvFU&t=31s",
        "image": "images/les_schtroumphs.jpg",
        "acteurs": "Neil Patrick Harris, Jayma Mays (live-action)",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_tuche_1",
        "video": "https://www.youtube.com/watch?v=ndCzT6dyOqk&t=36s",
        "image": "images/les_tuche_1.jpg",
        "acteurs": "Jean-Paul Rouve, Isabelle Nanty",
        "genres": [
            "comédie"
        ],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_tuche_2",
        "video": "https://www.youtube.com/watch?v=pKbox8S-se4&t=31s",
        "image": "images/les_tuche_2.jpg",
        "acteurs": "Jean-Paul Rouve, Isabelle Nanty",
        "genres": [
            "comédie"
        ],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_tuche_3",
        "video": "https://www.youtube.com/watch?v=WqSPFOLA9sE&t=26s",
        "image": "images/les_tuche_3.jpg",
        "acteurs": "Jean-Paul Rouve, Isabelle Nanty",
        "genres": [
            "comédie"
        ],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "les_tuche_4",
        "video": "https://www.youtube.com/watch?v=vxWSTApFmR4",
        "image": "images/les_tuche_4.jpg",
        "acteurs": "Jean-Paul Rouve, Isabelle Nanty",
        "genres": [
            "comédie"
        ],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "lettres_d_iwo_jima",
        "video": "https://www.youtube.com/watch?v=lXV1Xi_xyck&t=19s",
        "image": "images/lettres_d_iwo_jima.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "logan",
        "video": "https://www.youtube.com/watch?v=i-iqiI5uikE",
        "image": "images/logan.jpg",
        "acteurs": "Hugh Jackman, Patrick Stewart",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mad_max_1",
        "video": "https://www.youtube.com/watch?v=W-nRV83ixeg",
        "image": "images/mad_max_1.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mad_max_2",
        "video": "https://www.youtube.com/watch?v=m5hyLg7yZtI",
        "image": "images/mad_max_2.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mad_max_3",
        "video": "https://www.youtube.com/watch?v=4588wWWf5WU",
        "image": "images/mad_max_3.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mad_max_4",
        "video": "https://www.youtube.com/watch?v=3rk7lkEUiuY",
        "image": "images/mad_max_4.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mad_max_5",
        "video": "https://www.youtube.com/watch?v=l4jyaC7GR0A",
        "image": "images/mad_max_5.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "madagascar",
        "video": "https://www.youtube.com/watch?v=BaK_dCpAidE",
        "image": "images/madagascar.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "magnum_force",
        "video": "https://www.youtube.com/watch?v=wtLoFPIACVw&t=27s",
        "image": "images/magnum_force.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "malefique_1",
        "video": "https://www.youtube.com/watch?v=8yBDfD88W3U&t=48s",
        "image": "images/malefique_1.jpg",
        "acteurs": "Angelina Jolie, Elle Fanning",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "malefique_2",
        "video": "https://www.youtube.com/watch?v=R2kmlH2VkME&t=28s",
        "image": "images/malefique_2.jpg",
        "acteurs": "Angelina Jolie, Elle Fanning",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "man_of_steel",
        "video": "https://www.youtube.com/watch?v=Xw4VeR7tCxU&t=35s",
        "image": "images/man_of_steel.jpg",
        "acteurs": "Henry Cavill, Amy Adams",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "matrix_1",
        "video": "https://www.youtube.com/watch?v=8xx91zoASLY&t=27s",
        "image": "images/matrix_1.jpg",
        "acteurs": "Keanu Reeves, Laurence Fishburne",
        "genres": [],
        "annee": "1999",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "matrix_2",
        "video": "https://www.youtube.com/watch?v=0ha2XYVC7_s&t=26s",
        "image": "images/matrix_2.jpg",
        "acteurs": "Keanu Reeves, Laurence Fishburne",
        "genres": [],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "matrix_3",
        "video": "https://www.youtube.com/watch?v=sK51m1tj_bE&t=31s",
        "image": "images/matrix_3.jpg",
        "acteurs": "Keanu Reeves, Laurence Fishburne",
        "genres": [],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "matrix_4",
        "video": "https://www.youtube.com/watch?v=Tj63xbpKnqo&t=26s",
        "image": "images/matrix_4.jpg",
        "acteurs": "Keanu Reeves, Carrie-Anne Moss",
        "genres": [],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "memoires_de_nos_peres",
        "video": "https://www.youtube.com/watch?v=Kez8jsb-s2Q&t=22s",
        "image": "images/memoires_de_nos_peres.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "men_in_black_1",
        "video": "https://www.youtube.com/watch?v=2wVy3QmCyJU&t=40s",
        "image": "images/men_in_black_1.jpg",
        "acteurs": "Will Smith, Tommy Lee Jones",
        "genres": [],
        "annee": "1997",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "men_in_black_2",
        "video": "https://www.youtube.com/watch?v=HuQmpzpAhHo&t=34s",
        "image": "images/men_in_black_2.jpg",
        "acteurs": "Will Smith, Tommy Lee Jones",
        "genres": [],
        "annee": "2002",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "men_in_black_3",
        "video": "https://www.youtube.com/watch?v=Ep6NGpX66oU&t=38s",
        "image": "images/men_in_black_3.jpg",
        "acteurs": "Will Smith, Josh Brolin",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "men_in_black_international",
        "video": "https://www.youtube.com/watch?v=JHQq7eOOxdc&t=39s",
        "image": "images/men_in_black_international.jpg",
        "acteurs": "Chris Hemsworth, Tessa Thompson",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "merlin_l'enchanteur",
        "video": "https://www.youtube.com/watch?v=Y9TrjKkqGOs",
        "image": "images/merlin_l'enchanteur.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "midnight_express",
        "video": "https://www.youtube.com/watch?v=OFVsGmNGGys&t=7s",
        "image": "images/midnight_express.jpg",
        "acteurs": "Brad Davis, John Hurt",
        "genres": [],
        "annee": "1978",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "million_dollard_baby",
        "video": "https://www.youtube.com/watch?v=krz9U4ZrGog&t=20s",
        "image": "images/million_dollard_baby.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "minority_report",
        "video": "https://www.youtube.com/watch?v=V0Ay_CB9quU",
        "image": "images/minority_report.jpg",
        "acteurs": "Tom Cruise, Colin Farrell",
        "genres": [],
        "annee": "2002",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_1",
        "video": "https://www.youtube.com/watch?v=EvOqiaqfewU&t=53s",
        "image": "images/mission_impossible_1.jpg",
        "acteurs": "Tom Cruise, Jon Voight",
        "genres": [],
        "annee": "1996",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_2",
        "video": "https://www.youtube.com/watch?v=aHjhMW1WvWk&t=29s",
        "image": "images/mission_impossible_2.jpg",
        "acteurs": "Tom Cruise, Dougray Scott",
        "genres": [],
        "annee": "2000",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_3",
        "video": "https://www.youtube.com/watch?v=Lb8mK7w_ig4&t=2s",
        "image": "images/mission_impossible_3.jpg",
        "acteurs": "Tom Cruise, Philip Seymour Hoffman",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_4",
        "video": "https://www.youtube.com/watch?v=r5Pw_ntvbEo&t=5s",
        "image": "images/mission_impossible_4.jpg",
        "acteurs": "Tom Cruise, Jeremy Renner",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_5",
        "video": "https://www.youtube.com/watch?v=wX8fhP-fsPg&t=20s",
        "image": "images/mission_impossible_5.jpg",
        "acteurs": "Tom Cruise, Rebecca Ferguson",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_6",
        "video": "https://www.youtube.com/watch?v=n4qbj1lFEpU&t=4s",
        "image": "images/mission_impossible_6.jpg",
        "acteurs": "Tom Cruise, Henry Cavill",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_impossible_dead_reckoning_part_1",
        "video": "https://www.youtube.com/watch?v=kz34RaRBczI",
        "image": "images/mission_impossible_dead_reckoning_part_1.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mission_noel_les_aventures_de_la_famille_Noel",
        "video": "https://www.youtube.com/watch?v=F-eAFVgvd5Y",
        "image": "images/mission_noel_les_aventures_de_la_famille_noel.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "moonfall",
        "video": "https://www.youtube.com/watch?v=z3LNxIZI1go&t=32s",
        "image": "images/moonfall.jpg",
        "acteurs": "Halle Berry, Patrick Wilson",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "morbius",
        "video": "https://www.youtube.com/watch?v=6pGgkOcIyQA",
        "image": "images/morbius.jpg",
        "acteurs": "Jared Leto, Matt Smith",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mozart_l_opéra_rock",
        "video": "https://www.youtube.com/watch?v=aS1SGkWoHec",
        "image": "images/mozart_l_opéra_rock.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "mystic_river",
        "video": "https://www.youtube.com/watch?v=yniM_7MzOgo&t=20s",
        "image": "images/mystic_river.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "nos_eoiles_contraires",
        "video": "https://www.youtube.com/watch?v=X6WVLSdigCk&t=6s",
        "image": "images/nos_eoiles_contraires.jpg",
        "acteurs": "Shailene Woodley, Ansel Elgort",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "notre_dame_de_paris",
        "video": "https://www.youtube.com/watch?v=dSa0Z0Yd0J0",
        "image": "images/notre_dame_de_paris.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "nuit_blanche_a_seattle",
        "video": "https://www.youtube.com/watch?v=XACtsPeHvxA",
        "image": "images/nuit_blanche_a_seattle.jpg",
        "acteurs": "Tom Hanks, Meg Ryan",
        "genres": [],
        "annee": "1993",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "oblivion",
        "video": "https://www.youtube.com/watch?v=XH1su3FVEA4&t=30s",
        "image": "images/oblivion.jpg",
        "acteurs": "Tom Cruise, Morgan Freeman",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "oppenheimer",
        "video": "https://www.youtube.com/watch?v=CoXtvSRpHgM",
        "image": "images/oppenheimer.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pale_rider",
        "video": "https://www.youtube.com/watch?v=bS_cnoSjucc",
        "image": "images/pale_rider.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pattaya",
        "video": "https://www.youtube.com/watch?v=cICeyHsS16Y",
        "image": "images/pattaya.jpg",
        "acteurs": "Franck Gastambide, Malik Bentalha",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "peppermint",
        "video": "https://www.youtube.com/watch?v=EE1wg5HHwK0&t=1s",
        "image": "images/peppermint.jpg",
        "acteurs": "Jennifer Garner, John Gallagher Jr.",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "percy_jackson",
        "video": "https://www.youtube.com/watch?v=n5eVOZ6aGkM",
        "image": "images/percy_jackson.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "personnel_et_confidentiel",
        "video": "https://www.youtube.com/watch?v=eQ8gzALE4nI",
        "image": "images/personnel_et_confidentiel.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "peter_et_elliot_le_dragon",
        "video": "https://www.youtube.com/watch?v=MEXN66uRNe8&t=33s",
        "image": "images/peter_et_elliot_le_dragon.jpg",
        "acteurs": "Oakes Fegley, Bryce Dallas Howard",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "peter_pan",
        "video": "https://www.youtube.com/watch?v=mZs_n92dLfY",
        "image": "images/peter_pan.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "philadelphia",
        "video": "https://www.youtube.com/watch?v=rYfl8rmZBKc&t=9s",
        "image": "images/philadelphia.jpg",
        "acteurs": "Tom Hanks, Denzel Washington",
        "genres": [],
        "annee": "1993",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pinocchio",
        "video": "https://www.youtube.com/watch?v=OJ_Z-XEfv1w",
        "image": "images/pinocchio.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pirate_des_caraibes_1",
        "video": "https://www.youtube.com/watch?v=WiZC7l0ovvk",
        "image": "images/pirate_des_caraibes_1.jpg",
        "acteurs": "Johnny Depp, Orlando Bloom",
        "genres": [],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pirate_des_caraibes_2",
        "video": "https://www.youtube.com/watch?v=ZJwdTWd8o_w",
        "image": "images/pirate_des_caraibes_2.jpg",
        "acteurs": "Johnny Depp, Orlando Bloom",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pirate_des_caraibes_3",
        "video": "https://www.youtube.com/watch?v=rF6k1bXAVIg",
        "image": "images/pirate_des_caraibes_3.jpg",
        "acteurs": "Johnny Depp, Orlando Bloom",
        "genres": [],
        "annee": "2007",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pirate_des_caraibes_4",
        "video": "https://www.youtube.com/watch?v=Kcqf4RqBaUI",
        "image": "images/pirate_des_caraibes_4.jpg",
        "acteurs": "Johnny Depp, Penélope Cruz",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pirate_des_caraibes_5",
        "video": "https://www.youtube.com/watch?v=OTEGxxMTnPU",
        "image": "images/pirate_des_caraibes_5.jpg",
        "acteurs": "Johnny Depp, Javier Bardem",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "plane",
        "video": "https://www.youtube.com/watch?v=Ky-K-DBCkjQ",
        "image": "images/plane.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "plane_2",
        "video": "https://www.youtube.com/watch?v=nQOafb9vwSU",
        "image": "images/plane_2.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "point_break",
        "video": "https://www.youtube.com/watch?v=5L7zkTFUxjo&t=35s",
        "image": "images/point_break.jpg",
        "acteurs": "Patrick Swayze, Keanu Reeves",
        "genres": [],
        "annee": "1991",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "poseidon",
        "video": "https://www.youtube.com/watch?v=TtZGfLoe1lA&t=31s",
        "image": "images/poseidon.jpg",
        "acteurs": "Josh Lucas, Kurt Russell",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pour_une_poignee_de_dollards",
        "video": "https://www.youtube.com/watch?v=aBmcIKDW5D8",
        "image": "images/pour_une_poignee_de_dollards.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "pretty_woman",
        "video": "https://www.youtube.com/watch?v=eBl8jzO6KHg",
        "image": "images/pretty_woman.jpg",
        "acteurs": "Richard Gere, Julia Roberts",
        "genres": [],
        "annee": "1990",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "quand_les_aigles_attaques",
        "video": "https://www.youtube.com/watch?v=kqwUCHZlRmU&t=26s",
        "image": "images/quand_les_aigles_attaques.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "radin",
        "video": "https://www.youtube.com/watch?v=8hmQFU2hpJM&t=34s",
        "image": "images/radin.jpg",
        "acteurs": "Dany Boon, Laurence Arné",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "rain_man",
        "video": "https://www.youtube.com/watch?v=G2q2IVHu8p4&t=39s",
        "image": "images/rain_man.jpg",
        "acteurs": "Dustin Hoffman, Tom Cruise",
        "genres": [],
        "annee": "1988",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "rambo_1",
        "video": "https://www.youtube.com/watch?v=WY9Bemk9oF0",
        "image": "images/rambo_1.jpg",
        "acteurs": "Sylvester Stalone",
        "genres": [
            "guerre",
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "rambo_2",
        "video": "https://www.youtube.com/watch?v=uJ_76yL0hMg",
        "image": "images/rambo_2.jpg",
        "acteurs": "Sylvester Stalone",
        "genres": [
            "guerre",
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "rambo_3",
        "video": "https://www.youtube.com/watch?v=PK--aOvYcJ4",
        "image": "images/rambo_3.jpg",
        "acteurs": "Sylvester Stalone",
        "genres": [
            "guerre",
            "action"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "rampage",
        "video": "https://www.youtube.com/watch?v=8ckz-mk9-Tg",
        "image": "images/rampage.jpg",
        "acteurs": "Dwayne Johnson, Naomie Harris",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "ready_player",
        "video": "https://www.youtube.com/watch?v=oYGkAMHCOC4&t=42s",
        "image": "images/ready_player.jpg",
        "acteurs": "Tye Sheridan, Olivia Cooke",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "remember_me",
        "video": "https://www.youtube.com/watch?v=xi5I1JX0UIY&t=32s",
        "image": "images/remember_me.jpg",
        "acteurs": "Robert Pattinson, Emilie de Ravin",
        "genres": [],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "replicas",
        "video": "https://www.youtube.com/watch?v=CQopGH4qMEI&t=7s",
        "image": "images/replicas.jpg",
        "acteurs": "Keanu Reeves, Alice Eve",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "resident_evil_1",
        "video": "https://www.youtube.com/watch?v=amWEDXmkoXo",
        "image": "images/resident_evil_1.jpg",
        "acteurs": "Milla Jovovich, Michelle Rodriguez",
        "genres": [],
        "annee": "2002",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "resident_evil_2",
        "video": "https://www.youtube.com/watch?v=axd-h6a0Wgg",
        "image": "images/resident_evil_2.jpg",
        "acteurs": "Milla Jovovich, Sienna Guillory",
        "genres": [],
        "annee": "2004",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "resident_evil_3",
        "video": "https://www.youtube.com/watch?v=lb52BesCCa8",
        "image": "images/resident_evil_3.jpg",
        "acteurs": "Milla Jovovich, Oded Fehr",
        "genres": [],
        "annee": "2007",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "resident_evil_4",
        "video": "https://www.youtube.com/watch?v=eaKOg7w8meQ",
        "image": "images/resident_evil_4.jpg",
        "acteurs": "Milla Jovovich, Ali Larter",
        "genres": [],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "resident_evil_5",
        "video": "https://www.youtube.com/watch?v=65g5-p3CQcM",
        "image": "images/resident_evil_5.jpg",
        "acteurs": "Milla Jovovich, Sienna Guillory",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "resident_evil_6",
        "video": "https://www.youtube.com/watch?v=xHohwszlCEw",
        "image": "images/resident_evil_6.jpg",
        "acteurs": "Milla Jovovich, Iain Glen",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "retour_vers_le_futur",
        "video": "https://www.youtube.com/watch?v=cU5BREZ9ke0",
        "image": "images/retour_vers_le_futur.jpg",
        "acteurs": "Michael J. Fox, Christopher Lloyd",
        "genres": [],
        "annee": "1985",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "retour_vers_le_futur_2",
        "video": "https://www.youtube.com/watch?v=u72lyJirxGQ&t=14s",
        "image": "images/retour_vers_le_futur_2.jpg",
        "acteurs": "Michael J. Fox, Christopher Lloyd",
        "genres": [],
        "annee": "1989",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "retour_vers_le_futur_3",
        "video": "https://www.youtube.com/watch?v=Ugth9lQsKb0",
        "image": "images/retour_vers_le_futur_3.jpg",
        "acteurs": "Michael J. Fox, Christopher Lloyd",
        "genres": [],
        "annee": "1990",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "robin_des_bois",
        "video": "https://www.youtube.com/watch?v=sUfxQgRiwow",
        "image": "images/robin_des_bois.jpg",
        "acteurs": "",
        "genres": [
            "musical"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "rogue_on_star_wars",
        "video": "https://www.youtube.com/watch?v=ox6Dsbvp7ng&t=35s",
        "image": "images/rogue_on_star_wars.jpg",
        "acteurs": "Felicity Jones, Diego Luna",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "san_andreas",
        "video": "https://www.youtube.com/watch?v=HGpwaIf3ZKk&t=40s",
        "image": "images/san_andreas.jpg",
        "acteurs": "Dwayne Johnson, Carla Gugino",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_1",
        "video": "https://www.youtube.com/watch?v=8Swsh-up3iM&t=54s",
        "image": "images/saw_1.jpg",
        "acteurs": "Cary Elwes, Leigh Whannell",
        "genres": [],
        "annee": "2004",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_10",
        "video": "https://www.youtube.com/watch?v=-8nu5Z3069Y",
        "image": "images/saw_10.jpg",
        "acteurs": "Tobin Bell",
        "genres": [],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "saw_2",
        "video": "https://www.youtube.com/watch?v=RzsCFIbUoVQ&t=21s",
        "image": "images/saw_2.jpg",
        "acteurs": "Donnie Wahlberg, Tobin Bell",
        "genres": [],
        "annee": "2005",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_3",
        "video": "https://www.youtube.com/watch?v=91B113M4usE",
        "image": "images/saw_3.jpg",
        "acteurs": "Tobin Bell, Shawnee Smith",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_4",
        "video": "https://www.youtube.com/watch?v=Qe8ZSX2NW0A",
        "image": "images/saw_4.jpg",
        "acteurs": "Tobin Bell, Costas Mandylor",
        "genres": [],
        "annee": "2007",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_5",
        "video": "https://www.youtube.com/watch?v=3MiXFmlVPOY&t=44s",
        "image": "images/saw_5.jpg",
        "acteurs": "Tobin Bell, Costas Mandylor",
        "genres": [],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_6",
        "video": "https://www.youtube.com/watch?v=4rv9dq2IQ-I",
        "image": "images/saw_6.jpg",
        "acteurs": "Tobin Bell, Costas Mandylor",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_7",
        "video": "https://www.youtube.com/watch?v=oqE1tTFClh4",
        "image": "images/saw_7.jpg",
        "acteurs": "Tobin Bell, Costas Mandylor",
        "genres": [],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "saw_8",
        "video": "https://www.youtube.com/watch?v=QxiztUnTivE&t=39s",
        "image": "images/saw_8.jpg",
        "acteurs": "Tobin Bell, Costas Mandylor",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "scream",
        "video": "https://www.youtube.com/watch?v=QCbLIEE0WoE",
        "image": "images/scream.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "shang_chi",
        "video": "https://www.youtube.com/watch?v=PD3rUCBFDlI&t=37s",
        "image": "images/shang_chi.jpg",
        "acteurs": "Simu Liu, Awkwafina",
        "genres": [],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "shazam",
        "video": "https://www.youtube.com/watch?v=KThUY2k_yW4",
        "image": "images/shazam.jpg",
        "acteurs": "Zachary Levi, Asher Angel",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "shazam_2",
        "video": "https://www.youtube.com/watch?v=VM5Hz-csjt8&t=4s",
        "image": "images/shazam_2.jpg",
        "acteurs": "Zachary Levi, Helen Mirren",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "shrek",
        "video": "https://www.youtube.com/watch?v=08dotHAQ-6M",
        "image": "images/shrek.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sinister",
        "video": "https://www.youtube.com/watch?v=4sfzhzRAceE",
        "image": "images/sinister.jpg",
        "acteurs": "Ethan Hawke, Juliet Rylance",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sinister_2",
        "video": "https://www.youtube.com/watch?v=DAVMVdX9AIE&t=33s",
        "image": "images/sinister_2.jpg",
        "acteurs": "James Ransone, Shannyn Sossamon",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sissi_l_impératrice",
        "video": "https://www.youtube.com/watch?v=oBQtYm7JYrg",
        "image": "images/sissi_l_impératrice.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sixieme_sens",
        "video": "https://www.youtube.com/watch?v=HEd92ksuHNo",
        "image": "images/sixieme_sens.jpg",
        "acteurs": "Bruce Willis, Haley Joel Osment",
        "genres": [],
        "annee": "1999",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "skyscraper",
        "video": "https://www.youtube.com/watch?v=clKMwavvv6o",
        "image": "images/skyscraper.jpg",
        "acteurs": "Dwayne Johnson, Neve Campbell",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sonic",
        "video": "https://www.youtube.com/watch?v=NCZTYdAP6w0",
        "image": "images/sonic.jpg",
        "acteurs": "Ben Schwartz, James Marsden (voice/live-action)",
        "genres": [],
        "annee": "2020",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sonic_2",
        "video": "https://www.youtube.com/watch?v=SqH3-sCkZQw",
        "image": "images/sonic_2.jpg",
        "acteurs": "Ben Schwartz, James Marsden (voice/live-action)",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant, bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "space_cowboys",
        "video": "https://www.youtube.com/watch?v=wou34lVVUac&t=29s",
        "image": "images/space_cowboys.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "spider_man_far_from_home",
        "video": "https://www.youtube.com/watch?v=FguIk-SEkWI&t=34s",
        "image": "images/spider_man_far_from_home.jpg",
        "acteurs": "Tom Holland, Zendaya",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "spider_man_homecoming",
        "video": "https://www.youtube.com/watch?v=Y8ErdqD5YPc",
        "image": "images/spider_man_homecoming.jpg",
        "acteurs": "Tom Holland, Michael Keaton",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "spider_man_no_way_home",
        "video": "https://www.youtube.com/watch?v=7w_w10HVa54",
        "image": "images/spider_man_no_way_home.jpg",
        "acteurs": "Tom Holland, Zendaya",
        "genres": [],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "Spider_Man",
        "video": "https://www.youtube.com/watch?v=ea6iiJs9BeI",
        "image": "images/spider_man.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "spiderman_2",
        "video": "https://www.youtube.com/watch?v=sckzK6kXBQA",
        "image": "images/spiderman_2.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "spiderman_3",
        "video": "https://www.youtube.com/watch?v=tn2V4EWJeOA",
        "image": "images/spiderman_3.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_1",
        "video": "https://www.youtube.com/watch?v=0q-Q99DtNkw",
        "image": "images/star_wars_1.jpg",
        "acteurs": "Liam Neeson, Ewan McGregor, Natalie Portman",
        "genres": [],
        "annee": "1999",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_2",
        "video": "https://www.youtube.com/watch?v=1D7DUNCHXkg",
        "image": "images/star_wars_2.jpg",
        "acteurs": "Ewan McGregor, Natalie Portman, Hayden Christensen",
        "genres": [],
        "annee": "2002",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_3",
        "video": "https://www.youtube.com/watch?v=t1qtvKYwTV0",
        "image": "images/star_wars_3.jpg",
        "acteurs": "Ewan McGregor, Hayden Christensen, Natalie Portman",
        "genres": [],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_4",
        "video": "https://www.youtube.com/watch?v=PNyht4iTMX8",
        "image": "images/star_wars_4.jpg",
        "acteurs": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "genres": [],
        "annee": "1977",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_5",
        "video": "https://www.youtube.com/watch?v=_y-xlGOuVaE",
        "image": "images/star_wars_5.jpg",
        "acteurs": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "genres": [],
        "annee": "1980",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_6",
        "video": "https://www.youtube.com/watch?v=5QSEJx3R968",
        "image": "images/star_wars_6.jpg",
        "acteurs": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "genres": [],
        "annee": "1983",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_7",
        "video": "https://www.youtube.com/watch?v=mH9Ygfs5avo&t=40s",
        "image": "images/star_wars_7.jpg",
        "acteurs": "Daisy Ridley, John Boyega, Harrison Ford, Carrie Fisher",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_8",
        "video": "https://www.youtube.com/watch?v=wY708Ky2SG8",
        "image": "images/star_wars_8.jpg",
        "acteurs": "Daisy Ridley, John Boyega, Harrison Ford, Carrie Fisher",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "star_wars_9",
        "video": "https://www.youtube.com/watch?v=pHgwf2eMFnA&t=41s",
        "image": "images/star_wars_9.jpg",
        "acteurs": "Daisy Ridley, Adam Driver",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "suicide_squad",
        "video": "https://www.youtube.com/watch?v=XfboDbU3xnA",
        "image": "images/suicide_squad.jpg",
        "acteurs": "Will Smith, Margot Robbie",
        "genres": [],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "super_héros_malgrès_lui",
        "video": "https://www.youtube.com/watch?v=y6LXJnItN1U",
        "image": "images/super_héros_malgrès_lui.jpg",
        "acteurs": "Philippe Lacheau, Élodie Fontan,Tarek Boudali",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "super_mario",
        "video": "https://www.youtube.com/watch?v=iwst-UZn3wM",
        "image": "images/super_mario.jpg",
        "acteurs": "Bob Hoskins, John Leguizamo",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "sur_la_route_de_madison",
        "video": "https://www.youtube.com/watch?v=mirWUoFE1OY&t=39s",
        "image": "images/sur_la_route_de_madison.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "taken_1",
        "video": "https://www.youtube.com/watch?v=UX_71dbzJIw&t=22s",
        "image": "images/taken_1.jpg",
        "acteurs": "Liam Neeson, Maggie Grace",
        "genres": [],
        "annee": "2008",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "taken_2",
        "video": "https://www.youtube.com/watch?v=G_U2ZpXjpeg&t=26s",
        "image": "images/taken_2.jpg",
        "acteurs": "Liam Neeson, Maggie Grace",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "taken_3",
        "video": "https://www.youtube.com/watch?v=nSInrKvxIdI&t=42s",
        "image": "images/taken_3.jpg",
        "acteurs": "Liam Neeson, Forest Whitaker",
        "genres": [],
        "annee": "2015",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "tenet",
        "video": "https://www.youtube.com/watch?v=6UG5LJQNjts",
        "image": "images/tenet.jpg",
        "acteurs": "John David Washington, Robert Pattinson",
        "genres": [],
        "annee": "2020",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_batman",
        "video": "https://www.youtube.com/watch?v=hGQo1axtj60&t=34s",
        "image": "images/the_batman.jpg",
        "acteurs": "Robert Pattinson, Zoë Kravitz",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_doors",
        "video": "https://www.youtube.com/watch?v=z5X9rhbDtl4&t=33s",
        "image": "images/the_doors.jpg",
        "acteurs": "Val Kilmer, Meg Ryan",
        "genres": [],
        "annee": "1991",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_fall_guy",
        "video": "https://www.youtube.com/watch?v=ilU15hwe3-0",
        "image": "images/the_fall_guy.jpg",
        "acteurs": "Ryan Gosling, Emily Blunt",
        "genres": [],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "the_flash",
        "video": "https://www.youtube.com/watch?v=mUMlQZfjK1c",
        "image": "images/the_flash.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_island",
        "video": "https://www.youtube.com/watch?v=EiBZakZa0TY&t=36s",
        "image": "images/the_island.jpg",
        "acteurs": "Ewan McGregor, Scarlett Johansson",
        "genres": [],
        "annee": "2005",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_marvels",
        "video": "https://www.youtube.com/watch?v=9z9_bfhpLzU",
        "image": "images/the_marvels.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_suicide_squad",
        "video": "https://www.youtube.com/watch?v=lu4P7YmGgiE",
        "image": "images/the_suicide_squad.jpg",
        "acteurs": "Margot Robbie, Idris Elba",
        "genres": [],
        "annee": "2021",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "the_walking_dead_saisons_1_a_7_",
        "video": "https://www.youtube.com/watch?v=AbtiqJGhWyY&t=13s",
        "image": "images/the_walking_dead_saisons_1_a_7_.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "thor_1",
        "video": "https://www.youtube.com/watch?v=pzT3yeV9lT4&t=35s",
        "image": "images/thor_1.jpg",
        "acteurs": "Chris Hemsworth, Natalie Portman",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "thor_le_monde_des_tenebres",
        "video": "https://www.youtube.com/watch?v=WocFedghAHI",
        "image": "images/thor_le_monde_des_tenebres.jpg",
        "acteurs": "Chris Hemsworth, Natalie Portman",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "thor_love_and_thunder",
        "video": "https://www.youtube.com/watch?v=K8iHxGiPyZk",
        "image": "images/thor_love_and_thunder.jpg",
        "acteurs": "Chris Hemsworth, Natalie Portman",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "thor_ragnarok",
        "video": "https://www.youtube.com/watch?v=RtG6scyBIeM&t=42s",
        "image": "images/thor_ragnarok.jpg",
        "acteurs": "Chris Hemsworth, Tom Hiddleston",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "titanic",
        "video": "https://www.youtube.com/watch?v=Quf4qIkD3KY&t=31s",
        "image": "images/titanic.jpg",
        "acteurs": "Leonardo DiCaprio, Kate Winslet",
        "genres": [],
        "annee": "1997",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "tomb_raider",
        "video": "https://www.youtube.com/watch?v=UmXKhK9YKZg&t=35s",
        "image": "images/tomb_raider.jpg",
        "acteurs": "Angelina Jolie, Jon Voight",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "top_gun",
        "video": "https://www.youtube.com/watch?v=i8sEGppZX-s",
        "image": "images/top_gun.jpg",
        "acteurs": "Tom Cruise, Kelly McGillis",
        "genres": [],
        "annee": "1986",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "maverick",
        "video": "https://www.youtube.com/watch?v=JYaFU81-t6c",
        "image": "images/maverick.jpg",
        "acteurs": "Tom Cruise, Miles Teller",
        "genres": [],
        "annee": "2022",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "toy_story",
        "video": "https://www.youtube.com/watch?v=q_1wTx-qIpk",
        "image": "images/toy_story.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "toy_story_2",
        "video": "https://www.youtube.com/watch?v=2FlAUxq1MUU",
        "image": "images/toy_story_2.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "toy_story_3",
        "video": "https://www.youtube.com/watch?v=1jd_vUeEZfo",
        "image": "images/toy_story_3.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "toy_story_4",
        "video": "https://www.youtube.com/watch?v=ZoIxOE74wBw",
        "image": "images/toy_story_4.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "transformers_1",
        "video": "https://www.youtube.com/watch?v=_XKAU3tYO9M&t=11s",
        "image": "images/transformers_1.jpg",
        "acteurs": "Shia LaBeouf, Megan Fox",
        "genres": [],
        "annee": "2007",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "transformers_2",
        "video": "https://www.youtube.com/watch?v=u9uUVkYB6Aw&t=13s",
        "image": "images/transformers_2.jpg",
        "acteurs": "Shia LaBeouf, Megan Fox",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "transformers_3",
        "video": "https://www.youtube.com/watch?v=7-ZBYb2poUM&t=12s",
        "image": "images/transformers_3.jpg",
        "acteurs": "Shia LaBeouf, Rosie Huntington-Whiteley",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "transformers_4",
        "video": "https://www.youtube.com/watch?v=O3cpckQmmk8&t=60s",
        "image": "images/transformers_4.jpg",
        "acteurs": "Mark Wahlberg, Stanley Tucci",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "transformers_5",
        "video": "https://www.youtube.com/watch?v=IsUacT2oFwU",
        "image": "images/transformers_5.jpg",
        "acteurs": "Mark Wahlberg, Anthony Hopkins",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "transformers_6",
        "video": "https://www.youtube.com/watch?v=BO9d1C9ZsCs",
        "image": "images/transformers_6.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "2023",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "twilight_1",
        "video": "https://www.youtube.com/watch?v=xzO_Iiwt4b4",
        "image": "images/twilight_1.jpg",
        "acteurs": "Kristen Stewart, Robert Pattinson",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "twilight_2",
        "video": "https://www.youtube.com/watch?v=ShHNEvFPtvc",
        "image": "images/twilight_2.jpg",
        "acteurs": "Kristen Stewart, Robert Pattinson",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "twilight_3",
        "video": "https://www.youtube.com/watch?v=yi4xJGebtuk",
        "image": "images/twilight_3.jpg",
        "acteurs": "Kristen Stewart, Robert Pattinson",
        "genres": [],
        "annee": "2010",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "twilight_4",
        "video": "https://www.youtube.com/watch?v=_jWriOZlsnw&t=50s",
        "image": "images/twilight_4.jpg",
        "acteurs": "Kristen Stewart, Robert Pattinson",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "twilight_5",
        "video": "https://www.youtube.com/watch?v=CjdPAg-gyFE&t=43s",
        "image": "images/twilight_5.jpg",
        "acteurs": "Kristen Stewart, Robert Pattinson",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "twisters",
        "video": "https://www.youtube.com/watch?v=Zcp8L7NBKiI",
        "image": "images/twisters.jpg",
        "acteurs": "Glen Powel, Daisy Edgar-Jones, Anthony Ramos",
        "genres": [],
        "annee": "2024",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": "oui"
    },
    {
        "titre": "un_hologram_pour_le_roi",
        "video": "https://www.youtube.com/watch?v=TLpl17kCevA&t=42s",
        "image": "images/un_hologram_pour_le_roi.jpg",
        "acteurs": "Tom Hanks, Alexander Black",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "un_monde_parfait",
        "video": "https://www.youtube.com/watch?v=H1g3PETKszA&t=28s",
        "image": "images/un_monde_parfait.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "underworld_1",
        "video": "https://www.youtube.com/watch?v=2_IoL7g5Ub8&t=21s",
        "image": "images/underworld_1.jpg",
        "acteurs": "Kate Beckinsale, Scott Speedman",
        "genres": [],
        "annee": "2001",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "underworld_2",
        "video": "https://www.youtube.com/watch?v=v86oFYYz3Bg&t=40s",
        "image": "images/underworld_2.jpg",
        "acteurs": "Kate Beckinsale, Scott Speedman",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "underworld_3",
        "video": "https://www.youtube.com/watch?v=Ebp9UDnzE7c&t=28s",
        "image": "images/underworld_3.jpg",
        "acteurs": "Michael Sheen, Bill Nighy",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "underworld_4",
        "video": "https://www.youtube.com/watch?v=76U14o8QeXk",
        "image": "images/underworld_4.jpg",
        "acteurs": "Kate Beckinsale, Stephen Rea",
        "genres": [],
        "annee": "2012",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "underworld_5",
        "video": "https://www.youtube.com/watch?v=a61vd2UpaDg",
        "image": "images/underworld_5.jpg",
        "acteurs": "Kate Beckinsale, Theo James",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "une_nouvelle_chance",
        "video": "https://www.youtube.com/watch?v=rOEIOA4lIw4&t=25s",
        "image": "images/une_nouvelle_chance.jpg",
        "acteurs": "Clint Eastwood",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "vaiana",
        "video": "https://www.youtube.com/watch?v=JIl74jge_Wg",
        "image": "images/vaiana.jpg",
        "acteurs": "",
        "genres": [
            "dessin animé"
        ],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "enfant"
        ],
        "nouveaute": ""
    },
    {
        "titre": "very_bad_trip_1",
        "video": "https://www.youtube.com/watch?v=hHqR9Tq16_E&t=23s",
        "image": "images/very_bad_trip_1.jpg",
        "acteurs": "Bradley Cooper, Ed Helms",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "very_bad_trip_2",
        "video": "https://www.youtube.com/watch?v=DFw9AlqUbYQ&t=25s",
        "image": "images/very_bad_trip_2.jpg",
        "acteurs": "Bradley Cooper, Ed Helms",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "very_bad_trip_3",
        "video": "https://www.youtube.com/watch?v=ibq2kS7NRaU&t=29s",
        "image": "images/very_bad_trip_3.jpg",
        "acteurs": "Bradley Cooper, Ed Helms",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "volte_face",
        "video": "https://www.youtube.com/watch?v=K-gncct2TX8",
        "image": "images/volte_face.jpg",
        "acteurs": "John Travolta, Nicolas Cage",
        "genres": [],
        "annee": "1997",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "vox_lux",
        "video": "https://www.youtube.com/watch?v=fMCYE9hKP68&t=29s",
        "image": "images/vox_lux.jpg",
        "acteurs": "Natalie Portman, Jude Law",
        "genres": [],
        "annee": "2018",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "wayne_s_world",
        "video": "https://www.youtube.com/watch?v=3plL6MNrhVo",
        "image": "images/wayne_s_world.jpg",
        "acteurs": "",
        "genres": [],
        "annee": "",
        "duree": "",
        "resume": "",
        "sections": [
            "dvd"
        ],
        "nouveaute": ""
    },
    {
        "titre": "wolverine",
        "video": "https://www.youtube.com/watch?v=WKrknCZIj2Q",
        "image": "images/wolverine.jpg",
        "acteurs": "Hugh Jackman, Tao Okamoto",
        "genres": [],
        "annee": "2013",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "wonder_woman",
        "video": "https://www.youtube.com/watch?v=CWe308Fpywg",
        "image": "images/wonder_woman.jpg",
        "acteurs": "Gal Gadot, Chris Pine",
        "genres": [],
        "annee": "2017",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "wonder_woman_1984",
        "video": "https://www.youtube.com/watch?v=rhlHVvmVf04",
        "image": "images/wonder_woman_1984.jpg",
        "acteurs": "Gal Gadot, Chris Pine",
        "genres": [],
        "annee": "2020",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_1",
        "video": "https://www.youtube.com/watch?v=QLtF7ZmXfjw",
        "image": "images/xmen_1.jpg",
        "acteurs": "Hugh Jackman, Patrick Stewart",
        "genres": [],
        "annee": "2000",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_2",
        "video": "https://www.youtube.com/watch?v=WmzABBFM6CY&t=34s",
        "image": "images/xmen_2.jpg",
        "acteurs": "Hugh Jackman, Halle Berry",
        "genres": [],
        "annee": "2003",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_3",
        "video": "https://www.youtube.com/watch?v=dE5rzrBKfPc&t=14s",
        "image": "images/xmen_3.jpg",
        "acteurs": "Hugh Jackman, Halle Berry",
        "genres": [],
        "annee": "2006",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_apocalyspse",
        "video": "https://www.youtube.com/watch?v=8chgx3qqZNA&t=9s",
        "image": "images/xmen_apocalyspse.jpg",
        "acteurs": "James McAvoy, Michael Fassbender",
        "genres": [],
        "annee": "2016",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_dark_phoenix",
        "video": "https://www.youtube.com/watch?v=11_xxw6VZv8&t=2s",
        "image": "images/xmen_dark_phoenix.jpg",
        "acteurs": "Sophie Turner, James McAvoy",
        "genres": [],
        "annee": "2019",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_days_of_futur_past",
        "video": "https://www.youtube.com/watch?v=6esGeXis858",
        "image": "images/xmen_days_of_futur_past.jpg",
        "acteurs": "Hugh Jackman, James McAvoy",
        "genres": [],
        "annee": "2014",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_le_commencement",
        "video": "https://www.youtube.com/watch?v=tT8oQT8ILpY&t=30s",
        "image": "images/xmen_le_commencement.jpg",
        "acteurs": "James McAvoy, Michael Fassbender",
        "genres": [],
        "annee": "2011",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    },
    {
        "titre": "xmen_origins",
        "video": "https://www.youtube.com/watch?v=yawHvdrZrcs&t=35s",
        "image": "images/xmen_origins.jpg",
        "acteurs": "Hugh Jackman, Liev Schreiber",
        "genres": [],
        "annee": "2009",
        "duree": "",
        "resume": "",
        "sections": [
            "bluray"
        ],
        "nouveaute": ""
    }
];