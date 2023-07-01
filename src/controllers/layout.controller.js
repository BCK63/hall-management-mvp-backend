import * as layoutServices from '../services/layout.services.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';
import { changeActiveLayoutSchema } from '../utils/validations/layout.schema.js';
import validate from '../utils/validator.js';

export const createLayout = catchAsync(async (req, res) => {
  const { name, slots } = req.body;
  const layout = await layoutServices.addNewLayout(name, slots);
  res.status(201).json(success('layout created', { layout }));
});

export const getAllLayouts = catchAsync(async (req, res) => {
  const layouts = await layoutServices.getAllLayouts();
  res.json(success('layouts', { layouts }));
});

export const updateLayout = catchAsync(async (req, res) => {
  const { name, slots } = req.body;
  const { layoutId } = req.params;
  const updatedLayout = await layoutServices.updateLayout(layoutId, name, slots);
  res.json(success('layout updated', { layout: updatedLayout }));
});

export const deleteLayout = catchAsync(async (req, res) => {
  const { layoutId } = req.params;
  const deletedLayout = await layoutServices.deleteLayout(layoutId);
  res.json(success('layout deleted', { layout: deletedLayout }));
});

export const getLayout = catchAsync(async (req, res) => {
  const { layoutId } = req.params;
  const layout = await layoutServices.getLayout(layoutId);
  res.json(success('layout', { layout }));
});

export const changeActiveLayout = catchAsync(async (req, res) => {
  const { layoutId } = req.params;
  const values = validate(changeActiveLayoutSchema, { layoutId });
  const response = layoutServices.changeActiveLayout(values.layoutId);
  res.json(success('changed active layout', { response }));
});
