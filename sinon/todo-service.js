export default class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    findAll() {
        return this.todoRepository.findAll();
    }
}