package com.example.demo.domain.todolist.service;
import com.example.demo.domain.todolist.dao.TodolistRepository;
import com.example.demo.domain.todolist.dto.TodolistReqDto;
import com.example.demo.domain.todolist.entity.Todolist;
import com.sun.tools.javac.comp.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;



@Transactional(readOnly = true)
@Service
public class TodolistService {
    @Autowired
    private TodolistRepository repository;

    public List<Todolist> findAllTodolist() {
        return repository.findAll();
    }

    public Todolist findOneTodolist(int id) {
        return repository.findById(id).get();
    }

    public List<Todolist> findFavorlist(boolean checked) {
        return repository.findByChecked(checked);
    }

    @Transactional
    public Todolist createTodolist(TodolistReqDto request) {
        Todolist todolist = request.toEntity();
        return repository.save(todolist);
    }

    @Transactional
    public void editTodolist(int id) {
        Todolist todolist = repository.findById(id).get();
        todolist.setChecked(!todolist.getChecked());
        repository.save(todolist);
    }

    @Transactional
    public void editDetail(TodolistReqDto request) {
        Todolist todolist = request.toEntity();
        repository.save(todolist);
    }

    @Transactional
    public void deleteTodolist(int id) {
        repository.deleteById(id);
    }

}
