package com.p810.whitewolf.pizza.config;

import org.hibernate.id.enhanced.SequenceStyleGenerator;

import java.util.List;

public class NiceIdGenerator {
    List<String> przymiotniki = List.of();
    List<String> animals = List.of(
            "Mis",
            "Pies",
            "Kot",
            "Zaba",
            "Pszczola",
            "Krolik",
            "Malpa"
    );
    List<String> colors = List.of(
            "Bialy",
            "Czerwony",
            "Zielony",
            "Pomaranczowy",
            "Rozowy",
            ""
    );

    public static Long toLong(String chatId) {
        return null;
    }

    public static String toNice(Long id){
        return null;
    }
}
