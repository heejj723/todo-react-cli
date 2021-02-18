package com.example.demo.domain.todolist.dto;

import com.example.demo.domain.todolist.entity.Todolist;
import lombok.*;

@ToString
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodolistReqDto {
    private int id;
    private String dsc;
    private boolean checked;
    private String detail;

    public Todolist toEntity() {
        return Todolist.builder()
                .id(this.id)
                .dsc(this.dsc)
                .checked(this.checked)
                .detail(this.detail)
                .build();
    }
}
