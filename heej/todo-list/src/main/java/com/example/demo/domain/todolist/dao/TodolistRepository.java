package com.example.demo.domain.todolist.dao;

import com.example.demo.domain.todolist.entity.Todolist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodolistRepository extends JpaRepository<Todolist, Integer> {


    //dao 쓰는 곳

    List<Todolist> findByChecked(boolean checked);
}
