import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const placeOrder = async (req, res) => {
  const { items } = req.body;
  let total = 0;

  const orderItemsData = await Promise.all(
    items.map(async ({ product_id, quantity }) => {
      const product = await prisma.product.findUnique({ where: { product_id } });
      total += product.price * quantity;

      return {
        product_id,
        quantity,
        price: product.price,
      };
    })
  );

  const order = await prisma.order.create({
    data: {
      user_id: req.user.id,
      total_amount: total,
      items: {
        create: orderItemsData,
      },
    },
    include: { items: true },
  });

  // Optionally clear cart here

  await prisma.cart.deleteMany({
    where:{
      user_id:req.user.id
    }
  })


  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const orders = await prisma.order.findMany({
    where: { user_id: req.user.id },
    include: { items: { include: { product: true } } },
  });
  res.json(orders);
};
