package practice.todolist.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class helloController {

    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "Spring!");
        //리턴이 hello 니까 templates/hello.html 을 스프링이 찾아서 Thymeleaf template 연동이 된다.
        //컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버(ViewResolver)가 화면을 찾아서 처리한다.
        //resources:templages/{ViewNmae}.html
        return "hello";
    }
}
