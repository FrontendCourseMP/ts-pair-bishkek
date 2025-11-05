interface Task {
    title: string;
    description: string;
    priority: string;
    createdAt: Date;
}

class TaskManager {
    private tasks: Task[] = [];
    private outputElement: HTMLOutputElement;

    constructor() {
        this.outputElement = document.getElementById('taskOutput') as HTMLOutputElement;
        this.initializeForm();
    }

    private initializeForm(): void {
        const form = document.getElementById('taskForm') as HTMLFormElement;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleFormSubmit(event);
        });
    }

    private handleFormSubmit(event: Event): void {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const task: Task = {
            title: formData.get('taskTitle') as string,
            description: formData.get('taskDescription') as string,
            priority: formData.get('taskPriority') as string,
            createdAt: new Date()
        };

        this.addTask(task);
        form.reset();
    }

    private addTask(task: Task): void {
        this.tasks.push(task);
        this.updateOutput();
    }

    private updateOutput(): void {
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