package com.p810.whitewolf.pizza.config;

import org.hibernate.id.enhanced.SequenceStyleGenerator;

import java.util.List;

public class NiceIdGenerator {
    public static final List<String> colors = List.of(
            "alabastrowy",
            "bialy",
            "kremowy",
            "perlowy",
            "porcelanowy",
            "lososiowy",
            "majtkowy",
            "majerankowy",
            "malinowy",
            "rozowy",
            "rubinowy",
            "amarantowy",
            "bordowy",
            "ceglasty",
            "czerwony",
            "cynobrowy",
            "burgundowy",
            "karmazynowy",
            "poziomkowy",
            "rdzawy",
            "szkarlatny",
            "brazowy",
            "bursztynowy",
            "miedziany",
            "zlocisty",
            "pomaranczowy",
            "brunatny",
            "hebanowy",
            "kakaowy",
            "mahoniowy",
            "tabaczkowy",
            "bananowy",
            "kanarkowy",
            "jasnozolty",
            "szafranowy",
            "siwy",
            "popielaty",
            "srebrny",
            "antracytowy",
            "malachitowy",
            "mietowy",
            "oliwkowy",
            "pistacjowy",
            "zielony",
            "indygo",
            "szafirowy",
            "ametystowy",
            "wrzosowy",
            "purpurowy",
            "blekitny"
    );
    public static final List<String> animals = List.of(
            "aligator",
            "borsuk",
            "nietoperz",
            "bobr",
            "bawol",
            "wielblad",
            "kameleon",
            "gepard",
            "wiewiorka",
            "chupacabra",
            "kojot",
            "dinozaur",
            "pies",
            "delfin",
            "smok",
            "kaczka",
            "osmiornica",
            "slon",
            "lis",
            "zaba",
            "zyrafa",
            "grizzly",
            "jez",
            "hipopotam",
            "hiena",
            "iguana",
            "koala",
            "kraken",
            "lemur",
            "lampart",
            "Lew",
            "lama",
            "malpa",
            "nyan cat",
            "orangutan",
            "panda",
            "pingwin",
            "pyton",
            "krolik",
            "nosorozec",
            "owca",
            "skunks",
            "wiewiorka",
            "tygrys",
            "zolw",
            "jednorozec",
            "mors",
            "wilk",
            "rosomak",
            "wombat"
    );

    public static Long toLong(String chatId) {
        for (int i = 0; i < colors.size(); i++) {
            if (chatId.startsWith(colors.get(i))) {
                for (int j = 0; j < animals.size(); j++) {
                    if (chatId.endsWith(animals.get(j))){
                        return (long) (j + i * animals.size());
                    }
                }
            }
        }
        return 0L;
    }

    public static String toNice(Long id){
        int row = (int) (id%animals.size());
        int column = (int) ((id/animals.size())%colors.size());
        return colors.get(column) + animals.get(row);
    }
}
