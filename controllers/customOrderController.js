import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createCustomOrder = async (req, res) => {
  const { title, description, reference_image_url, message } = req.body;

  const order = await prisma.customOrder.create({
    data: {
      user_id: req.user.id,
      title,
      description,
      reference_image_url,
      message,
    },
  });

  res.status(201).json(order);
};

export const getCustomOrders = async (req, res) => {
  const orders = await prisma.customOrder.findMany({
    where: { user_id: req.user.id },
  });
  res.json(orders);
};
