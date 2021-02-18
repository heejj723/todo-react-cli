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
    @Column(name="dsc")
    private String dsc;
    private boolean checked;
    @Column(name="detail")
    private String detail;

    public boolean getChecked() {
        return checked;
    }
}
