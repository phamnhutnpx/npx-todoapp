import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Todo from "../Todo";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todoListSlice";

export default function TodoList() {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const handleOptionPriorityOnChange = (value) => {
    setPriority(value);
  };
  const handleAddTodoButtonOnClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((todoItem) => (
          <Todo
            key={todoItem.id}
            id={todoItem.id}
            name={todoItem.name}
            prioriry={todoItem.priority}
            completed={todoItem.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleOptionPriorityOnChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodoButtonOnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
