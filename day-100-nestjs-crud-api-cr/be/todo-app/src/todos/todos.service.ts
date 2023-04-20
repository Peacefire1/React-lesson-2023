import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/models/todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }

    const newTodo = new this.todoModel(createTodoDto);
    const result = await newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoModel.findByIdAndUpdate({});
    return todo;
  }

  async remove(id: string) {
    const deleteCirucs = await this.todoModel.findByIdAndDelete(id);
    return deleteCirucs;
  }
}
