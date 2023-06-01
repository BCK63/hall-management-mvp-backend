import * as layoutServices from '../services/layout.services.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';

export const createLayout = catchAsync(async (req, res) => {
  const { name, slots } = req.body;
  const layout = await layoutServices.addNewLayout(name, slots);
  res.status(201).json(success('layout created', { layout }));
});

export const sample = {};
