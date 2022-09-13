import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT ord.id, ord.userId, JSON_ARRAYAGG(pro.id) as productsIds
      FROM Trybesmith.Orders as ord
      INNER JOIN Trybesmith.Products as pro
      ON ord.id = pro.orderId
      GROUP BY ord.id
      ORDER BY ord.userId`);
    const [rows] = result;
    return rows as Order[];
  }
}