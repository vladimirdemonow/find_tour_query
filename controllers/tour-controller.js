const db = require("../db");

class TourController {
  async createTour(req, res) {
    const { name, timeslots } = req.body;
    const result = await db.query(
      `INSERT INTO tours (name) VALUES ($1) RETURNING id`,
      [name]
    );

    const tours_id = result.rows[0].id;
    for (const timeslot of timeslots) {
      await db.query(
        `INSERT INTO tour_timeslots (tours_id, timeslot, left_places) values ($1, $2, $3)`,
        [tours_id, timeslot.timeslot, timeslot.left_places]
      );
    }

    res.send(req.body);
  }

  async getTours(req, res) {
    const rowsTours = await (await db.query(`SELECT * FROM tours`)).rows;
    const rowsTourDays = await (
      await db.query(`SELECT * FROM tour_timeslots`)
    ).rows;

    res.send({ rowsTours, rowsTourDays });
  }

  async getChosenTours(req, res) {
    const { start_date_point, end_date_point, count } = req.body;

    const result = await db.query(
      `SELECT * FROM tour_timeslots WHERE timeslot >= $1 AND timeslot <= $2 AND $3 <= left_places`,
      [start_date_point, end_date_point, count]
    );

    res.send({ result });
  }
}

module.exports = new TourController();
