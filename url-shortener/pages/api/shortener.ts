import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "POST"){
        const { url } = req.body;



        
        res.status(200).json({ message: "Hello World", url });



    }

}