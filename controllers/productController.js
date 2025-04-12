import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    include: { category: true },
  });
  res.json(products);
};

export const getProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await prisma.product.findUnique({
    where: { product_id: id },
    include: { category: true },
  });
  product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
};
