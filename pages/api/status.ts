// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.status(200).json({

		"last_station": "VT24",    //  vị trí tiếp theo
		"current_station": "VT23", //  Vị trí hiện tại
		"DO": [
			{
				"id": 1,
				"status": true
			},
			{
				"id": 2,
				"status": false
			},
			{
				"id": 3,
				"status": false
			},
			{
				"id": 4,
				"status": false
			},
			{
				"id": 5,
				"status": false
			},
			{
				"id": 6,
				"status": false
			},
			{
				"id": 7,
				"status": false
			},
			{
				"id": 8,
				"status": false
			}
		],
		"current_ip": "192.168.70.40",      //Địa chỉ IP
		"erros": [],                         //mảng mã lỗi
		"reloc_status": true,               //trạng thái relocation
		"target_id": "VT30",               // Vị trí điểm đến cuối cùng
		"task_status": 4,                   // 0-none, 2-running, 4-COMP
		"battery_level": 0.80             // dung lượng pin
	})
}
