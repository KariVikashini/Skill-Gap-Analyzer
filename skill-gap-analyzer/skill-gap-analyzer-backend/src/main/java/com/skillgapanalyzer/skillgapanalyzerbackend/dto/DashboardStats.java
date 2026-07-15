package com.skillgapanalyzer.skillgapanalyzerbackend.dto;

public class DashboardStats {

    private long students;
    private long questions;
    private long careers;
    
    public DashboardStats() {}

    public DashboardStats(long students, long questions, long careers) {
        this.students = students;
        this.questions = questions;
        this.careers = careers;
    }

    public long getStudents() {
        return students;
    }

    public void setStudents(long students) {
        this.students = students;
    }

    public long getQuestions() {
        return questions;
    }

    public void setQuestions(long questions) {
        this.questions = questions;
    }

    public long getCareers() {
        return careers;
    }

    public void setCareers(long careers) {
        this.careers = careers;
    }
}