import chai from "chai";
import sinon from "sinon";
import TodoService from "./todo-service";

chai.should();

describe("TodoService :", () => {
    let todoService, result = null, todoRepositoryMock, todoRepository;
    describe("#findAll", () => {
        beforeEach(() => {
            todoRepository = {
                findAll: function (id) {

                }
            };
            todoRepositoryMock = sinon.mock(todoRepository);
            todoService = new TodoService(todoRepository);
        });


        it("should return todo list", () => {
            todoRepositoryMock.expects('findAll').returns([{id: 1, title: "A"}, {id: 2, title: "B"}]);

            result = todoService.findAll();

            result.length.should.equal(2);
            result[0].title.should.equal("A");
            result[1].title.should.equal("B");
        });

        afterEach(()=> {
            todoRepositoryMock.verify();
        });
    });
});
