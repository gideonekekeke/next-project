import nc from "next-connect";
import data from "../../../components/Data";

const textapi = nc()
	.get((req, res) => {
		res.status(200).json({ data: data });
	})

	.post((req, res) => {
		const myData = {
			...req.body,
			id: Date.now(),
		};
		data.push(myData);
		res.status(200).json({ data: data });
	});

export default textapi;
