const orderModel = require("../../models/orderModel");

//Total orders
module.exports.totalOrders = async (req, res) => {
  try {
    let limit = req.query.limit || 10;
    let page = req.query.page || 1;
    const orders = await orderModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    if (orders.length < 1) {
      return res.status(402).json({ message: "No Orders yet." });
    }

    let totalOrders = orderModel.countDocuments();

    return res.status(200).json({
      orders: orders,
      pagination: {
        currentPage: page,
        totalPage: Math.ceil(totalOrders / limit),
        totalOrders: totalOrders,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Unable to fetch order" });
  }
};
