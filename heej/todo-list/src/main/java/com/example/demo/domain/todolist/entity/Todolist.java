package com.example.demo.domain.todolist.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Todolist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String dsc;
    private boolean checked;
    private String detail;

    public boolean getChecked() {
        return checked;
    }
}
