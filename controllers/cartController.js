import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  const cart = await prisma.cart.create({
    data: {
      user_id: req.user.id,
      product_id,
      quantity,
    },
  });
  res.status(201).json(cart);
};

export const getCartItems = async (req, res) => {
  const items = await prisma.cart.findMany({
    where: { user_id: req.user.id },
    include: { product: true },
  });
  res.json(items);
};
