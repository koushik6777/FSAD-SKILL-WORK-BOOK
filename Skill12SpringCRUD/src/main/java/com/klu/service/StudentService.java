package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.entity.Student;
import com.klu.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    StudentRepository repo;

    public List<Student> getAllStudents(){
        return repo.findAll();
    }

    public Student saveStudent(Student s){
        return repo.save(s);
    }

    public Student updateStudent(Long id, Student student){

        Student s = repo.findById(id).get();

        s.setName(student.getName());
        s.setEmail(student.getEmail());
        s.setCourse(student.getCourse());

        return repo.save(s);
    }

    public void deleteStudent(Long id){
        repo.deleteById(id);
    }
}