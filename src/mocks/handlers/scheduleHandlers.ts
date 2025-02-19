import { HttpResponse, http } from "msw";

export const scheduleHandlers = [
    http.get('/api/stores/schedules', () => {
        return HttpResponse.json({
            "success": true,
            "response": {
                "schedules": [
                    {
                        "id": 101,
                        "scheduleName": "야간 근무",
                        "shiftDate": "2025-03",
                        "status": "pending",
                        "description": "야간 근무 일정입니다."
                    },
                    {
                        "id": 102,
                        "scheduleName": "주간 근무",
                        "shiftDate": "2025-02",
                        "status": "completed",
                        "description": "주간 근무 일정입니다."
                    }
                ]
            },
            "error": null
        })
    })
]