import studentsModel from '../models/students.model.js';

export const findStudentByEmail = async (email) => studentsModel.findOne({ email });
export const findStudentWithPass = async (email) => studentsModel.findOne({ email }).select('+hashPassword');
export const createNewStudent = async (student) => studentsModel.create(student);
