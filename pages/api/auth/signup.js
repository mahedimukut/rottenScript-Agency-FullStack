import dbConnect from "../../../utils/dbConnect";
import Auth from "../../../models/Auth";
import { hash } from "bcrypt";

export default async function handler(req, res) {
    await dbConnect();

    // only post method is accepted
    if (req.method === 'POST') {
        if (!req.body) return res.status(404).json({ error: "Don't have form data" });
        const { username, email, password, isAdmin } = req.body;

        // check duplicate users
        const checkexisting = await Auth.findOne({ email });
        if (checkexisting) return res.status(422).json({ message: "User already exists?" })

        // hash password

        Auth.create({ username, email, isAdmin, password: await hash(password, 12) }, function (err, data) {
            if (err) return res.status(404).json({ err });
            res.status(201).json({ status: true, user: data });
        })

    } else {
        res.status(500).json({ message: "HTTP method not valid only POST Accepted!" })
    }
}