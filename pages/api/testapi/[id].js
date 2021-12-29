import data from "../../../components/Data";
import nc from "next-connect";

const getData = (id) => data.find((el) => el.id === parseInt(id));

const test = nc().get((req, res) => {
	const singleData = getData(req.query.id);
	res.status(200).json({ data: singleData });
});

export default test;
