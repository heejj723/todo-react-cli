package com.example.demo.domain.todolist.api;

import com.example.demo.domain.todolist.dto.TodolistReqDto;
import com.example.demo.domain.todolist.entity.Todolist;
import com.example.demo.domain.todolist.service.TodolistService;
import com.sun.tools.javac.comp.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@RestController
//호출거부할때
@CrossOrigin
public class TodolistController {
    @Autowired
    private TodolistService todolistService;

    @GetMapping("/todolists")
    @ResponseBody
    public List<Todolist> readAll() {
        return todolistService.findAllTodolist();
    }

    @GetMapping("/todolist/{id}")
    @ResponseBody
    //@PathVariable: 주소창에 속성값을 의미함(?)
    public Todolist readOne(@PathVariable("id") int id) {
        return todolistService.findOneTodolist(id);
    }

    @GetMapping("/favorlists/{checked}")
    @ResponseBody
    public List<Todolist> readFavors(@PathVariable("checked") boolean checked) {
        return todolistService.findFavorlist(checked);
    }

    //삽입
    @PostMapping("/todolist/")
    @ResponseBody
    public Todolist createTodolist(@RequestBody TodolistReqDto request) {
        return todolistService.createTodolist(request);
    }

    //수정
    @PutMapping("/todolist/edit/{id}")
    @ResponseBody
    public void updateTodolist(@PathVariable("id") int id) {
        todolistService.editTodolist(id);
    }

    //삭제
    //@DeleteMapping
    @PutMapping("/todolist/delete/{id}")
    public void deleteTodolist(@PathVariable("id") int id) {
        todolistService.deleteTodolist(id);
    }

    @PutMapping("/todolist/edit/")
    public void editDetail(@RequestBody TodolistReqDto request) {
        todolistService.editDetail(request);
    }

}
