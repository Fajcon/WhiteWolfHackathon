package com.p810.whitewolf.pizza.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChatNameAndId {
    private String name;
    private Long id;
}
