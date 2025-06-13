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


// Create Product
export const createProduct = async (req, res) => {
  const { name, description, image_url, price, stock, category_id } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        image_url,
        price,
        stock,
        category_id,
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, image_url, price, stock, category_id } = req.body;

  try {
    const updatedProduct = await prisma.product.update({
      where: { product_id: id },
      data: {
        name,
        description,
        image_url,
        price,
        stock,
        category_id,
      },
    });

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Product not found or error updating product' });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const product={};
  try {
    product= await prisma.product.delete({
      where: { product_id: id },
    });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Product not found or error deleting product',product });
  }
};
