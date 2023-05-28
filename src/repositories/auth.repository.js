import studentsModel from '../models/students.model.js';

export const findStudentByEmail = async (email) => studentsModel.findOne({ email });
export const createNewStudent = async (student) => studentsModel.create(student);

export const sample = {};
