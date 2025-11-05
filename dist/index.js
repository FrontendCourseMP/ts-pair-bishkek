"use strict";
class TaskManager {
    constructor() {
        this.tasks = [];
        this.outputElement = document.getElementById('taskOutput');
        this.initializeForm();
    }
    initializeForm() {
        const form = document.getElementById('taskForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleFormSubmit(event);
        });
    }
    handleFormSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);
        const task = {
            title: formData.get('taskTitle'),
            description: formData.get('taskDescription'),
            priority: formData.get('taskPriority'),
            createdAt: new Date()
        };
        this.addTask(task);
        form.reset();
    }
    addTask(task) {
        this.tasks.push(task);
        this.updateOutput();
    }
    updateOutput() {
        if (this.tasks.length === 0) {
            this.outputElement.textContent = 'No tasks yet...';
            return;
        }
        const outputText = this.tasks.map((task, index) => {
            return `Task ${index + 1}:
Title: ${task.title}
Description: ${task.description}
Priority: ${task.priority}
Created: ${task.createdAt.toLocaleString()}
-------------------------`;
        }).join('\n');
        this.outputElement.textContent = outputText;
    }
}
// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
